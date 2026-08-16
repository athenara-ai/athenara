// Validates every registry entry against its JSON Schema, checks that all
// knowledge-graph edges resolve, and enforces registry-wide invariants
// (globally unique ids, result integrity). Errors are written as help, not
// verdicts — they quote the schema's own field descriptions.
// Run: npm run validate
import { readFileSync, readdirSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import matter from "gray-matter";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const TYPES = {
  agents: "agent",
  architectures: "architecture",
  datasets: "dataset",
  skills: "skill",
  papers: "paper",
  benchmarks: "benchmark",
  results: "result",
};

// Knowledge-graph edges and the section(s) their slugs must resolve in.
// null = any section (resolved against the global id space).
const EDGES = {
  implements: ["architectures"],
  paper: ["papers"],
  uses_dataset: ["datasets"],
  evaluated_on: ["benchmarks"],
  reproduces: ["papers"],
  builds_on: null,
};

const ajv = new Ajv2020({ allErrors: true, allowUnionTypes: true, verbose: true });
addFormats(ajv);
ajv.addSchema(
  JSON.parse(readFileSync(join(root, "schemas/common.schema.json"), "utf8"))
);
const validators = Object.fromEntries(
  Object.entries(TYPES).map(([dir, name]) => [
    dir,
    ajv.compile(
      JSON.parse(readFileSync(join(root, `schemas/${name}.schema.json`), "utf8"))
    ),
  ])
);

// YAML parses unquoted dates (added: 2026-08-15) as Date objects; the schemas
// want ISO strings. Accept both by normalizing before validation.
function normalizeDates(value) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (Array.isArray(value)) return value.map(normalizeDates);
  if (typeof value === "object" && value !== null) {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, normalizeDates(v)])
    );
  }
  return value;
}

function explain(error) {
  const where = error.instancePath || "(top level)";
  let msg = `${where} ${error.message}`;
  if (error.keyword === "unevaluatedProperties" || error.keyword === "additionalProperties") {
    const prop = error.params.unevaluatedProperty ?? error.params.additionalProperty;
    msg = `unknown field "${prop}" — check for a typo against the schema's field list`;
  }
  const hint = error.parentSchema?.description;
  return hint ? `${msg}\n      ↳ ${hint}` : msg;
}

const entries = {}; // dir -> Map<id, frontmatter>
const owner = new Map(); // id -> dir (global id space)
const errors = [];

for (const dir of Object.keys(TYPES)) {
  entries[dir] = new Map();
  const path = join(root, "registry", dir);
  for (const file of readdirSync(path).filter((f) => f.endsWith(".md"))) {
    const rel = `registry/${dir}/${file}`;
    let data;
    try {
      data = normalizeDates(matter(readFileSync(join(path, file), "utf8")).data);
    } catch (e) {
      errors.push(`${rel}: unparseable frontmatter (${e.message})`);
      continue;
    }
    if (!validators[dir](data)) {
      for (const e of validators[dir].errors) {
        errors.push(`${rel}: ${explain(e)}`);
      }
    }
    if (data.id !== basename(file, ".md")) {
      errors.push(`${rel}: id "${data.id}" does not match the filename`);
    }
    if (owner.has(data.id)) {
      errors.push(
        `${rel}: id "${data.id}" is already used in registry/${owner.get(data.id)}/ — ids are unique across the whole registry`
      );
    }
    owner.set(data.id, dir);
    entries[dir].set(data.id, data);
  }
}

// Knowledge-graph integrity: every edge must point at an existing entry of
// the right type.
for (const [dir, map] of Object.entries(entries)) {
  for (const [id, data] of map) {
    const where = `registry/${dir}/${id}.md`;
    for (const [edge, targets] of Object.entries(EDGES)) {
      for (const slug of data[edge] ?? []) {
        if (targets === null) {
          if (!owner.has(slug)) {
            errors.push(`${where}: ${edge} "${slug}" does not exist anywhere in the registry`);
          }
        } else if (!targets.some((t) => entries[t]?.has(slug))) {
          errors.push(`${where}: ${edge} "${slug}" does not exist in ${targets.join("/")}`);
        }
      }
    }
    if (data.superseded_by && !map.has(data.superseded_by)) {
      errors.push(`${where}: superseded_by "${data.superseded_by}" does not exist in ${dir}`);
    }
  }
}

// Result integrity beyond the schema.
for (const [id, data] of entries.results) {
  const where = `registry/results/${id}.md`;
  if (!entries.agents.has(data.agent)) {
    errors.push(`${where}: agent "${data.agent}" does not exist`);
  }
  if (data.benchmark && !entries.benchmarks.has(data.benchmark)) {
    errors.push(`${where}: benchmark "${data.benchmark}" does not exist`);
  }
  if (data.supersedes && !entries.results.has(data.supersedes)) {
    errors.push(`${where}: supersedes "${data.supersedes}" does not exist in results`);
  }
  if (data.period?.start >= data.period?.end) {
    errors.push(`${where}: period.start must be before period.end`);
  }
  if (data.development_period && data.development_period.start >= data.development_period.end) {
    errors.push(`${where}: development_period.start must be before development_period.end`);
  }
  if (data.runs?.n > 1 && !data.runs?.dispersion) {
    errors.push(
      `${where}: runs.n is ${data.runs.n} but runs.dispersion is missing — with multiple runs, the spread across them is part of the result`
    );
  }
}

const total = Object.values(entries).reduce((n, m) => n + m.size, 0);
if (errors.length) {
  console.error(`✗ ${errors.length} problem(s) in ${total} entries:\n`);
  for (const e of errors) console.error(`  ${e}\n`);
  process.exit(1);
}
console.log(`✓ ${total} registry entries valid`);

# Architecture

Decisions and their reasons for the public registry. What the code already shows is not repeated here. The website that renders this registry lives in a separate, private repo; its decisions (site structure, leaderboard rendering, visual identity) are documented there.

## Two repos

This repo is the contribution surface — registry entries, JSON Schemas, the validator, and PR CI — and nothing else, so contributors face a small, clean target. The site repo consumes this one as a read-only checkout: its content collections glob `registry/`, it serves `schemas/*.schema.json` at their `$id` URLs, and it derives credibility facts from this repo's git history. A push to main here dispatches a site rebuild (`.github/workflows/trigger-site-build.yml`).

## Git-based registry, static site

Content lives as Markdown + YAML frontmatter files in `registry/`; contributions are PRs; the site is statically generated. Chosen over a database-backed app because it gives provenance, versioning, review, and attribution for free via git; requires no accounts, auth, or moderation backend to operate; keeps every resource machine-readable at rest; and survives maintainer attention loss — everything periodic runs as CI over committed files. Durability is a stated feature: results platforms whose data wasn't plain forkable files have a 100% mortality rate (Papers with Code, both HF leaderboards, Alpha Streams).

Git is also a credibility primitive: the commit that adds an agent card is a public timestamp. The site derives a `forward-tested` badge for any result whose period starts after its agent's registration commit — pre-registration, not settable by authors. (Empty output until the repo has commit history.)

## Data model

Seven resource types: `agent`, `architecture`, `dataset`, `skill`, `paper`, `benchmark`, `result`.

- **There is no `project` type.** An indexed GitHub project is always one of the other types; `origin: external | native` plus `repo` is a property, not a type.
- **The knowledge graph is typed edges**, not a flat related-list: `implements` (→ architectures), `paper` (→ papers), `uses_dataset` (→ datasets), `evaluated_on` (→ benchmarks), `reproduces` (→ papers), `builds_on` (→ any section). Ids are unique registry-wide so `builds_on` can resolve globally. Edges are declared in one direction; the site computes labeled backlinks ("Implemented by", "Describes", …) at build time. `scripts/validate.mjs` enforces referential integrity per edge type.
- **Every resourceCore entry declares `prerequisites`** — four required axes (`trading`, `ai`, `programming`, `setup`), each `none | basic | moderate | advanced | expert`. The audience spans beginners to institutions on independent knowledge axes (an AI expert may know no trading and vice versa), so audience-matching is a controlled-vocabulary field with Browse facets, not freeform tags — tags stay freeform for everything else. Required rather than optional so the facet never lies through sparseness. Results are exempt (they're reports, not learning resources).
- **`result` is the only type that isn't a resourceCore** — a structured report referencing an agent. Credibility lives in its structure: cost model, capital base, sample size, `selection.variants_tested` (the deflated-Sharpe disclosure), `runs` with dispersion (LLM agents don't produce deterministic runs; a single equity curve is not evidence), `development_period` (out-of-sample is derived, never asserted), and `status` (`withdrawn` results stay and count — selective retraction is the modern leaderboard attack, and a git registry can make it structurally impossible).
- **Verification is a mechanism, not a ladder.** `verification: {method, by, evidence[]}` — `author-reported` (the honest default), `ci-reproduced`, `broker-attested`, `point-in-time-committed` are different kinds of claim, not ranks; non-author methods require evidence links. UI labels name the mechanism.

## Single source of truth: JSON Schemas

`schemas/*.schema.json` (draft 2020-12) are canonical and are themselves a product — served by the site at the URLs their `$id`s declare (`/schemas/{type}.json`) so external `$ref` resolution works. Consequences:

- `scripts/validate.mjs` (ajv) is the only validator; it gates every PR in CI. Type schemas set `unevaluatedProperties: false` so typos fail loudly, and error messages quote the schema's own field descriptions.
- The site declares **no second schema layer** (no zod on its content collections), to avoid a drifting duplicate definition.
- The site's **contribute form is generated from these schemas at build time**, so it cannot drift either. This is the heart of the contribution funnel: validation happens before the PR exists (a rejected first PR loses ~30% of first-time contributors), and the form emits a prefilled `github.com/.../new/main?filename=…&value=…` URL — GitHub auto-forks, the contributor never writes YAML. URL-length limit, measured empirically 2026-08-17: prefill works to ~6,980 chars total; beyond that GitHub degrades messily (HTTP 500 from ~7,000, dropped connections near 8,100, 414 past ~8,200). The form's clipboard fallback past 6,000 chars keeps ~15% headroom. Path-segment filenames (`registry/{type}/{id}.md`) parse correctly into the editor's breadcrumbs.

## Governance defaults

Discovery is not endorsement — grades and badges must be mechanical with visible inputs; curated collections (planned) are the only place editorial judgment is claimed. The community layer follows the Hugging Face model (decision 2026-08): identity-backed likes and per-entry discussion riding on this repo's GitHub Discussions, submitter attribution from git, later profiles/follows — with hard boundaries: likes are display-only and **never affect ranking**, nothing is anonymous, login only ever gates writing, and moderation is AI agents in CI when volume demands it. Boosts, paid placement, and copy-trading stay cut forever (gamed surfaces; advice liability).

Leaderboard honesty rules (enforced by the site, stated for contributors in CONTRIBUTING.md): backtests are never ranked with live/paper results; ordering is verification mechanism, then track length, then Sharpe — never raw return; withdrawn results stay in the record and count in the disclosure record.

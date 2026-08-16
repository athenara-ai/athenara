# Athenara

The open ecosystem for agentic trading: a git-based registry — Markdown + YAML frontmatter in `registry/`, one file per resource. This repo is the public contribution surface; the website that renders it ([athenara.info](https://athenara.info)) lives in a separate private repo and consumes this one read-only.

Design decisions and their reasons: docs/architecture.md — read it before changing schemas or the data model.

## Rules

- `schemas/*.schema.json` are the single source of truth for entry formats. Don't add a second format definition.
- `npm run validate` must pass before any registry or schema change is done; it also checks knowledge-graph integrity (typed edges: `implements`, `paper`, `uses_dataset`, `evaluated_on`, `reproduces`, `builds_on`) and registry-wide id uniqueness.
- Results are honesty-critical: a backtest is never labeled live; `verification.method` names the mechanism (author-reported is the default, not a failure); withdrawn results keep `status: withdrawn` and stay in the registry. Never invent metrics, cost models, or sample sizes.

## Commands

- `npm run validate` — validate all registry entries

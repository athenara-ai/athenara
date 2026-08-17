---
id: tradermonty-trading-skills
name: Claude Trading Skills (tradermonty)
summary: A collection of 72 Claude skills for individual equity traders, chained into 11 workflow manifests covering market-regime checks, screening, position sizing, risk gates, journaling and postmortems.
authors: [tradermonty]
origin: external
repo: https://github.com/tradermonty/claude-trading-skills
website: https://tradermonty.github.io/claude-trading-skills/
license: MIT
targets: [claude-code, claude-app]
tags: [claude-skills, swing-trading, screening, position-sizing, trade-journal]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: basic
  programming: basic
  setup: basic
---

The repository ships exactly 72 skills, each with its own `SKILL.md` under `skills/<name>/`, plus
72 prebuilt `.skill` archives under `skill-packages/` for upload into the Claude app. A canonical
`skills-index.yaml` catalogues all of them across eight categories: market-regime (16),
strategy-research (14), swing-opportunity (7), trade-planning (7), advanced-satellite (7),
core-portfolio (6), trade-memory (6) and meta (9). Eleven machine-readable manifests under
`workflows/` chain skills into routines such as market-regime-daily, core-portfolio-weekly,
swing-opportunity-daily, trade-memory-loop and monthly-performance-review. Installation is a copy:
drop a `skills/<name>/` folder into `~/.claude/skills/` for personal use or `.claude/skills/`
inside a project, or upload the matching `.skill` ZIP under Customize > Skills in the Claude app.

A documented no-paid-API starter path runs five skills on public CSVs and local files —
market-breadth-analyzer, uptrend-analyzer, position-sizer (pure calculation, no I/O),
trader-memory-core (local YAML journaling) and signal-postmortem. Beyond that, optional paid
integrations are itemised per skill in a README table: Financial Modeling Prep (free tier of 250
requests/day), FINVIZ Elite ($39.50/month or $299.50/year) and Alpaca (free paper trading, via an
MCP server); many skills need none. The project states its own limits plainly — "This is not a
signal service or a promise of profitability", it "is not designed for fully automated trading,
signal outsourcing, or short-term scalping", and past performance, backtests, screens and
AI-generated analysis do not guarantee future results.

Skill quality is self-declared, not demonstrated. The index labels 58 skills "production" and 14
"beta", but its per-skill verification block covers eight dimensions — instruction contract, unit
tests, workflow contract, end-to-end replay, data provenance, financial logic review, empirical
validation and security review — and across all 72 skills every field reads either `not_verified`
(383) or `not_applicable` (81). No skill has any dimension marked verified. The author is
pseudonymous: the GitHub handle carries no real name, bio or company, and the LICENSE copyright
line reads "TraderMonty"; that LICENSE file is unambiguous MIT, while the README's own License
section only says the material is "provided for educational and research purposes". Several skills
are meta-tooling (skill-designer, skill-idea-miner, trading-skills-navigator) or personal
workflows rather than trading, so the effective trading-skill count is below 72. Development is
active — last commit 2026-08-12, with 2,649 stars, 615 forks and 24+ contributors as of
2026-08-17.

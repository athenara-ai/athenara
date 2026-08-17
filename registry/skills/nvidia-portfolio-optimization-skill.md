---
id: nvidia-portfolio-optimization-skill
name: NVIDIA Portfolio Optimization Skill
summary: An NVIDIA agent skill that drives GPU-accelerated Mean-CVaR and Mean-Variance/SOCP portfolio optimization through cuOpt, covering scenario generation, efficient frontiers, backtests and rebalancing.
authors: [NVIDIA Corporation, Jake Goldberg]
origin: external
repo: https://github.com/NVIDIA/skills/tree/main/skills/portfolio-optimization
website: https://docs.nvidia.com/skills
license: Apache-2.0
targets: [claude-code, codex, cursor, kiro-cli, cortex]
requires:
  - NVIDIA GPU runtime with cuOpt and cuML
  - cuOpt build with QCQP/SOCP support (the 26.06 line or newer) for Mean-Variance SOCP workflows
  - the portfolio_optimization package, from the Brev launchable or NVIDIA-AI-Blueprints/portfolio-optimization
  - cvxpy exposing cp.CUOPT
runtime: skills CLI >= 1.5.16
tags: [portfolio-optimization, cvar, efficient-frontier, gpu, cuopt]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: basic
  programming: moderate
  setup: advanced
---

The skill directory holds `SKILL.md`, `skill-card.md`, `BENCHMARK.md`, an `evals/` directory and
`references/workflows/`. Backtests report Sharpe, Sortino, mean portfolio return and max drawdown
for both the optimized and the benchmark portfolio; when the user names no benchmark, the default
is an equal-weight portfolio over the same tickers. The default dataset is
`data/stock_data/sp500.csv`, fetched through the package's yfinance helper only after asking the
user to confirm. Install it with
`npx skills add nvidia/skills --skill portfolio-optimization --yes`.

The skill is a set of instructions, and it cannot run without NVIDIA hardware. `SKILL.md` mandates
cuOpt as the only solver — "Never fall back to CLARABEL, SCS, ECOS, or another CPU solver. If
cuOpt is absent, finish validation/setup and report that the GPU/cuOpt runtime is missing instead
of fabricating a CPU result" — so a CPU-only agent can install it but not execute the workflow.
It also forbids pip-installing its own dependency ("Do not `pip install portfolio_optimization`;
do not reimplement the example workflows from scratch"), expecting a prepared environment set up
with `uv sync --extra cuda12`, `--extra cuda13` or `--extra cuda13-socp`. The skill-card records
that no API key or external credential is required. This is a deliberately vendor-locked skill,
not a portable portfolio-optimization one.

NVIDIA's own evaluation (`BENCHMARK.md`, dated 2026-07-30) reports overall scores rising from 64%
to 84% for Claude Code and from 58% to 72% for Codex; the sample is four tasks with one attempt
each, tier-2 semantic deduplication was never run, and the numbers are vendor self-reported rather
than independent evidence. The repository is a catalog mirror, not the source of truth: skills are
synced daily from their product repos, and this one lives upstream at
NVIDIA-AI-Blueprints/portfolio-optimization, where issues and contributions route.

**License note:** the NVIDIA/skills repository has no plain root `LICENSE` file. It carries
`LICENSE-APACHE` and `LICENSE-CC-BY-4.0`, with the README placing documentation and skills under
CC BY 4.0 and source code under Apache-2.0; GitHub's detector resolves only the Apache half. For
this skill the ambiguity is settled in NVIDIA's own text — `SKILL.md`'s frontmatter and its
in-file SPDX header both declare Apache-2.0.

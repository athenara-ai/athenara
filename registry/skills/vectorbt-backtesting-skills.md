---
id: vectorbt-backtesting-skills
name: VectorBT Backtesting Skills
summary: A pack of six agent skills that drive VectorBT to build, cost-model, optimize and robustness-test trading strategy backtests across Indian, US and crypto markets.
authors: [marketcalls]
origin: external
repo: https://github.com/marketcalls/vectorbt-backtesting-skills
website: https://docs.openalgo.in
license: MIT (README-declared, no LICENSE file)
targets: [claude-code, generic]
requires:
  - A Python environment with VectorBT (Apache-2.0 with the Commons Clause) and its data stack
  - A self-hosted OpenAlgo instance plus a connected broker account and API key for Indian markets
tags: [backtesting, vectorbt, walk-forward, transaction-costs, monte-carlo]
markets: [multi-asset]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: basic
  programming: moderate
  setup: moderate
builds_on: [openalgo, buy-and-hold-baseline]
---

Six skills ship as `SKILL.md` files under `.claude/skills/`: backtest, optimize, quick-stats,
setup, strategy-compare and vectorbt-expert. They use Claude Code frontmatter — `backtest`
declares an `argument-hint` and its `allowed-tools`, while `vectorbt-expert` sets
`user-invocable: false`, making it a model-invoked knowledge skill. Behind them sit 12 runnable
strategy templates (buy_hold, donchian, dual_momentum, ema_crossover, macd, momentum,
realistic_costs, rsi, rsi_accumulation, sda2, supertrend, walk_forward) and 21 knowledge-base rule
files on costs, sizing, simulation modes, walk-forward analysis, robustness testing and common
pitfalls — the README says 20, an undercount of one. Installation goes through the vercel-labs
skills installer: `npx skills add marketcalls/vectorbt-backtesting-skills`, with `-s backtest` for
a single skill and `-g` to install globally.

Coverage differs sharply by market. US equities, options and futures (yfinance) and crypto spot
and perpetuals (yfinance or CCXT) work from public data with no credentials, benchmarked against
^GSPC and BTC-USD. Indian NSE, BSE, NFO and MCX coverage requires a separately installed,
self-hosted OpenAlgo instance (AGPL-3.0) running at `http://127.0.0.1:5000` plus a connected
broker account and API key, benchmarked against the NIFTY 50. The per-market transaction-cost
figures in the README are the author's own "industry-standard defaults" and are user-customizable
— they are not verified broker schedules — and the hardcoded index lot sizes it cites are
time-sensitive values that should be checked against the current exchange circulars.

**License note:** the repository has no LICENSE file anywhere in its tree, and GitHub's API
reports no license. The only license statement is the bare word "MIT" in the README's closing
section, with no copyright line and none of the MIT text; treat the licensing as declared rather
than granted. Downstream use is further constrained by the dependency: VectorBT is Apache-2.0 with
the Commons Clause, which withholds the right to sell a product or service whose value derives
substantially from the software, so the skills' MIT claim does not clear commercial resale. The
project is single-maintainer — 15 commits from one contributor, last pushed 2026-07-12 — active
but with a bus factor of one.

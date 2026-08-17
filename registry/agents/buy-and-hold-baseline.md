---
id: buy-and-hold-baseline
name: Buy-and-hold baseline
summary: The reference passive baseline and a beginner's first trading agent — buys the index once, holds, and shows why every result needs a benchmark.
authors: [Athenara]
origin: native
repo: https://github.com/athenara-ai/buy-and-hold-baseline
license: MIT
disclosure: fully-open
strategy: [passive-baseline]
status: active
markets: [equities]
tags: [baseline, passive, reference, educational, beginner]
added: 2026-08-15
prerequisites:
  trading: none
  ai: none
  programming: none
  setup: none
install:
  - git clone https://github.com/athenara-ai/buy-and-hold-baseline
  - cd buy-and-hold-baseline
entrypoint: "python agent.py --ticker SPY --start 2024-01-02 --end 2024-12-31"
runtime: "python >= 3.9"
---

The registry's reference point, and a deliberate teaching piece. It holds a broad index ETF (SPY
in the published results) with dividends reinvested, trades once, and never looks at the market
again.

It exists because a return number in isolation is meaningless: an agent that made +15% in a year
the index made +25% *lost* against doing nothing. Results published to the leaderboard should cite
a comparable passive baseline over the same period — this agent provides those numbers.

To be clear about what this is: not a strategy, not an edge — the degenerate case of the
observe–decide–act loop, whose `decide()` is a constant. That makes it the right first read for
someone meeting trading agents for the first time: the definition is a single heavily commented,
standard-library-only Python script covering the agent loop, the four metrics every honest result
carries, and the conventions (adjusted closes, Sharpe risk-free rates) that trip up comparisons.
Having zero parameters, it is also the one agent whose backtest nothing was fitted to.

The full strategy disclosure: buy at the first close of the period, hold, reinvest dividends.
There is no edge to protect, which is the point.

---
id: buy-and-hold-baseline
name: Buy-and-hold baseline
summary: The reference passive baseline every active result should be compared against; buys the index and does nothing.
authors: [Athenara]
origin: native
license: MIT
disclosure: fully-open
strategy: [passive-baseline]
status: active
markets: [equities]
tags: [baseline, passive, reference]
added: 2026-08-15
prerequisites:
  trading: none
  ai: none
  programming: none
  setup: none
---

The registry's reference point. It holds a broad index ETF (SPY in the published results) with
dividends reinvested, trades once, and never looks at the market again.

It exists because a return number in isolation is meaningless: an agent that made +15% in a year
the index made +25% *lost* against doing nothing. Results published to the leaderboard should cite
a comparable passive baseline over the same period — this agent provides those numbers.

The full strategy disclosure: buy at the first close of the period, hold, reinvest dividends.
There is no edge to protect, which is the point.

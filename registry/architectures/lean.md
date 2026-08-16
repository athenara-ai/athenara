---
id: lean
name: LEAN
summary: QuantConnect's open-source event-driven algorithmic trading engine, supporting strategies written in Python or C# across nine asset classes.
authors: [QuantConnect]
origin: external
repo: https://github.com/QuantConnect/Lean
website: https://www.lean.io
license: Apache-2.0
tags: [algorithmic-trading, backtesting, event-driven, multi-asset, engine]
markets: [multi-asset]
added: 2026-08-15
prerequisites:
  trading: advanced
  ai: none
  programming: advanced
  setup: moderate
---

LEAN is an event-driven engine that runs the same algorithm code in backtesting, paper trading,
and live deployment. It supports equities, forex, options, futures, future options, indexes, index
options, cryptocurrency, and CFDs from a single portfolio, and integrates with roughly 40 price,
fundamental, and alternative data sources plus user-supplied custom datasets.

The engine is the core of the QuantConnect platform but is usable standalone. Written primarily in
C# with a Python API; in continuous development since 2014.

---
id: nautilustrader
name: NautilusTrader
summary: A Rust-native, event-driven algorithmic trading platform whose backtest and live engines share identical execution semantics.
authors: [Nautech Systems]
origin: external
repo: https://github.com/nautechsystems/nautilus_trader
website: https://nautilustrader.io/docs/
license: LGPL-3.0
tags: [event-driven, backtesting, rust, multi-asset, live-trading]
markets: [multi-asset]
added: 2026-08-15
prerequisites:
  trading: advanced
  ai: none
  programming: advanced
  setup: moderate
---

NautilusTrader pairs a Rust core engine with a Python control plane via PyO3 bindings, plus Cython
infrastructure components. Its central design claim is **research-to-live parity**: the same
deterministic time model and execution semantics run in both backtesting and production, so a
strategy deploys without rewriting — the property that matters most when an AI agent's backtest is
the evidence for letting it trade.

It supports nanosecond-resolution historical tick data and multi-venue backtests across crypto
spot and derivatives, FX, equities, futures, options, and prediction/sports-betting markets.

Categorized here as an architecture/framework rather than an agent: it is the engine an agent runs
on, not a decision-making system itself.

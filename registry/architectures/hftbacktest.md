---
id: hftbacktest
name: hftbacktest
summary: Rust and Python backtesting engine for high-frequency trading and market making that reconstructs the full order book from L2 and L3 feeds and models feed latency, order latency and queue position.
authors: [nkaz001]
origin: external
repo: https://github.com/nkaz001/hftbacktest
website: https://hftbacktest.readthedocs.io/
license: MIT
components: [order book reconstruction, feed and order latency models, queue-position fill model, live bot deployment]
tags: [high-frequency, market-making, backtesting, market-microstructure, rust, python]
markets: [crypto]
added: 2026-08-17
prerequisites:
  trading: expert
  ai: none
  programming: advanced
  setup: advanced
install:
  - pip install hftbacktest
requires:
  - "your own L2/L3 tick data; no dataset ships with the package"
runtime: "python >= 3.11"
---

This is the machinery a microstructure strategy needs before its backtest means anything. The
engine reconstructs a full order book from Level-2 market-by-price and Level-3 market-by-order
feeds, replays it tick by tick — on a customizable time interval or driven by feed and order
receipt — and simulates fills against a queue-position model, with feed latency and order latency
modelled separately and both replaceable with your own. Multi-asset and multi-exchange setups are
supported.
The Python API is written to run inside Numba JIT functions; a Rust core backs it. The README is
explicit about why the detail matters: a simulator should neither be so pessimistic that it hides
small edges nor so optimistic that it invents them.

Live deployment reuses the same algorithm code, currently for Binance Futures and Bybit, and is
Rust-only by the project's own feature list — the Python API does not carry it. No market data
ships with the package, so preparing tick data is the user's first task; the documentation covers
data preparation, custom data integration and depth fusion, alongside tutorials on grid trading and
order-book-imbalance market making. The two distributions version independently: PyPI `hftbacktest`
is at 2.4.4 and the `hftbacktest` crate at 0.9.4, both published 2025-12-10.

Two caveats about provenance and pace. The maintainer is pseudonymous — the GitHub profile
`nkaz001` names no person or organization, and the MIT LICENSE gives the copyright holder as an
email address — so there is a stable, long-lived identity behind the code but no verifiable one.
And the repository has been quiet since 2025-12-23, roughly eight months as of 2026-08-17, after a
heavy stretch of commits through the second half of 2025.

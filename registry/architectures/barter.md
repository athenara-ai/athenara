---
id: barter
name: Barter
summary: A Rust workspace of five crates providing an event-driven engine for live trading, paper trading and backtesting, with pluggable strategy and risk-manager components.
authors: [barter-rs, JustAStream]
origin: external
repo: https://github.com/barter-rs/barter-rs
website: https://docs.rs/barter/latest/barter/
license: MIT
components: [barter engine, barter-instrument, barter-data, barter-execution, barter-integration]
tags: [rust, event-driven, backtesting, live-trading, crypto]
markets: [crypto]
added: 2026-08-17
prerequisites:
  trading: advanced
  ai: none
  programming: advanced
  setup: moderate
install:
  - cargo add barter
---

Barter splits an event-driven trading system into five published crates: `barter` (the engine),
`barter-instrument`, `barter-data` for public market-data streams, `barter-execution` for private
account data and order execution against live or mock venues, and `barter-integration` for the
low-level REST and WebSocket plumbing. `barter-data` ships venue integrations for Binance,
Bitfinex, BitMEX, Bybit, Coinbase, Gate.io, Kraken and OKX. The README describes plug-and-play
Strategy and RiskManager components, mock market-data and execution clients so backtest and live
systems stay near-identical, O(1) indexed state lookups, an AuditStream for external monitoring,
and trading summaries carrying PnL, Sharpe, Sortino and drawdown; a system is assembled from a JSON
config and a `SystemBuilder` call.

One contradiction must be read before deploying anything: the README's own legal disclaimer states
the software "is not intended, designed, tested, verified or certified for commercial deployment,
live trading, or production use of any kind" and is "provided solely for educational and research
purposes" — directly at odds with the live-trading framing in the same feature list. Take the
disclaimer at face value and treat Barter as research and education code.

Provenance and maintenance are thin. The crate author is declared in `Cargo.toml` as the
pseudonymous `JustAStream`, with no named individual or company behind it beyond the barter-rs
organization that publishes to crates.io; the sponsorship section lists no sponsors. The last
commit on the default `main` branch was in May 2026, roughly three months before this entry —
slowing rather than dormant. Note also that the README's own LICENSE and examples links point at
the `develop` branch, last touched in April 2025; source links should use `main`.

---
id: binance-trading-bot
name: binance-trading-bot
summary: A self-hosted Binance spot trading bot with three pluggable strategies, historical backtesting, a live dashboard, and an LLM advisor that proposes strategy-config patches.
authors: [Chris Lee]
origin: external
repo: https://github.com/chrisleekr/binance-trading-bot
website: https://chrisleekr.github.io/binance-trading-bot/
license: Apache-2.0
disclosure: fully-open
strategy: [trailing-trade, momentum, rebalance]
status: active
tags: [crypto, trading-bot, backtesting, self-hosted, llm-advisor]
markets: [crypto]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: basic
  programming: moderate
  setup: advanced
install:
  - bun install
  - bun run setup
entrypoint: "bun run dev"
runtime: "bun >= 1.3"
requires:
  - Binance API key (testnet or live)
  - Docker with the compose plugin
---

The bot trades one venue only: Binance spot, with a single API key pair per account, testnet or
live. Three strategy packages ship — `trailing-trade`, `momentum` and `rebalance`; grid is a
configuration of trailing-trade rather than a separate strategy. The same rules replay against
historical candles for backtesting, a dashboard shows live state, and persistence is Postgres with
TimescaleDB alongside Redis and BullMQ for cache and queues. The codebase is TypeScript on a Bun
toolchain, with published Docker images for deployment.

An LLM advisor package turns backtest results into proposed patches to a strategy config, through
Anthropic or OpenAI-compatible providers. The implementation treats model output as untrusted:
patches are applied to a cloned config, re-validated against the strategy schema, and path segments
such as `__proto__`, `constructor` and `prototype` are refused outright.

Read the history carefully before relying on it. v1.0.0, released 2026-07-31, is a ground-up
rewrite — "new runtime, new datastore, new API, new UI, new strategy architecture" — and the v0.x
line is frozen at v0.0.101 and receives no further updates. The project's accumulated stars, forks
and container pulls belong to that frozen codebase, not to the current one, which is only weeks
old. It is maintained by a single individual. The README claims no returns and is unusually direct
about maturity: "Under active development and not recommended for real funds," and "I cannot
guarantee whether you can make money or not. Use it at your own risk."

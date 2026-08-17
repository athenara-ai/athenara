---
id: vibe-trading
name: Vibe-Trading
summary: A personal trading agent from HKU's Data Intelligence Lab that answers natural-language finance questions, backtests across multiple markets, and places mandate-gated broker orders.
authors: ["Data Intelligence Lab@HKU (HKUDS)"]
origin: external
repo: https://github.com/HKUDS/Vibe-Trading
website: https://vibetrading.wiki/
license: MIT
disclosure: fully-open
status: active
tags: [llm-agent, backtesting, broker-integration, risk-controls, multi-market]
markets: [multi-asset]
risk_controls: [mandate-gate, position-limits, exposure-limits, leverage-limits, daily-cap, kill-switch]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: basic
  programming: basic
  setup: moderate
install:
  - pip install -U vibe-trading-ai
runtime: "python >= 3.11, < 3.14"
---

Vibe-Trading takes a finance question in natural language and carries it through to execution. Its
backtest layer holds ten engine modules covering China A-shares and futures, global equities and
futures, India, Korea, crypto, forex and options portfolios, fed by 21 data-loader modules, and a
quantitative library under `agent/src/quantlib/` supplies options, fixed-income, credit, risk,
performance, attribution, event-study, factor-model and time-series modules plus a valuation
package. The repository also carries 90 `SKILL.md` definitions that an agent runtime can load. The
project reports 452 pre-built alphas across four "zoos" and 249 tested quantlib functions; those
counts are the project's own and are not independently recomputed here.

Live trading is real but bounded. Thirteen broker connectors exist — alpaca, binance, dhan, etoro,
futu, ibkr, longbridge, mt5, okx, robinhood, shoonya, tiger and trading212 — and order placement
is gated by a user-committed mandate covering symbol universe, order size, exposure, leverage and
a daily cap, backed by a filesystem kill switch, a fail-closed pre-trade gate and a full audit
ledger. Longbridge, Dhan and Shoonya are capped at paper and read-only because their APIs expose
no structural paper/live discriminator. The README's disclaimer calls the broker-trading
capability experimental and "not verified by us against a real broker account", and states the
software is not investment advice, holds no funds and runs no execution venue.

Two cautions for anyone adopting it. The project is young and moving fast — created in April 2026,
with 408 commits between two point releases — so interface details date quickly, and its 223 KB
README should be re-checked against the code. Separately, a scam ecosystem has grown around the
name: the README disavows an X account, a Virtuals project and a token contract that trade on it,
stating the project has never launched or endorsed any token or memecoin. The only official
surfaces are the GitHub repository and vibetrading.wiki.

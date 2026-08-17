---
id: alpaca-skills
name: Alpaca Skills
summary: Alpaca's agent-skill pack — eleven skills covering reproducible historical backtesting on the Trading API plus Broker API workflows for onboarding, funding, orders, market data and real-time events.
authors: [Alpaca]
origin: external
repo: https://github.com/alpacahq/alpaca-skills
website: https://docs.alpaca.markets/
license: Apache-2.0
targets: [claude-code, cursor, generic]
requires:
  - Alpaca CLI (brew install alpacahq/tap/cli, or go install github.com/alpacahq/cli/cmd/alpaca@latest)
  - Alpaca API credentials — paper, sandbox, or live keys as appropriate for the skill
tags: [backtesting, broker-api, market-data, paper-trading, alpaca]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: basic
  programming: moderate
  setup: moderate
---

The repository holds exactly eleven skills, named on the convention
`alpaca-<product-scope>-<skill-name>`. One sits under the Trading API — `alpaca-trading-backtest`,
whose declared workflow runs from strategy idea to formalized rules, confirmed assumptions, CLI
data fetch, local script, artifacts and report — and ten under the Broker API:
integration, account onboarding and KYC, funding transfers, journals, trading on behalf of
accounts, market data, SSE events, reconciliation and idempotency, rate limits and resilience, and
money precision. The backtest skill describes itself as "not a promise that a strategy will work
in live markets. It is a reproducible research workflow." Credentials come from `alpaca profile
login` or the `ALPACA_API_KEY` and `ALPACA_SECRET_KEY` environment variables; install a single
skill with `npx skills add alpacahq/alpaca-skills --skill alpaca-trading-backtest`.

Disclosure discipline is the pack's strongest feature. The backtest skill mandates a block in
every report, `notes.md`, notebook, dashboard or exported result stating that the backtest "is a
hypothetical historical simulation and does not represent actual trading performance" and that
"backtested results do not guarantee future results", along with the dependencies that shape them
— market-data quality, feed selection, corporate-action handling, fees, slippage, liquidity,
taxes, execution assumptions and implementation details. A separate mandatory paragraph covers
paper trading being simulated. Modeling Alpaca securities trading-activity fees additionally
requires linking the Alpaca Brokerage Fee Schedule PDF and recording its revision date, the
extraction timestamp, the modeled fee categories, and any fee items intentionally excluded.

Scope is narrower than the skill count suggests: only one of the eleven is strategy research, and
several of the remaining ten — KYC onboarding, funding transfers, journals, money precision,
reconciliation, rate limits — are generic fintech back-office rather than quant work. Everything
targets Alpaca's own APIs and needs the Alpaca CLI plus Alpaca keys, so nothing here is
broker-portable, though free paper-trading credentials keep the barrier low. The repository is
also very young and already quiet: created 2026-06-16, its entire commit history spans thirteen
days to 2026-06-29, with no activity since — too early to judge how it will be maintained. At 109
stars and 11 forks, its standing rests on first-party vendor authorship, not community uptake.

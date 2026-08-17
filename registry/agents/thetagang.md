---
id: thetagang
name: ThetaGang
summary: An Interactive Brokers bot that started as an implementation of the options Wheel strategy and grew into configurable portfolio automation with share rebalancing and hedging.
authors: [Brenden Matthews]
origin: external
repo: https://github.com/brndnmtthws/thetagang
website: https://pypi.org/project/thetagang/
license: AGPL-3.0-only
disclosure: fully-open
strategy: [options-wheel, portfolio-management, hedging]
risk_controls: [dry-run, vix-call-hedge, long-put-tail-hedge]
status: active
tags: [options, wheel-strategy, interactive-brokers, portfolio-automation, volatility]
markets: [equities, options]
added: 2026-08-17
prerequisites:
  trading: advanced
  ai: none
  programming: basic
  setup: advanced
install:
  - pip install thetagang
  - curl -Lq https://raw.githubusercontent.com/brndnmtthws/thetagang/main/thetagang.toml -o ./thetagang.toml
entrypoint: "thetagang --config ./thetagang.toml --dry-run"
runtime: "python >=3.10,<3.15"
requires:
  - Interactive Brokers account
  - IBC / IB Gateway
---

ThetaGang connects to an Interactive Brokers account and submits and rolls real option and share
orders from a rules-based TOML configuration. It began as a basic implementation of "The Wheel" —
selling cash-secured puts, then covered calls against assigned shares — and has since grown into a
broader portfolio automation tool covering direct share rebalancing, cash management, VIX call
hedging, long-put tail hedging, regime-aware rebalancing and exchange-hours gating. The shipped
default is a diversified portfolio of SPY (40%), QQQ (30%), TLT (20%) and smaller individual
positions. Run state — order activity, executions, historical bars, account snapshots and decision
gates — can be persisted to SQLite and reused across runs.

The strategy rests on an assumption the README states outright: "this strategy is based on the
assumption that implied volatility is, on average, always higher than realized volatility. In cases
where this is not true, this strategy will cause you to lose money." No backtested or live returns
are published; what the project publishes instead is a warning that options trading involves
substantial risk and that selling naked puts carries theoretically unlimited downside. It needs a
funded IBKR account plus IBC or IB Gateway, and the README recommends starting on an IBKR paper
account. Because its decisions are account-level, running materially different strategies in the
same account can produce harmful interactions.

The license is AGPL-3.0-only — network copyleft, which matters to anyone considering it as the
basis of a hosted service. Distribution is via PyPI and a published Docker image; `--dry-run`
previews the orders it would place without submitting them.

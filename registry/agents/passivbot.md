---
id: passivbot
name: Passivbot
summary: A public-domain Python and Rust bot that runs a contrarian grid market-making strategy on crypto perpetual futures, with a shared Rust order-planning core and an evolutionary config optimizer.
authors: [enarjord]
origin: external
repo: https://github.com/enarjord/passivbot
license: Unlicense
disclosure: fully-open
status: active
strategy: [market-making, grid, martingale]
risk_controls: [drawdown-cutoff]
tags: [crypto, perpetual-futures, grid, market-making, rust, optimization]
markets: [crypto]
added: 2026-08-17
prerequisites:
  trading: advanced
  ai: none
  programming: moderate
  setup: advanced
install:
  - git clone https://github.com/enarjord/passivbot.git
  - cd passivbot
  - python3 -m pip install -e .
entrypoint: "passivbot"
runtime: "python 3.12 or 3.14 — 3.13 is not supported by the pinned dependency set"
requires:
  - "Rust toolchain"
---

Passivbot operates on perpetual futures markets, automatically creating and cancelling limit buy
and sell orders on the user's behalf; the README's exchange list is Bybit, OKX, Bitget, Bitunix,
GateIO, Binance, Kucoin, Hyperliquid and WEEX. It is explicit about not forecasting — rather than
predicting price movements or following trends, it acts as a contrarian market maker using price
bands, EMA-derived context and risk controls. Order planning runs in a Rust orchestrator shared by
live trading and backtesting, so the two stay consistent, and an included optimizer iterates
thousands of backtests over candidate configurations, converging with an evolutionary algorithm.

The strategy's risk should be stated plainly rather than inferred from the name. It is
Martingale-inspired: the README describes making a small initial entry and doubling down on losing
positions multiple times to bring the average entry price closer to current price action, placing
the orders as a grid. An unstucking mechanism realizes small losses on stuck positions while
capping drawdown below a set percentage of peak balance, and a Forager component dynamically
chooses which approved markets may open positions, pruning low relative-volume candidates and
ranking the rest by quote volume, EMA readiness and one-minute log-range volatility. The README
opens with "used at one's own risk".

Installation is from a clone only — there is no `passivbot` package on PyPI — and it requires a
Rust toolchain, since every install profile builds the Rust extension and registers the
`passivbot` command. Use `python3 -m pip install -e ".[full]"` in place of the plain editable
install for backtesting and optimization work. Python 3.12 and 3.14 are supported and 3.13
explicitly is not. The current line is v8 (v8.1.0, August 2026), which the README calls a breaking
config and strategy release: do not start v8 live with an unreviewed v7 config.

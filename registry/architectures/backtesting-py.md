---
id: backtesting-py
name: Backtesting.py
summary: Python framework for backtesting trading strategies on OHLCV data, with a SAMBO-based parameter optimizer, bundled sample datasets and risk-adjusted performance statistics.
authors: [kernc, "Zach Lûster"]
origin: external
repo: https://github.com/kernc/backtesting.py
website: https://kernc.github.io/backtesting.py/
license: AGPL-3.0
tags: [backtesting, optimization, strategy-framework, ohlcv, python]
markets: [multi-asset]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: none
  programming: basic
  setup: basic
install:
  - pip install backtesting
runtime: "python >= 3.9"
---

The smallest complete step from an idea to a measured backtest. A strategy is a `Strategy`
subclass with `init` and `next`, placing buy and sell orders against simulated fills with
commission; the framework returns trade-level results and a statistics block. It is deliberately
indicator-library-agnostic — bring whatever you already use — and ships composable base strategies
in `backtesting/lib.py`, a parameter optimizer built on SAMBO, and interactive Bokeh charts. Any
instrument with OHLC(V) candles works, and sample data ships inside the package as
`backtesting/test/` (GOOG.csv, EURUSD.csv, BTCUSD.csv), so a first end-to-end run needs no data
source, account or API key.

The returned stats cover Sharpe, Sortino and Calmar ratios, max drawdown, alpha and beta, profit
factor, SQN and the Kelly criterion — and, usefully, "Buy & Hold Return [%]" sits in the same block
as the strategy's own return, so the comparison that decides whether a strategy was worth running
is present by default rather than something you remember to compute.

The license is AGPL-3.0, in a file named `LICENSE.md` rather than the usual `LICENSE`. That is
network copyleft: embedding this in a hosted backtesting service triggers source-disclosure
obligations toward that service's users. It is a single-maintainer project, funded through GitHub
Sponsors and actively developed — the current version is 0.6.6, published to PyPI on 2026-07-22,
with versioning by git tag rather than GitHub release objects.

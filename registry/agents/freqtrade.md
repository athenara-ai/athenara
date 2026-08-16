---
id: freqtrade
name: Freqtrade
summary: A Python cryptocurrency trading bot with backtesting, hyperparameter optimization, and an adaptive machine-learning module called FreqAI.
authors: [Freqtrade development team]
origin: external
repo: https://github.com/freqtrade/freqtrade
website: https://www.freqtrade.io
license: GPL-3.0
disclosure: fully-open
status: active
tags: [crypto, trading-bot, backtesting, machine-learning, freqai]
markets: [crypto]
added: 2026-08-15
prerequisites:
  trading: moderate
  ai: basic
  programming: moderate
  setup: basic
---

Freqtrade runs user-authored strategies against spot and futures crypto markets, with connectors
for Binance, Bybit, OKX, Kraken, Gate, Bitget, Hyperliquid, HTX, BingX, and others through CCXT.
It provides dry-run simulation, SQLite trade persistence, backtesting, and control via Telegram or
a web UI.

The FreqAI module automates training of predictive models on live market data: self-adaptive
retraining during live operation, large-scale feature engineering, outlier removal, PCA
dimensionality reduction, and classifier, regressor, and neural-network examples including
LightGBM, XGBoost, and CatBoost. Active since 2017.

---
id: finrl-meta
name: FinRL-Meta
summary: The AI4Finance market-environment and data layer for financial reinforcement learning, with gym-style trading environments across equities, crypto, FX and futures plus 15 data-source processors.
authors:
  [
    AI4Finance Foundation,
    Xiao-Yang Liu,
    Ziyi Xia,
    Jingyang Rui,
    Jiechao Gao,
    Hongyang Yang,
    Ming Zhu,
    Christina Dan Wang,
    Zhaoran Wang,
    Jian Guo,
  ]
origin: external
repo: https://github.com/AI4Finance-Foundation/FinRL-Meta
website: https://ai4finance.org
license: MIT
components: [market environments, data processors, benchmarks]
tags: [reinforcement-learning, market-environments, gym, data-pipeline, benchmark]
markets: [multi-asset]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: advanced
  programming: moderate
  setup: advanced
install:
  - git clone https://github.com/AI4Finance-Foundation/FinRL-Meta
  - cd FinRL-Meta
  - pip install -r requirements.txt
entrypoint: python main.py --mode=train
requires:
  - API keys or accounts for most data sources (Yahoo Finance, CCXT and Binance work without one)
runtime: python >= 3.6
implements: [rl-policy]
builds_on: [finrl]
paper: [finrl-meta-paper]
---

FinRL-Meta supplies the environment and data half of the reinforcement-learning trading loop. The
repository ships eight gym-style environment families — crypto trading, execution optimizing,
futures trading, FX trading, market impact, portfolio allocation, portfolio optimization and stock
trading — and 15 data-source processors (akshare, alpaca, alphavantage, baostock, binance, ccxt,
fx, iexcloud, joinquant, quandl, quantconnect, ricequant, tushare, wrds, yahoofinance). It is
deliberately agnostic about the learning library: the README's plug-and-play section names
ElegantRL, Stable-Baselines3 and RLlib, and the stock-trading folder carries matching paper-trading
environments for each. The work was published in the NeurIPS 2022 Datasets and Benchmarks Track
([proceedings](https://proceedings.neurips.cc/paper_files/paper/2022/hash/0bf54b80686d2c4dc0808c2e98d430f7-Abstract-Datasets_and_Benchmarks.html)).

Development continues — the newest commit, on 2026-04-02, merged impact-aware market environments —
but the packaging lags the code: PyPI's newest `finrl-meta` release is 0.3.6 from 2023-02-07 while
`setup.py` declares 0.3.7, so `pip install finrl-meta` fetches a roughly three-year-old snapshot and
the git checkout is the real install path. The README now steers production users to a separate
FinRL-Trading repository and positions FinRL-Meta as the research environment and benchmark layer.

Two things to know before relying on it. Most of the listed data sources — Alpaca, JoinQuant,
RiceQuant, Tushare, WRDS, IEXCloud, QuantConnect — need accounts or API keys; only Yahoo Finance,
CCXT and Binance are usable key-free. And while the code is MIT (LICENSE reads "Copyright (c) 2024
AI4Finance Foundation Inc."), the README adds a trademark notice outside that text: FinRL® is a
registered trademark and the license grants no rights to the FinRL name or logo. The README's
citation block also attributes a 2024 follow-up paper to the journal "Machine Learning - Nature",
an attribution [arXiv:2304.13174](https://arxiv.org/abs/2304.13174) does not carry — treat it as
unverified.

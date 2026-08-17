---
id: finrl-meta-paper
name: "FinRL-Meta: Market Environments and Benchmarks for Data-Driven Financial Reinforcement Learning"
summary: Presents FinRL-Meta, a library that processes real market data into gym-style trading environments and reproduces published DRL trading strategies as benchmarks.
authors: [Xiao-Yang Liu, Ziyi Xia, Jingyang Rui, Jiechao Gao, Hongyang Yang, Ming Zhu, Christina Dan Wang, Zhaoran Wang, Jian Guo, AI4Finance Foundation]
origin: external
repo: https://github.com/AI4Finance-Foundation/FinRL-Meta
website: https://ai4finance.org
license: MIT
year: 2022
venue: NeurIPS 2022 Datasets and Benchmarks Track
arxiv: "2211.03107"
doi: 10.52202/068431-0134
tags: [reinforcement-learning, market-environments, benchmarks, data-pipeline, gym]
markets: [multi-asset]
added: 2026-08-17
builds_on: [finrl]
prerequisites:
  trading: moderate
  ai: advanced
  programming: none
  setup: none
---

FinRL-Meta is the data and environment layer beneath financial reinforcement learning: it turns
real market data into gym-style trading environments and reproduces published DRL trading
strategies so they can be compared on common ground. The abstract names the three obstacles the
design targets — the low signal-to-noise ratio of financial data, survivorship bias, and
backtesting overfitting.

The code is MIT-licensed and still maintained (last commit April 2026). It ships eight environment
families under `meta/`: crypto trading, execution optimizing, futures trading, FX trading, market
impact, portfolio allocation, portfolio optimization, and stock trading. The paper's "hundreds of
market environments" counts data-driven instantiations, not distinct environment classes. The PyPI
package `finrl-meta` has not been released since 0.3.6 in February 2023, so the repository — not
pip — is the current path in.

An extended journal version appeared as "Dynamic datasets and market environments for financial
reinforcement learning" in *Machine Learning* 113(5), 2024
([doi:10.1007/s10994-023-06511-w](https://doi.org/10.1007/s10994-023-06511-w)). The repo positions
FinRL-Meta as the environment and benchmark layer of the FinRL ecosystem, and carries its
maintainers' own disclaimer that nothing in it is financial advice or a recommendation to trade
real money.

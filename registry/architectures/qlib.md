---
id: qlib
name: Qlib
summary: Microsoft's AI-oriented quantitative investment platform covering the research workflow from data handling and model training to portfolio construction and backtesting.
authors: [Microsoft Research, Xiao Yang, Weiqing Liu, Dong Zhou, Jiang Bian, Tie-Yan Liu]
origin: external
repo: https://github.com/microsoft/qlib
website: https://qlib.readthedocs.io/en/latest/
license: MIT
components: [data infrastructure, learning framework, portfolio generation, order execution, backtest]
tags: [quant-platform, machine-learning, backtesting, alpha-research, python]
markets: [equities]
added: 2026-08-15
prerequisites:
  trading: advanced
  ai: advanced
  programming: moderate
  setup: moderate
paper: [qlib-paper]
---

Qlib provides a full quant research stack: a storage and data-handling layer optimized for
financial time series, model training with a library of supervised learning and reinforcement
learning models, and downstream portfolio generation, order execution, and backtesting. It was
introduced to address the infrastructure gap that arises when AI methods are adopted in
quantitative investment workflows ([arXiv:2009.11189](https://arxiv.org/abs/2009.11189)).

Written in Python and released by Microsoft under MIT. Capabilities include quant dataset
management, a model zoo, automated quant research, and a reinforcement learning module.

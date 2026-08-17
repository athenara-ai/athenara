---
id: ensemble-drl-icaif20
name: "Deep reinforcement learning for automated stock trading: an ensemble strategy"
summary: Ensembles PPO, A2C, and DDPG into a single Dow-30 trading policy selected by rolling Sharpe ratio, benchmarked against the DJIA and a minimum-variance portfolio.
authors: [Hongyang Yang, Xiao-Yang Liu, Shan Zhong, Anwar Walid]
origin: external
repo: https://github.com/AI4Finance-Foundation/FinRL
website: https://doi.org/10.1145/3383455.3422540
license: proprietary
year: 2020
venue: ICAIF '20 (First ACM International Conference on AI in Finance)
arxiv: "2511.12120"
doi: 10.1145/3383455.3422540
tags: [reinforcement-learning, ensemble, portfolio-allocation, backtesting, risk-adjusted-return]
markets: [equities]
added: 2026-08-17
implements: [rl-policy]
prerequisites:
  trading: moderate
  ai: advanced
  programming: none
  setup: none
---

Three actor-critic algorithms — PPO, A2C, and DDPG — are trained separately and combined into one
strategy that picks among them by rolling Sharpe ratio, so as to "inherit and integrate the best
features of the three algorithms, thereby robustly adjusting to different market situations". It is
tested on the 30 Dow Jones constituents against the DJIA index and a minimum-variance portfolio.
The reported outperformance is a 2020 backtest on that data, not a live track record.

The method is still runnable today: it lives inside FinRL (MIT) as `DRLEnsembleAgent` in
`finrl/agents/stablebaselines3/models.py`, driven by
`finrl/applications/stock_trading/ensemble_stock_trading.py`, with a companion notebook at
`examples/FinRL_Ensemble_StockTrading_ICAIF_2020.ipynb`. Two published pointers to the code are
dead ends — the standalone repository named in the arXiv abstract returns 404, as does the notebook
path in FinRL's own README — so use the paths above.

The proceedings version (pp. 1–8) sits behind ACM copyright; an openly readable author version was
posted in November 2025 as [arXiv:2511.12120](https://arxiv.org/abs/2511.12120). The conference's
own 2020 program lists the work under a variant title, "Deep Ensemble Reinforcement Learning for
Automated Stock Trading"; the proceedings title is used here.

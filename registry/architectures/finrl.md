---
id: finrl
name: FinRL
summary: A deep reinforcement learning library that packages market environments, DRL algorithms, and backtesting into a pipeline for training automated trading agents.
authors: [AI4Finance Foundation, Xiao-Yang Liu, Hongyang Yang, Christina Dan Wang]
origin: external
repo: https://github.com/AI4Finance-Foundation/FinRL
website: https://ai4finance.org
license: MIT
components: [market environments, DRL agents, backtesting]
tags: [reinforcement-learning, drl, portfolio-allocation, backtesting, gym]
markets: [equities]
added: 2026-08-15
prerequisites:
  trading: moderate
  ai: advanced
  programming: moderate
  setup: moderate
implements: [rl-policy]
---

FinRL supplies gym-style environments built from market data for indices including NASDAQ-100,
S&P 500, HSI, and SSE 50, together with implementations of DQN, DDPG, PPO, SAC, A2C, and TD3 and a
backtesting module. Environments model practical frictions such as transaction costs and liquidity
constraints — the fidelity issues that make or break the RL-policy pattern (see related).

The library ships tutorials for single-stock trading, multi-stock trading, and portfolio
allocation. Maintained by the AI4Finance Foundation; introduced at the Deep RL Workshop, NeurIPS
2020 ([arXiv:2011.09607](https://arxiv.org/abs/2011.09607)).

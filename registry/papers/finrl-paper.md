---
id: finrl-paper
name: "FinRL: A Deep Reinforcement Learning Library for Automated Stock Trading in Quantitative Finance"
summary: The originating FinRL paper — a three-layer DRL trading pipeline of market environments, agents, and applications, presented at the NeurIPS 2020 Deep RL Workshop.
authors: [Xiao-Yang Liu, Hongyang Yang, Qian Chen, Runjia Zhang, Liuqing Yang, Bowen Xiao, Christina Dan Wang]
origin: external
repo: https://github.com/AI4Finance-Foundation/FinRL
year: 2020
venue: Deep Reinforcement Learning Workshop, NeurIPS 2020 (non-archival)
arxiv: "2011.09607"
tags: [reinforcement-learning, drl, trading-environments, backtesting, library]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: advanced
  programming: none
  setup: none
---

The paper describes a library organized in three layers — market environments, DRL agents, and
applications — and frames stock trading as a Markov decision process that models transaction cost,
market liquidity, and investor risk aversion. It ships virtual environments built over NASDAQ-100,
DJIA, S&P 500, HSI, SSE 50, and CSI 300, together with fine-tuned implementations of DQN, DDPG,
PPO, SAC, A2C, and TD3.

It was presented at the Deep Reinforcement Learning Workshop of NeurIPS 2020 on 11 December 2020.
Workshop papers there are non-archival: there is no proceedings entry and no publisher DOI behind
it, only the workshop's own accepted-papers listing and the arXiv preprint
([arXiv:2011.09607](https://arxiv.org/abs/2011.09607)) — cite it as a workshop paper, not as
NeurIPS main-conference proceedings. It is also distinct from the later ACM ICAIF 2021 paper
"FinRL: Deep Reinforcement Learning Framework to Automate Trading in Quantitative Finance"
([arXiv:2111.09395](https://arxiv.org/abs/2111.09395)) — a different paper, easily conflated with
this one.

The code URL printed in the paper still resolves — it now redirects to
AI4Finance-Foundation/FinRL, the MIT-licensed library indexed here, whose last commit is July
2026. The artifact behind this paper is therefore a live project rather than an archived snapshot.

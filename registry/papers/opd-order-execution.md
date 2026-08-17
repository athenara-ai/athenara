---
id: opd-order-execution
name: Universal Trading for Order Execution with Oracle Policy Distillation
summary: Introduces Oracle Policy Distillation for reinforcement-learning order execution; the resulting OPDS method ships as a runnable workflow in Microsoft Qlib.
authors: [Yuchen Fang, Kan Ren, Weiqing Liu, Dong Zhou, Weinan Zhang, Jiang Bian, Yong Yu, Tie-Yan Liu, Microsoft Research, Shanghai Jiao Tong University]
origin: external
repo: https://github.com/microsoft/qlib/tree/main/examples/rl_order_execution
website: https://seqml.github.io/opd/
license: MIT
year: 2021
venue: AAAI 2021
arxiv: "2103.10860"
doi: 10.1609/aaai.v35i1.16083
tags: [order-execution, reinforcement-learning, policy-distillation, market-microstructure, qlib]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: advanced
  ai: advanced
  programming: moderate
  setup: advanced
implements: [rl-policy]
builds_on: [qlib]
---

A universal trading policy optimization framework for order execution — deciding how to slice and
time the trades that fill an order. Its contribution is policy distillation: a teacher policy with
perfect information guides the learning of a common policy that only ever sees noisy, imperfect
market states.
Published in the Proceedings of the AAAI Conference on Artificial Intelligence, vol. 35 no. 1,
pp. 107–115 ([doi:10.1609/aaai.v35i1.16083](https://ojs.aaai.org/index.php/AAAI/article/view/16083)).

Microsoft Qlib ships the method as OPDS under `examples/rl_order_execution`, whose README names it
as the AAAI 2021 paper's method and pairs it with a PPO baseline and a TWAP weak baseline; the
directory carries `train_opds.yml` and `backtest_opds.yml` configs driving
`qlib.rl.contrib.train_onpolicy` and `qlib.rl.contrib.backtest`. This is live code rather than an
archived artifact — the example was last touched in March 2026 inside a repository whose latest
commit is July 2026, under Qlib's MIT license.

Two caveats before starting. No data is bundled: the workflow expects you to build 5-minute China
A-share (hs300) Qlib data yourself before training. And two code locations exist and are not
equivalent — the authors' [project page](https://seqml.github.io/opd/) points at the older
`high-freq-execution` branch, frozen since November 2022, while the maintained implementation is
the `rl_order_execution` example on `main`. The improvements the paper reports over its baselines
are the authors' own experimental results on their own data.

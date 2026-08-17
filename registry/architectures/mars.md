---
id: mars
name: MarS
summary: Microsoft's MIT-licensed order-level market simulation engine (ICLR 2025), whose event-driven exchange and agent framework run today, but whose Large Market Model weights have never been published.
authors: [Microsoft Corporation, Junjie Li, Yang Liu, Weiqing Liu, Shikai Fang, Lewen Wang, Chang Xu, Jiang Bian]
origin: external
repo: https://github.com/microsoft/MarS
website: https://mars-lmm.github.io/
license: MIT
components: [mlib exchange and matching engine, agent framework, Large Market Model]
tags: [market-simulation, limit-order-book, generative-model, agent-training, research-code]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: advanced
  ai: moderate
  programming: advanced
  setup: advanced
paper: [mars-paper]
install:
  - git clone https://github.com/microsoft/MarS.git
  - docker build -t mars-env -f .devcontainer/Dockerfile .
  - pip install -e .[dev]
requires:
  - Docker on Linux — the README states direct installation is not supported
  - CUDA
  - Large Market Model weights (not publicly released) for the LMM-powered examples
runtime: "python 3.11 | 3.12, Linux"
---

MarS simulates a market at the level of individual orders: an event-driven exchange and matching
engine (`mlib.core`), an agent framework on top of it, and a generative Large Market Model trained
to produce order flow. The paper frames the combination as a training environment for trading
agents, a forecasting tool, and a platform for market-impact analysis, and was published as a
poster at ICLR 2025 ([arXiv:2409.07486](https://arxiv.org/abs/2409.07486)). A bundled report
implements eleven of Rama Cont's stylized facts — heavy tails, volatility clustering, the leverage
effect, asymmetry in timescales, and the rest — as the yardstick for whether a simulated tape
behaves like a real one.

The model is not available. `download.py` fetches the Hugging Face repo
`microsoft/mars-order-model`, which returns HTTP 401; the README describes the model as private
awaiting final review approval. Everything downstream of it — forecasting, market impact, the
stylized-facts report — therefore cannot be run. What runs without weights is the simulation core:
`market_simulation/examples/run_simulation.py` builds an exchange from `mlib.core`, registers a
trade-info state, drives it with a noise agent over a one-hour session, and plots the resulting
price trajectory. The README's OneDrive fallback for the remaining prerequisites is reported broken
(issue #15), and the issues asking for the model and the training code (#9, #11, #20) are open and
unanswered.

Treat it as research code rather than a maintained platform. `main` has not moved since 2025-05-26
— later repository activity is dependabot branches, not commits to main — there is no PyPI package,
and Docker on Linux with CUDA is the only supported install path. A third-party Hugging Face upload
under a similar name is not a Microsoft artifact and is not the model release.

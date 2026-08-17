---
id: alphaagent-paper
name: "AlphaAgent: LLM-Driven Alpha Mining with Regularized Exploration to Counteract Alpha Decay"
summary: Mines decay-resistant alpha factors with three LLM agents under originality, alignment, and complexity regularizers, backtesting the results through Qlib.
authors: [Ziyi Tang, Zechuan Chen, Jiarui Yang, Jiayao Mai, Yongsen Zheng, Keze Wang, Jinrui Chen, Liang Lin, Sun Yat-sen University, "Chinese University of Hong Kong, Shenzhen", Nanyang Technological University, UNSW Sydney]
origin: external
repo: https://github.com/RndmVariableQ/AlphaAgent/tree/legacy-main
license: MIT
year: 2025
venue: KDD 2025
arxiv: "2502.16789"
doi: 10.1145/3711896.3736838
tags: [alpha-mining, llm-agent, multi-agent, factor-research, alpha-decay]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: advanced
  programming: moderate
  setup: advanced
builds_on: [qlib]
---

AlphaAgent splits factor mining across three LLM agents: an Idea Agent that proposes market
hypotheses, a Factor Agent that turns them into regularized factor expressions, and an Eval Agent
that validates and backtests them and feeds results back. The paper's argument is that
unconstrained LLM search produces factors that decay quickly, so exploration is bounded by three
regularizers — originality enforced through an abstract-syntax-tree similarity measure against
existing alphas, hypothesis-factor alignment judged semantically by an LLM, and complexity control
through AST-based structural constraints. Published at KDD '25 (pp. 2813–2822,
[doi:10.1145/3711896.3736838](https://doi.org/10.1145/3711896.3736838)).

The implementation is derived from Microsoft RD-Agent, which the README credits explicitly, and
backtests through Qlib on China A-share data pulled from baostock. Over CSI 500 and S&P 500 for
January 2021 to December 2024 the authors report average annual excess returns of 11.0% (IR 1.5)
and 8.74% (IR 1.05) after transaction costs; these are the authors' own backtests, with no
third-party replication published.

The repository needs care. The paper's code is on the `legacy-main` branch, last committed in June
2025 — on 1 July 2026 the owner re-initialised the default `main` branch as a completely different
project, a Tushare-based multi-factor framework whose reference dataset is distributed by
Baidu Netdisk and which is marked "research use only" with no LICENSE file at all. Only
`legacy-main` carries a license, MIT, and even there the copyright line reads "Copyright (c)
Microsoft Corporation", inherited unchanged from the RD-Agent fork rather than naming the paper's
authors.

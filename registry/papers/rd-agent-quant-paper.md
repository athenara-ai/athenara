---
id: rd-agent-quant-paper
name: "R&D-Agent-Quant: A Multi-Agent Framework for Data-Centric Factors and Model Joint Optimization"
summary: Describes RD-Agent(Q), a multi-agent research-and-development loop that jointly optimizes quant factors and models, shipped as the fin_quant scenario of Microsoft's RD-Agent.
authors: [Yuante Li, Xu Yang, Xiao Yang, Minrui Xu, Xisen Wang, Weiqing Liu, Jiang Bian]
origin: external
repo: https://github.com/microsoft/RD-Agent
website: https://rdagent.readthedocs.io/en/latest/scens/quant_agent_fin.html
license: MIT
year: 2025
venue: NeurIPS 2025 Datasets and Benchmarks Track (poster)
arxiv: "2505.15155"
tags: [multi-agent, factor-mining, automated-research, qlib, backtesting]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: advanced
  ai: advanced
  programming: none
  setup: none
implements: [planner-executor]
builds_on: [qlib]
---

RD-Agent(Q) splits quant research into a Research stage — goal-aligned prompting, hypothesis
formulation from domain priors, and mapping those hypotheses onto concrete tasks — and a
Development stage where the Co-STEER code-generation agent implements them and runs them through
real-market backtests. A feedback stage joins the two, using a multi-armed-bandit scheduler to pick
which direction to pursue next, so factor discovery and model design are optimized together rather
than in separate passes.

The paper appears in the NeurIPS 2025 Datasets and Benchmarks Track as a poster; the arXiv comment
field says only "NeurIPS 2025" and does not distinguish that track from the main conference. The
authors report up to twice the annualized return of classical factor libraries while using 70%
fewer factors, from their own backtests on CSI 300 constituents between 2008 and 2022 — self-
reported results, not independently replicated.

The implementation is public and current: the scenario is the `fin_quant` command in Microsoft's
MIT-licensed RD-Agent repository, which is a general R&D-automation framework where quant sits
alongside data-science, Kaggle, RL and fine-tuning scenarios — the repository as a whole is not a
quant system. Running the scenario requires an LLM ChatCompletion API key, a working Docker
install, and a Qlib CN dataset downloaded separately, which the scenario documentation does not
cover. The PyPI release (0.8.0, November 2025) trails the repository head by about nine months,
so `pip install rdagent` may lag the documented behaviour.

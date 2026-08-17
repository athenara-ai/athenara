---
id: rd-agent
name: RD-Agent
summary: Microsoft's R&D automation framework whose finance scenarios run an autonomous factor-and-model co-optimization loop on top of Qlib.
authors: [Microsoft, Yuante Li, Xu Yang, Xiao Yang, Minrui Xu, Xisen Wang, Weiqing Liu, Jiang Bian]
origin: external
repo: https://github.com/microsoft/RD-Agent
website: https://rdagent.readthedocs.io/en/latest/scens/quant_agent_fin.html
license: MIT
components: [research stage, Co-STEER code generation agent, feedback stage, multi-armed bandit scheduler]
tags: [research-automation, factor-mining, model-search, multi-agent, python]
markets: [equities]
added: 2026-08-17
paper: [rd-agent-quant-paper]
builds_on: [qlib]
prerequisites:
  trading: advanced
  ai: advanced
  programming: moderate
  setup: advanced
install:
  - pip install rdagent
entrypoint: "rdagent fin_quant"
requires: ["Docker"]
---

RD-Agent automates the research-and-development loop itself, and its quantitative-finance
scenarios point that loop at Qlib: an agent proposes alpha factors and forecasting models,
implements them as code, and backtests them on real market data. Four entry points are present in
the current CLI — `fin_quant`, `fin_factor`, `fin_model` and `fin_factor_report --report-folder=<path>`
— and the implementation lives under `rdagent/scenarios/qlib/`, with factor and model coder and
runner modules, a scenario Dockerfile, and Qlib factor and model config templates.

The companion paper is *R&D-Agent-Quant: A Multi-Agent Framework for Data-Centric Factors and Model
Joint Optimization* ([arXiv:2505.15155](https://arxiv.org/abs/2505.15155)), a poster at the
NeurIPS 2025 Datasets and Benchmarks Track rather than the main conference track. It describes a
Research stage that forms hypotheses, a Development stage where a code-generation agent called
Co-STEER implements them for real-market backtests, and a feedback stage whose multi-armed bandit
scheduler decides what to explore next. The performance figures quoted in the paper and README are
the authors' own and unaudited.

Quant is one scenario among several in the same repository — Kaggle, data science, RL and LLM
fine-tuning scenarios share the codebase — so what is described here is the `fin_*` half of the
project. Docker is a hard prerequisite for most scenarios, the quant loops included. MIT licensed
and published by Microsoft; the PyPI release (`rdagent` 0.8.0, uploaded 2025-11-03) lags the
default branch, which had commits through 2026-08-04.

---
id: finrobot
name: FinRobot
summary: An open-source multi-agent platform from AI4Finance Foundation that applies LLM agents to equity research, trading strategy, and risk evaluation tasks.
authors: [AI4Finance Foundation, Hongyang Yang, Boyu Zhang, Neng Wang, Christina Dan Wang]
origin: external
repo: https://github.com/AI4Finance-Foundation/FinRobot
website: https://finrobot.ai
license: Apache-2.0
disclosure: fully-open
frameworks: [autogen, langchain]
tags: [multi-agent, llm, equity-research, robo-advisor]
markets: [equities]
added: 2026-08-15
prerequisites:
  trading: basic
  ai: moderate
  programming: moderate
  setup: moderate
builds_on: [fingpt]
---

FinRobot organizes financial AI into four layers: a financial AI agents layer using
chain-of-thought prompting, a financial LLM algorithms layer of domain-tuned models, LLMOps and
DataOps layers for multi-source integration and model selection, and a foundation-model layer
supporting plug-and-play LLMs. It builds on existing multi-agent frameworks including AutoGen and
LangChain.

A documented use case is automated equity research that produces structured stock analysis
reports covering financial statement analysis, valuation multiples such as P/E and EV/EBITDA, and
risk assessment. Paper: [arXiv:2405.14767](https://arxiv.org/abs/2405.14767).

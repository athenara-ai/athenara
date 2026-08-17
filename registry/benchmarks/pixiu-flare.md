---
id: pixiu-flare
name: PIXIU / FLARE
summary: An open-source financial LLM resource bundling the FinMA instruction-tuned models, a 136K-sample instruction dataset, and the FLARE evaluation benchmark.
authors: [Qianqian Xie, Weiguang Han, Xiao Zhang, Yanzhao Lai, Min Peng, Alejandro Lopez-Lira, Jimin Huang]
origin: external
repo: https://github.com/The-FinAI/PIXIU
website: https://huggingface.co/TheFinAI
license: MIT
tasks: [sentiment-analysis, classification, knowledge-extraction, numerical-reasoning, summarization, credit-scoring, forecasting]
tags: [benchmark, financial-llm, instruction-tuning, evaluation, flare]
markets: [equities]
added: 2026-08-15
prerequisites:
  trading: basic
  ai: advanced
  programming: moderate
  setup: moderate
---

PIXIU released the first open financial LLM suite in three parts: **FinMA**, LLaMA-based models
fine-tuned on financial instructions; **FIT**, an instruction dataset of 136K samples covering
multiple financial tasks and document types; and **FLARE**, the evaluation benchmark that
originally spanned five financial NLP tasks plus a prediction task over nine datasets
([arXiv:2306.05443](https://arxiv.org/abs/2306.05443)).

FLARE has since grown into the FinBen evaluation suite (42 datasets spanning 24 tasks, see the
FinBen entry) with a public leaderboard; English, Spanish, and Chinese are covered. Models and
evaluation datasets are published on Hugging Face under The FinAI organization.

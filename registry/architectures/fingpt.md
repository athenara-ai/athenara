---
id: fingpt
name: FinGPT
summary: An open-source family of financial large language models and fine-tuning pipelines from AI4Finance Foundation, built around low-cost LoRA adaptation of open base models.
authors: [AI4Finance Foundation, Hongyang Yang, Xiao-Yang Liu, Christina Dan Wang]
origin: external
repo: https://github.com/AI4Finance-Foundation/FinGPT
website: https://fingpt.io
license: MIT
components: [data pipelines, instruction datasets, LoRA fine-tuning recipes, trained adapters]
tags: [financial-llm, lora, fine-tuning, sentiment-analysis, rag]
markets: [equities]
added: 2026-08-15
prerequisites:
  trading: basic
  ai: advanced
  programming: advanced
  setup: advanced
---

FinGPT is a model and tooling suite rather than a trading agent: it provides data pipelines,
instruction-tuning datasets, and LoRA fine-tuning recipes for adapting open base models to
financial sentiment analysis, relation extraction, named entity recognition, and question
answering. Components include FinGPT-Forecaster for stock movement prediction, FinGPT-RAG for
retrieval-augmented sentiment analysis, and FinGPT-Benchmark for instruction-tuning evaluation.

The project emphasizes cheap re-tuning to keep pace with changing markets and publishes trained
adapters on [Hugging Face](https://huggingface.co/FinGPT). Papers:
[arXiv:2306.06031](https://arxiv.org/abs/2306.06031),
[arXiv:2306.12659](https://arxiv.org/abs/2306.12659),
[arXiv:2310.04793](https://arxiv.org/abs/2310.04793).

Categorized as an architecture/framework: it supplies the financial-LLM layer that agents (for
example FinRobot) build on, rather than making trading decisions itself.

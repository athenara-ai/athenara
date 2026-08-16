---
id: finben
name: FinBen
summary: A holistic open-source financial benchmark of 42 datasets spanning 24 tasks, including the first stock-trading evaluation for LLMs.
authors: [Qianqian Xie, Weiguang Han, Zhengyu Chen, Ruoyu Xiang, Jimin Huang, The FinAI, et al.]
origin: external
repo: https://github.com/The-FinAI/FinBen
website: https://proceedings.neurips.cc/paper_files/paper/2024/hash/adb1d9fa8be4576d28703b396b82ba1b-Abstract-Datasets_and_Benchmarks_Track.html
tasks: [information-extraction, textual-analysis, question-answering, text-generation, risk-management, forecasting, decision-making, stock-trading]
tags: [benchmark, financial-llm, evaluation, stock-trading, rag]
markets: [equities]
added: 2026-08-15
prerequisites:
  trading: basic
  ai: advanced
  programming: moderate
  setup: moderate
builds_on: [pixiu-flare]
---

FinBen evaluates LLMs across eight aspects: information extraction, textual analysis, question
answering, text generation, risk management, forecasting, decision-making, and bilingual
English/Spanish coverage. It introduced the first stock-trading evaluation for financial LLMs plus
novel agent and retrieval-augmented generation evaluations, and released new datasets for
regulations and stock trading.

The authors evaluated 21 representative LLMs (including GPT-4, ChatGPT, and Gemini), finding
strong performance on extraction and textual analysis but weakness on advanced reasoning,
generation, and forecasting. Published in the NeurIPS 2024 Datasets and Benchmarks track
([arXiv:2402.12659](https://arxiv.org/abs/2402.12659)); it grew out of the FLARE benchmark (see
related). The repository carries no license file at time of indexing.

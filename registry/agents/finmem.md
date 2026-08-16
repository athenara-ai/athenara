---
id: finmem
name: FinMem
summary: An LLM trading agent that combines a configurable character profile with a layered memory module modeled on human trader cognition.
authors: [Yangyang Yu, Haohang Li, Zhi Chen, Yuechen Jiang, Yang Li, Denghui Zhang, Rong Liu, Jordan W. Suchow, Khaldoun Khashanah]
origin: external
repo: https://github.com/pipiku915/FinMem-LLM-StockTrading
license: MIT
disclosure: fully-open
tags: [llm-agent, memory, single-stock, profiling]
markets: [equities]
added: 2026-08-15
prerequisites:
  trading: basic
  ai: advanced
  programming: moderate
  setup: advanced
paper: [finmem-paper]
---

FinMem is built from three modules: **profiling**, which defines the agent's professional
character and risk personality; **memory**, a layered store with an adjustable cognitive span that
ranks and retains market information over different time horizons; and **decision-making**, which
converts retrieved memories into trade actions. The authors report that adjusting the agent's
cognitive span and personality settings changes trading performance.

The implementation supports OpenAI models, Hugging Face models served via Text Generation
Inference, and Google Gemini, using text-embedding-ada-002 for retrieval. The repository's worked
example trades TSLA over June–October 2022; the system was also entered in the IJCAI 2024 FinLLM
Challenge single-stock trading task.

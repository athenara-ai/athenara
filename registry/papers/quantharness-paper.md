---
id: quantharness-paper
name: "QuantHarness: Price-Driven Multi-Agent LLMs for High-Frequency Trading"
summary: Proposes a four-agent LLM system for short-horizon technical trading from price data alone, released with an MIT-licensed implementation and a 1,600-file K-line benchmark.
authors: [Fei Xiong, Xiang Zhang, Aosong Feng, Siqi Sun, Chenyu You, "Y-Research @SBU"]
origin: external
repo: https://github.com/Y-Research-SBU/QuantHarness
website: https://y-research-sbu.github.io/QuantHarness/
license: MIT
year: 2025
venue: arXiv
arxiv: "2509.09995"
tags: [multi-agent, llm, technical-analysis, high-frequency, langgraph]
markets: [crypto, futures, equities]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: moderate
  programming: none
  setup: none
builds_on: [tradingagents, finmem]
---

The framework decomposes trading into specialized agents working over short temporal windows. The
released implementation runs indicator, pattern, trend and decision agents on LangChain and
LangGraph: the indicator agent computes five technical indicators including RSI, MACD and the
stochastic oscillator for each incoming K-line, and the decision agent emits LONG or SHORT
directives with entry, exit and stop-loss levels. Evaluation in the paper is zero-shot on Bitcoin
and Nasdaq futures at 1-hour and 4-hour intervals, against neural and rule-based baselines.

The repository bundles its own benchmark — 1,600 CSV files, 100 per instrument per timeframe,
covering nine instruments at the 1-hour and 4-hour timeframes — and remains actively maintained,
with commits through July 2026. One caveat for readers working from the architecture description:
the abstract and README both list a risk agent among the four specialized agents, but no such module
exists in the published tree, which contains only the indicator, pattern, trend and decision agents.

This is an arXiv preprint with no peer-reviewed venue, and its reported returns and accuracy gains
are self-reported, without third-party replication. The naming history matters when searching for
it: versions up to v3 were titled "QuantAgent", a name shared with an unrelated 2024 paper by
different authors ([arXiv:2402.03755](https://arxiv.org/abs/2402.03755)), and the old repository URL
still redirects to the renamed one.

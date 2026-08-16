---
id: finmem-paper
name: "FinMem: A Performance-Enhanced LLM Trading Agent with Layered Memory and Character Design"
summary: Proposes an LLM trading agent whose layered memory and configurable character profile let it adapt to new market information over multiple time horizons.
authors: [Yangyang Yu, Haohang Li, Zhi Chen, Yuechen Jiang, Yang Li, Denghui Zhang, Rong Liu, Jordan W. Suchow, Khaldoun Khashanah]
origin: external
repo: https://github.com/pipiku915/FinMem-LLM-StockTrading
year: 2023
venue: ICLR 2024 Workshop on LLM Agents
arxiv: "2311.13743"
tags: [llm-agent, memory, cognitive-architecture, profiling]
markets: [equities]
added: 2026-08-15
prerequisites:
  trading: basic
  ai: moderate
  programming: none
  setup: none
---

Presents a three-module agent architecture combining profiling, layered memory processing that
imitates human trader cognition, and decision-making. The design lets the agent self-evolve its
domain knowledge, react to new investment cues, and refine trading decisions over time.

Experiments on real-world financial data report performance above algorithmic baselines, with
results varying by the agent's cognitive span and personality configuration — an early
demonstration that memory design, not just model choice, moves trading performance.

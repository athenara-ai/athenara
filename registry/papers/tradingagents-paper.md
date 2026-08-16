---
id: tradingagents-paper
name: "TradingAgents: Multi-Agents LLM Financial Trading Framework"
summary: Introduces a multi-agent LLM trading framework whose specialized roles mirror the structure of a professional trading firm.
authors: [Yijia Xiao, Edward Sun, Di Luo, Wei Wang]
origin: external
repo: https://github.com/TauricResearch/TradingAgents
year: 2024
venue: arXiv (oral, Multi-Agent AI in the Real World workshop)
arxiv: "2412.20138"
tags: [multi-agent, llm, debate, risk-management]
markets: [equities]
added: 2026-08-15
prerequisites:
  trading: basic
  ai: moderate
  programming: none
  setup: none
---

The paper describes a system of LLM agents acting as fundamental, sentiment, and technical
analysts, bull and bear researchers, traders with differing risk tolerances, and a risk-management
team, collaborating to reach trading decisions. The authors report gains in cumulative return,
risk-adjusted return, and drawdown relative to baseline strategies.

The accompanying implementation is released publicly by Tauric Research (see related agent) —
one of the few papers in this space with a maintained open-source system behind it.

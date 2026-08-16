---
id: tradingagents
name: TradingAgents
summary: A multi-agent LLM framework that assigns specialized analyst, researcher, trader, and risk-management roles to simulate the workflow of a trading firm.
authors: [Tauric Research, Yijia Xiao, Edward Sun, Di Luo, Wei Wang]
origin: external
repo: https://github.com/TauricResearch/TradingAgents
website: https://tauric.ai/
license: Apache-2.0
disclosure: fully-open
frameworks: [langgraph]
status: active
tags: [multi-agent, llm, langgraph, debate]
markets: [equities]
added: 2026-08-15
prerequisites:
  trading: basic
  ai: moderate
  programming: moderate
  setup: moderate
implements: [multi-agent-debate]
paper: [tradingagents-paper]
---

TradingAgents decomposes trading into distinct LLM-powered roles: fundamentals, sentiment, news,
and technical analysts feed reports to bullish and bearish researchers who debate the evidence,
after which a trader agent composes a decision and a risk-management team and portfolio manager
approve or reject it.

The system is built on LangGraph and supports OpenAI, Google, Anthropic, xAI, DeepSeek, Qwen, GLM,
MiniMax, OpenRouter, Ollama, AWS Bedrock, and any OpenAI-compatible endpoint. Released by Tauric
Research alongside the paper describing the framework (see related).

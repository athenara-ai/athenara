---
id: agentic-trading-lab
name: AgenticTrading
aka: [Agentic Trading Lab]
summary: An open platform for prototyping, backtesting, paper-trading and leaderboard-comparing LLM trading agents, bundling the FinAgent orchestration framework and an adapter for TradingAgents.
authors: [Open-Finance-Lab, SecureFinAI Lab, Jifeng Li, Arnav Grover, Abraham Alpuerto, Yupeng Cao, Xiao-Yang Liu]
origin: external
repo: https://github.com/Open-Finance-Lab/AgenticTrading
website: https://agentic-trading-lab.vercel.app/
license: OpenMDW-1.0
components: [planner, orchestrator, alpha, risk, portfolio, backtest, execution, audit, memory]
tags: [llm-agents, orchestration, backtesting, paper-trading, leaderboard]
markets: [equities, crypto]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: advanced
  programming: advanced
  setup: advanced
builds_on: [tradingagents, finagent-paper]
---

AgenticTrading is a lab for building and comparing LLM trading agents rather than an agent itself:
it wraps agent construction, backtesting, live-market paper trading, drawdown and risk metrics, an
open leaderboard against market baselines, and Alpaca and Robinhood broker integrations. Its
companion paper maps the classical algorithmic-trading pipeline onto planner, orchestrator, alpha,
risk, portfolio, backtest, execution, audit and memory agents. The repository vendors the FinAgent
orchestration framework under `orchestration/FinAgents/`, including a `qlib_local` alpha-agent
pool, ships an adapter for the external TradingAgents framework, and pins `ai-hedge-fund` at a
fixed commit in an isolated virtualenv. Live trading against a real Robinhood account is supported
but off by default, behind a review-only mode that shows what an agent would do before it can act
and per-order risk caps.

The paper is "Orchestration Framework for Financial Agents: From Algorithmic Trading to Agentic
Trading" ([arXiv:2512.02227](https://arxiv.org/abs/2512.02227)), a poster at the NeurIPS 2025
Workshop on Generative AI in Finance — a workshop track, not the main conference. The return and
Sharpe figures in its abstract are author-reported and unaudited; they have not been independently
verified.

The licence is OpenMDW-1.0, a model-materials licence rather than a familiar OSI-style code
licence: permissive in substance, but it carries a notice-retention duty on redistribution and a
patent-litigation termination clause, so read it rather than assuming MIT or Apache equivalence.
GitHub reports NOASSERTION only because OpenMDW is absent from its licence database, and the
copyright holder in the LICENSE file is SecureFinAI Lab while the publishing org is
Open-Finance-Lab. Two practical notes: adoption is modest — a few hundred stars, with provenance
and cross-project integration the stronger signal — and the PyPI SDK (`agentictrading` 0.1.0, its
only release) points its Source and Issues links at a fork, so link the canonical org repository.

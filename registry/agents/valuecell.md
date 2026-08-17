---
id: valuecell
name: ValueCell
summary: A multi-agent platform whose DeepResearch, Strategy and News agents research equities and crypto and automatically execute perpetual-futures strategies on Binance, OKX and Hyperliquid.
authors: [ValueCell.ai]
origin: external
repo: https://github.com/ValueCell-ai/valuecell
website: https://valuecell.ai
license: Apache-2.0
disclosure: fully-open
frameworks: [a2a-sdk]
tags: [multi-agent, deep-research, perpetual-futures, self-hosted, desktop-app]
markets: [equities, crypto]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: basic
  programming: moderate
  setup: advanced
install:
  - git clone https://github.com/ValueCell-ai/valuecell.git
  - cd valuecell
entrypoint: "bash start.sh"
runtime: "python >= 3.12"
requires:
  - uv
  - Exchange API keys for live trading (Binance, OKX or Hyperliquid)
  - Funded perpetual-futures account for live trading
---

Three agents ship: a DeepResearch agent over fundamental documents, a Strategy agent that supports
multi-asset, multi-strategy crypto trading and automatically executes the strategies it produces,
and a news retrieval agent for scheduled delivery. Underneath is an async, re-entrant Python
orchestrator with human-in-the-loop pauses and first-class Agent2Agent support through `a2a-sdk`,
with a documented path for contributing new agents. It runs self-hosted as a Python and React app
with a web UI, and signed macOS and Windows desktop builds are published — all release artifacts to
date are labelled beta.

Live trading is perpetual contracts only: the README states that spot is implemented as 1x
contracts, so the connected account must be a funded perps account. Binance (international site,
USDT-M futures), OKX and Hyperliquid are marked tested, while Coinbase, Gate.io, MEXC and Blockchain
are only partially tested. Hyperliquid carries its own constraints — USDC margin only, market orders
auto-converted to IoC limit orders, and a 10 USDC minimum per trade.

Two things to weigh. Apache-2.0 does not cover everything shipped: the README states it applies only
to original code authored by the ValueCell team and contributors, while the embedded TradingView
Advanced Chart widget is proprietary under its own agreement and exchange and LLM APIs carry their
own terms. And the project is dormant at the maintainer level — no commit on `main` and no merged
pull request since February 2026, and no release since v0.1.20 in January 2026, while community pull
requests continue to arrive unmerged. A hosted product at valuecell.ai is promoted at the top of the
README; the self-hosted path is complete and no pricing, token or returns claim appears there.

---
id: octobot
name: OctoBot
summary: A self-hosted Python crypto trading bot with twelve ready-to-run trading modes, an open-source LLM evaluator, and a multi-agent package with manager, critic and judge roles.
authors: [Drakkar-Software, Guillaume De Saint Martin]
origin: external
repo: https://github.com/Drakkar-Software/OctoBot
website: https://www.octobot.cloud
license: GPL-3.0
disclosure: fully-open
status: active
strategy: [grid, dca, market-making, arbitrage, index]
tags: [crypto, trading-bot, self-hosted, llm-evaluator, multi-agent, backtesting]
markets: [crypto]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: basic
  programming: basic
  setup: moderate
install:
  - docker run -itd --name OctoBot -p 80:5001 -v $(pwd)/user:/octobot/user -v $(pwd)/tentacles:/octobot/tentacles -v $(pwd)/logs:/octobot/logs drakkarsoftware/octobot:stable
runtime: "python >= 3.12"
implements: [multi-agent-debate]
---

OctoBot runs on the operator's own machine — from the Docker one-liner above, from prebuilt
executables for Windows, macOS, Linux and Raspberry Pi, or as a Python package — and serves a web
interface. Its tentacles repository supplies twelve trading modes (arbitrage, blank, daily, dca,
dip_analyser, grid, index, market_making, remote_trading_signals, signal, staggered_orders and
trading_view_signals) that decide and place orders on CCXT-supported exchanges, alongside a
backtesting engine and a paper-trading simulator. The project has been developed since 2018.

The LLM parts are in the open-source tree rather than reserved for the paid cloud:
`Services/Services_bases/gpt_service/gpt.py` calls the OpenAI SDK, defaults to gpt-3.5-turbo and
exposes a custom base URL for Ollama-compatible models, and the tentacles tree carries a
GPTEvaluator and a `gpt_trading` profile. Since February 2026 the main repository also ships
`packages/agents/octobot_agents`, whose `team/` subpackage defines manager, critic and judge roles
communicating over channels with pydantic-typed LLM outputs. One boundary is worth knowing:
running the ChatGPT evaluator live needs only the operator's own key, but *backtesting* it relies
on predictions precomputed by OctoBot's hosted cloud service.

Three things to weigh before adopting it. Licensing is mixed — this repository is GPL-3.0, while
the OctoBot-Tentacles, -Trading, -Commons and -Services repositories are LGPL-3.0. Release
channels have diverged: GitHub releases are on a 3.0.0 beta line that defaults to a "node mode"
acting as backend for a hosted UI, with the classic self-hosted interface reached by starting a
manual OctoBot, and the README warns the beta is a work in progress with possible bugs and
incomplete features — meanwhile PyPI still carries 2.1.1, so `pip install OctoBot` and the release
binaries are not the same version. And the project is commercially funded: its README carries
exchange affiliate referral links and markets a paid cloud service and a commercial license.

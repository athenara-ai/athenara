---
id: jesse
name: Jesse
summary: Python framework for researching, backtesting and optimizing user-written crypto strategies, with a built-in MCP server, a Jupyter research API, and Monte Carlo and significance testing.
authors: [Saleh Mir, Jesse.Trade]
origin: external
repo: https://github.com/jesse-ai/jesse
website: https://jesse.trade
license: MIT
tags: [crypto, backtesting, strategy-framework, optimization, python]
markets: [crypto]
added: 2026-08-17
prerequisites:
  trading: advanced
  ai: basic
  programming: advanced
  setup: advanced
install:
  - pip install jesse
  - git clone https://github.com/jesse-ai/project-template my-bot
  - cd my-bot
  - cp .env.example .env
entrypoint: "jesse run"
requires:
  - "PostgreSQL >= 10"
  - "Redis >= 5"
  - "a jesse.trade license token (LICENSE_API_TOKEN) for live or paper trading"
runtime: "python >= 3.10 and <= 3.13"
---

Jesse ships no strategy of its own. The user writes a `Strategy` subclass — `should_long`,
`go_long` and their counterparts — and the framework supplies everything around it: candle import,
backtesting, an optimizer, Monte Carlo simulation and a rule-significance test, each a mode under
`jesse/modes/`. The package also carries an MCP server (`jesse/mcp/`), so an assistant can drive
backtests and optimization runs directly, and a research API (`jesse/research/`) for use from
Jupyter. The indicator library holds 175 modules as of 2026-08-17; the README's "300+ indicators"
is the project's own count, since a single module can expose several functions.

The MIT license covers this repository only, and live and paper trading are not in it. There is no
live mode in `jesse/modes/`; instead `jesse/services/installer.py` downloads a separate
closed-source `jesse_live` plugin and refuses to proceed unless `LICENSE_API_TOKEN` is set, and the
[live-trading documentation](https://docs.jesse.trade/docs/livetrade.html) states that access is
limited to holders of an active license bought from jesse.trade. What is genuinely open is the
research half — backtesting, optimization, Monte Carlo, significance testing and the ML pipeline.

Running it needs PostgreSQL and Redis alongside Python 3.10 to 3.13, so the setup is a small
service stack rather than a single package. Development is current: master's 3.0.6 version bump and
the matching PyPI release both landed on 2026-08-16. Load-bearing documentation is at
docs.jesse.trade; jesse.trade itself refuses non-browser clients.

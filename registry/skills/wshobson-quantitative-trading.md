---
id: wshobson-quantitative-trading
name: wshobson quantitative-trading plugin
summary: A Claude Code and Codex plugin packaging two quant skills — bias-aware backtesting frameworks and VaR/CVaR/Sharpe/Sortino risk metrics — plus quant-analyst and risk-manager subagents.
authors: [Seth Hobson]
origin: external
repo: https://github.com/wshobson/agents/tree/main/plugins/quantitative-trading
website: https://sethhobson.com
license: MIT
targets: [claude-code, codex, cursor, gemini]
tags: [backtesting, risk-metrics, walk-forward-analysis, bias-mitigation, claude-code-plugin]
markets: [multi-asset]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: basic
  programming: moderate
  setup: basic
---

Version 1.2.3 of the plugin ships two skills and two subagents. `backtesting-frameworks` tabulates
five backtesting biases with their mitigations — look-ahead against point-in-time data,
survivorship against delisted securities, overfitting against out-of-sample testing, selection
against pre-registration, transaction against realistic cost models — and diagrams walk-forward
analysis over rolling train/test windows. `risk-metrics-calculation` groups metrics into
volatility (standard deviation, beta), tail risk (VaR, CVaR), drawdown (max drawdown, Calmar) and
risk-adjusted (Sharpe, Sortino), and warns against relying on VaR alone or assuming normal
returns.

Each skill uses progressive disclosure: a 2–3.5 KB `SKILL.md` navigation tier over a
`references/details.md` of about 18 KB (backtesting) and 17 KB (risk metrics) holding worked
implementation patterns. The `quant-analyst` subagent specifies pandas/numpy/scipy, vectorized
strategy implementation, backtests with transaction costs and slippage, out-of-sample testing and
realistic assumptions about market microstructure; `risk-manager` covers R-multiples, position
limits, hedging, expectancy calculation and stop-losses. Separate `.claude-plugin/` and
`.codex-plugin/` manifests ship, and native plugin-install covers Codex, Cursor and Gemini as well
as Claude Code. Install with `/plugin marketplace add wshobson/agents`, then
`/plugin install quantitative-trading`.

The content is instructional prose with embedded Python examples — guidance for a model, not an
importable library, with no tests or runnable package in the plugin. It is the layer for reasoning
about a backtest rather than an engine that runs one, and the surface is small: two skills and two
subagents. While the parent repository commits daily, the `quantitative-trading` subpath was last
touched on 2026-05-29. The repository's 38,858 stars belong to the whole 91-plugin
claude-code-workflows marketplace, not to this plugin.

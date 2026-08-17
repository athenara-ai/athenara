---
id: openalgo
name: OpenAlgo
summary: A self-hosted algorithmic trading platform that puts one unified order API in front of dozens of mostly Indian broker plugins, and adds a Python strategy host, a no-code builder and an MCP server.
authors: [Rajandran R, Marketcalls]
origin: external
repo: https://github.com/marketcalls/openalgo
website: https://docs.openalgo.in
license: AGPL-3.0
components: [unified broker API, Python strategy host, no-code strategy builder, options analytics suite, MCP server]
tags: [broker-api, self-hosted, live-trading, mcp-server, strategy-hosting, india]
markets: [equities, crypto]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: basic
  programming: moderate
  setup: moderate
install:
  - git clone https://github.com/marketcalls/openalgo.git
  - pip install uv
entrypoint: "uv run app.py"
requires:
  - Broker account and API credentials
runtime: "python >= 3.12"
---

One self-hosted Flask and React instance carries four trading surfaces: a unified broker API at
`/api/v1/`; a Python strategy host at `/python` with an in-browser editor, IST start/stop
scheduling and process isolation; a drag-and-drop strategy builder at `/flow` with webhook
triggers; and an options analytics suite at `/tools`. An API Analyzer mode runs the same order flow
against sandbox capital — MARKET, LIMIT, SL and SL-M price types, configurable square-off schedules
— before anything reaches a broker. An MCP server ships in the code (`mcp/mcpserver.py`), which the
README describes as compatible with Claude Desktop, Cursor, Windsurf and ChatGPT; it is an
integration surface for agents rather than a packaged agent.

Broker coverage is the reason to adopt it, and the count depends on where you look: the README
prose says 34 plugins, its own section heading says 35, the documentation site says 35, and the
`broker/` directory in the code contains 36 plugin directories as of 2026-08-17 — the only figure
checked against the source. Coverage is overwhelmingly India-specific (Zerodha, Angel One, Upstox,
5paisa, Groww, Kotak Neo, Dhan and similar), with Delta Exchange the sole crypto-derivatives venue
and sandbox capital denominated in rupees.

The platform is AGPL-3.0: network copyleft, so anyone deploying a modified instance as a service
owes source to its users — a materially different obligation from the permissive licences of
comparable engines. The companion `openalgo` client library on PyPI lives in a separate repository
under MIT; the two licences do not transfer to each other. Development is busy — the hundred most
recent commits on `main` all fall in August 2026, with a 2.0.2.0 release on 2026-08-14 — against
272 open issues, and the README carries an explicit educational-purpose and risk disclaimer. The
install commands above are quoted from the README and were not executed here.

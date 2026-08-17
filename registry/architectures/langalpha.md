---
id: langalpha
name: LangAlpha
summary: A self-hostable LangGraph harness for investment research that runs agent-written Python against MCP financial-data servers in a sandbox, with parallel subagents and packaged research skills.
authors: [Ginlix AI]
origin: external
repo: https://github.com/ginlix-ai/LangAlpha
website: https://langalpha.ai
license: Apache-2.0
components: [subagents, MCP servers, sandbox, skill loader, provenance middleware]
tags: [llm-agent, langgraph, mcp, investment-research, agent-skills]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: moderate
  programming: moderate
  setup: moderate
install:
  - git clone https://github.com/ginlix-ai/langalpha.git
  - cd langalpha
  - make config
entrypoint: make up
requires:
  - Docker
implements: [planner-executor]
---

LangAlpha is a research harness rather than a trading system: it produces DCF and comps models,
initiating-coverage reports, earnings analysis, catalyst calendars and long/short pair ideas, and
routes no orders. Its distinguishing mechanism is programmatic tool calling — the model writes
Python that executes inside a sandbox and imports generated wrappers speaking JSON-RPC over stdio
to the repo's 11 bundled MCP servers (price data, fundamentals, macro, options, scraping, X and
four Yahoo Finance servers), so only the computed result returns to the context window instead of
the raw financial data. Work is spread over parallel subagents against persistent per-workspace
sandboxes, and a provenance middleware records every web search, page fetch, SEC filing,
market-data call, MCP invocation and workspace file read — including those made by background
subagents — emitting a `provenance` stream event per source that never enters the LLM context and
is rendered as a per-turn Sources panel.

Research workflows are packaged as skills: 33 SKILL.md files under `skills/`, each carrying Agent
Skills Spec YAML frontmatter, though the README still advertises 23 and several of the 33 (pdf,
docx, xlsx, ui-design, self-improve) are document or meta skills rather than financial research.
Provenance is declared in-file — the DCF skill's frontmatter states it is "Derived from
anthropics/financial-services-plugins (Apache-2.0). Modified for langalpha."

Self-hosting brings up PostgreSQL, Redis, backend and frontend with Docker alone and works without
a paid data key: Yahoo Finance is the keyless fallback tier (delayed quotes, no sub-hourly intraday
data, limited macro coverage) and a Docker sandbox substitutes when no `DAYTONA_API_KEY` is set.
Two advertised features are not part of that self-hosted set — price-triggered automations are
hosted-only during the beta, and all channel integrations (Slack, Discord, Feishu, Telegram) are
hosted-only. The project is young and concentrated: the repository was created 2026-01-18 and one
contributor holds roughly 1,592 of some 1,750 commits, so current velocity is high but the bus
factor is thin. Its own disclaimer states LangAlpha "is a research tool, not a financial advisor".

---
id: quantdinger
name: QuantDinger
summary: A self-hosted trading platform covering Python strategy authoring, server-side backtesting, and paper or live execution across crypto exchanges, IBKR and Alpaca.
authors: [Open Byte Inc]
origin: external
repo: https://github.com/OpenByteInc/QuantDinger
website: https://www.quantdinger.com
license: Apache-2.0
components: [strategy API, backtest engine, trading worker, scheduler, agent gateway, MCP server]
tags: [trading-platform, self-hosted, mcp, backtesting, live-trading]
markets: [multi-asset]
added: 2026-08-17
prerequisites:
  trading: advanced
  ai: basic
  programming: moderate
  setup: advanced
install:
  - 'curl -fsSL https://raw.githubusercontent.com/OpenByteInc/QuantDinger/main/install.sh | bash'
  - 'pip install "quantdinger-mcp==0.5.0"'
entrypoint: quantdinger-mcp
requires:
  - Docker
  - Exchange or broker credentials (Binance, OKX, Bitget, Bybit, Gate, HTX, IBKR, Alpaca)
---

QuantDinger is a self-hosted stack rather than a decision-making system: strategies are written in
Python against its Strategy API, backtested server-side, and executed in paper or live mode against
Binance, OKX, Bitget, Bybit, Gate, HTX, IBKR and Alpaca. A single backend image runs six distinct
processes — `migration`, `backend`, `trading-worker`, `scheduler-worker`, `celery-worker` and
`celery-beat` — with cache Redis and durable-job Redis kept as separate instances, so a deployment
is a multi-service operation even behind the one-line installer.

Agents reach it through a published MCP server, a thin tenant-scoped wrapper over the
`/api/agent/v1` Agent Gateway that lets clients such as Cursor, Claude Code and Codex call approved
tools without receiving broker credentials or administrator JWTs. Agent-initiated live trading is
paper-only by default and requires four conditions simultaneously: a token carrying trading scope,
`paper_only=false` on that token, `AGENT_LIVE_TRADING_ENABLED=true` on the server, and
operator-configured limits and allowlists.

Licensing is split, and this matters for commercial use: the backend and MCP server are Apache-2.0
per the repository's own LICENSE, but the Vue web frontend and the mobile client live in separate
repositories under a "QuantDinger Frontend Source-Available License Version 1.0" that permits only
non-commercial use — a commercial self-hoster cannot use the shipped web UI. A hosted SaaS runs
alongside the open code, commercial licences are sold separately, and the code licence grants no
trademark rights. Two further operational notes: the default admin credentials for a manual Docker
install remain `quantdinger`/`123456`, which the README itself flags as unsuitable for
internet-facing deployments, and the README's exchange signup table consists of disclosed referral
links, several routing through domains that are not the exchanges' own — the README tells users to
verify the destination before creating an account. The project ships a legal notice that its
backtests, simulated results and AI output do not guarantee future performance, and publishes no
returns figures.

Weigh the provenance against the adoption: 10,745 stars, but the repository was created in December
2025 and later transferred into the OpenByteInc organization, itself created in July 2026, and its
2,268 forks are an unusually high fraction of those stars.

---
id: tradememory-protocol
name: TradeMemory Protocol
summary: A Python memory and decision-audit layer for AI trading agents — outcome-weighted recall, a pre-trade legitimacy gate and a hash-chained audit ledger, exposed as MCP tools and a REST server.
authors: [Mnemox AI, zychenpeng]
origin: external
repo: https://github.com/mnemox-ai/tradememory-protocol
website: https://mnemox.ai/tradememory/
license: MIT
components: [five memory types, outcome-weighted recall, pre-trade legitimacy gate, SHA-256 audit chain, MCP server, FastAPI REST server]
tags: [agent-memory, mcp-server, audit-trail, decision-logging, agent-infrastructure]
markets: [multi-asset]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: moderate
  programming: moderate
  setup: basic
install:
  - pip install tradememory-protocol
  - claude mcp add tradememory -- uvx tradememory-protocol
entrypoint: "python -m tradememory"
runtime: "python >= 3.10"
---

TradeMemory stores what an agent did and why. Five memory types are recalled with weighting by
realized outcome; a five-factor legitimacy gate plus drawdown and losing-streak rails run before a
position is opened; and every Trading Decision Record is content-hashed and forward-chained as
`chained_hash = SHA256(prev_chained_hash || content_hash)`, with each UTC day summarised by a
Merkle root that chains across days — checkable through the `verify_audit_hash`,
`verify_audit_chain` and `get_daily_root` tools. Storage is a local single-tenant SQLite file and
nothing leaves the machine except an optional RFC 3161 timestamp call, disabled with
`TRADEMEMORY_TSA=off`. The server is registered in the official MCP registry, and the repository
also ships packaged agent skills under `.skills/`. Self-reported test counts across the README,
site and skill files disagree with each other; a fresh clone of `master` on 2026-08-17 contains
1,452 test functions across 81 files.

Its most unusual property is a `LIMITATIONS.md` that publishes the project's own failed validation
rather than hiding it: "Phase 5 rigorous validation: INVALID. 100 experiments (2 symbols x 1h x 50
grid strategies x 5 agents) showed that the CalibratedAgent skipped 97% of trades, so the apparent
drawdown reduction came from *not trading*, not from skill. 0/100 DSR PASS." The same file marks
the BOCPD detector and the DQS score as dead and puts the empirical basis at n=40 trades against a
target of n≥100. Performance figures quoted elsewhere in the repository are self-reported
simulation results over strategy and agent grids, not live trading, and the README's
claim of production use by traders and EA systems is self-reported and unverified.

The practical caveats are documented in the same place: no authentication, API keys, RBAC or rate
limiting; MetaTrader 5 as the only broker connector; and a storage layer mid-migration, with SQLite
as the production write path and a parallel PostgreSQL/Alembic setup not yet in production. One
contributor accounts for 366 of the 367 commits, and as of August 2026 the maintainer declares the
project "Feature-complete, in maintenance mode - bug and security reports are still reviewed; no
new features or hosted service are planned." Stars — 1,410 in under six months for an organisation
created in February 2026 — run well ahead of installs at roughly 890 PyPI downloads a month, so
weigh the latter. The maintainer separately sells a paid analysis of a customer's own trade
history, scoped to descriptive statistics with no signals or advice.

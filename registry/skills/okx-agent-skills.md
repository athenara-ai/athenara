---
id: okx-agent-skills
name: OKX Agent Skills
summary: OKX's official pack of eleven agent skills that place spot, swap, futures and options orders, run native OKX grid and DCA Martingale bots, and query market data through the okx CLI.
authors: [OKX]
origin: external
repo: https://github.com/okx/agent-skills
website: https://www.okx.com
license: MIT
targets: [claude-code, cursor, codex]
requires:
  - An OKX account with OAuth or API-key credentials (only the market-data skill runs without them)
  - The closed-source okx CLI, installed from npm as @okx_ai/okx-trade-cli
tags: [crypto-exchange, order-execution, grid-bots, market-data, okx]
markets: [crypto]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: basic
  programming: basic
  setup: moderate
---

The repository tree contains eleven skill directories, each with its own `SKILL.md`: okx-cex-auth,
okx-cex-market, okx-cex-trade, okx-cex-portfolio, okx-cex-bot, okx-cex-earn, okx-cex-smartmoney,
okx-cex-skill-mp, okx-sentiment-tracker, earn-hunter and okx-outcomes. Both READMEs undercount —
the root table lists nine and `skills/README.md` only five. The quant-relevant core is the trade
and bot pair: algo orders (TWAP, iceberg, conditional/OCO, trailing stop) and native OKX grid bots
(spot, USDT-margined, coin-margined) plus DCA Martingale bots, which the skill notes are "native
OKX server-side — they run on OKX and do not require a local process". The rest reaches into venue
products: Earn and Dual Investment yield scanning, a skills-marketplace installer, social
sentiment and trending coins, and prediction markets.

The skills are agent-runtime definitions rather than an MCP server. Frontmatter carries `name`, a
`description` that serves as the agent's routing trigger, `license`, and a
`metadata.agent.requires.bins: ["okx"]` block with a declarative npm install pinned to
`@okx_ai/okx-trade-cli@1.4.1`. In practice: `npm install -g @okx_ai/okx-trade-cli`, then
authenticate by OAuth through the okx-cex-auth skill or write an API-key profile to
`~/.okx/config.toml` with `okx config init`. Only okx-cex-market is marked as needing no auth, and
the skills instruct agents to "NEVER accept credentials in chat". Documented commands can lag the
tool — the skills pin 1.4.1 while npm's latest is 1.4.2 — so the shared preflight includes an
explicit version-drift warning path.

Two caveats matter before adopting it. First, the `okx` CLI that every skill depends on is closed
source: the npm package declares MIT but ships only a dist bundle with no `repository` field, and
no public source exists across the OKX org's 85 repositories. The skill markdown is open and
auditable; the binary that actually places orders is not. Second, this is single-venue vendor
tooling that requires an OKX account and live credentials, and the trade, bot and portfolio skills
move real money. The repository also mirrors a non-public internal source rather than being
developed in the open — the last commit reads "chore(skills): sync skills to v1.4.1 from
okx-trade-mcp", over eleven commits from a single listed contributor. One skill, okx-cex-smartmoney,
surfaces copy-trading leaderboards and consensus signals ranked by PnL, win rate and drawdown;
those are venue-supplied analytics whose underlying trader-performance figures cannot be verified
independently.

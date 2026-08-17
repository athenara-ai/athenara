---
id: himself65-finance-skills
name: finance-skills (himself65)
summary: A collection of 27 Agent-Skills-standard finance skills whose market-analysis group covers SEPA/VCP swing entries, pair-trading correlation, liquidity and options payoff, plus data connectors.
authors: [Alex Yang]
origin: external
repo: https://github.com/himself65/finance-skills
website: https://skills.himself65.com
license: MIT
targets: [claude-code, generic]
requires:
  - Commercial API access for the fintel-data and funda-data skills (yfinance-data needs no key)
  - TradingView desktop app and login for the TradingView reader skill
tags: [market-analysis, sepa-strategy, pair-trading, liquidity, agent-skills]
markets: [equities, crypto]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: basic
  programming: basic
  setup: basic
---

The repository ships 27 `SKILL.md` files across six plugin groups registered in
`.claude-plugin/marketplace.json`: finance-market-analysis, finance-social-readers,
finance-data-providers, finance-startup-tools, finance-ui-tools and finance-skill-creator. The
market-analysis group holds eleven — company-valuation, earnings-preview, earnings-recap,
estimate-analysis, etf-premium, options-payoff, saas-valuation-compression, sepa-strategy,
stock-correlation, stock-liquidity and yfinance-data — and the trading-relevant subset is smaller
still: sepa-strategy encodes Mark Minervini's Specific Entry Point Analysis (bullish MA stacking
with price above the 50, 150 and 200-day averages, 200MA slope, 52-week price position, volume
ratio, quarterly EPS acceleration, RS rating against the S&P 500, and VCP, cup-with-handle,
flat-base, bull-flag and high-tight-flag pattern recognition with risk-based position sizing),
stock-correlation surfaces pair-trading candidates, stock-liquidity computes spreads, volume
profiles, market impact and the Amihud ratio, options-payoff renders payoff diagrams, and the
hyperliquid reader includes a cross-venue funding-rate arbitrage screen. The other groups — social
readers, startup analysis, generative UI, skill creator — are not trading tools at all.

It follows the Agent Skills open standard and installs through the vercel-labs CLIs rather than
being Claude-only: `npx plugins add himself65/finance-skills` installs plugin groups
interactively (`--yes` takes all of them), `npx skills add himself65/finance-skills --skill
yfinance-data` installs a single skill, and `-a <agent-name>` targets another agent. Two skills
ship executable opencli plugin code with test directories — hyperliquid (perp and spot mids,
funding, order book and candles through the public info API) and tradingview. Data access spans
keyless and commercial sources: yfinance-data needs no key, while fintel-data (short interest,
borrow rates, fails-to-deliver, 13F and insider transactions) and funda-data (an MCP server plus a
REST API with 60+ endpoints) are commercial products.

Read the pack as vendor-affiliated rather than neutral. The README's second content block is a
banner for Funda AI, the commercial product of @fundamental-bottom — the organization listed as
the author's own company — and the shipped funda-data skill is a connector to it; the sponsorship
is disclosed, but one of the data paths leads to the maintainer's employer. Inside the skills,
sepa-strategy's documentation asserts a win rate for the methodology with no citation, which is a
self-reported claim rather than a measured one. Several data-provider skills lean on third-party
reading tools (opencli, tdl, the TradingView desktop app driven over CDP) whose terms-of-service
posture the user inherits. Development is active — release v10.0.0 on 2026-08-15, with 3,174 stars
and 368 forks as of 2026-08-17 — but it is effectively a single-maintainer project, and the
release cadence is fast enough (v10.0.0 within five months of the March 2026 start) that anything
depending on specific skill contents should pin a commit.

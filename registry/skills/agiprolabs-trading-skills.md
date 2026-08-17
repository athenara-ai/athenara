---
id: agiprolabs-trading-skills
name: Claude Trading Skills (AGIPro)
summary: A collection of 67 crypto/DeFi-first agent skills spanning market-data APIs, Solana on-chain analysis, technical analysis, backtesting, statistics, risk management, execution and tax compliance.
authors: [AGIPro]
origin: external
repo: https://github.com/agiprolabs/claude-trading-skills
license: MIT
targets: [claude-code, generic]
runtime: claude-code >= 1.0.33
tags: [claude-skills, defi, solana, backtesting, walk-forward-validation]
markets: [crypto]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: basic
  programming: moderate
  setup: basic
---

The pack contains 67 skill directories, each verified to hold a `SKILL.md`; the repo documents
every skill as also shipping code examples, use cases and a `references/` folder. The README groups
them into a table of 15 categories covering market
data and APIs, Solana infrastructure, on-chain analysis, technical analysis, backtesting and
strategy, portfolio and risk, DeFi, statistical methods, ML for trading, execution, visualization,
market microstructure, quant finance, prediction markets, and tax/accounting/compliance. Some of
the methodology is substantive: `walk-forward-validation` opens by explaining why standard k-fold
cross-validation fails on financial time series — lookahead bias, autocorrelation, regime
dependence, label overlap — then covers rolling and expanding windows, purged cross-validation,
combinatorial purged cross-validation and overfit-detection metrics. `pumpfun-mechanics` is
analytical rather than promotional, documenting the virtual constant-product bonding curve and its
spot-price math. Install as a Claude Code plugin with
`/plugin marketplace add agiprolabs/claude-trading-skills`, then
`/plugin install trading-skills@agiprolabs-claude-trading-skills`.

Positioning is "Crypto/DeFi-first. Extensible to all of quant finance," and the weighting shows: a
large share of the pack is Solana-specific infrastructure (jito-bundles, shredstream,
yellowstone-grpc, solana-rpc, solana-tx-building, raptor-dex, pumpfun-mechanics) and seven skills
are US-centric tax and compliance tooling, while the README leaves equities, options and futures
coverage as an extension exercise. The README carries an explicit disclaimer: "This is an analysis
and research toolkit. Nothing produced by these skills constitutes financial advice. Always do
your own research."

The skills are markdown instructions with embedded code snippets, not executable packages with a
test-verified API surface; the README's "production-ready code" and "tested patterns" claims are
self-reported. The project is effectively single-author — the owner account holds 11 commits and
one outside contributor a single commit — and that account is a personal GitHub user with no name,
bio or company set. The trade name AGIPro appears only in `LICENSE.md`, the citation block and the
marketplace manifest, so the organization behind the work is not independently verifiable. The
repository has been dormant since 2026-06-24. One internal inconsistency to note: the README's
prose claims 17 categories while its own table enumerates 15; the count of 67 skills is exact and
verified.

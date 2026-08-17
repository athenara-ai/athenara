---
id: jkp-global-factor-data
name: JKP Global Factor Data
summary: "Jensen, Kelly and Pedersen's global factor dataset: 153 firm characteristics across 13 themes for 93 countries and 4 regions, published as downloadable factor and portfolio return series."
authors: [Theis Ingerslev Jensen, Bryan T. Kelly, Lasse Heje Pedersen, bkelly-lab]
origin: external
repo: https://github.com/bkelly-lab/jkp-data
website: https://jkpfactors.com/data
license: CC-BY-NC-4.0 (data); MIT (pipeline code)
access: open
source: WRDS — CRSP, Compustat and IBES — transformed by the open jkp-data pipeline
coverage:
  assets: 153 firm characteristics across 13 themes, for 93 countries and 4 regions
  start: 1926-01-31
  end: 2025-12-31
  frequency: monthly and daily
formats: [csv]
size: Individual factor zips are tens of kilobytes; the gated CTF dataset is roughly 1.1 GB of Parquet
tags: [factor-models, firm-characteristics, asset-pricing, global-equities, replication]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: none
  programming: moderate
  setup: moderate
---

This is the dataset behind Jensen, Kelly and Pedersen's *Is There a Replication Crisis in Finance?*
(*Journal of Finance* 78(5):2465–2518, 2023). It supplies characteristic-managed long-short factor
returns and the underlying sorted portfolios — 153 characteristics grouped into 13 themes, for 93
countries and 4 regions per the site — at monthly and daily frequency, in capped value-weighted,
value-weighted and equal-weighted variants across all-stock, mega, large, small, micro and nano-cap
universes, with industry returns (GICS and Fama-French 49) and NYSE size cutoffs alongside. The
machine-readable availability manifest lists 102 country/region keys for factors, because it also
carries aggregates such as world, developed and emerging. Coverage dates above are for the US
market factor series.

Access is two-tier and the distinction matters. Factor returns, sorted portfolios, industry returns
and cutoff files download from a public S3 bucket with one unauthenticated GET and no registration.
Stock-level firm characteristics do not: building those requires the open jkp-data pipeline plus a
WRDS subscription with CRSP and Compustat entitlements, and the README is explicit that the authors
do not distribute WRDS, CRSP, Compustat or IBES data, pointing non-subscribers to the precomputed
factor portfolios instead. One gotcha: download URLs embed literal square brackets that must be
percent-encoded, and a malformed request returns HTTP 403 from S3 rather than 404.

**License:** the split is real. The pipeline code is MIT, but the data is CC BY-NC 4.0 — commercial
use of the distributed series is not permitted. The site also runs a Common Task Framework in which
entrants submit portfolio-construction models scored on Sharpe ratio, return, volatility and
maximum drawdown over a 1990–2023 test period, with a public leaderboard of completed external
submissions; those are harness backtest figures rather than live trading results, and the CTF
tables sit behind the same WRDS requirement.

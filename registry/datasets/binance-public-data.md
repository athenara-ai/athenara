---
id: binance-public-data
name: Binance Public Data
summary: Binance's official archive of free, unauthenticated historical market data — daily and monthly ZIPs of klines, trades and aggregate trades for spot and futures across 3,695 spot symbols.
authors: [Binance]
origin: external
repo: https://github.com/binance/binance-public-data
website: https://data.binance.vision/
license: unknown
access: open
source: Archived output of Binance's own REST market-data endpoints
coverage:
  assets: 3,695 spot symbols carrying monthly kline archives, plus USD-M and COIN-M futures and options
  frequency: klines from 1s to 1mo, plus trades and aggregate trades
formats: [zip]
size: Three top-level trees (spot, futures, option), served as per-symbol daily and monthly ZIPs
tags: [market-data, ohlcv, tick-data, crypto-exchange, historical-data]
markets: [crypto]
added: 2026-08-17
prerequisites:
  trading: basic
  ai: none
  programming: basic
  setup: basic
---

Every file is a plain HTTPS GET from data.binance.vision with no account and no API key — a bare
`curl` or `wget` against a path like `data/spot/monthly/klines/BTCUSDT/1d/…` — and the whole bucket
can be enumerated without auth through its public S3 listing API. Each ZIP ships a sibling
`.CHECKSUM` file for `sha256sum -c`. The companion repository, published by the verified `binance`
GitHub organization, documents the file layout and ships Python and shell downloaders for klines,
trades and aggregate trades.

**License:** the data carries no license or terms anywhere. The repository has no LICENSE file (the
GitHub API reports `license: null`), data.binance.vision publishes no terms or disclaimer page, and
the only statement of any kind is a bare "MIT" line at the end of the README — an unbacked claim in
a repository that contains nothing but download scripts and format documentation. Do not treat the
market data as MIT-licensed; what Binance's general Terms of Use permit for redistribution or
commercial use is not stated anywhere on the archive.

Two things will bite a naive loader. SPOT timestamps are in microseconds from 1 January 2025 onward
and milliseconds before it, so one parser across that boundary silently misreads dates. And the
README warns that archived files may be updated later to correct discovered issues, with a
changelog of past retroactive corrections — a backtest is not guaranteed to be byte-for-byte
reproducible over time. Note also that the documentation repository has been dormant since January
2025 while the archive itself is updated daily; the repo's staleness does not imply stale data.

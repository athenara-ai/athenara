---
id: hyperliquid-l4-order-book
name: Hyperliquid L4 Order Book
summary: A 195.3 GB Zenodo release of level-4 order flow from the Hyperliquid perpetual futures DEX — including rejected orders for BTC, ETH and SOL, book diffs, and trades across 250+ contracts.
authors: [Jakob Albers, Mihai Cucuringu, Sam Howison, Alexander Y. Shestopaloff]
origin: external
website: https://zenodo.org/records/18184441
license: CC-BY-4.0
access: open
source: Hyperliquid decentralised perpetual futures exchange
coverage:
  assets: Order statuses and book diffs for BTC, ETH and SOL (December 2025); trades across 250+ perpetual contracts (October 2025 – January 2026)
  frequency: event-based, nanosecond timestamps
formats: [binary, csv]
size: 195.3 GB across 15 files, largest single archive 49.6 GB
tags: [order-book, order-flow, market-microstructure, perpetual-futures, high-frequency]
markets: [crypto]
added: 2026-08-17
prerequisites:
  trading: advanced
  ai: none
  programming: advanced
  setup: advanced
---

Three streams collected from the Hyperliquid decentralised perpetual futures exchange by Jakob
Albers (Oxford), with co-authors at UCLA, Oxford and Queen Mary University of London: order
statuses covering the full order lifecycle for BTC, ETH and SOL over December 2025; raw book
diffs — every visible change to the limit order book — for the same assets and month; and trades
across 250+ perpetual contracts from October 2025 to January 2026. Order status data runs to
roughly 880 million records per day across 744 hourly files for December 2025, and the README
describes the inclusion of rejected orders as "data typically unavailable from any exchange".

Working with it takes planning. The deposit is 195.3 GB across 15 files with single archives up to
49.6 GB, so pulling individual hours beats pulling whole tarballs. Order statuses are a custom
fixed 54-byte packed little-endian C struct concatenated without delimiters, and the bundled
`mapdir` lookup tables are required to decode statuses, order types, time-in-force and user
addresses — the reader and the lookup tables are not optional. The included `read_data.py` needs
only NumPy and pandas on Python ≥ 3.9 and exposes `read_orders`, `read_book_diffs` and
`read_trades` returning DataFrames, with `SCHEMA.md` documenting the fields.

Scope and gaps are worth stating plainly. This is a single venue over a short window, and the trade
stream has documented gaps — 2 missing hours in October 2025, 10 in November and 1 in January —
while the December order and book-diff data is complete. It is a static archival deposit at version
1.0 rather than a live feed, published under CC BY 4.0, so attribution is required and commercial
use is permitted.

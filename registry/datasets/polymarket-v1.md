---
id: polymarket-v1
name: Polymarket-v1
summary: The complete on-chain trade tape and contract lifecycle for Polymarket v1 on Polygon — 1.20 billion maker-taker fills plus cleaned analysis layers and CTF lifecycle events, in Parquet.
authors: [Boka Qin, Rui Yang]
origin: external
website: https://huggingface.co/datasets/TimeSeventeen/Polymarket-v1
license: CC-BY-4.0
access: open
source: Polygon on-chain event logs from Polymarket's first-generation CTF Exchange contract and the Gnosis Conditional Tokens Framework contract
coverage:
  assets: Polymarket v1 prediction markets
  start: 2022-11-21
  end: 2026-04-28
  frequency: event-based, one row per matched fill
formats: [parquet]
size: 1.20B fills in the raw tape; ~52.7 GB of Parquet across four configs
tags: [prediction-markets, on-chain, order-flow, market-microstructure, polygon]
markets: [prediction-markets]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: none
  programming: advanced
  setup: moderate
---

Four layers cover the full Polymarket v1 contract lifecycle from 2022-11-21 to 2026-04-28:
`OrderFilled/`, the raw on-chain trade tape (13 columns); `daily_aligned/`, cleaned Standard Binary
markets (24 columns); `daily_aligned_multi/`, cleaned Neg Risk multi-outcome markets (25 columns);
and `CTF/`, the Conditional Tokens Framework lifecycle events — condition preparation, position
splits and merges, resolution and payout redemption (5 to 8 columns per table). Each fill carries
an execution price in USDC.e and a `taker_direction` field described as ground-truth direction
from the settlement layer rather than a tick-rule or quote-rule inference, which is what makes
the data usable for testing trade-classification methods instead of assuming one.

The card warns explicitly before any volume computation: `OrderFilled/` is the nominal raw tape and
can include platform relayer and router records, while `daily_aligned/` and `daily_aligned_multi/`
are the cleaned layers with relayers removed — and the two cleaned layers must not be pooled
without checking `neg_risk`. The cleaned layers are subsets of the tape, so the four configs'
row counts cannot be added together; the trade tape itself is 1,201,580,990 fills, a figure the
README and the Hugging Face datasets-server state identically. That server reports 2,786,380,324
rows and ~52.7 GB of Parquet across all four configs. At this scale the card recommends streaming
for row-level inspection and DuckDB or other columnar scans for aggregates, not full in-memory
loads.

The CC-BY-4.0 license is declared in the Hugging Face frontmatter and restated in the README, but
there is no LICENSE file in the repository — the only non-Parquet files are `.gitattributes` and
`README.md`. The card also disclaims any affiliation with or endorsement by Polymarket and provides
the data as is. A companion arXiv preprint, *Polymarket-v1 Database*
([arXiv:2606.04217](https://arxiv.org/abs/2606.04217)), has no peer-reviewed venue; its authors
report 1.20 billion trade records across 1.30 million markets and $61 billion in nominal volume,
and find that standard trade-classification methods achieve near-random accuracy in prediction
markets. Its abstract gives a wider November 2021 start date than the dataset card, whose
2022-11-21 matches the earliest `OrderFilled` partition file.

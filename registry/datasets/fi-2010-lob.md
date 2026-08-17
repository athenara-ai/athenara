---
id: fi-2010-lob
name: FI-2010 Limit Order Book Benchmark Dataset
summary: "The first public benchmark dataset of high-frequency limit order book data: about 4,000,000 samples from five NASDAQ Nordic stocks over ten days, with 144 features and mid-price labels."
authors: [Adamantios Ntakaris, Martin Magris, Juho Kanniainen, Moncef Gabbouj, Alexandros Iosifidis, Tampere University of Technology, BigDataFinance]
origin: external
website: https://etsin.fairdata.fi/dataset/73eb48d7-4dbc-4a10-a52a-da745b47a649
license: CC-BY-4.0
access: open
source: NASDAQ Nordic limit order book message data
coverage:
  assets: Five NASDAQ Nordic stocks over ten consecutive days
  frequency: event-based limit order book messages
size: ~4,000,000 time-series samples in a single 1.86 GB BenchmarkDatasets.zip
tags: [limit-order-book, market-microstructure, high-frequency, benchmark, mid-price-prediction]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: advanced
  ai: moderate
  programming: moderate
  setup: moderate
---

FI-2010 is the reference benchmark for predicting mid-price movement from limit order book
microstructure. Each record carries 144 features and five classification labels, shipped in three
normalizations (z-score, min-max, decimal precision), with variants that include or exclude auction
periods and nine folds of a day-based anchored cross-validation protocol the authors specify so
results across papers stay comparable. The paper calls it "the first publicly available benchmark
dataset of high-frequency limit order markets for mid-price prediction"
([arXiv:1705.03233](https://arxiv.org/abs/1705.03233)); it appeared in the *Journal of Forecasting*
37(8):852–866 (2018).

Getting the canonical copy is awkward. The Fairdata deposit is a single 1.86 GB
`BenchmarkDatasets.zip`, and its download service requires a token issued through the Etsin web
interface, so there is no documented stable direct-file URL for a headless script. In practice a
headless workflow falls back to a GitHub mirror — the DeepLOB reference implementation carries a
56 MB `data.zip` — but those downstream repositories ship no license file of their own. The CC BY 4.0
term is the depositor's declaration in the Fairdata record; because the deposit is a zip rather
than a code repository, there is no LICENSE file to read.

The dataset is frozen rather than maintained: its metadata was last modified in 2017 and the file
was frozen in 2018. It nonetheless remains the common baseline in deep-learning order book work,
with Crossref counting 116 works that cite the paper. One naming note — "FI-2010" is the
literature's shorthand, not the repository's; the Fairdata record is titled *Benchmark Dataset for
Mid-Price Forecasting of Limit Order Book Data with Machine Learning Methods*.

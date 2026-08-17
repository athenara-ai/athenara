---
id: stocknet-dataset
name: StockNet dataset
summary: Two years of tweets and Yahoo Finance prices for 88 high-cap stocks across 9 sectors, released with Xu and Cohen's ACL 2018 paper and the source of the reused ACL18 stock-movement task.
authors: [Yumo Xu, Shay B. Cohen, University of Edinburgh]
origin: external
repo: https://github.com/yumoxu/stocknet-dataset
website: https://aclanthology.org/P18-1183/
license: MIT
access: open
source: Tweets from Twitter and daily prices from Yahoo Finance, collected by the authors
coverage:
  assets: 88 high-cap US stocks across 9 sectors; tweets for 87 of them
  start: 2014-01-01
  end: 2016-01-01
  frequency: daily
formats: [csv, txt, json]
size: 55,141 files, ~460 MB
tags: [stock-movement-prediction, tweets, social-sentiment, benchmark, price-history]
markets: [equities]
added: 2026-08-17
paper: [stocknet-paper]
prerequisites:
  trading: basic
  ai: moderate
  programming: basic
  setup: basic
---

StockNet's defined task is binary next-day movement prediction — Rise or Fall — from text plus
price history, and the repository ships both halves aligned. `./price` holds raw Yahoo Finance CSVs
(`Date,Open,High,Low,Close,Adj Close,Volume`) and a preprocessed form giving date, movement
percent and normalized open, high, low, close and volume; `./tweet` holds raw Twitter JSON and a
preprocessed form reduced to `text`, `user_id_str` and `created_at`. The universe is all 8 stocks
in the Conglomerates sector plus the top 10 by capital size in each of the other 8 sectors. Price
data covers all 88 tickers, but tweet data covers only 87 — both `tweet/raw` and
`tweet/preprocessed` have 87 stock subdirectories against 88 price files.

The README's 2014-01-01 to 2016-01-01 window describes the paper's experimental split rather than
the file contents: the shipped raw price CSVs run wider (AAPL spans 2012-09-04 to 2017-09-01) and
AAPL's raw tweets continue to 2016-03-31. There is no installer — a `git clone` or direct raw
fetches over HTTPS, no authentication. The derived task is also mirrored on Hugging Face as
`TheFinAI/flare-sm-acl`, which reports 27,056 rows; PIXIU's own README lists the same ACL18
stock-movement task at 27,053 samples. The Hugging Face mirror states no license.

The repository is dormant — the last commit to master is dated 2018-11-02 and it is not archived —
which is expected for a frozen benchmark corpus but means the data will not be extended. The MIT
LICENSE (Copyright (c) 2018 Yumo Xu) is the authors' grant over their compiled collection; the repo
redistributes full raw Twitter JSON and carries no separate data-terms file addressing platform
terms for that content. The accompanying paper is *Stock Movement Prediction from Tweets and
Historical Prices*, ACL 2018, pages 1970–1979
([P18-1183](https://aclanthology.org/P18-1183/)).

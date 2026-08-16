---
id: fnspid
name: FNSPID
summary: A time-series dataset pairing 29.7 million stock price records with 15.7 million financial news articles for 4,775 companies in the S&P 500 universe, 1999–2023.
authors: [Zihan Dong, Xinyu Fan, Zhiyuan Peng]
origin: external
repo: https://github.com/Zdong104/FNSPID_Financial_News_Dataset
website: https://huggingface.co/datasets/Zihan1004/FNSPID
license: CC-BY-NC-4.0
access: open
source: Four financial news websites, aligned to stock price series
coverage:
  assets: 4,775 companies (S&P 500 universe), 1999–2023
  frequency: daily prices with timestamped news
size: 29.7M price records + 15.7M news records (~30 GB)
tags: [financial-news, stock-prices, time-series, sentiment, sp500]
markets: [equities]
added: 2026-08-15
prerequisites:
  trading: basic
  ai: basic
  programming: moderate
  setup: basic
---

FNSPID (Financial News and Stock Price Integration Dataset) aligns news articles to price series
by timestamp and ticker, with per-article metadata including publication date, title, stock
symbol, URL, publisher, and author, plus multiple generated summaries per article.

The authors report that dataset scale improves prediction accuracy and that adding sentiment
scores gives modest gains for transformer models; they publish a reproducible pipeline for
extending the dataset. Paper: [arXiv:2402.06698](https://arxiv.org/abs/2402.06698).

**License note:** CC BY-NC 4.0 on the Hugging Face card — commercial use requires permission. The
GitHub repository carries no explicit license.

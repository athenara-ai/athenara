---
id: edgar-corpus
name: EDGAR-CORPUS
summary: A corpus of 220,375 SEC 10-K annual reports from 1993 to 2020, split into their individual item sections and released as JSON.
authors: [Lefteris Loukas, Manos Fergadiotis, Ion Androutsopoulos, Prodromos Malakasiotis]
origin: external
website: https://huggingface.co/datasets/eloukas/edgar-corpus
license: Apache-2.0
access: open
source: SEC EDGAR
coverage:
  assets: All US publicly traded companies, 220,375 10-K filings, 1993–2020
  frequency: annual
size: ~40.7 GB (176,289 train / 22,050 validation / 22,036 test in the full config)
formats: [json]
tags: [sec-filings, 10-k, edgar, corpus, pretraining]
markets: [equities]
added: 2026-08-15
prerequisites:
  trading: basic
  ai: basic
  programming: moderate
  setup: basic
---

EDGAR-CORPUS collects more than 25 years of annual reports parsed into the standard 10-K item
sections (Items 1–15, including 1A risk factors, 7A market risk, 9A controls), so individual
sections can be used in isolation — risk factors for risk analysis, MD&A for fundamental research.
The data is unannotated raw text intended as a pretraining and retrieval corpus.

Companion releases: EDGAR-W2V (Word2Vec embeddings trained on the corpus, which outperform generic
embeddings on financial tasks) and EDGAR-CRAWLER, an open-source tool for collecting and
processing future filings. Published at the ECONLP 2021 workshop
([arXiv:2109.14394](https://arxiv.org/abs/2109.14394)).

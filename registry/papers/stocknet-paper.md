---
id: stocknet-paper
name: Stock Movement Prediction from Tweets and Historical Prices (StockNet)
summary: Introduces a deep generative model that predicts stock movement from tweets and prices jointly, together with the 88-stock StockNet dataset the authors collected for it.
authors: [Yumo Xu, Shay B. Cohen, University of Edinburgh]
origin: external
repo: https://github.com/yumoxu/stocknet-dataset
website: https://aclanthology.org/P18-1183/
license: MIT
year: 2018
venue: ACL 2018
doi: 10.18653/v1/P18-1183
tags: [movement-prediction, social-media, variational-inference, dataset, sentiment]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: basic
  ai: advanced
  programming: none
  setup: none
uses_dataset: [stocknet-dataset]
---

The model is a deep generative architecture that exploits text and price signals jointly, built on
recurrent continuous latent variables with neural variational inference and a hybrid objective with
a temporal auxiliary. The authors collected the dataset it is evaluated on: two years of price
movements, 1 January 2014 to 1 January 2016, for 88 stocks — all eight in the Conglomerates sector
plus the ten largest by capital size in each of eight other sectors — with tweets from Twitter and
prices from Yahoo Finance. Coverage is asymmetric: 88 tickers have preprocessed price files but only
87 have tweet directories, GMRE being the gap.

Both repositories have been dormant since November 2018. The reference implementation lives
separately in yumoxu/stocknet-code, which selects among the paper's four variants through a config
file but targets Python 2.7.11 and TensorFlow 1.4.0 — a historical artifact rather than runnable
code. The data clones directly under MIT, though the tweet content it redistributes remains subject
to Twitter/X terms.

The dataset outlived the model. It is indexed as the ACL18 stock-movement task in PIXIU/FLARE and in
FinBen, and mirrored on Hugging Face as TheFinAI/flare-sm-acl, where the task is framed as
predicting "Rise" or "Fall" from price history plus social-media context; that mirror's card
declares no license of its own. Sample counts differ between those sources — PIXIU's README lists
27,053, the Hugging Face viewer 27,056 rows — so cite whichever with its source. The paper itself is
open access on the [ACL Anthology](https://aclanthology.org/P18-1183/) under CC BY 4.0.

---
id: cryptotrade-paper
name: "CryptoTrade: A Reflective LLM-based Agent to Guide Zero-shot Cryptocurrency Trading"
summary: An LLM trading agent that fuses on-chain and off-chain signals with a reflection step to make daily cryptocurrency trading decisions.
authors: [Yuan Li, Bingqiao Luo, Qian Wang, Nuo Chen, Xu Liu, Bingsheng He, Xtra-Computing (NUS)]
origin: external
repo: https://github.com/Xtra-Computing/CryptoTrade
license: CC-BY-NC-SA-4.0
year: 2024
venue: EMNLP 2024 (main conference)
arxiv: "2407.09546"
tags: [llm-agent, crypto, on-chain-data, reflection, zero-shot]
markets: [crypto]
added: 2026-08-17
prerequisites:
  trading: basic
  ai: moderate
  programming: none
  setup: none
builds_on: [buy-and-hold-baseline]
---

CryptoTrade combines on-chain statistics with off-chain price and news signals, and adds a
reflective step that refines each day's decision by analysing the outcomes of prior ones. Prices,
volumes and market caps come from CoinMarketCap, daily transactions, active wallets and gas prices
from the Dune database, and news from the Gnews API over Google News filtered to Bloomberg, Yahoo
Finance and crypto.news. Evaluation covers BTC, ETH and SOL across three 2023 regimes — bear, side-
ways and bull — against buy and hold, SMA, SLMA, MACD and Bollinger Bands plus five deep
time-series forecasters, scored on return, Sharpe ratio, and daily-return mean and standard
deviation.

Published at EMNLP 2024 (main conference, pp. 1094-1106), with code and data shipped together: the
per-coin price CSVs, on-chain transaction statistics and one news JSON per day are committed to the
repository, so `./run_agent.sh` reproduces the reported backtests with an OpenAI key and no
external fetching. There is no requirements.txt or setup.py — the README lists pinned versions
(openai 1.30.5, torch 2.3.0, transformers 4.30.2) to assemble by hand.

Two things to know before building on it. The whole repository, bundled data included, is CC
BY-NC-SA 4.0: non-commercial, share-alike, attribution required, so neither the code nor the
datasets may be used commercially — GitHub's detector reports only "NOASSERTION", but the LICENSE
file is the authority. And development stopped in December 2024; this is canonical for its EMNLP
result, not a maintained system. The arXiv version carries a different title and still advertises
an anonymous review link, so cite the ACL Anthology version and the repository above.

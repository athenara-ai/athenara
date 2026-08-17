---
id: cryptotrade
name: CryptoTrade
summary: An LLM cryptocurrency trading agent that combines on-chain statistics, news and price signals through specialist analyst prompts and a reflection step into one daily trade action.
authors: [Yuan Li, Bingqiao Luo, Qian Wang, Nuo Chen, Xu Liu, Bingsheng He, "Xtra Computing Group, National University of Singapore"]
origin: external
repo: https://github.com/Xtra-Computing/CryptoTrade
license: CC-BY-NC-SA-4.0
disclosure: fully-open
models: [gpt-3.5-turbo, gpt-4o, gpt-4-turbo]
tags: [llm-agent, on-chain-data, news-sentiment, reflection, research-code]
markets: [crypto]
added: 2026-08-17
prerequisites:
  trading: basic
  ai: moderate
  programming: moderate
  setup: moderate
entrypoint: "./run_agent.sh"
requires:
  - OpenAI API key
paper: [cryptotrade-paper]
---

CryptoTrade decomposes a day's decision into an on-chain analyst reading transaction statistics
(unique addresses, value transferred, gas used, successful versus total transactions, average gas
price), a news analyst reading headlines, and a reflection analyst that revisits the outcomes of
prior decisions; a trader agent then emits a single action between -1 and 1 against a
cash-plus-holdings portfolio. Price, transaction-statistic and news CSVs are committed in the
repository, so a run needs no data pipeline — only an OpenAI key. `run_agent.sh` reproduces the
paper's setup, running BTC, ETH and SOL across three fixed 2023 windows chosen as bear, sideways
and bull regimes, with SMA and MACD baselines in `run_baseline.py`.

Constraints worth knowing before building on it. The license is CC BY-NC-SA 4.0: non-commercial use
only, with ShareAlike obligations on derivatives — GitHub's license detector reports "Other" for
this repository, so read the LICENSE file rather than the sidebar. The repository is dormant, its
last commit dating to December 2024, and its model choices are pinned to that era — the CLI offers
only gpt-3.5-turbo, gpt-4o and gpt-4-turbo, and requirements pin `openai==1.30.5` — so running it
today will likely need model-name and SDK updates. The default branch is `master`, not `main`.

The evaluation windows are frozen in 2023 and the bundled news ends in January 2024, so results
cannot be refreshed without collecting new data. The `data/` directory also carries BNB and XRP
files, but the CLI exposes only ETH, BTC and SOL. Published at EMNLP 2024 (main conference):
[arXiv:2407.09546](https://arxiv.org/abs/2407.09546).

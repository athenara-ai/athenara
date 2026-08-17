---
id: finsaber
name: FINSABER
summary: A long-horizon backtesting benchmark that tests whether LLM investing agents, RL traders and classical strategies beat buy-and-hold on S&P 500 data from 2000 to 2025.
authors: [Weixian Waylon Li, Hyeonjun Kim, Mihai Cucuringu, Tiejun Ma]
origin: external
repo: https://github.com/waylonli/FINSABER
website: https://waylonli.github.io/FINSABER/
license: Apache-2.0
tasks: [stock-trading, backtesting]
tags: [benchmark, backtesting, llm-agent, evaluation, long-horizon]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: advanced
  programming: moderate
  setup: advanced
paper: [finsaber-paper]
builds_on: [finmem, finagent-paper, finrl, buy-and-hold-baseline]
---

FINSABER is a backtesting framework and a benchmark built on top of it, asking whether LLM-based
investing strategies hold up over decades rather than over a short window. It models the frictions
that decide that question: the default execution timing is `next_open` rather than the same day's
close, so same-day look-ahead bias is excluded, and the trade config exposes per-share commission,
minimum and maximum commission, slippage, a liquidity cap, and LLM cost accounted as a trade cost.
Strategies plug in through documented interfaces — a `TradingData` loader, a Backtrader
`BaseStrategy` subclass, or a `BaseStrategyIso` subclass with an `on_data` hook for LLM-style
agents — and each run emits its config, metrics, equity curve, trades, orders, rejected orders and
LLM costs as separate artifacts. Paper-specific FinMem, FinAgent, FinCon and FinRL integrations
ship alongside the core package, with buy-and-hold as the reference strategy.

The repository is split across two branches that are not interchangeable: `main` carries the
current framework paired with the FINSABER-V2-Data parquet release, while `reproduce` pins the
original v1.0 framework and the legacy FINSABER-reproduce dataset. Results from one should not be
attributed to the other. The primary dataset is a large download — 8.07 GB across 95 parquet files
and roughly 7.9 million rows, covering 839 S&P 500 symbols with daily OHLC and adjusted close for
2000–2025, news items from 2009 onward, and 10-K and 10-Q filing texts. Its licensing differs from
the code's: the repository is Apache-2.0, but the
[FINSABER-V2-Data card](https://huggingface.co/datasets/finsaber-team/FINSABER-V2-Data) declares
its license as "other" and places responsibility on the user for complying with the underlying
market, news and filing providers' terms. Only the legacy reproduce dataset is tagged Apache-2.0.

The paper appeared in the KDD '26 proceedings, confirmed through the publisher's own DOI
registration ([arXiv:2505.07078](https://arxiv.org/abs/2505.07078)). The further claim that it was
a Datasets and Benchmarks Track oral, and the accompanying selectivity figure, appear only in the
authors' own arXiv comment and README and are not independently verified here. The LICENSE file
retains the unfilled `Copyright [yyyy] [name of copyright owner]` template line from the Apache
appendix.

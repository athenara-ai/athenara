---
id: stockbench-paper
name: "StockBench: Can LLM Agents Trade Stocks Profitably In Real-world Markets?"
summary: Runs LLM agents as daily traders over 20 top-weighted Dow Jones stocks for 82 trading days in 2025, scored on return, drawdown and Sortino against a passive buy-and-hold baseline.
authors: [Yanxu Chen, Zijun Yao, Yantao Liu, Amy Xin, Jin Ye, Jianing Yu, Lei Hou, Juanzi Li]
origin: external
repo: https://github.com/ChenYXxxx/stockbench
website: https://stockbench.github.io/
license: Apache-2.0
year: 2025
venue: arXiv
arxiv: "2510.02209"
tags: [benchmark, llm-agent, evaluation, backtesting, news]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: basic
  programming: none
  setup: none
builds_on: [investorbench, finben, buy-and-hold-baseline]
---

Each model starts with $100,000 in cash and no holdings and makes daily decisions at market open
across the 20 highest-weighted Dow Jones constituents, from 3 March to 30 June 2025 — 82 trading
days. The daily prompt carries the agent's actions on held stocks over the past seven days, up to
five news articles from the previous 48 hours, and fundamentals such as market capitalisation, P/E
ratio, dividend yield and the 52-week range. Every agent runs three times under different seeds and
the average is reported. Scoring is on final return, maximum drawdown and Sortino ratio against a
passive equal-weight buy-and-hold portfolio held unchanged across the same window.

Read the paper's table rather than its abstract. The abstract states that most models struggle to
outperform buy-and-hold, while the body and results table of the same version report the opposite:
most of the thirteen tested models finish above the baseline's 0.4% return, and all of them post a
smaller maximum drawdown than it. An ablation on the best-scoring model shows its return falling as
news, and then fundamentals, are removed from the prompt.

The repository ships the evaluation data rather than fetching it — per-date parquet files with
SHA-256 checksums for the 20 targets plus SPY, alongside cached news, financials and indicator JSON
— so the paper's window can be rerun without a data vendor account, while extending it to other
periods or symbols needs Polygon and Finnhub keys plus an LLM key. The code has been dormant since
October 2025: the benchmark package has a single commit and every later one touches only the README.
The Apache-2.0 LICENSE is unmodified boilerplate with the copyright holder never filled in, and the
repository names no owning institution — the Tsinghua and BUPT affiliation comes from the paper.
Results rest on one 82-trading-day window in a mildly positive market, with no significance testing
across the three seeds, and the "contamination-free" property is a design argument about
post-cutoff data rather than a measurement, one that decays as newer models are evaluated.

---
id: stockbench
name: StockBench
summary: A frozen-window stock-trading benchmark in which LLM agents run a daily portfolio, analysis and trade loop over 20 DJIA constituents for 82 trading days of 2025.
authors: [Yanxu Chen, Zijun Yao, Yantao Liu, Amy Xin, Jin Ye, Jianing Yu, Lei Hou, Juanzi Li]
origin: external
repo: https://github.com/ChenYXxxx/stockbench
website: https://stockbench.github.io/
license: Apache-2.0
tasks: [stock-trading, decision-making]
metrics: [cumulative-return, max-drawdown, sortino-ratio]
tags: [benchmark, llm-agent, stock-trading, evaluation, backtesting]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: advanced
  programming: moderate
  setup: moderate
paper: [stockbench-paper]
builds_on: [buy-and-hold-baseline]
---

StockBench starts an agent with $100,000 in cash and no holdings and asks it to trade the top 20
Dow Jones Industrial Average constituents by weight over a fixed window — March 3 to June 30, 2025,
82 trading days. Each day the agent walks a multi-step loop of portfolio review, analysis and
trade, and the run is scored on cumulative return, maximum drawdown and Sortino ratio. The
comparison is explicit in the shipped config: a per-symbol buy-and-hold benchmark with SPY as the
reference series. A project leaderboard ranks 14 models on those three measures.

The evaluation window's data is committed in the repository under `storage/` — per-ticker parquet
price series, corporate actions, annual and quarterly financials, and cached news — so a default
run needs no market-data account. Polygon.io and Finnhub keys are required only to extend the
benchmark beyond the packaged months, and that third-party provenance is worth noting before
redistribution: the Apache-2.0 repository license covers the code, not the bundled market data,
news and fundamentals. The README's clone line is still an unfilled `<repository-url>` placeholder,
and the LICENSE appendix retains the Apache template copyright line.

The authors report that most models struggle to outperform the simple buy-and-hold baseline, and
that strong performance on static financial question answering does not carry over into effective
trading ([arXiv:2510.02209](https://arxiv.org/abs/2510.02209)). The work remains a preprint: there
is no peer-reviewed venue despite a later revision. Treat the contamination-free framing as the
authors' design intent for a window that postdated the training corpora of the models they tested,
not as a permanent property — models trained after mid-2025 erode it, and the frozen window cannot
be refreshed without new provider pulls, which need paid-tier Polygon and Finnhub keys for wider
coverage. The repository has been quiet since October 2025, with the last commits touching only the
README.

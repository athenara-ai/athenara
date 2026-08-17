---
id: livetradebench
name: LiveTradeBench
summary: A live forward-testing harness that runs LLM trading agents against streaming market data across US equities and Polymarket prediction markets, using a portfolio-allocation abstraction.
authors: [Haofei Yu, Fenghai Li, Jiaxuan You, ulab-uiuc (University of Illinois Urbana-Champaign)]
origin: external
repo: https://github.com/ulab-uiuc/live-trade-bench
license: PolyForm-Noncommercial-1.0.0
tasks: [stock-trading, prediction-market-trading, portfolio-allocation]
tags: [benchmark, llm-agent, live-trading, portfolio-allocation, prediction-markets]
markets: [multi-asset]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: advanced
  programming: moderate
  setup: moderate
---

LiveTradeBench evaluates forward rather than backward: agents hold a cash-and-position portfolio
and run repeated trading cycles against live data, which sidesteps the overfitting that backtests
invite. Two design choices distinguish it. First, the agent interface is portfolio allocation
across many assets, not a buy/sell call on one instrument. Second, it spans two market structures
with different dynamics — US equities and Polymarket prediction markets — so a strategy that suits
one is not automatically credited on the other. The data plumbing is named and real: a Yahoo
Finance stock fetcher, a Polymarket CLOB fetcher, news from NewsAPI and Finnhub, and Reddit through
PRAW. The repository is a self-hostable stack rather than a library alone, with a FastAPI backend,
a frontend, and demo scripts. Three mock modes — mock agent, mock fetcher, and both — let the
harness run offline with no LLM or market API keys, though real runs need model credentials.

The license is the constraint to read first. LiveTradeBench is released under the PolyForm
Noncommercial License 1.0.0, which permits noncommercial use only and adds a competition clause
withholding "the right to use this software in a way that competes with the licensor." A separate
`LICENSE.COMMERCIAL` file states that commercial use requires a license negotiated with the
authors. GitHub's license detector reports NOASSERTION for the repository; the PyPI metadata
records the PolyForm identifier directly.

The accompanying work is an arXiv preprint with no venue
([arXiv:2511.03628](https://arxiv.org/abs/2511.03628)); the authors report evaluating 21 LLMs over
50-day live periods and conclude that high scores on general benchmarks do not translate into
trading competence, with models displaying distinct risk preferences. Maintenance needs stating
precisely: default-branch commits stop at November 2025, while pushes continued into February 2026
on side branches, and the PyPI package sits at 0.0.1. Branches and an example script exist for
crypto and FX venues, but the README documents only equities and Polymarket — those are not shipped
features. The project's advertised leaderboard host, trade-bench.live, did not respond to
connection attempts when this entry was verified; that is a single observation, not evidence the
service has been retired.

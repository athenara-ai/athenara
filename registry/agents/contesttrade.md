---
id: contesttrade
name: ContestTrade
summary: A multi-agent stock-selection system where data agents distil market data into textual factors and belief-conditioned research agents produce proposals, with two contest rounds picking what survives.
authors: [FinStep-AI, Rui Sun, Li Zhao, Zuoyou Jiang, Bo Yang, Yuxiao Bai, Mengting Chen, Jing Li, Zuo Bai]
origin: external
repo: https://github.com/FinStep-AI/ContestTrade
website: https://arxiv.org/abs/2508.00554
license: Apache-2.0
disclosure: fully-open
status: experimental
tags: [multi-agent, llm, stock-selection, event-driven, research-reports]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: moderate
  programming: moderate
  setup: advanced
install:
  - git clone https://github.com/FinStep-AI/ContestTrade.git
  - conda create -n contesttrade python=3.10
  - pip install -r requirements.txt
entrypoint: "python -m cli.main run"
runtime: "python 3.10"
requires:
  - "FMP API key (US-market configuration)"
  - "Alpha Vantage API key (US-market configuration)"
  - "Polygon API key (US-market configuration)"
  - "an LLM endpoint"
implements: [multi-agent-debate]
---

ContestTrade runs a two-stage pipeline. Parallel Data Analysis Agents refine raw multi-source data
into structured "textual factors", and an internal contest builds a factor portfolio from them;
Research Agents, each conditioned on a distinct "Trading Belief", then produce proposals that a
second contest round synthesises into one allocation. Beliefs are plain text a user edits —
`contest_trade/config/belief_list.json` holds a JSON array of belief strings, and each belief
emits at most five signals. There is no execution layer: the output is signals and Markdown
research reports written to `contest_trade/agents_workspace/results`, not orders. A published
Docker image (`finstep/contesttrade:v2.0`) is an alternative to the clone-and-pip path.

The README states the project is intended for academic and educational purposes only, warns
explicitly about model hallucination and data inaccuracy, and publishes no performance figures of
its own. The backtest claims live only in the accompanying preprint,
[arXiv:2508.00554](https://arxiv.org/abs/2508.00554), submitted August 2025 and revised through a
fourth version in July 2026; the abstract page names no conference or journal, so the paper is
unrefereed and its reported improvement over benchmarks on post-2024 Chinese A-shares is
author-reported. Note also that the arXiv author list and the README's own BibTeX disagree on
order and membership — the arXiv page is the authoritative one, and is what this entry follows.

The code has been still since 22 December 2025, roughly eight months as of this entry, while the
paper kept being revised; issues continue to arrive without visible maintainer replies. Finished
roadmap items are the V1.1 data-provider refactor and CLI rework and V2.0 US-stock market access
with richer factor and signal sources; Hong Kong stocks, a visual backtesting interface and agent
scale-up remain unchecked. The English documentation is `README_en.md` — the repository's default
`README.md` is Chinese — and the Apache LICENSE appendix was left as the unfilled template, so it
names no copyright holder, though the grant itself is unaffected.

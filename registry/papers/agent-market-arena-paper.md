---
id: agent-market-arena-paper
name: "When Agents Trade: Live Multi-Market Trading Benchmark for LLM Agents (AMA)"
summary: A live benchmark that ran four LLM trading-agent architectures across five model backbones on two equities and two cryptocurrencies for two months of 2025, scored against buy-and-hold.
authors: [Lingfei Qian, Xueqing Peng, Yan Wang, Vincent Jim Zhang, Huan He, Zehan Li, Hanley Smith, Yi Han, Yueru He, Haohang Li, Yupeng Cao, Yangyang Yu, Alejandro Lopez-Lira, Peng Lu, Jian-Yun Nie, Guojun Xiong, Jimin Huang, Sophia Ananiadou, The Fin AI]
origin: external
repo: https://github.com/The-FinAI/Agent_Market_Arena
website: https://huggingface.co/spaces/TheFinAI/Agent-Market-Arena
year: 2025
venue: arXiv
arxiv: "2510.11695"
tags: [benchmark, llm-agent, live-trading, evaluation, multi-market]
markets: [equities, crypto]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: moderate
  programming: none
  setup: none
builds_on: [investorbench, tradingagents, buy-and-hold-baseline]
---

AMA ran four agent architectures — InvestorAgent from InvestorBench, TradeAgent from TradingAgents,
HedgeFundAgent and DeepFundAgent — across GPT-4o, GPT-4.1, Claude-3.5-haiku, Claude-sonnet-4 and
Gemini-2.0-flash, taking one decision per agent per day on TSLA, BMRN, BTC and ETH from 1 August to
30 September 2025, with a majority-vote ensemble alongside them. Market context is aggregated from
web search, Finnhub, NewsData, yfinance, CryptoNews, Binance, Twitter and Reddit, and two domain
experts verified the news summaries over 20 sampled days of BTC and TSLA coverage. It comes from
The Fin AI, the group behind PIXIU/FLARE and FinBen.

The headline figures need their baseline beside them: the paper reports a Sharpe of 6.47 for
InvestorAgent on TSLA and, for plain buy-and-hold over the identical window, a 46.88% return at a
Sharpe of 6.00 on the same ticker. This is a two-month self-reported live window on four assets, so
read "lifelong" and "real-time" as design intent rather than demonstrated longevity.

The released testbed orchestrates but does not contain the agents: each must be wrapped as an HTTP
endpoint, registered in the testbed config and driven over a POST interface, and a run needs seven
API keys. The repository is four scripts plus configs, with a single commit from January 2026 and no
LICENSE file — its README offers only "provided as-is for research and evaluation purposes", which
is not an open-source grant, so the code is not legally reusable. The preprint itself is CC BY 4.0,
and the separate Hugging Face leaderboard Space declares Apache-2.0. A WWW 2026 publication is
claimed for the paper, but its DOI does not resolve and the record is absent from Crossref as of
August 2026, so it is listed here as an arXiv preprint. The leaderboard Space reports itself as
running, though the paper's cited live URL did not respond when checked.

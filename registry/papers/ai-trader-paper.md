---
id: ai-trader-paper
name: "AI-Trader: Benchmarking Autonomous Agents in Real-Time Financial Markets"
summary: A live, data-uncontaminated benchmark that runs six mainstream LLMs as autonomous trading agents across US stocks, A-shares and crypto at several trading frequencies.
authors: [Tianyu Fan, Yuhao Yang, Yangqin Jiang, Yifei Zhang, Yuxuan Chen, Chao Huang, Data Intelligence Lab@HKU]
origin: external
repo: https://github.com/HKUDS/AI-Trader
website: https://ai4trade.ai
license: MIT
year: 2025
venue: arXiv preprint
arxiv: "2512.10971"
tags: [benchmark, llm-agent, live-evaluation, multi-market, mcp]
markets: [multi-asset]
added: 2026-08-17
prerequisites:
  trading: basic
  ai: moderate
  programming: none
  setup: none
---

Six mainstream LLMs trade autonomously in three markets — NASDAQ 100 constituents, SSE 50
constituents, and ten major cryptocurrencies (BTC, ETH, XRP, SOL, ADA, SUI, LINK, AVAX, LTC, DOT) —
each starting from a fixed book of $10,000, 100,000 CNY or 50,000 USDT, at several trading
granularities. Agents work through MCP tools for news, price lookup, web search, arithmetic and
trade execution, over Alpha Vantage market data and Jina AI search. The authors present it as the
first fully automated, live, data-uncontaminated evaluation benchmark for LLM agents in financial
decision-making, and report that general intelligence does not automatically translate into trading
capability, that risk-control capability determines cross-market robustness, and that excess returns
come more readily in highly liquid markets than in policy-driven ones. Third-party strategies are
accepted by pull request and run on the authors' platform.

The benchmark code is not on the repository's default branch. On `main`, both `main.py` and
`requirements.txt` return 404; the harness the paper describes lives on the `Official-AITrader-v1`
branch (last commit March 2026), which is also where the MIT LICENSE file sits — `main` has none,
and the MIT badge in its README links to a path that does not exist. Cloning without
`-b Official-AITrader-v1` gets you the wrong code, and the README's own clone command omits the
branch. Running it needs OpenAI, Alpha Vantage and Jina API keys, plus Tushare for A-shares.

The default branch has since pivoted into an agent-native signal-sharing platform with copy
trading and a points system, so the repository's headline activity no longer tracks the benchmark.
The live leaderboard at ai4trade.ai is operated by the authors and is not independently
reproducible; its rankings are not verified results. The paper itself is an arXiv preprint from
December 2025 with no venue claimed.

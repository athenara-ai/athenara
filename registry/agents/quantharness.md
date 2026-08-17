---
id: quantharness
name: QuantHarness
summary: A LangGraph multi-agent system that chains Indicator, Pattern and Trend agents over OHLC candlestick data into a decision agent emitting a LONG or SHORT trade directive.
authors: [Fei Xiong, Xiang Zhang, Aosong Feng, Siqi Sun, Chenyu You, Y-Research @SBU]
origin: external
repo: https://github.com/Y-Research-SBU/QuantHarness
website: https://y-research-sbu.github.io/QuantHarness/
license: MIT
disclosure: fully-open
frameworks: [langgraph, langchain]
models: [gpt-4o-mini, gpt-4o]
strategy: [technical-analysis, pattern-recognition]
risk_controls: [stop-loss, risk-reward-ratio]
status: maintained
tags: [multi-agent, langgraph, candlestick, technical-analysis, vision-llm]
markets: [multi-asset]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: moderate
  programming: moderate
  setup: moderate
install:
  - conda create -n quantharness python=3.11
  - conda activate quantharness
  - pip install -r requirements.txt
entrypoint: "python web_interface.py"
runtime: "python 3.11"
requires:
  - Vision-capable LLM API key (OpenAI, Anthropic, Qwen or MiniMax)
paper: [quantharness-paper]
---

The released graph is strictly sequential: `graph_setup.py` runs an Indicator agent, then a Pattern
agent, then a Trend agent, then a Decision Maker. Because the agents generate and read chart images,
the system requires a vision-capable model; the defaults are gpt-4o-mini for the agents and gpt-4o
for graph logic, with Anthropic, Qwen and MiniMax providers also selectable. The decision agent
emits a structured directive — direction, entry and exit points, a stop-loss threshold, and a
risk-reward ratio constrained to between 1.2 and 1.8. Both a Flask web interface, which pulls the
most recent 30 candlesticks from Yahoo Finance, and a `TradingGraph` Python API are provided.

The repository bundles 1,600 CSV candlestick windows — 100 per instrument and timeframe, eight
instruments at each of the 1h and 4h timeframes and nine distinct instruments in total (BTC, CL,
DAX, DJI, ES, NQ, QQQ, SPX, VIX, with DAX only at 1h and VIX only at 4h). Their provenance is not
documented, so their source should not be assumed. Note also a discrepancy between the paper and the
code: the abstract describes four specialized agents, Indicator, Pattern, Trend and Risk, but no
risk agent module exists in the repository — the shipped system is three analysis agents feeding a
decision agent. Test coverage is thin, and recent commits have been documentation and asset changes
rather than functional work.

The project and its paper were renamed from QuantAgent in July 2026, when arXiv 2509.09995 was
retitled; older citations and forks use the old name, and unrelated projects share it, so match on
the Y-Research-SBU organization or the arXiv identifier. That paper carries no venue, journal
reference or external DOI: treat it as an unpublished preprint. The authors report higher predictive
accuracy than baselines at 1-hour and 4-hour intervals — a self-reported claim about prediction
accuracy rather than returns, without peer review or independent replication. The README states the
software is for educational and research purposes only and is not financial advice.

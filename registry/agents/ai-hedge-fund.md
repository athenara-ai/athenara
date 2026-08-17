---
id: ai-hedge-fund
name: AI Hedge Fund
summary: An educational proof-of-concept hedge fund that runs LLM investor-persona and factor signal generators through a backtester and a simulated broker; it never places real trades.
authors: [Virat Singh]
origin: external
repo: https://github.com/virattt/ai-hedge-fund
license: MIT
disclosure: fully-open
status: active
strategy: [fundamental, event-driven, long-short]
tags: [llm-agent, multi-agent, backtesting, simulated-trading, educational]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: basic
  programming: basic
  setup: moderate
install:
  - pipx install aihf
entrypoint: "aihf"
runtime: "python >= 3.11, < 4.0"
requires:
  - "Financial Datasets API key (prices, fundamentals, earnings)"
  - "an LLM API key: Anthropic, OpenAI, DeepSeek, Google, xAI or Kimi"
---

AI Hedge Fund combines a set of signal generators — investor personas named for Buffett,
Druckenmiller, Graham, Lynch and Munger, a post-earnings-announcement-drift signal, and a generic
LLM agent — under four strategy mandates: deep value, earnings drift, fundamental long/short, and
inflections. Around them the package ships a backtesting engine, portfolio construction, risk
limits and event-study tooling. Mandates are YAML, so `aihf` can be driven interactively or
non-interactively against a mandate file and a ticker list.

Nothing it produces reaches a market. The README states the project is for educational purposes
only and that the system does not actually make any trades; the only broker implementation in the
tree is a simulator. It is also not runnable on zero credentials: it needs a Financial Datasets
API key for prices, fundamentals and earnings, plus a key for one supported LLM provider.

The project was restructured on 7 August 2026 and its distributable renamed to `aihf` (version
2.2.0, Python 3.11+), so descriptions written against the older package name or the previous
`src/main.py` layout no longer apply — and the README announces a further rebuild toward a
persistent always-on fund, so the interface is still moving. It is maintained by one individual
rather than an organisation.

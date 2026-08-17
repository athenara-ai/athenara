---
id: deepfund
name: DeepFund
summary: A live, leakage-free benchmark that runs a multi-agent LLM fund-management workflow against market data postdating the models' training cutoffs.
authors: [Data Intelligence and Analytics Lab @ HKUST(GZ), Changlun Li, Yuyu Luo, Yao Shi, Chen Wang, Qiqi Duan, Runke Ruan, Weijie Huang, Haonan Long, Lijun Huang, Nan Tang]
origin: external
repo: https://github.com/HKUSTDial/DeepFund
license: MIT
tasks: [stock-trading, portfolio-management, decision-making]
tags: [benchmark, llm-agent, multi-agent, fund-management, live-evaluation]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: advanced
  programming: moderate
  setup: advanced
paper: [deepfund-paper]
implements: [planner-executor]
---

DeepFund evaluates an LLM on the whole active fund-management loop rather than on an isolated
prediction: analyst signals, planning, and portfolio decisions, run against real market data for a
chosen trading date that falls after the model's training cutoff. Runs are configured in YAML, with
a `planner_mode` switch deciding the shape of the workflow — when true, a Planner agent orchestrates
which analysts run; when false, every workflow analyst runs in parallel. Output lands in four
tables: Config, Portfolio, Decision and Signal. Market data arrives through pluggable providers
behind a router in `src/apis` — akshare, Alpha Vantage, financialdataset, JoinQuant and yfinance.

Running it takes real credentials. The environment template expects OpenAI, Anthropic, DeepSeek,
Qwen and Zhipu keys alongside an Alpha Vantage key, and Supabase is the default database, so a
fully local run means passing `--local-db` against a local SQLite file. The benchmark is simulated
throughout: the README states plainly that the project is for research purposes only and does not
trade.

The paper is an accepted NeurIPS 2025 Datasets and Benchmarks poster, confirmed on the conference's
own listing ([arXiv:2505.11065](https://arxiv.org/abs/2505.11065)); the authors evaluate nine
flagship LLMs and report that even strong models such as DeepSeek-V3 and Claude-3.7-Sonnet take net
trading losses inside the live environment. Two caveats accompany the repository. It is dormant —
the last commit is March 2026 — and the live arena leaderboard the README advertises no longer
resolves, so that demonstration cannot currently be used or checked. Separately, the README's
claims of an IJCAI 2025 FinLLM Workshop oral award for the companion vision paper and of a
best-open-source award are author-stated and were not independently confirmed. The code itself remains MIT-licensed and free, alongside a
2026 announcement of collaboration with a fintech startup.

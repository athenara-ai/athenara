---
id: finsaber-paper
name: Can LLM-based Financial Investing Strategies Outperform the Market in Long Run?
summary: Re-backtests open-source LLM investing agents over 2004-2024 and 100+ S&P 500 symbols, and finds their reported advantages largely disappear once common biases are controlled.
authors: [Weixian Waylon Li, Hyeonjun Kim, Mihai Cucuringu, Tiejun Ma]
origin: external
repo: https://github.com/waylonli/FINSABER
website: https://waylonli.github.io/FINSABER/
license: Apache-2.0
year: 2026
venue: KDD 2026
arxiv: "2505.07078"
doi: 10.1145/3770854.3785702
tags: [benchmark, backtesting, llm-agent, evaluation-bias, long-horizon]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: moderate
  programming: none
  setup: none
builds_on: [finmem, finmem-paper, finagent-paper, finrl, buy-and-hold-baseline]
---

FINSABER re-runs open-source LLM investors (FinMem, FinAgent, and the FinCon selection agent)
against rule-based strategies (buy and hold, moving-average crossover, Bollinger Bands, trend
following), forecaster-based ML (ARIMA, XGBoost), RL policies (A2C, PPO, TD3, SAC via FinRL) and
simple selection rules, over rolling windows spanning 2004-2024. Bias control is the design: the
historical S&P 500 constituent list, delisted symbols included, is drawn at each window start, and
every input is aligned to information available before that point.

The authors report that previously reported LLM advantages "deteriorate significantly under broader
cross-section and over a longer-term evaluation", and that the LLM strategies are overly
conservative in bull markets and overly aggressive in bear ones. Version 6 of the preprint (June
2026) corrects the FinAgent results and adds a GPT-4o-mini variant while leaving those conclusions
unchanged, so any figure quoted should come from that version. The paper is published in the KDD
'26 proceedings, pp. 2711-2722; the "Datasets & Benchmarks oral" designation in the arXiv comments
and the repository README is the authors' own and could not be confirmed against a published
programme.

The reusable backtesting core ships as the Apache-2.0 `finsaber` package — data loaders, execution
models, metrics and strategy interfaces, with execution defaulting to the next open to avoid
same-day look-ahead, configurable slippage and commission, a liquidity cap, and optional accounting
of LLM inference cost as a trading cost. The FinMem, FinAgent, FinCon and FinRL integrations sit
outside the wheel in the repository. Data is on HuggingFace in two sets: the ~7.5 GB FINSABER-V2
data used by the current branch is published under `license: other` with no terms stated on the
card, so it should not be treated as openly licensed; the separate reproduce set backing the
paper's original results is tagged Apache-2.0.

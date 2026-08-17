---
id: sep-paper
name: Learning to Generate Explainable Stock Predictions using Self-Reflective Large Language Models (SEP)
summary: Fine-tunes an LLM with a self-reflective agent and PPO to produce explainable stock predictions without human annotation, then applies the same loop to portfolio weight generation.
authors: [Kelvin J.L. Koa, Yunshan Ma, Ritchie Ng, Tat-Seng Chua]
origin: external
repo: https://github.com/koa-fin/sep
year: 2024
venue: WWW 2024
arxiv: "2402.03659"
doi: 10.1145/3589334.3645611
tags: [llm, reinforcement-learning, explainability, self-reflection, portfolio-construction]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: advanced
  programming: none
  setup: none
builds_on: [buy-and-hold-baseline]
---

SEP pairs a self-reflective agent with Proximal Policy Optimization so that an LLM teaches itself to
generate explainable stock predictions, fine-tuning on its own self-generated responses instead of
human annotations. The same loop extends to portfolio construction, where no binary correct answer
exists: each iteration shows the reflective model the profits implied by its current weights and
asks it to revise them, then hands both weight sets to the PPO trainer with the higher-profit one
treated as the better response. The data is price and tweet data for 2020-2022 covering 55 stocks,
the top five in each of 11 industries, collected in the StockNet dataset format.

On the portfolio task the authors report an annualized Sharpe of 1.150 for SEP against 0.123 for the
market index and -0.225 for an equal-weight 1/N portfolio — a single evaluation period reported by
the authors, with no independent replication. The portfolio experiment runs on a basket of 11
stocks, a much smaller universe than the 55-stock prediction dataset, so the two sets of results
should not be read as covering the same ground.

Neither repository carries a license. The code (koa-fin/sep) and the full dataset (koa-fin/sn2) are
both public with no LICENSE file, which leaves them all-rights-reserved and legally unreusable, and
both have been dormant since May 2024. Only sample price and tweet data ships with the code, and its
README states outright that rerunning the full results may not be feasible for individual developers
because of OpenAI API charges.

---
id: deepfund-paper
name: "Time Travel is Cheating: Going Live with DeepFund for Real-Time Fund Investment Benchmarking"
summary: Presents DeepFund, a live benchmark that scores LLM fund-management agents on market data published after each model's pretraining cutoff.
authors: [Changlun Li, Yao Shi, Chen Wang, Qiqi Duan, Runke Ruan, Weijie Huang, Haonan Long, Lijun Huang, Nan Tang, Yuyu Luo, "Data Intelligence and Analytics Lab @ HKUST(GZ)"]
origin: external
repo: https://github.com/HKUSTDial/DeepFund
license: MIT
year: 2025
venue: NeurIPS 2025 Datasets and Benchmarks Track (poster)
arxiv: "2505.11065"
tags: [benchmark, llm-agent, data-leakage, live-evaluation, fund-management]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: basic
  ai: moderate
  programming: none
  setup: none
---

DeepFund evaluates LLM fund managers against market data published *after* each evaluated model's
pretraining cutoff, rather than back-testing over historical windows a model may have memorized —
the paper's answer to the leakage that retrospective benchmarks invite. A companion perspective
paper by four of the same authors names four failure modes of existing financial benchmarks: "data
leakage, navel-gazing, over-intervention, and maintenance-hard".

Nine flagship LLMs were evaluated. The authors report that even cutting-edge models such as
DeepSeek-V3 and Claude-3.7-Sonnet incur net trading losses inside the real-time environment. No
capital is at risk in the process: the README states plainly that the project is for research
purposes only and does not trade.

Two arXiv records exist for DeepFund and they are different papers — this entry is 2505.11065, the
ten-author project paper carrying the NeurIPS acceptance, while
[2503.18313](https://arxiv.org/abs/2503.18313) is a separate six-page perspective paper. The repo
also claims an IJCAI 2025 FinLLM Workshop oral award for that perspective paper; that claim is
self-reported and could not be checked against the workshop's own records. The code is MIT-licensed
and still moving (last commit March 2026), and the README announces a commercial collaboration with
the fintech startup Paradoox AI, whose domain also carries the maintainer contact address.

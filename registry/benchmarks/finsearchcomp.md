---
id: finsearchcomp
name: FinSearchComp
summary: An open benchmark of 635 expert-written financial search-and-reasoning questions across Global and Greater China markets, with a released evaluation harness and public leaderboard.
authors: [ByteDance Seed, Columbia Business School, Liang Hu, Jianpeng Jiao, Jiashuo Liu, Hongseok Namkoong, Wenhao Huang, Ge Zhang, Yuwen Tang]
origin: external
repo: https://github.com/randomtutu/FinSearchComp
website: https://randomtutu.github.io/FinSearchComp/
license: CC-BY-4.0
tasks: [time-sensitive-data-fetching, simple-historical-lookup, complex-historical-investigation]
tags: [benchmark, financial-search, llm-agent, evaluation, question-answering]
markets: [multi-asset]
added: 2026-08-17
prerequisites:
  trading: basic
  ai: moderate
  programming: moderate
  setup: moderate
---

FinSearchComp holds 635 questions spread over three task types — time-sensitive data fetching,
simple historical lookup, and complex historical investigation — each posed in both a Global and a
Greater China variant, covering US, Hong Kong and mainland-listed equities, FX pairs and global
indices. The abstract credits 70 professional financial experts with the annotation, run through a
multi-stage quality-assurance pipeline. What ships is a working evaluation loop, not just a file of
questions: `chat.py` generates model responses and `eval.py` scores them, with adapters for OpenAI,
Gemini and DeepSeek, so running it needs API keys for whichever models are under test. The data is
also available from Hugging Face as `ByteSeedXpert/FinSearchComp` without cloning, and ByteDance
hosts a public leaderboard that accepts external submissions.

Two limits shape how the scores should be read. The benchmark measures search accuracy and
analyst-style reasoning; it never asks a model to take a position, size one, or produce a P&L, so
it sits upstream of trading rather than testing it. And the time-sensitive ground truth is pinned
to market snapshot files timestamped October 2025 — those questions grade against a fixed past
market state, and are not reproducible against live data without regenerating the ground truth. A
second split of 594 questions ships for compatibility with the public AkShare APIs, which cover
only part of the data; the README's quick-start defaults to that split, and the Hugging Face mirror
carries only the full 635-row release.

The repository is CC-BY-4.0 throughout, which is clean for the data — attribution required,
commercial use permitted, no share-alike — but is applied to the Python evaluation code as well,
and Creative Commons itself recommends against using its licenses for software, leaving downstream
code-reuse terms murky. The code lives on a personal GitHub account rather than a ByteDance
organization; the ByteDance Seed and Columbia Business School attribution comes from the README.
The paper is an arXiv preprint with no peer-reviewed venue
([arXiv:2509.13160](https://arxiv.org/abs/2509.13160)), in which the authors report evaluating 21
models and products, with Grok 4 (web) leading the global subset and DouBao (web) the Greater China
subset. The repository has been dormant since November 2025.

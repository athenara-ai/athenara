---
id: ectsum
name: ECTSum
summary: A benchmark of 2,425 long earnings call transcripts paired with expert-written telegram-style bullet-point summaries drawn from Reuters articles.
authors: [Rajdeep Mukherjee, Abhinav Bohra, Akash Banerjee, Soumya Sharma, Manjunath Hegde, Afreen Shaikh, Shivani Shrivastava, Koustuv Dasgupta, Niloy Ganguly, Saptarshi Ghosh, Pawan Goyal]
origin: external
repo: https://github.com/rajdeep345/ECTSum
website: https://aclanthology.org/2022.emnlp-main.748/
license: GPL-3.0
access: open
source: Earnings call transcripts of US public companies; summaries derived from Reuters articles
coverage:
  assets: 2,425 transcript–summary pairs (US public companies)
size: 2,425 document–summary pairs
tags: [earnings-calls, summarization, benchmark, nlp, financial-documents]
markets: [equities]
added: 2026-08-15
prerequisites:
  trading: basic
  ai: moderate
  programming: basic
  setup: basic
---

ECTSum targets extreme summarization of long, unstructured financial documents: its
document-to-summary compression ratio of 103.67 is the highest among long-document summarization
datasets of comparable length, forcing models to isolate only the most material facts — the same
skill a research agent needs when reading an earnings call before a trading decision.

Published as a long paper at EMNLP 2022 ([arXiv:2210.12467](https://arxiv.org/abs/2210.12467));
the release includes baseline results and the authors' ECT-BPS model.

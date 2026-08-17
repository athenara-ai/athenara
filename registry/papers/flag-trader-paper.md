---
id: flag-trader-paper
name: "FLAG-TRADER: Fusion LLM-Agent with Gradient-based Reinforcement Learning for Financial Trading"
summary: Fine-tunes an LLM as the policy network of a reinforcement-learning trading agent; published in Findings of ACL 2025, with no code, weights, or data released.
authors: [Guojun Xiong, Zhiyang Deng, Keyi Wang, Yupeng Cao, Haohang Li, Yangyang Yu, Xueqing Peng, Mingquan Lin, Kaleb E Smith, Xiao-Yang Liu, Jimin Huang, Sophia Ananiadou, Qianqian Xie]
origin: external
year: 2025
venue: "Findings of the Association for Computational Linguistics: ACL 2025"
arxiv: "2502.11433"
tags: [llm-agent, reinforcement-learning, policy-gradient, fine-tuning]
markets: [equities, crypto]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: advanced
  programming: none
  setup: none
implements: [rl-policy]
---

The architecture uses a partially fine-tuned LLM as the policy network itself, so that language
processing and control share one model: parameter-efficient fine-tuning keeps the update cheap,
and policy-gradient optimization is driven by trading rewards rather than by next-token
likelihood. Experiments cover five US equities (MSFT, JNJ, UVV, HON, TSLA) from 1 July 2020 to
6 May 2021, and BTC from 11 February to 5 November 2023.

The paper appeared in Findings of the Association for Computational Linguistics: ACL 2025 (pages
13921–13934, anthology ID [2025.findings-acl.716](https://aclanthology.org/2025.findings-acl.716/))
— Findings, not the ACL main track. The arXiv page carries no comments field, so the ACL Anthology
record is the only evidence of the venue.

Nothing runnable was released. As of 17 August 2026 there is no repository, package, or model
release: the arXiv abstract page and the v3 full text contain no code or data link, the authors'
The-FinAI organization has no FLAG-Trader repository, and Hugging Face returns no matching model.
Two similarly named third-party repositories exist but are unrelated and unlicensed. Reproducing
the method means reimplementing it against existing trading environments — the paper situates
itself relative to FinRL, FinMem, FinAgent, and FinBen, all indexed here.

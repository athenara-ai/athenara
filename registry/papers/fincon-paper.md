---
id: fincon-paper
name: "FinCon: A Synthesized LLM Multi-Agent System with Conceptual Verbal Reinforcement for Enhanced Financial Decision Making"
summary: An LLM multi-agent trading system with a manager-analyst hierarchy and a self-critiquing risk-control loop; the code has never been released.
authors: [Yangyang Yu, Zhiyuan Yao, Haohang Li, Zhiyang Deng, Yuechen Jiang, Yupeng Cao, Zhi Chen, Jordan W. Suchow, Zhenyu Cui, Rong Liu, Zhaozhuo Xu, Denghui Zhang, Koduvayur Subbalakshmi, Guojun Xiong, Yueru He, Jimin Huang, Dong Li, Qianqian Xie]
origin: external
repo: https://github.com/The-FinAI/FinCon
year: 2024
venue: NeurIPS 2024
arxiv: "2407.06567"
tags: [multi-agent, llm-agent, risk-control, portfolio-management, verbal-reinforcement]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: advanced
  programming: none
  setup: none
builds_on: [finmem-paper, finmem]
---

FinCon organizes its agents as a manager-analyst communication hierarchy modeled on the structure
of an investment firm, and adds a risk-control component that episodically self-critiques and
updates "conceptualized beliefs" — propagating them selectively to the nodes that need them rather
than broadcasting, which keeps peer-to-peer communication cost down. It is evaluated on single
stock trading and portfolio management. Published on the NeurIPS 2024 main conference track
(Advances in Neural Information Processing Systems 37, pp. 137010–137045).

There is no code. The-FinAI/FinCon holds a single README and no LICENSE file, and has never
contained source. The README, last edited in February 2026, states that the data agent relies on
several commercial APIs, which makes releasing the full system and its data difficult, and promises
a release "within the next 3-4 months"; that window has since elapsed with no further repository
activity. The trading results the paper reports are the authors' own backtests, and without code or
data they cannot be independently reproduced.

The paper is indexed here for its lineage and its pointers rather than for anything runnable. Seven
of its authors — including Yangyang Yu, Haohang Li and Jordan W. Suchow — also wrote FinMem, whose
layered-memory agent it extends. In place of code the README directs readers to two released
systems from the same group: InvestorBench (ACL 2025, MIT licensed) and Agent Market Arena, which
carries no license and has had no commits since it was created in January 2026 and whose "accepted
by WWW 2026" claim is self-reported and unverified.

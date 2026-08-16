---
id: investorbench
name: InvestorBench
summary: A benchmark for evaluating LLM-based agents on financial decision-making tasks across single stocks, cryptocurrencies, and ETFs.
authors: [Haohang Li, Yupeng Cao, Yangyang Yu, Shashidhar Reddy Javaji, Zhiyang Deng, Yueru He, Yuechen Jiang, Zining Zhu, K.P. Subbalakshmi, Jimin Huang, Lingfei Qian, Xueqing Peng, Jordan W. Suchow, Qianqian Xie]
origin: external
website: https://aclanthology.org/2025.acl-long.126/
tasks: [stock-trading, crypto-trading, etf-trading]
tags: [benchmark, llm-agent, decision-making, evaluation]
markets: [multi-asset]
added: 2026-08-15
prerequisites:
  trading: moderate
  ai: advanced
  programming: moderate
  setup: expert
builds_on: [finmem-paper]
---

InvestorBench pairs a task-agnostic LLM agent framework with standardized datasets and simulated
market environments so different backbone models can be compared on the same footing. The agent
framework decomposes into Brain, Perception, Profile, Memory, and Action modules, with data drawn
from open sources and third-party APIs including Yahoo Finance and SEC EDGAR.

The authors evaluate thirteen LLMs as backbones across market environments, scored with standard
quantitative finance metrics. Published at ACL 2025 main conference
([arXiv:2412.18174](https://arxiv.org/abs/2412.18174)); no dedicated public code repository was
found at time of indexing.

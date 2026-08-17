---
id: ai-quant-investment-survey
name: "From Deep Learning to LLMs: A Survey of AI in Quantitative Investment"
summary: Surveys AI in quantitative investment from hand-crafted factors through deep learning to LLM-based autonomous agents, organized around the alpha strategy pipeline.
authors: [Bokai Cao, Saizhuo Wang, Xinyi Lin, Xiaojun Wu, Haohan Zhang, Lionel M. Ni, Jian Guo, The Hong Kong University of Science and Technology (Guangzhou), The Hong Kong University of Science and Technology, IDEA Research]
origin: external
year: 2025
venue: arXiv
arxiv: "2503.21422"
tags: [survey, llm-agent, alpha-research, deep-learning, literature-review]
markets: [multi-asset]
added: 2026-08-17
prerequisites:
  trading: basic
  ai: moderate
  programming: none
  setup: none
builds_on: [fingpt, pixiu-flare, finmem, finmem-paper, finagent-paper, tradingagents, tradingagents-paper, finrobot, investorbench, llm-trading-agent-survey]
---

The survey takes alpha strategy as its representative example and follows how AI has entered each
stage of the quantitative investment pipeline. It moves from human-crafted features and traditional
statistical models, through deep learning applied across the whole pipeline from data processing to
order execution, to large language models empowering autonomous agents that process unstructured
data, generate alphas, and support self-iterative workflows. The authors are at HKUST (Guangzhou),
HKUST, and IDEA Research, with Jian Guo as corresponding author.

Its practical value here is as a map. The text discusses FinMem, FinAgent, TradingAgents, FinRobot,
FinGPT, PIXIU and InvestorBench by name — all indexed in this registry — alongside Alpha-GPT and
BloombergGPT, describing FinMem as the framework that established the three-component agent
architecture, TradingAgents as a multi-agent system for financial trading, and InvestorBench as a
benchmark for evaluating LLM-based agents. Two obvious neighbours are absent: neither Qlib nor
FinRL is mentioned anywhere in the paper.

Treat it strictly as a 2025 arXiv preprint
([arXiv:2503.21422](https://arxiv.org/abs/2503.21422)). It was submitted in March 2025 with no
later revisions, carries no journal reference, DOI or peer-reviewed version, and has no code or
companion repository of any kind. Citations remain in the low single digits, so its standing rests
on its coverage rather than on uptake.

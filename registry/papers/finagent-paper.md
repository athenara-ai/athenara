---
id: finagent-paper
name: "A Multimodal Foundation Agent for Financial Trading (FinAgent)"
summary: Presents FinAgent, a multimodal trading agent that processes numerical, textual, and visual market data with dual-level reflection and diversified memory retrieval.
authors: [Wentao Zhang, Lingxuan Zhao, Haochong Xia, Shuo Sun, Jiaze Sun, Molei Qin, Xinyi Li, Yuqing Zhao, Yilei Zhao, Xinyu Cai, Longtao Zheng, Xinrun Wang, Bo An]
origin: external
repo: https://github.com/DVampire/FinAgent
year: 2024
venue: KDD 2024
arxiv: "2402.18485"
tags: [multimodal, foundation-agent, tool-use, reflection, memory]
markets: [multi-asset]
added: 2026-08-15
prerequisites:
  trading: moderate
  ai: advanced
  programming: none
  setup: none
---

FinAgent's market intelligence module ingests numerical series, text, and chart images, while a
dual-level reflection mechanism supports both rapid adaptation to market changes and
longer-horizon lesson extraction. The agent is tool-augmented, incorporating established trading
strategies and expert knowledge, and emphasizes reasoning transparency.

Evaluation spans six datasets across stocks and cryptocurrency against nine baselines; the authors
report average profit improvements above 36%, including a 92.27% return on one dataset. Published
at KDD 2024 ([doi:10.1145/3637528.3671801](https://dl.acm.org/doi/10.1145/3637528.3671801)); the
first author's official implementation is at
[DVampire/FinAgent](https://github.com/DVampire/FinAgent) (MIT).

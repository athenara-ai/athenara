---
id: mars-paper
name: "MarS: a Financial Market Simulation Engine Powered by Generative Foundation Model"
summary: An ICLR 2025 poster introducing the Large Market Model, an order-level generative foundation model, and MarS, the market simulation engine built on it.
authors: [Junjie Li, Yang Liu, Weiqing Liu, Shikai Fang, Lewen Wang, Chang Xu, Jiang Bian, Microsoft Research]
origin: external
repo: https://github.com/microsoft/MarS
website: https://mars-lmm.github.io/
license: MIT
year: 2025
venue: ICLR 2025 (poster)
arxiv: "2409.07486"
tags: [market-simulation, limit-order-book, generative-model, market-impact, agent-training]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: advanced
  ai: advanced
  programming: none
  setup: none
---

The paper introduces a Large Market Model, an order-level generative foundation model, and builds
the MarS engine on top of it to make order generation realistic, interactive, and controllable.
The authors report scalability across data size and model complexity, and realism in controlled
generation with market impact. MarS is positioned as multi-purpose infrastructure — a forecast
tool, a detection system, an analysis platform, and a training environment where trading agents
can be exercised without risking capital. It was accepted as an ICLR 2025 poster, verified on
ICLR's own proceedings and virtual-conference pages.

The released code is MIT-licensed (Microsoft Corporation) and readable: order generation in
`market_simulation/models/order_model.py`, market state in `states/order_state.py`, and the
order-generating agent in `agents/background_agent.py`, plus four worked examples — an
11-characteristic stylized-facts report, simulation-as-forecasting, market-impact analysis, and a
Streamlit demo. Note that the MIT license covers the code only; the paper itself is published
under CC BY-NC-SA 4.0, which is non-commercial and share-alike.

The model the engine depends on has never been released, which is the caveat that governs
everything else here. `download.py` fetches Hugging Face repository `microsoft/mars-order-model`,
which returns HTTP 401; the README concedes the model "is currently set to private awaiting final
review approval" and that the examples' full functionality depends on its release. MarS therefore
cannot be run end to end today. Open issue #20, filed in March 2026, asks for the plan after more
than a year and has no maintainer reply; the OneDrive fallback the README offers for prerequisite
files is separately reported broken. The main branch has not moved since May 2025, and the pinned
dependency stack is roughly a year behind. Running what does work is Linux-only and CUDA-bound,
with Docker effectively mandatory.

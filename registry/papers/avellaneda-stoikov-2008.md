---
id: avellaneda-stoikov-2008
name: High-frequency trading in a limit order book
summary: The canonical stochastic-control model for market making, deriving an inventory-skewed reservation price and the optimal bid-ask spread around it.
authors: [Marco Avellaneda, Sasha Stoikov]
origin: external
website: https://doi.org/10.1080/14697680701381228
license: proprietary
year: 2008
venue: Quantitative Finance 8(3), 217-224
doi: 10.1080/14697680701381228
tags: [market-making, market-microstructure, stochastic-control, inventory-risk, limit-order-book]
markets: [multi-asset]
added: 2026-08-17
prerequisites:
  trading: advanced
  ai: none
  programming: none
  setup: none
---

The paper studies the optimal submission of bid and ask orders in a limit order book from the
market maker's side, treating inventory risk rather than asymmetric-information risk as the binding
constraint. The result has two parts that later work quotes constantly: a reservation price that
skews away from the mid as inventory accumulates, and an optimal spread placed around it.

No code was released by the authors — everything runnable descends from later implementations.
Hummingbot ships the model as a first-class strategy under
`hummingbot/strategy/avellaneda_market_making/`, with its own test suite, computing the reservation
price and optimal spread directly from the paper's algebra. Its source comments also record where
the maintainers deliberately depart from the infinite-horizon equations, noting that "the equations
in the paper for this contain a few mistakes — the units don't align with the rest of the paper",
so read it as an adaptation rather than a transcription.

The article is paywalled at Taylor & Francis; the DOI above is the canonical link. A freely
reachable PDF sits on the first author's NYU page, but it is a redistributed publisher copy
carrying a library download watermark, not an open-access version. Citation counts differ by
source: Semantic Scholar records 566, Crossref 373, the latter counting only DOI-registered
references.

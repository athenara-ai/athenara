---
id: riskfolio-lib
name: Riskfolio-Lib
summary: A CVXPY-based Python library for portfolio optimization covering mean-risk, risk-parity and hierarchical-clustering allocation across a large catalogue of convex risk measures.
authors: [Dany Cajas]
origin: external
repo: https://github.com/dcajasn/Riskfolio-Lib
website: https://portfoliooptimization.org
license: BSD-3-Clause
components: [portfolio optimization, hierarchical clustering allocation, risk functions, parameter estimation, constraint construction, plots and reports]
tags: [portfolio-optimization, risk-parity, hierarchical-clustering, convex-optimization, python]
markets: [multi-asset]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: none
  programming: moderate
  setup: basic
install:
  - pip install riskfolio-lib
runtime: "python >= 3.10"
---

Riskfolio-Lib turns a returns DataFrame into position weights. It is built on CVXPY and integrates
with pandas data structures, exposing allocation through two main classes — `Portfolio` for
mean-risk and risk-parity problems and `HCPortfolio` for hierarchical-clustering allocation —
alongside modules for risk functions, parameter estimation, constraint construction, OWA weights,
the Gerber statistic, DBHT clustering, plotting and reports. The README's own counts describe
mean-risk and logarithmic mean-risk (Kelly criterion) optimization over 26 convex risk measures
with four objective functions, and risk-parity optimization over 22.

There is no peer-reviewed paper behind it: the project's own Citing section supplies a `@misc`
BibTeX entry crediting Dany Cajas and pointing at the GitHub repository. Maintenance is current —
36 commits in the trailing twelve months and five open issues as of August 2026, with the most
recent commit moving the documentation to a new domain — but the bus factor is one: Cajas is the
sole author and effectively the only committer.

Funding is worth knowing before reading the README, which opens with affiliate-tracked links to
the author's book and a paid Python portfolio-optimization course, and offers paid consulting in
its Contributing section. None of this touches the library itself, which is fully BSD-3-licensed,
sells no signals and makes no returns claims.

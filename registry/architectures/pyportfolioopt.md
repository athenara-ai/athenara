---
id: pyportfolioopt
name: PyPortfolioOpt
summary: A Python library for portfolio construction covering mean-variance optimization, Black-Litterman, shrinkage risk models, hierarchical risk parity and discrete share allocation.
authors: [Robert Andrew Martin, PyPortfolio, Philipp Schiele, Franz Kiraly, Thomas Schmelzer]
origin: external
repo: https://github.com/PyPortfolio/PyPortfolioOpt
website: https://pyportfolioopt.readthedocs.io/
license: MIT
components:
  [expected returns, risk models, efficient frontier, black-litterman, hierarchical risk parity, discrete allocation]
tags: [portfolio-optimization, mean-variance, black-litterman, risk-parity, python]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: none
  programming: basic
  setup: basic
install:
  - pip install pyportfolioopt
---

PyPortfolioOpt is the allocation layer of a strategy: it turns expected-return and covariance
estimates into portfolio weights, then into an integer share basket. The `pypfopt` package ships
`expected_returns.py`, `risk_models.py` (including shrinkage estimators), `efficient_frontier/`,
`objective_functions.py`, `black_litterman.py`, `cla.py` for the Critical Line Algorithm,
`hierarchical_portfolio.py` for Hierarchical Risk Parity, and `discrete_allocation.py`. Usage is
fully programmatic and needs no key or account — `from pypfopt import EfficientFrontier,
risk_models, expected_returns` over a price DataFrame — and the README names its intended reader as
"an algorithmic trader who has a basket of strategies".

The library is peer-reviewed: *PyPortfolioOpt: portfolio optimization in Python* appeared in the
Journal of Open Source Software 6(61):3066, submitted 25 February 2021 and published 7 May 2021
([JOSS](https://joss.theoj.org/papers/10.21105/joss.03066)). Maintenance is live rather than
nominal, with 41 commits on `main` in the trailing twelve months and the most recent on 2026-07-07.

Stewardship has moved. Originally Robert Andrew Martin's single-author project, the repository was
transferred to the `PyPortfolio` GitHub organization, created 2025-11-08 and holding this one
public repository; GC.OS, the non-profit German Center for Open Source AI, lists PyPortfolioOpt
among its featured projects. That relationship is evidenced by a README badge and the gcos.ai
listing rather than by any governance document in the repo, and two artifacts of the move remain:
the JOSS paper's metadata still points at the pre-transfer `robertmartin8/PyPortfolioOpt` URL, and
CONTRIBUTING.md is still written in the original author's first person.

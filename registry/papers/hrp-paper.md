---
id: hrp-paper
name: Building Diversified Portfolios that Outperform Out of Sample (Hierarchical Risk Parity)
summary: López de Prado's 2016 paper introducing Hierarchical Risk Parity, a clustering-based allocation algorithm that requires no inversion of the covariance matrix.
authors: [Marcos López de Prado]
origin: external
website: https://doi.org/10.3905/jpm.2016.42.4.059
license: proprietary
year: 2016
venue: The Journal of Portfolio Management 42(4), 59–69
doi: 10.3905/jpm.2016.42.4.059
tags: [portfolio-construction, risk-parity, clustering, allocation, machine-learning]
markets: [multi-asset]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: basic
  programming: none
  setup: none
---

Hierarchical Risk Parity targets the instability, concentration, and out-of-sample
underperformance of quadratic optimizers — Markowitz's critical line algorithm in particular — by
applying graph theory and machine-learning clustering to the covariance matrix instead of
inverting it. Because no inversion is needed, HRP can allocate on an ill-conditioned or even
singular covariance matrix, where a quadratic optimizer cannot run at all. The author reports
lower out-of-sample variance than the critical line algorithm in Monte Carlo experiments; the
"outperform out of sample" of the title refers to that simulated variance result, not to realized
trading returns.

The paper is paywalled. The DOI redirects to the publisher's login, and no openly readable version
could be verified, so the practical route into the method is through its implementations rather
than the text.

Two independently maintained Python libraries implement it and cite this paper directly.
PyPortfolioOpt provides `HRPOpt` in `pypfopt/hierarchical_portfolio.py`, whose docstring records
that the code is reproduced with permission from the author, and gives it the same API as
`EfficientFrontier` so the two allocators are swappable (MIT). Riskfolio-Lib exposes HRP as a model
of its `HCPortfolio` class alongside Hierarchical Equal Risk Contribution (BSD-3-Clause). Both are
actively maintained and installable from PyPI.

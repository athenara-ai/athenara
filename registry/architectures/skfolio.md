---
id: skfolio
name: skfolio
summary: A portfolio optimization and risk management library built on scikit-learn's fit/predict API, so allocation models can be cross-validated, tuned and stress-tested with standard ML workflows.
authors: [Hugo Delatte, Carlo Nicolini, Matteo Manzi]
origin: external
repo: https://github.com/skfolio/skfolio
website: https://skfolio.org
license: BSD-3-Clause
components: [optimization, model selection, prior estimators, moments, distribution and copulas, clustering, pre-selection, portfolio and measures, datasets]
tags: [portfolio-optimization, scikit-learn, cross-validation, risk-management, python]
markets: [multi-asset]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: basic
  programming: moderate
  setup: basic
install:
  - pip install -U skfolio
runtime: "python >= 3.10"
---

skfolio implements allocation models as scikit-learn estimators, so the ordinary fit/predict
interface, hyper-parameter search and the `model_selection` walk-forward splitters apply to
portfolio construction — the guard against the data leakage that inflates backtests. The README
groups the available families as naive (equal-weighted, inverse-volatility, random Dirichlet),
convex (mean-risk, risk budgeting, maximum diversification, distributionally robust CVaR,
benchmark tracker), clustering (hierarchical risk parity, hierarchical equal risk contribution,
Schur complementary allocation, nested clusters optimization) and ensemble (stacking). S&P 500
price, index and factor datasets ship inside the package, so a complete example runs with no
network access. Dependencies are scikit-learn >= 1.6.0, cvxpy-base, clarabel, numpy, scipy, pandas,
joblib and plotly on Python >= 3.10.

The accompanying write-up is a seven-page arXiv preprint, "skfolio: Portfolio Optimization in
Python" ([arXiv:2507.04176](https://arxiv.org/abs/2507.04176), July 2025) — arXiv lists no journal
reference and no peer-reviewed venue was found, so treat it as a preprint. Releases are archived
on Zenodo under a citable concept DOI.

Two caveats. The library is backed by Skfolio Labs, which sells enterprise support and SLAs; the
open library is complete and BSD-3-licensed, but the commercial relationship exists. And the API
is pre-1.0 and moving fast — 57 releases, the current one 0.20.2 — so pin a version if you depend
on specific class names. Created in December 2023, it is younger than comparable libraries and its
dependent footprint is correspondingly thinner than its download count suggests.

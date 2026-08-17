---
id: freqai-paper
name: "FreqAI: generalizing adaptive modeling for chaotic time-series market forecasts"
summary: Software paper for FreqAI, the adaptive machine-learning module inside the Freqtrade bot, which retrains models during live deployment and feeds forecasts to entry/exit logic.
authors: [Robert A. Caulk, Elin Törnquist, Matthias Voppichler, Andrew R. Lawless, Ryan McMullan, Wagner Costa Santos, Timothy C. Pogue, Johan van der Vlugt, Stefan P. Gehring, Pascal Schmidt, Emergent Methods LLC, Freqtrade open source project]
origin: external
repo: https://github.com/freqtrade/freqtrade
website: https://www.freqtrade.io/en/stable/freqai/
license: GPL-3.0
year: 2022
venue: Journal of Open Source Software 7(80):4864
doi: 10.21105/joss.04864
tags: [machine-learning, forecasting, adaptive-retraining, feature-engineering, reinforcement-learning]
markets: [crypto]
added: 2026-08-17
implements: [rl-policy]
builds_on: [freqtrade]
prerequisites:
  trading: moderate
  ai: moderate
  programming: none
  setup: none
---

A peer-reviewed software paper (submitted October 2022, published that December, reviewed by
@ady00 and @shagunsodhani) for FreqAI, which "aims to provide a generalized and extensible
open-sourced framework geared toward live deployments of adaptive modeling for market forecasting",
built on Freqtrade's existing data collection, storage, and live-exchange interaction. The paper
names the libraries it wraps — scikit-learn, CatBoost, LightGBM, XGBoost, stable_baselines3, OpenAI
gym, TensorFlow, PyTorch, SciPy, NumPy, pandas — and describes a run as configured by two files, a
`--config` and a `--strategy`. Its claim to contain methods "not available anywhere else in the
open-source (or scientific) world" is the authors' own.

The 2022 feature list has since been overtaken by the software. Current documentation describes
self-adaptive retraining during live deployment, feature engineering over 10k+ features,
backtesting with automated retraining, outlier removal, PCA dimensionality reduction, and model
persistence to disk. Reinforcement learning is supported through stable_baselines3 and gym, with a
templated `ReinforcementLearner` and three environments spanning hold/long/short, four-action, and
five-action spaces.

The code is not a research drop: it lives under `freqtrade/freqai/` in the maintained Freqtrade
repository, which is GPL-3.0 — copyleft, so anything built on it inherits those terms. The paper
text itself is CC BY 4.0, and the Zenodo archive record's `cc-by-4.0` metadata describes that
record, not the software. The paper reports no returns, PnL, or profitability figures of any kind.

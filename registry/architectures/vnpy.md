---
id: vnpy
name: vn.py (VeighNa)
summary: Python framework for building quant trading systems, spanning an event engine, broker and datafeed gateways, CTA strategy and backtesting apps, and a multi-factor ML research module.
authors: ["Xiaoyou Chen", "VeighNa Tech Co., Ltd."]
origin: external
repo: https://github.com/vnpy/vnpy
website: https://www.vnpy.com
license: MIT
components: [event engine, broker and datafeed gateways, CTA strategy engine, backtester, alpha research module]
tags: [quant-platform, event-driven, live-trading, backtesting, python, china-markets]
markets: [futures, equities]
added: 2026-08-17
builds_on: [qlib]
prerequisites:
  trading: advanced
  ai: basic
  programming: advanced
  setup: advanced
install:
  - pip install vnpy
entrypoint: "python run.py"
requires:
  - "separate vnpy_* gateway, datafeed and app packages"
  - "broker or datafeed accounts for the gateways used (e.g. CTP, SimNow, RQData)"
runtime: "python >= 3.10"
---

A trading application is assembled here rather than configured: a script constructs an
`EventEngine` and a `MainEngine`, adds gateways such as `CtpGateway`, adds apps such as
`CtaStrategyApp` or `CtaBacktesterApp`, and runs. The core package ships `alpha`, `chart`, `event`,
`rpc` and `trader` subpackages, while broker gateways, datafeed adapters and the strategy and
backtesting apps live in roughly 55 separate `vnpy_*` repositories under the same account, each
installed individually — `pip install vnpy` on its own is not yet a runnable trading setup.

Version 4.0 added `vnpy.alpha` for multi-factor ML strategy research. The module carries `dataset/`,
`model/`, `strategy/` and `lab.py`; the shipped models are Lasso, LightGBM and MLP, and the shipped
feature sets are Alpha 158 and Alpha 101 — the README attributes Alpha 158 to Microsoft's Qlib
project. Supported Python is 3.10+ (64-bit, 3.13 recommended) on Windows 11 and Server 2022 or
later, or Ubuntu 22.04 LTS and later.

Two things shape who this fits. The README and official documentation are primarily in Chinese,
with no English equivalent in the repository root, and gateway and datafeed coverage is heavily
China-centric — CTP futures, SimNow simulation accounts, RQData, TuShare, Wind and iFinD. The
README also opens by promoting VeighNa Fusion, a commercial product activated through partner
futures brokers; the framework indexed here is the MIT-licensed open core (copyright 2015-present,
Xiaoyou Chen), which advertises no returns and sells no signals.

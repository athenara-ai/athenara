---
id: backtrader
name: Backtrader
summary: A pure-Python backtesting and live-trading engine with broker simulation, 122+ built-in indicators plus analyzers, dormant since April 2023 but still importable on current Python.
authors: [Daniel Rodriguez]
origin: external
repo: https://github.com/mementum/backtrader
website: https://www.backtrader.com/
license: GPL-3.0-or-later
components: [cerebro event loop, data feeds, broker simulation, indicators, analyzers, sizers]
tags: [backtesting, live-trading, event-driven, engine, python]
markets: [multi-asset]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: none
  programming: moderate
  setup: basic
install:
  - pip install backtrader
  - "pip install backtrader[plotting]"
runtime: python >= 3.2
---

Backtrader runs strategies through a Cerebro event loop against csv, pandas or blaze data feeds,
with broker simulation covering commissions, slippage, volume filling and Market, Close, Limit,
Stop, StopLimit, StopTrail, StopTrailLimit, OCO and bracket orders. It ships 122+ built-in
indicators, analyzers such as Sharpe, SQN and TimeReturn, sizers, integrated resampling and
replaying, cheat-on-close and cheat-on-open modes, and trading calendars. Live data and trading are
supported for Interactive Brokers (via IbPy), Visual Chart and Oanda (REST v20 only, no streaming).
The library is self-contained with no external dependencies unless you plot.

It is dormant. The newest commit on both `master` and `development` is 2023-04-19 ("Version
1.9.78.123"); the remaining branches last moved in 2020, 2018 and 2017, and the newest PyPI release
is the same 1.9.78.123 from 2023-04-19. It nevertheless still runs: an import of the master
checkout under CPython 3.14.6 on 2026-08-17 reported version 1.9.78.123 and constructed Cerebro and
indicator objects, emitting only SyntaxWarnings for escape sequences in docstrings — though PyPI's
classifiers advertise Python 3.2–3.7 only. Use is still substantial, at roughly 295,000 PyPI
downloads in the trailing month. Two rough edges to expect: the pyfolio integration is marked
deprecated in the README's own feature list, and community.backtrader.com, the support forum the
README directs users to, returns HTTP 522.

The LICENSE file is the full GNU GPL v3 text and every source header reads "either version 3 of the
License, or (at your option) any later version", so the license is GPL-3.0-or-later — GitHub's
detector flattens this to "GPL-3.0". That is strong copyleft: distributing a product with
backtrader embedded carries source-disclosure obligations that the MIT- and Apache-licensed engines
elsewhere in this registry do not. Note also that the README badges point at
github.com/backtrader/backtrader, which redirects to the same mementum repository; the separate
backtrader2/backtrader fork is a community project, not the canonical source.

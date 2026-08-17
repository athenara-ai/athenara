---
id: open-source-asset-pricing
name: Open Source Asset Pricing
summary: "An open reproduction of the cross-sectional return-predictability literature: 212 predictor signals plus 114 placebos, released as portfolio returns, firm characteristics and construction code."
authors: [Andrew Y. Chen, Tom Zimmermann, Peng Li]
origin: external
repo: https://github.com/OpenSourceAP/CrossSection
website: https://www.openassetpricing.com/data/
license: GPL-2.0
access: open
source: Reconstructed from CRSP, Compustat, IBES, OptionMetrics and 13F data
coverage:
  assets: US equities — 212 predictor signals, 114 placebos, 209 stock-level firm characteristics
  frequency: monthly and daily portfolio returns
formats: [csv]
size: 331 signal rows in SignalDoc.csv; ~1.6 GB zipped CSV for firm-level characteristics
tags: [asset-pricing, factor-signals, cross-sectional, replication, portfolio-returns]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: none
  programming: basic
  setup: basic
---

Open Source Asset Pricing reconstructs each published predictor from its original paper, drawing on
CRSP, Compustat, IBES, OptionMetrics and 13F inputs. The project's own registry, `SignalDoc.csv`,
holds 331 rows — 212 categorized "Predictor", 114 "Placebo" and 5 "Drop" — and records each signal's
authors, year, journal, sample period and economic category. By underlying data source the 331
split as Accounting 196, Price 56, Analyst 21, Trading 20, Other 13, Options 9, 13F 8 and Event 8.
Release 2.0.0 (2025-10-22) provides monthly and daily portfolio returns for the 212 predictors
under several construction methods, plus 209 stock-level firm characteristics; most series run
through December 2024, while option-implied volatility predictors end December 2022.

The data is free and needs no registration. A Python package (`pip install openassetpricing`)
exposes `dl_signal_doc()`, `list_port()` and `dl_port()` returning pandas or polars dataframes,
with vintage releases selectable by date; an R package covers the same ground. Note that the
releases themselves live in Google Drive folders hard-coded in the package's `urls.py`, so
availability depends on those folders staying shared — there is no versioned DOI or institutional
archive. The package's own source repository carries no LICENSE file, although its PyPI metadata
declares GPLv2.

The GPL-2.0 above was read from the LICENSE file of the construction-code repository. No separate
license is published for the data itself; the only rights-adjacent text on the data page is a
disclaimer that the views expressed are the authors' own and do not necessarily reflect the
position of the Board of Governors of the Federal Reserve or the Federal Reserve System (Andrew Y.
Chen is at the Federal Reserve Board). The README asks users to cite the method paper, *Open Source
Cross-Sectional Asset Pricing*, Critical Finance Review 11:207–264 (2022).

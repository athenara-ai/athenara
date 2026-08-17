---
id: fama-french-data-library
name: Fama/French Data Library
summary: Kenneth French's library of the Fama/French factor return series — 3-factor, 5-factor, momentum and reversal, plus hundreds of sorted portfolios — as CSV archives reaching back to July 1926.
authors: [Eugene F. Fama, Kenneth R. French, "Tuck School of Business, Dartmouth College"]
origin: external
website: https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html
license: unknown
access: open
source: CRSP and Compustat, with one-month T-bill rates from Ibbotson Associates through May 2024 and the ICE BofA US 1-Month Treasury Bill Index thereafter
coverage:
  assets: US market plus developed, developed ex-US, European, Japanese, Asia Pacific ex-Japan, North American and emerging regions
  start: 1926-07-01
  end: 2026-06-30
  frequency: daily, weekly, monthly and annual
formats: [csv, txt]
size: Small — individual factor archives are 5-13 KB zipped
tags: [factor-models, asset-pricing, risk-factors, benchmark-returns, momentum]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: none
  programming: basic
  setup: basic
---

The library is the reference source for the Fama/French factors, alongside hundreds of univariate,
bivariate and three-way portfolios sorted on size, book-to-market, operating profitability,
investment, E/P, CF/P, dividend yield and prior returns; the five-factor and momentum series are
published for the US and for seven developed and emerging regions. Every dataset is
a zip of CSV and TXT files under a stable `/ftp/` path and downloads with a single unauthenticated
GET; pandas-datareader's `FamaFrenchReader` targets exactly those URLs.

**Rights:** the page carries the line "Copyright Eugene F. Fama and Kenneth R. French" and nothing
else — no terms of use, no license grant, no redistribution permission. Treat it as all rights
reserved by default and link to the source rather than mirroring the files. The series are derived
from CRSP and Compustat, so downstream commercial use may also implicate those vendors' terms.

Two practical notes. The files are legacy-shaped: multi-line preambles and several stacked tables
per file, with annual sections following monthly ones, so a naive `read_csv` fails — which is why
the pandas-datareader wrapper matters. And from the January 2025 release the library switched from
CRSP's Legacy (FIZ) format to Stock and Indexes Flat File Format 2.0 (CIZ), changing monthly
returns from month-to-month holding period returns with dividends reinvested at month-end to
compounded daily returns with dividends reinvested on their ex-dates; series pulled before and
after that release are not strictly comparable, and Legacy-format history is offered separately.
Coverage advances every month — the dates above are the 202606 CRSP vintage, checked 2026-08-17.

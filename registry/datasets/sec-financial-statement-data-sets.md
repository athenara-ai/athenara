---
id: sec-financial-statement-data-sets
name: SEC Financial Statement Data Sets
summary: The SEC's quarterly release of numeric data from the primary financial statements of every XBRL filing made to the Commission, January 2009 through March 2026.
authors: ["U.S. Securities and Exchange Commission", "Division of Economic and Risk Analysis (DERA) / Office of Structured Data"]
origin: external
repo: https://github.com/sec-gov/python-for-dera-financial-datasets
website: https://www.sec.gov/data-research/sec-markets-data/financial-statement-data-sets
license: US Government work
access: open
source: XBRL-tagged financial statements filed with the SEC
coverage:
  assets: All XBRL filers with the Commission
  start: 2009-01-01
  end: 2026-03-31
  frequency: quarterly
formats: [txt]
size: 69 quarterly ZIPs, from 13.22 KB (2009 Q1) to 121.92 MB (2025 Q3)
tags: [sec-filings, xbrl, fundamentals, edgar, point-in-time]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: none
  programming: moderate
  setup: basic
---

Each quarterly ZIP holds four tab-delimited TXT tables — SUB (submissions), TAG (tags), NUM
(numbers) and PRE (presentation of statements). Because SUB carries each filing's accession number
and filed date, quarterly vintages can be assembled without look-ahead, which is what fundamental
factor construction and backtest universes need from a fundamentals source. The numbers are
extracted from registrants' XBRL-tagged filings and appear as filed; the Commission adds its own
filing identifiers and fields such as the Standard Industrial Classification.

Downloads follow a fixed pattern —
`https://www.sec.gov/files/dera/data/financial-statement-data-sets/2026q1.zip` — with no
registration. Automated clients must declare a descriptive User-Agent, or the SEC returns an
"Undeclared Automated Tool" error, and the FAQ states a ceiling of 10 requests per second. The SEC
publishes its own CC0-licensed loading code at
[sec-gov/python-for-dera-financial-datasets](https://github.com/sec-gov/python-for-dera-financial-datasets).
Publication lags: as of 17 August 2026 the newest posting is 2026 Q1, and `2026q2.zip` returns 404.

Three things to know before relying on it. In December 2024 the SEC reposted the series
reprocessed to cover only submissions and numeric data from the primary financial statements as
rendered by the Commission, replacing the earlier non-dimensional and co-registrant compilation and
adding a `segments` field to NUM — cached pre-2024 downloads of a given quarter are therefore not
comparable to current ones. Early coverage is thin because the XBRL mandate phased in: 2009 Q1 is
only 13.22 KB, unusable as a broad universe. And the SEC disclaims accuracy, since the data derives
from registrant submissions where extraction errors are possible, and states the data sets are not
a substitute for the filings themselves. There is no licence file to point at; the reuse permission
is prose in the agency's FAQ, which says "All Government-created content on sec.gov and EDGAR public
filing content are free to access and reuse."

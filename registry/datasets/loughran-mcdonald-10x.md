---
id: loughran-mcdonald-10x
name: Loughran-McDonald 10-X Summaries
summary: Per-filing summary records for every SEC 10-K/10-Q variant filed on EDGAR since 1993, with Loughran-McDonald sentiment word counts precomputed and keyed by CIK and filing date.
authors: ["Tim Loughran", "Bill McDonald", "Software Repository for Accounting and Finance (SRAF), University of Notre Dame"]
origin: external
website: https://sraf.nd.edu/sec-edgar-data/
license: non-commercial (SRAF terms)
access: open
source: SEC EDGAR 10-X filings, parsed by SRAF and scored with the Loughran-McDonald Master Dictionary
coverage:
  assets: 1,249,506 filing records across 10-K and 10-Q variants
  start: 1993-08-13
  end: 2025-12-31
  frequency: event-based (one row per filing)
formats: [csv]
size: 1,249,506 rows x 26 columns (~188 MB)
tags: [sec-filings, sentiment, textual-analysis, edgar, 10-k]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: basic
  ai: basic
  programming: moderate
  setup: basic
---

Each row of `Loughran-McDonald_10X_Summaries_1993-2025.csv` describes one filing: identifiers (CIK,
filing date, accession number, form type, company name, SIC and Fama-French 48-industry code)
alongside precomputed word counts — N_Negative, N_Positive, N_Uncertainty, N_Litigious,
N_StrongModal, N_WeakModal, N_Constraining, N_Complexity and N_Negation — plus document size
fields. Because the counts are keyed by CIK and filing date, they merge directly onto a return
panel, which is how the Loughran-McDonald line of work links 10-K tone to filing-period returns.
The current vintage runs from 13 August 1993 to 31 December 2025 and is dominated by 10-Q (706,255)
and 10-K (232,660) filings, with the remainder split across 10QSB, amendments, 10KSB and 10-K405.

This is not an open dataset. SRAF's homepage states that "All software and data are provided on an
'as is' basis, without warranties, for non-commercial purposes", while the companion Master
Dictionary page describes that resource as "free for use in academic research" and directs
commercial users to negotiate a licence by email. There is no LICENSE file — the terms are prose on
two pages and are not worded identically, so read both before building anything commercial on it.
No single citation is mandated either; the site points to different papers depending on which
fields are used.

Hosting is Google Drive, so a naive `curl` returns the virus-scan interstitial rather than the CSV;
`gdown`, or a second request carrying the returned confirm token, retrieves the ~188 MB file, and
file IDs can change when a new vintage is posted. Related SRAF products include the 10-X Document
Dictionaries (15.8 GB), cleaned and raw 10-X files, master index data, and 10-X header data. The
underlying method is Loughran and McDonald, *When Is a Liability Not a Liability? Textual Analysis,
Dictionaries, and 10-Ks*, Journal of Finance 66(1):35–65 (2011), which Crossref records at 5,258
citing works — the word lists it introduced are the de facto standard finance sentiment lexicon.

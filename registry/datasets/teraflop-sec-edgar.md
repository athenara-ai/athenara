---
id: teraflop-sec-edgar
name: TeraflopAI SEC-EDGAR
summary: A corpus of 8,055,455 SEC EDGAR filings — 10-K, 10-Q, 8-K, S-1, S-8, 20-F, 144 and Forms 3/4/5 — carrying raw filing bytes, parsed plaintext and filer, accession and period metadata.
authors: [Teraflop AI, Datamule (John Friedman), Eventual]
origin: external
website: https://huggingface.co/datasets/TeraflopAI/SEC-EDGAR
license: Apache-2.0
access: open
source: SEC EDGAR, bulk-collected with the datamule-python library and the Datamule API
coverage:
  assets: US public filers; 8,055,455 filings across 10 form types
  frequency: event-based, one row per filing
formats: [parquet]
size: 8,055,455 rows, ~295 GB of Parquet on Hugging Face (43.7B tokens)
tags: [sec-filings, edgar, insider-transactions, event-driven, corpus]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: basic
  ai: basic
  programming: moderate
  setup: moderate
---

The corpus is raw primary disclosure rather than a derived finance-NLP dataset, and its shape
reflects that: Form 4 insider transactions dominate at 4,474,981 filings, followed by 8-K at
1,952,207, 10-Q at 674,240, Form 3 at 387,465, 10-K at 223,275, Form 5 at 114,724, S-8 at 95,543,
144 at 88,726, S-1 at 24,866 and 20-F at 19,428. Hugging Face's datasets-server independently
confirms the 8,055,455 total across 7 columns in a single train split. Each record keeps the raw
filing bytes alongside parsed plaintext and metadata: accession number, filing date, period, a
document list (file type, sequence, filename, description, SGML byte count) and filer details
including company name, CIK, SIC codes, IRS number, state of incorporation, fiscal year, file
number and business address.

Shards are public and ungated, grouped into one Parquet directory per filing type. Hugging Face
reports about 295 GB of Parquet; the card advertises "590 gbs", which is plausibly an uncompressed
figure and is not independently verifiable, so treat 295 GB as the download size. Individual
filing-type directories are large enough that reading specific shards beats pulling the whole
corpus. The card's token count, 43,725,818,627, was measured with the Comma v0.1 BPE tokenizer
(64,000 vocab), with 10-Q (17.5B), 10-K (14.5B) and 8-K (3.5B) the largest contributors.

Collection used datamule-python, an MIT-licensed and actively maintained library, with SGML parsed
by secsgml and HTML/XML converted to plaintext by selectolax and a modified doc2dict. The
repository ships a full Apache License 2.0 text, though its copyright line is left as the unfilled
template, so no copyright holder is named; the underlying filings are US SEC public-domain
documents. There is no accompanying paper — this is a data release only.

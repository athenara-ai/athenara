---
id: fomc-communication
name: FOMC Communication (Trillion Dollar Words)
summary: 2,480 hand-annotated sentences from FOMC speeches, meeting minutes and press-conference transcripts labelled hawkish, dovish or neutral, released with the ACL 2023 Trillion Dollar Words paper.
authors: [Agam Shah, Suvan Paturi, Sudheer Chava, "Financial Services Innovation Lab, Georgia Tech"]
origin: external
repo: https://github.com/gtfintechlab/fomc-hawkish-dovish
website: https://huggingface.co/datasets/gtfintechlab/fomc_communication
license: CC-BY-NC-4.0
access: open
source: FOMC speeches, meeting minutes and press-conference transcripts, manually annotated by the Georgia Tech Financial Services Innovation Lab
coverage:
  assets: 2,480 annotated sentences (1,984 train / 496 test)
formats: [csv, xlsx]
size: 2,480 labelled sentences (~526 KB)
tags: [monetary-policy, fomc, sentiment-analysis, macro, annotated]
markets: [rates, equities]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: moderate
  programming: basic
  setup: basic
---

Labels encode monetary-policy stance — dovish, hawkish, neutral — over sentences drawn from three
FOMC communication types the authors describe as the largest tokenized and annotated collection of
their kind. The split is 1,984 train and 496 test rows for 2,480 total; the Hugging Face viewer
page is commonly read as 1,980 train rows, but the datasets-server count is 1,984. The CSVs load
directly from Hugging Face, which also serves the two source annotation workbooks; the GitHub
repository adds the training data, grid-search results and look-ahead-bias checks.

What separates this from generic financial sentiment data is the second half of the accompanying
work: the paper aggregates the labels into a monetary-policy-stance measure and tests it against
treasury yields, stock returns and macro indicators, and the repository ships that analysis as
notebooks for treasury, buy-and-hold abnormal returns, and CPI/PPI. A companion classifier,
FOMC-RoBERTa, is released under the same organization with a short `how_to_use.py` that runs it
over arbitrary sentences through a transformers text-classification pipeline. The paper is *Trillion
Dollar Words: A New Financial Dataset, Task & Market Analysis*, ACL 2023, pages 6664–6679
([2023.acl-long.368](https://aclanthology.org/2023.acl-long.368/)).

The license is the binding constraint here: CC BY-NC 4.0 requires attribution and prohibits
commercial use, so the annotations cannot lawfully back a commercial trading signal even though the
underlying FOMC documents are US Government works. It was read from the repository's LICENSE.md,
which contains the full CC BY-NC 4.0 text; GitHub's license detector reports "Other" only because
of the `.md` filename. The project is dormant — last commit 2024-12-17, Hugging Face dataset last
modified 2024-12-16 — so the corpus ends well before the present and is not being extended. At
2,480 sentences it is a benchmark and a seed for signal construction, not a corpus for training a
model from scratch.

---
id: financial-phrasebank
name: Financial PhraseBank
summary: A human-annotated sentiment dataset of 4,840 English sentences from financial news, labelled positive, negative, or neutral from an investor's perspective.
authors: [Pekka Malo, Ankur Sinha, Pyry Takala, Pekka Korhonen, Jyrki Wallenius]
origin: external
website: https://huggingface.co/datasets/takala/financial_phrasebank
license: CC-BY-NC-SA-3.0
access: open
source: English-language financial news
coverage:
  assets: 4,840 annotated sentences
size: 4,840 sentences in four agreement-level configurations
tags: [sentiment-analysis, financial-news, classification, annotated, benchmark]
markets: [equities]
added: 2026-08-15
prerequisites:
  trading: basic
  ai: basic
  programming: basic
  setup: basic
---

The standard small-scale benchmark for financial sentiment classification, originating from *Good
Debt or Bad Debt: Detecting Semantic Orientations in Economic Texts* (JASIST 2014,
[arXiv:1307.5336](https://arxiv.org/abs/1307.5336)). Sentences were annotated by multiple people
and the dataset ships in four configurations by inter-annotator agreement: ≥50% (4,846 instances),
≥66% (4,217), ≥75% (3,453), and unanimous (2,264).

Widely used to fine-tune and evaluate financial LLMs. Note the non-commercial share-alike license,
and that the Hugging Face dataset viewer does not render it (the repo uses a loading script).

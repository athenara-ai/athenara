---
id: momentum-transformer
name: "Trading with the Momentum Transformer: An Intelligent and Interpretable Architecture"
summary: Proposes an attention-LSTM hybrid that learns position sizing for a time-series momentum portfolio of liquid futures contracts.
authors: [Kieran Wood, Sven Giegerich, Stephen Roberts, Stefan Zohren]
origin: external
repo: https://github.com/kieranjwood/trading-momentum-transformer
website: https://kieranjwood.github.io/publication/momentum-transformer/
license: MIT
year: 2021
venue: arXiv
arxiv: "2112.08534"
tags: [attention, time-series-momentum, deep-learning, position-sizing, interpretability]
markets: [futures]
added: 2026-08-17
prerequisites:
  trading: advanced
  ai: advanced
  programming: none
  setup: none
---

The Momentum Transformer is described by its authors as an attention-LSTM hybrid that "outperforms
benchmark time-series momentum and mean-reversion trading strategies", improves performance on
returns net of transaction costs, and adapts to new market regimes such as the SARS-CoV-2 crisis.
The work comes from the Oxford-Man Institute of Quantitative Finance and the Oxford Internet
Institute at the University of Oxford. It has stayed a preprint: v1 was submitted in December 2021
and v3 in November 2022, and no peer-reviewed venue could be found for it.

What the paper measures and what the released code can measure are not the same experiment. The
paper's results come from a portfolio of 50 of the most liquid continuous futures contracts over
1990–2020, drawn from the commercial Pinnacle Data Corp CLC database. The authors' own MIT-licensed
implementation instead runs on the free Nasdaq Data Link (Quandl) continuous-futures dataset, which
needs an account but no paid subscription — so numbers reproduced from the repository should not be
read as the paper's numbers.

That implementation is the canonical one, named in the paper text itself, but it is effectively
dormant: the last substantive code commit is March 2022 and everything since has been README edits.
`requirements.txt` is pinned to 2021-era versions (absl-py 0.13.0, gpflow 2.2.1, h5py 2.10.0), so a
clean install against a current Python and TensorFlow will need dependency work first.

---
id: gauss314-skills
name: gauss314 Financial Market Skills
summary: A 32-skill pack from UCEMA's AI courses covering market data from 27 global and Argentine sources, two broker execution integrations, and tools for options, backtesting and portfolios.
authors: ["Juanpy (gauss314)"]
origin: external
repo: https://github.com/gauss314/skills
website: https://skills.sh/gauss314/skills
license: MIT
targets: [claude-code, generic]
requires:
  - API keys for the FRED Macro, Alpha Vantage, Alpaca Data and Finnhub skills
  - An Alpaca or Primary account for the two broker execution skills
tags: [market-data, backtesting, option-pricing, portfolio-optimization, argentina]
markets: [multi-asset]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: basic
  programming: moderate
  setup: moderate
builds_on: [buy-and-hold-baseline]
---

The repository holds 32 skill directories, grouped in the README as 21 global data skills, six
Argentina-specific ones (BCRA Macro, Data912, MAE, BYMA, CAFCI, INDEC), two broker execution
skills and three tools. Eighteen of the global data skills are marked free and two freemium, with
five requiring an API key, among them FRED Macro, Alpha Vantage, Alpaca Data and Finnhub. Installation is one
command into any SKILL.md-standard agent — `npx skills add gauss314/skills -g` for selected
skills, `npx skills add gauss314/skills --all` for all 32.

The three tools are the quant core, and they run on numpy, pandas and scipy alone. The backtesting
skill follows a five-stage methodology taken from the course material (Data → Research → Metrics →
Parameterisation → Validation) with about 30 vectorized risk and performance ratios, ten taxonomic
classes of indicators, an event-driven engine, Johnson SU and t/Gaussian-copula forward
simulation, walk-forward cross-validation with an IS/OOS split and gap, parametric stress testing
and fundamental screens (Altman Z, Piotroski F, DuPont); it ships SPY benchmark returns since
1980, momentum and contrarian strategy return series, sample portfolios and validation cases. The
option-pricing skill spans 15 CLI modes (Black-Scholes, binomial CRR, trinomial, Monte Carlo with
antithetics, Longstaff-Schwartz, Bjerksund-Stensland/BAW, Heston, Bates, greeks, implied
volatility) and the portfolio skill 12 (Markowitz, Black-Litterman with Idzorek omega, HRP, HERC,
NCO), neither depending on Riskfolio-Lib or PyPortfolioOpt. Internal counts disagree — the README
credits the event-driven engine with eight built-in strategies where the skill's own frontmatter
says six or more — and the author's throughput and validation claims (419k Black-Scholes options
per second, a 33-check validation suite, portfolio output matching library results exactly) are
self-reported and were not reproduced here.

Two skills place real orders: Alpaca Trading (US stocks and options, paper and live base URLs both
documented) and Primary (Argentine futures). Nine or more of the data skills are scrapers against
commercial sites — Finviz, Macrotrends, MarketScreener, MarketWatch, CompaniesMarketCap,
SimplyWallSt, Barchart, Investing.com — and MIT covers the skill code, not permission to scrape
those sources; each site's terms of service remain the user's problem. Documentation is mixed
English and Spanish: the top-level README is English, while the alpaca-trading skill body and the
backtesting skill's six reference documents are Spanish. This is a single-author project written
for UCEMA's AI courses, created 2026-06-02 with roughly twelve days of commits behind it, and
dormant since 2026-06-14.

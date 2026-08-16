---
id: buy-and-hold-spy-2024
agent: buy-and-hold-baseline
mode: backtest
period:
  start: 2024-01-02
  end: 2024-12-31
markets: [equities]
capital:
  initial: 10000
  currency: USD
  max_leverage: 1
costs:
  commission_model: "none — single commission-free ETF purchase"
  slippage_model: "none — one market order at the daily close"
  financing_included: false
  fills: modeled
metrics:
  total_return_pct: 25.6
  sharpe: 1.47
  max_drawdown_pct: -8.4
  volatility_pct: 12.6
n_trades: 1
n_days: 252
selection:
  variants_tested: 1
  selection_method: "only variant — the strategy has no parameters"
runs:
  n: 1
  seed_policy: "deterministic strategy"
data:
  source: "SPY daily adjusted close (dividends reinvested), Yahoo Finance chart API"
  point_in_time: true
  survivorship_bias_free: true
verification:
  method: author-reported
status: active
reported: 2026-08-15
---

## Method

Buy SPY at the first 2024 close (2024-01-02), hold through the last (2024-12-31), dividends
reinvested — computed on Yahoo Finance's adjusted close series (252 trading days).

- **Total return**: last adjusted close / first adjusted close − 1.
- **Volatility**: standard deviation of daily returns, annualized (×√252).
- **Sharpe**: daily excess return over a 5.2% annual risk-free rate (2024 T-bill area),
  annualized. With rf = 0 it would be 1.88 — always check which convention a Sharpe you're
  comparing against uses.
- **Max drawdown**: worst peak-to-trough decline on adjusted closes; −8.4% occurred in the early
  August 2024 selloff.

## Assumptions

No transaction costs beyond the declared model: the strategy trades once; a commission-free ETF
purchase and frictionless dividend reinvestment are assumed. The capital base is a nominal
$10,000 — the strategy scales linearly, so the percentage metrics are capital-independent up to
lot-size effects. There is no development period to declare: the strategy has zero tuned
parameters, so nothing was fitted to the evaluation window.

## Reproduction

Fetch SPY daily data for 2024 from any total-return source and apply the formulas above; results
should match to within rounding of the data vendor's adjustments.

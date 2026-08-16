---
id: rl-policy
name: Reinforcement-learning policy
summary: An agent's trading decisions come from a policy trained with reinforcement learning against a market environment.
aka: [drl-trader, deep-rl agent]
components: [market environment, reward function, policy network, training pipeline]
origin: native
tags: [reinforcement-learning, design-pattern, backtesting]
added: 2026-08-15
prerequisites:
  trading: moderate
  ai: advanced
  programming: none
  setup: none
---

## How it works

The market is modeled as an environment (state = prices, indicators, positions; actions = buy /
sell / hold or portfolio weights; reward = usually risk-adjusted return). A policy is trained
offline against historical or simulated data with algorithms like PPO, SAC, or DQN, then deployed
to act on live observations. Unlike LLM-based agents the policy is small, fast, and cheap at
inference time — the intelligence is baked in during training.

## Design choices

- **Reward shaping is the strategy.** Optimizing raw return produces leverage-seeking policies;
  most practical rewards penalize drawdown or volatility explicitly.
- **Environment fidelity.** Transaction costs, slippage, and market impact must be in the training
  environment or the policy learns to exploit their absence.
- **Regime coverage.** Policies interpolate; they do not extrapolate. Training data needs bear
  markets, or the first real one is out-of-distribution.

## Failure modes

- Backtest overfitting: the classic failure. Millions of gradient steps against one historical
  path is a strong optimizer pointed at a weak target.
- Non-stationarity: a policy trained on 2015–2022 microstructure decays silently as the market
  changes.
- Reward hacking: policies discover degenerate behaviors (churning tiny positions for reward
  quirks) that only show up in live trading.

## Hybrid variants

RL policies increasingly appear *inside* agentic systems — an LLM planner selects among trained
policies, or an RL execution layer implements decisions an LLM makes at lower frequency.

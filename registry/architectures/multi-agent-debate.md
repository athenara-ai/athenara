---
id: multi-agent-debate
name: Multi-agent debate
summary: Opposing analyst agents argue a bullish and bearish case before a decision-maker agent commits to a trade.
aka: [bull-bear debate, adversarial analysts]
components: [bullish researcher, bearish researcher, moderator or trader, risk manager]
origin: native
tags: [multi-agent, llm, deliberation, design-pattern]
added: 2026-08-15
prerequisites:
  trading: basic
  ai: moderate
  programming: none
  setup: none
paper: [tradingagents-paper]
---

## How it works

Two (or more) researcher agents are given the same evidence — prices, news, fundamentals — and
opposite mandates: one builds the strongest case *for* a position, the other the strongest case
*against*. A downstream agent (trader, moderator, or portfolio manager) reads the debate and
decides. Optionally a risk-management agent can veto or resize the final decision.

The pattern borrows from adversarial deliberation: a single LLM analyst tends to anchor on the
first narrative it forms, while forcing an explicit counter-argument surfaces disconfirming
evidence before capital is committed.

## Design choices

- **Debate depth.** One round is cheap; multi-round rebuttals raise cost roughly linearly and tend
  to hit diminishing returns quickly.
- **Symmetric evidence.** Both sides should see identical data. If the bull sees the news feed and
  the bear only sees prices, the debate measures data access, not reasoning.
- **Decision extraction.** The judge should output a structured decision (direction, size,
  confidence), not prose, so the execution layer doesn't re-interpret an essay.

## Failure modes

- Both debaters converge on the consensus view and the "debate" is theater.
- The judge rewards rhetorical confidence rather than evidence quality.
- Token costs scale with debate rounds × assets × rebalance frequency — expensive at high
  frequency, so the pattern fits daily/weekly horizons better than intraday.

## Known implementations

TradingAgents (see related) structures its analyst layer this way, with bull/bear researchers
feeding a trader agent and a risk-management team.

---
id: planner-executor
name: Planner–executor
summary: A planning agent decomposes a trading objective into steps that cheaper executor agents or plain tools carry out.
aka: [orchestrator-workers, manager-worker]
components: [planner, executors, verifier]
origin: native
tags: [multi-agent, llm, orchestration, design-pattern]
added: 2026-08-15
prerequisites:
  trading: basic
  ai: moderate
  programming: none
  setup: none
---

## How it works

A planner agent owns the objective ("rebalance the portfolio for the coming week") and produces an
explicit plan: which data to gather, which analyses to run, which orders to draft. Each step is
executed by a worker — a smaller model, a single-purpose agent, or a deterministic tool — and
results flow back to the planner, which revises the plan or hands the outcome to a verifier before
anything reaches the market.

The separation matters because planning and execution fail differently: planning errors are
reasoning errors, execution errors are integration errors. Isolating them makes both debuggable.

## Design choices

- **Plan as artifact.** Persist the plan as structured data (steps, dependencies, status). It
  becomes the audit trail regulators-of-your-own-money want anyway.
- **Executor capability boundaries.** Workers get the narrowest tool access that does the job —
  the researcher can read market data but cannot place orders.
- **Verification gate.** A final check (rule-based or agentic) between the plan's output and order
  submission is where risk controls naturally live.

## Failure modes

- The planner micro-manages: plans so detailed that workers add nothing, doubling cost for no
  benefit.
- Stale plans: markets move while a long plan executes; plans need revision triggers, not just
  linear execution.
- Verifier rubber-stamping — if the verifier is the same model with the same context, it tends to
  approve its own reasoning.

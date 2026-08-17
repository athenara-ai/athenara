# Contributing to Athenara

Every contribution is a pull request that adds or edits Markdown files in `registry/`. You don't have to be the author of a resource to add it — indexing someone else's public work (with correct attribution, license, and links) is a valuable contribution.

## The easy path: the form

Use **[Add a resource](https://athenara.info/contribute/)** on the site. It's generated from the schemas, validates as you type, and opens GitHub's editor with a complete, valid file — GitHub forks the repository for you, and "Propose changes" opens the pull request. You never write YAML.

For corrections, every entry page has an **Edit this entry** link straight into GitHub's editor. Dead links, wrong licenses, and stale metadata are the most useful fixes there are.

If neither works for you, open a [resource suggestion issue](.github/ISSUE_TEMPLATE/add-resource.yml) and a maintainer will do the rest.

## The manual path

1. Pick the right directory: `agents/`, `architectures/`, `datasets/`, `skills/`, `papers/`, `benchmarks/`, or `results/`.
2. Copy an existing entry as a starting point. Every frontmatter field is defined and described in [`schemas/`](schemas/).
3. Name the file after its `id` (e.g. `id: finrl` → `finrl.md`). Ids are unique across the whole registry.
4. Use the Markdown body for everything long-form: how it works, methodology, limitations.
5. Connect it to the graph with the typed edge fields — `implements`, `paper`, `uses_dataset`, `evaluated_on`, `reproduces`, `builds_on`. These connections are what make the registry more than a list; reverse links are computed automatically.
6. Declare `prerequisites` honestly — the four required axes (`trading`, `ai`, `programming`, `setup`, each `none`–`expert`) are how a newcomer to trading, an AI researcher, or a quant with no ML background finds what fits them. Rating everything `none` to look approachable wastes exactly the reader you were trying to reach. Freeform `tags` remain yours to invent.
7. Run `npm run validate` before opening the PR. CI runs the same check and replies on the PR with plain-language guidance if something's off.
8. A native entry (`origin: native`) for anything runnable must carry its definition — a `repo` or the `install`/`entrypoint` fields — so an agent or reader can actually obtain and run it. Prose alone doesn't merge.

## Reporting results

Results power the leaderboard and follow the strictest schema ([`schemas/result.schema.json`](schemas/result.schema.json)). The schema asks for what a skeptical reader needs: period, mode, capital base, the cost model, sample size (`n_trades`, `n_days`), how many variants you tested before this one, and how many runs are behind the numbers — for model-driven agents, report several runs and their dispersion, because a single LLM-agent run is anecdote, not evidence.

Honesty rules:

- Backtests are labeled backtests. Live is live. Backtests are listed as evidence, never ranked against live results.
- `verification.method` names the mechanism: `author-reported` is the honest default; `ci-reproduced`, `broker-attested`, and `point-in-time-committed` require `evidence` links.
- Declare `development_period` (the data you saw while building); out-of-sample status is derived, not asserted.
- A withdrawn result gets `status: withdrawn` and **stays in the registry** — it counts in your disclosure record. That's the point.
- **Negative results are welcome.** "This lost 30% in a regime change, here's why" is exactly the knowledge this project exists to accumulate.

Results whose period begins after the agent's registration commit automatically earn a **forward-tested** badge — derived from git history, not settable by authors.

## What doesn't belong

- Marketing for paid signal services, courses, or funds.
- Performance claims outside the result schema.
- Financial advice. Everything here is research and engineering knowledge; listing is not endorsement.

## Editing and disagreement

If a claim in an entry is disputed, open an issue with evidence — entries converge on what can be verified.

# Athenara

**The open ecosystem for agentic trading.**

Athenara is a community-driven registry of AI agents, architectures, datasets, skills, research, benchmarks, and results for trading and financial markets — the discovery and context layer for a field whose knowledge is currently scattered across GitHub, arXiv, and a hundred Discords.

It is open infrastructure, not a trading product: no fund, no signals, no paywall. Success is measured by how many people use and contribute to it.

## How it works

Every resource is a Markdown file with YAML frontmatter in [`registry/`](registry/), validated against the open [JSON Schemas](schemas/) that define the Athenara resource format. The website ([athenara.info](https://athenara.info)), search index, and JSON API are built from those files. Contributing is a pull request; provenance and versioning come from git.

```
registry/
  agents/          AI trading agents and agent systems
  architectures/   design patterns and frameworks for building them
  datasets/        data for training and evaluating agents
  skills/          reusable capabilities for coding/research/trading agents
  papers/          research, linked to implementations and reproductions
  benchmarks/      standardized evaluations
  results/         performance reports (backtest, paper, live) → leaderboard
schemas/           canonical JSON Schemas for all of the above
```

Most entries are **external**: the project lives on GitHub or arXiv, and Athenara adds structured metadata, context, and connections to related work. Entries can also be **native** — published directly here.

## Share the evidence, not the edge

Results are welcome at any disclosure level, from fully open code to results-only. Every result carries the context a skeptical reader needs — period, mode (backtest / paper / live), capital base, cost model, sample size, how many variants were tried, how many runs are behind the numbers — and a verification label that names its mechanism, with author-reported as the honest default. Results whose period begins after the agent's registration commit earn a forward-tested badge derived from git history. Negative results are first-class: a documented failure teaches the community more than an unverifiable win, and withdrawn results stay in the record.

## AI-native

Athenara is built to be read by agents as well as humans. `llms.txt` is the front door: it maps every entry and teaches the URL conventions, so an agent can disclose progressively — search index → section metadata → a single entry as Markdown (`/{section}/{id}.md`) or JSON — instead of downloading everything. Bulk endpoints (`/api/v1/{section}.full.json`, `/llms-full.txt`) exist for corpus-level use, and the schemas are served at their canonical URLs for any tool to validate against.

## Running locally

```
npm install
npm run validate   # check all registry entries against the schemas
npm run dev        # site at localhost:4321
npm run build      # validate + build site + search index
```

## Contributing

The easiest path is the **Add a resource** form on the site — it generates a valid entry from the schemas and opens the pull request for you, no YAML required. Details and the manual path: [CONTRIBUTING.md](CONTRIBUTING.md). Adding one well-described resource is a real contribution.

## License

Code is MIT. Registry content (`registry/`) is [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — free to reuse with attribution. Indexed external projects keep their own licenses, recorded in each entry.

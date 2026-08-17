---
id: ccxt
name: CCXT
summary: A unified REST and WebSocket trading API covering 102 crypto exchanges and 7 prediction markets, with bindings for JavaScript/TypeScript, Python, PHP, C#, Go and Java.
authors: [CCXT, Igor Kroitor]
origin: external
repo: https://github.com/ccxt/ccxt
website: https://docs.ccxt.com
license: MIT
components: [unified REST methods, WebSocket streaming, per-exchange implementations]
tags: [exchange-api, market-data, order-execution, websocket, crypto]
markets: [crypto, prediction-markets]
added: 2026-08-17
prerequisites:
  trading: moderate
  ai: none
  programming: moderate
  setup: basic
install:
  - pip install ccxt
  - npm install ccxt
---

CCXT is the connectivity layer other trading systems sit on: unified `createOrder`, `fetchBalance`,
`fetchOHLCV` and `fetchTrades` calls plus streaming `watchTicker` and `watchOrderBook`, normalized
across venues. The repository's own `exchanges.json` manifest resolves to 102 exchange ids, 76 of
them with WebSocket support and 7 of them prediction markets (binance, hyperliquid, kalshi,
limitless, myriad, opinion, polymarket), spanning both CEX and DEX venues — the README badge's
count of 103 is out of step with the manifest. WebSocket support, formerly sold as CCXT Pro, now
lives in the MIT-licensed repository. Development is daily, including automated cross-language
transpilation; version 4.5.73 is current across PyPI, npm and GitHub releases. Downstream users
include Freqtrade, which pins `ccxt==4.5.71` as a hard dependency.

For agent use, the repo ships first-party skills under `.claude/skills/` — ccxt-python,
ccxt-typescript, ccxt-php, ccxt-csharp, ccxt-go, ccxt-java, ccxt-cli and new-exchange, each a
SKILL.md with Agent Skills Spec frontmatter — installable into `~/.claude/skills/` or
`~/.opencode/skills/` with `npx skills add ccxt/ccxt`, alongside an `llms.txt` for LLM consumption.
That same bundle also carries partner-authored skills contributed by the Binance Web3 team under
`.agents/skills/`, symlinked into the same directory; they are promotional third-party content
rather than CCXT's own library surface.

One commercial term matters before an agent places orders. Per the README: "CCXT participates in
builder programs with the exchanges listed above, which means that in order to support the CCXT
project users pay a small fee (1 bps) on top of the exchanges' fees when using the exchanges' API
through CCXT. This is optional and can be disabled by setting `exchange.options['builderFee'] =
False`." It applies to seven builder-code venues (aster, extended, grvt, hyperliquid, lighter,
nado, pacifica), not to all 102. The README additionally carries a sponsored promotion block and
exchange referral links throughout its venue tables. The MIT license is read from `LICENSE.txt`
("Copyright © 2024 Igor Kroitor") and confirmed by the npm package metadata; PyPI's metadata
carries no license field at all.

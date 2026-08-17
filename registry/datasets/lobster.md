---
id: lobster
name: LOBSTER
summary: Nanosecond-timestamped limit order book reconstructions from NASDAQ Historical TotalView-ITCH for the entire NASDAQ universe since 27 June 2007, sold by subscription.
authors: ["LOBSTER DATA TECHNOLOGY & SCIENCE LTD", "Humboldt Universität zu Berlin", "University of Vienna", "Ruihong Huang"]
origin: external
repo: https://github.com/rhuang10/lobsterdata
website: https://lobsterdata.com/
license: proprietary
access: commercial
source: NASDAQ Historical TotalView-ITCH
coverage:
  assets: Entire universe of NASDAQ-traded stocks, up to 200 price levels
  start: 2007-06-27
  frequency: event-based (per-order messages, millisecond to nanosecond precision)
formats: [csv]
size: One message CSV and one orderbook CSV per ticker per trading day (~74 MB uncompressed for one stock, one day, 10 levels)
tags: [limit-order-book, market-microstructure, high-frequency, nasdaq, tick-data]
markets: [equities]
added: 2026-08-17
prerequisites:
  trading: advanced
  ai: none
  programming: moderate
  setup: moderate
---

LOBSTER (Limit Order Book System — The Efficient Reconstructor) rebuilds the full order book from
NASDAQ's Historical TotalView-ITCH files, emitting one message file and one orderbook file per
ticker per trading day. The message schema is six columns: time in seconds after midnight, event
type (1 submission, 2 cancellation, 3 deletion, 4 execution of a visible limit order, 5 execution
of a hidden limit order, 6 cross trade, 7 trading halt), order ID, size, price as the dollar price
times 10,000, and direction (-1 sell, 1 buy). Coverage runs from 27 June 2007 to the day before
yesterday, at up to 200 price levels. The platform has served the academic community since 2013
and is operated by LOBSTER DATA TECHNOLOGY & SCIENCE LTD, founded by financial econometricians
affiliated with Humboldt Universität zu Berlin and the University of Vienna.

Access is paid. Full data requires an institutional flat rate (10 accounts, 1,000 GB of storage,
no restrictions on tickers, requests or periods), a student seat under such a subscription, or a
staff-approved trial for academic conference attendees. No price list is public — the access page
defers to one behind sign-in. Metered tiers are billed in an internal prepaid credit the site calls
"lobster-data-coin" (LDC), charged against the real CSV size at 1 LDC/MB for level 0 and 0.1 LDC/MB
for level 10; despite the name it is an account-credit unit, not a cryptocurrency or token. There
is also no data licence to read: terms are accepted inside the application, so redistribution
rights should not be assumed for sample or subscription data.

Free single-day samples need no login — the full 2012-06-21 session for AMZN, AAPL, GOOG, INTC and
MSFT at levels 1, 5 and 10, plus AAPL, MSFT and SPY at levels 30 and 50 for 09:30–10:30 — but they
are served only from the legacy host,
[php.lobsterdata.com](https://php.lobsterdata.com/info/DataSamples.php); the same paths on
lobsterdata.com return the single-page-app shell rather than the ZIP. Subscribers can drive the
request API from the official Python client, `pip install lobsterdata`, which is MIT-licensed but
requires Python 3.13 or newer plus an API key and secret generated on the request-data page. The
client repository sits under a personal GitHub account rather than a LOBSTER organisation; its
official standing rests on its maintainer's lobsterdata.com contact address and the LOBSTER
branding in its README.

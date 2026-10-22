# Deterministic Intent Admission Service

<!-- 561-group-standards:badges:start -->
[![Red Cup Engineering](https://img.shields.io/badge/561%20Group-Red%20Cup%20Engineering-c0392b)](https://github.com/red-cup-engineering)
[![License: MIT](https://img.shields.io/badge/license-MIT-c0392b)](LICENSE)
[![Indigenous data: CARE](https://img.shields.io/badge/Indigenous%20data-CARE-4b6f44)](https://github.com/red-cup-engineering/.github/blob/main/GOVERNANCE.md)
[![Tips welcome](https://img.shields.io/badge/tips-welcome-d4a017)](https://github.com/561-group/.github/blob/main/TIPS.md)
<!-- 561-group-standards:badges:end -->

A public service, fabricated and assayed as a Capability Cell, with one
capability: convert a finite agentic request into an exact, downward-bounded
inference-work-lot intent.

```js
import { admitBoundedAgenticIntent } from "@red-cup-engineering/deterministic-intent-admission-service";
```

Stable action:
`https://deterministic-intent-admission.actions.561.group/invoke`

The action refuses model/provider selection, credential-shaped context,
cyclic or unbounded context, absent consideration alternatives, and any request
to increase the hard token ceiling.

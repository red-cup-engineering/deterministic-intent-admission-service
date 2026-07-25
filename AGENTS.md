# Deterministic Intent Admission Cell

This cell performs one operation: admit one finite customer request into one
bounded inference-work-lot intent. It never selects a model or provider,
increases the requested token ceiling, mutates customer state,
authorizes upward escalation, or decides customer acceptance.

The executable kernel is derived from the existing bounded-inference intent
compiler. Its source provenance is fixed in `content/source-provenance.json`.
ActivityPub, A2A, package publication, deployment, chain provisioning, and
conformance remain independently observed faces or hired providers.

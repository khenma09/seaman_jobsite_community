## 2024-05-20 - [Batch DOM updates in jobs.js]
**Learning:** Found N+1 DOM insertion pattern in jobs.js. Even with small lists, batching DOM updates is a core best practice.
**Action:** Always look for loops calling insertAdjacentHTML or appendChild.

## 2025-01-25 - [Batch DOM updates in pagination.js]
**Learning:** Confirmed the N+1 DOM insertion pattern existed in `pagination.js` as well. This seems to be a common legacy pattern in this codebase.
**Action:** When working on list rendering files, proactively check for `forEach` loops with `insertAdjacentHTML`.

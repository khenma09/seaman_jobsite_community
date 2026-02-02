## 2024-05-20 - [Batch DOM updates in jobs.js]
**Learning:** Found N+1 DOM insertion pattern in jobs.js. Even with small lists, batching DOM updates is a core best practice.
**Action:** Always look for loops calling insertAdjacentHTML or appendChild.

## 2024-05-21 - [Batched DOM updates consistency]
**Learning:** The N+1 DOM pattern was also present in `employers.js` and `pagination.js` (and `jobs.js` pagination). This suggests a copy-paste pattern during development.
**Action:** When fixing a pattern in one file, search the entire codebase for similar snippets to apply the fix globally.

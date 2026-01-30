## 2024-05-20 - [Batch DOM updates in jobs.js]
**Learning:** Found N+1 DOM insertion pattern in jobs.js. Even with small lists, batching DOM updates is a core best practice.
**Action:** Always look for loops calling insertAdjacentHTML or appendChild.

## 2024-05-21 - [Batch DOM updates consistency]
**Learning:** Found that while `jobs.js` was optimized, `employers.js` and `pagination.js` were not. "Optimized" status in memory can be misleading.
**Action:** When fixing a pattern (like N+1 DOM inserts), grep the entire codebase for similar occurrences (e.g., `insertAdjacentHTML` inside loops).

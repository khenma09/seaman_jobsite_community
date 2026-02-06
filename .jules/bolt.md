## 2024-05-20 - [Batch DOM updates in jobs.js]
**Learning:** Found N+1 DOM insertion pattern in jobs.js. Even with small lists, batching DOM updates is a core best practice.
**Action:** Always look for loops calling insertAdjacentHTML or appendChild.

## 2024-05-21 - [Incomplete optimizations]
**Learning:** Found that `jobs.js` had optimized list rendering but unoptimized pagination rendering.
**Action:** When optimizing a file, check ALL loops including auxiliary functions like `updatePagination`.

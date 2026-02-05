## 2024-05-20 - [Batch DOM updates in jobs.js]
**Learning:** Found N+1 DOM insertion pattern in jobs.js. Even with small lists, batching DOM updates is a core best practice.
**Action:** Always look for loops calling insertAdjacentHTML or appendChild.

## 2024-05-21 - [Batch DOM updates in pagination.js]
**Learning:** The N+1 DOM insertion pattern was also present in pagination.js, confirming it's a recurring anti-pattern in this project.
**Action:** When working on any list rendering here, assume this optimization is needed.

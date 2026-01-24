## 2024-05-20 - [Batch DOM updates in jobs.js]
**Learning:** Found N+1 DOM insertion pattern in jobs.js. Even with small lists, batching DOM updates is a core best practice.
**Action:** Always look for loops calling insertAdjacentHTML or appendChild.

## 2024-05-21 - [Batch DOM updates in employers.js]
**Learning:** Found N+1 DOM insertion pattern in employers.js for both list and pagination. This matches the pattern previously found in jobs.js.
**Action:** Consistently check all list rendering logic (including pagination) for iterative DOM updates and refactor to batch string construction.

## 2024-05-20 - [Batch DOM updates in jobs.js]
**Learning:** Found N+1 DOM insertion pattern in jobs.js. Even with small lists, batching DOM updates is a core best practice.
**Action:** Always look for loops calling insertAdjacentHTML or appendChild.

## 2024-05-21 - [Batch DOM updates in pagination.js]
**Learning:** Confirmed N+1 DOM insertion pattern in pagination.js. Applied the same batching optimization (map + join) to both list rendering and pagination controls.
**Action:** Continued enforcement of batch DOM updates across the codebase.

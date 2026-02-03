## 2024-05-20 - [Batch DOM updates in jobs.js]
**Learning:** Found N+1 DOM insertion pattern in jobs.js. Even with small lists, batching DOM updates is a core best practice.
**Action:** Always look for loops calling insertAdjacentHTML or appendChild.

## 2024-10-24 - [Systemic N+1 DOM insertions]
**Learning:** The N+1 DOM insertion anti-pattern appears systematically across multiple files (jobs.js, employers.js, pagination.js).
**Action:** Default to map/join pattern for all list rendering in this codebase.

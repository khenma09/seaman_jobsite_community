## 2024-05-20 - [Batch DOM updates in jobs.js]
**Learning:** Found N+1 DOM insertion pattern in jobs.js. Even with small lists, batching DOM updates is a core best practice.
**Action:** Always look for loops calling insertAdjacentHTML or appendChild.

## 2024-05-21 - [Batch DOM updates in pagination.js]
**Learning:** Confirmed N+1 DOM insertion pattern also existed in pagination.js (and employers.js). This seems to be a common anti-pattern in this legacy codebase.
**Action:** When working on list rendering in this project, proactively check for iterative `insertAdjacentHTML` and refactor to `map` + `join`.

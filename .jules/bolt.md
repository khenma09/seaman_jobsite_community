## 2024-05-20 - [Batch DOM updates in jobs.js]
**Learning:** Found N+1 DOM insertion pattern in jobs.js. Even with small lists, batching DOM updates is a core best practice.
**Action:** Always look for loops calling insertAdjacentHTML or appendChild.

## 2026-01-22 - [Batch DOM updates in employers.js]
**Learning:** The N+1 DOM insertion pattern was also present in `employers.js`. This suggests a recurring anti-pattern across the codebase.
**Action:** When working on other files (like `pagination.js`), proactively check for `insertAdjacentHTML` inside loops and refactor to `map().join("")`.

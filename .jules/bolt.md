## 2024-05-20 - [Batch DOM updates in jobs.js]
**Learning:** Found N+1 DOM insertion pattern in jobs.js. Even with small lists, batching DOM updates is a core best practice.
**Action:** Always look for loops calling insertAdjacentHTML or appendChild.

## 2024-05-24 - [Widespread N+1 DOM Insertion]
**Learning:** The N+1 DOM insertion pattern (looping `insertAdjacentHTML`) is prevalent in this codebase (found in `employers.js` and `pagination.js` too).
**Action:** When working on list rendering in this project, always check for this anti-pattern and refactor to batch updates.

## 2024-05-20 - [Batch DOM updates in jobs.js]
**Learning:** Found N+1 DOM insertion pattern in jobs.js. Even with small lists, batching DOM updates is a core best practice.
**Action:** Always look for loops calling insertAdjacentHTML or appendChild.

## 2026-01-14 - [Systemic N+1 DOM Updates]
**Learning:** The inefficient `insertAdjacentHTML` loop pattern found in `jobs.js` is also present in `employers.js` and `pagination.js`, confirming a systemic anti-pattern in list rendering.
**Action:** Proactively check all list rendering logic for this pattern and refactor to `map().join('')` standard.

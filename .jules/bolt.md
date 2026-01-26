## 2024-05-20 - [Batch DOM updates in jobs.js]
**Learning:** Found N+1 DOM insertion pattern in jobs.js. Even with small lists, batching DOM updates is a core best practice.
**Action:** Always look for loops calling insertAdjacentHTML or appendChild.

## 2024-05-20 - [N+1 DOM insertions widespread]
**Learning:** The pattern of iterating and calling `insertAdjacentHTML` appears in multiple files (`employers.js`, `pagination.js`). This suggests a systematic practice in the codebase.
**Action:** Systematically check all list rendering logic for this anti-pattern.

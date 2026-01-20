## 2024-05-20 - [Batch DOM updates in jobs.js]
**Learning:** Found N+1 DOM insertion pattern in jobs.js. Even with small lists, batching DOM updates is a core best practice.
**Action:** Always look for loops calling insertAdjacentHTML or appendChild.

## 2024-05-21 - [Batch DOM updates everywhere]
**Learning:** The pattern of `insertAdjacentHTML` inside loops was pervasive in `employers.js` and `pagination.js`, likely copied from an older version of `jobs.js`.
**Action:** When seeing one file using an anti-pattern, assume it was copy-pasted elsewhere and check "sibling" files.

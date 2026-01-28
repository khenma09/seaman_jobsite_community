## 2024-05-20 - [Batch DOM updates in jobs.js]
**Learning:** Found N+1 DOM insertion pattern in jobs.js. Even with small lists, batching DOM updates is a core best practice.
**Action:** Always look for loops calling insertAdjacentHTML or appendChild.

## 2024-05-20 - [Batch DOM updates in employers.js]
**Learning:** Found the same N+1 DOM insertion pattern in employers.js (display and pagination).
**Action:** Confirmed that map/join pattern works consistently across this codebase.

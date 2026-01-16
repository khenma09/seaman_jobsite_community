## 2024-05-20 - [Batch DOM updates in jobs.js]
**Learning:** Found N+1 DOM insertion pattern in jobs.js. Even with small lists, batching DOM updates is a core best practice.
**Action:** Always look for loops calling insertAdjacentHTML or appendChild.

## 2024-10-24 - [Batch DOM updates in employers.js]
**Learning:** The same N+1 DOM insertion pattern found in jobs.js was duplicated in employers.js for both list rendering and pagination.
**Action:** When fixing a pattern in one file, immediately search for the same pattern in similar files (employers.js, pagination.js).

## 2024-05-20 - [Batch DOM updates in jobs.js]
**Learning:** Found N+1 DOM insertion pattern in jobs.js. Even with small lists, batching DOM updates is a core best practice.
**Action:** Always look for loops calling insertAdjacentHTML or appendChild.

## 2026-01-23 - [Memory vs Reality in Optimization]
**Learning:** Memory stated `employers.js` was optimized, but code inspection revealed it used `forEach` + `insertAdjacentHTML`. Always verify optimization status by reading the code.
**Action:** Trust code over memory. Use `grep` or `read_file` to confirm patterns before assuming they are fixed.

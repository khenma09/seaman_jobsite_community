## 2024-05-20 - [Batch DOM updates in jobs.js]
**Learning:** Found N+1 DOM insertion pattern in jobs.js. Even with small lists, batching DOM updates is a core best practice.
**Action:** Always look for loops calling insertAdjacentHTML or appendChild.

## 2024-05-20 - [Duplicate Pagination Logic]
**Learning:** `assets/js/pagination.js` is not a shared utility but specific to `training_centers.html`. Pagination logic is duplicated across `jobs.js`, `employers.js`, and `pagination.js`, all with similar N+1 DOM insertion issues.
**Action:** Be aware that "shared" named files might not be truly generic. Future refactoring should consider consolidating this logic into a true utility.

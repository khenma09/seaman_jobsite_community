## 2024-05-20 - [Batch DOM updates in jobs.js]
**Learning:** Found N+1 DOM insertion pattern in jobs.js. Even with small lists, batching DOM updates is a core best practice.
**Action:** Always look for loops calling insertAdjacentHTML or appendChild.

## 2024-05-22 - [Global Scripts Crash on Missing Elements]
**Learning:** `main.js` was blindly querying `.back-to-top` and attaching listeners, causing crashes on pages without that element (e.g., login.html). This breaks JS execution for the entire page.
**Action:** Always add null checks (guard clauses) when selecting global elements in shared scripts.

## 2024-05-22 - [Scroll Event Throttling]
**Learning:** The scroll listener was forcing layout recalculations (`style.display`) on every scroll tick.
**Action:** Use `requestAnimationFrame` with a `ticking` flag to throttle scroll-based visual updates.

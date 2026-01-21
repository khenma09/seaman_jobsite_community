## 2024-05-20 - [Batch DOM updates in jobs.js]
**Learning:** Found N+1 DOM insertion pattern in jobs.js. Even with small lists, batching DOM updates is a core best practice.
**Action:** Always look for loops calling insertAdjacentHTML or appendChild.

## 2024-05-20 - [Throttled Scroll Events]
**Learning:** Scroll events fire rapidly (60+ times/sec). Direct DOM manipulation inside them causes layout thrashing and jank.
**Action:** Always wrap scroll logic in `requestAnimationFrame` or a throttle function. Also, ensure elements exist before attaching listeners to avoid console noise.

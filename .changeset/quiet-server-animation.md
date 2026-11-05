---
"react-day-picker": patch
"@daypicker/react": patch
---

fix: do not call `useLayoutEffect` when rendering on the server, so React < 19 no longer logs a warning.

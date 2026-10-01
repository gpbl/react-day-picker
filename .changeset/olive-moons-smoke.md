---
"@daypicker/buddhist": patch
"@daypicker/ethiopic": patch
"@daypicker/hebrew": patch
"@daypicker/hijri": patch
"@daypicker/persian": patch
"@daypicker/react": patch
"react-day-picker": patch
---

Clamped the displayed month to the navigation range when `startMonth` or `endMonth` change after the calendar has been rendered. Narrowing the range past the current month no longer empties the month grid and the dropdowns.

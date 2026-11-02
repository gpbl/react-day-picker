---
"react-day-picker": patch
---

Write the day of the month in the default day labels as the day number shown in the day button, so the accessible name contains the visible text (WCAG 2.5.3). For example, `Thursday, January 22, 2026` instead of `Thursday, January 22nd, 2026` in `en-US`. Only locales whose label did not contain the visible day number change: `en-US`, `en-CA`, `bn`, `gd`, `hi`, `sq` (on the 4th), and `bg`, `en-ZA`, `mk`, `sl` (days 1 to 9, no longer zero-padded).

Add `DateLib.formatFullDate`, used by the default `labelDayButton` and `labelGridcell` labels in every locale.

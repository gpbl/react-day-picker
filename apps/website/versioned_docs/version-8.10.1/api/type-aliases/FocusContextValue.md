# Type alias: FocusContextValue

> **FocusContextValue**: \{`"blur"`: () => `void`;`"focus"`: (`day`) => `void`;`"focusDayAfter"`: () => `void`;`"focusDayBefore"`: () => `void`;`"focusEndOfWeek"`: () => `void`;`"focusMonthAfter"`: () => `void`;`"focusMonthBefore"`: () => `void`;`"focusStartOfWeek"`: () => `void`;`"focusTarget"`: `Date` \| `undefined`;`"focusWeekAfter"`: () => `void`;`"focusWeekBefore"`: () => `void`;`"focusYearAfter"`: () => `void`;`"focusYearBefore"`: () => `void`;`"focusedDay"`: `Date` \| `undefined`; \}

Represents the value of the [FocusContext](../variables/FocusContext.md).

## Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `blur` | () => `void` | Blur the focused day. |
| `focus` | (`day`) => `void` | Focus a day. |
| `focusDayAfter` | () => `void` | Focus the day after the focused day. |
| `focusDayBefore` | () => `void` | Focus the day before the focused day. |
| `focusEndOfWeek` | () => `void` | - |
| `focusMonthAfter` | () => `void` | - |
| `focusMonthBefore` | () => `void` | - |
| `focusStartOfWeek` | () => `void` | - |
| `focusTarget` | `Date` \| `undefined` | Day that will be focused. |
| `focusWeekAfter` | () => `void` | Focus the day in the week after the focused day. |
| `focusWeekBefore` | () => `void` | Focus the day in the week before the focused day. |
| `focusYearAfter` | () => `void` | - |
| `focusYearBefore` | () => `void` | - |
| `focusedDay` | `Date` \| `undefined` | The day currently focused. |

## Source

[src/contexts/Focus/FocusContext.tsx:17](https://github.com/gpbl/react-day-picker/blob/9ad13dc72fff814dcf720a62f6e3b5ea38e8af6d/src/contexts/Focus/FocusContext.tsx#L17)

# Interface: SelectMultipleContextValue

Represents the value of a [SelectMultipleContext](../variables/SelectMultipleContext.md).

## Properties

### modifiers

> **modifiers**: [`SelectMultipleModifiers`](../type-aliases/SelectMultipleModifiers.md)

The modifiers for the corresponding selection.

#### Source

[src/contexts/SelectMultiple/SelectMultipleContext.tsx:24](https://github.com/gpbl/react-day-picker/blob/9ad13dc72fff814dcf720a62f6e3b5ea38e8af6d/src/contexts/SelectMultiple/SelectMultipleContext.tsx#L24)

***

### onDayClick?

> `optional` **onDayClick**: [`DayClickEventHandler`](../type-aliases/DayClickEventHandler.md)

Event handler to attach to the day button to enable the multiple select.

#### Source

[src/contexts/SelectMultiple/SelectMultipleContext.tsx:26](https://github.com/gpbl/react-day-picker/blob/9ad13dc72fff814dcf720a62f6e3b5ea38e8af6d/src/contexts/SelectMultiple/SelectMultipleContext.tsx#L26)

***

### selected

> **selected**: `undefined` \| `Date`[]

The days that have been selected.

#### Source

[src/contexts/SelectMultiple/SelectMultipleContext.tsx:22](https://github.com/gpbl/react-day-picker/blob/9ad13dc72fff814dcf720a62f6e3b5ea38e8af6d/src/contexts/SelectMultiple/SelectMultipleContext.tsx#L22)

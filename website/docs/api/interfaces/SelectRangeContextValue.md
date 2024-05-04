# Interface: SelectRangeContextValue

Represents the value of a [SelectRangeContext](../variables/SelectRangeContext.md).

## Properties

### modifiers

> **modifiers**: [`SelectRangeModifiers`](../type-aliases/SelectRangeModifiers.md)

The modifiers for the corresponding selection.

#### Source

[src/contexts/SelectRange/SelectRangeContext.tsx:35](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/contexts/SelectRange/SelectRangeContext.tsx#L35)

***

### onDayClick?

> `optional` **onDayClick**: [`DayClickEventHandler`](../type-aliases/DayClickEventHandler.md)

Event handler to attach to the day button to enable the range select.

#### Source

[src/contexts/SelectRange/SelectRangeContext.tsx:37](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/contexts/SelectRange/SelectRangeContext.tsx#L37)

***

### selected

> **selected**: `undefined` \| [`DateRange`](../type-aliases/DateRange.md)

The range of days that has been selected.

#### Source

[src/contexts/SelectRange/SelectRangeContext.tsx:33](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/contexts/SelectRange/SelectRangeContext.tsx#L33)

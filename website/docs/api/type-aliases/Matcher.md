# Type alias: Matcher

> **Matcher**: `boolean` \| (`date`) => `boolean` \| `Date` \| `Date`[] \| [`DateRange`](DateRange.md) \| [`DateBefore`](DateBefore.md) \| [`DateAfter`](DateAfter.md) \| [`DateInterval`](DateInterval.md) \| [`DayOfWeek`](DayOfWeek.md)

A value or a function that matches a specific day.

Matchers are passed to DayPicker via [DayPickerBase.disabled](../interfaces/DayPickerBase.md#disabled),
[]] or [[DayPickerProps.selected](../interfaces/DayPickerBase.md#hidden) and are used to
determine if a day should get a [Modifier](Modifier.md).

## See

[isMatch](../functions/isMatch.md)

## Source

[src/types/Matchers.ts:10](https://github.com/gpbl/react-day-picker/blob/a604fd23887c832117da414a9c63b1b84efb97d9/src/types/Matchers.ts#L10)

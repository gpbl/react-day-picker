# Type alias: Matcher

> **Matcher**: `boolean` \| (`date`) => `boolean` \| `Date` \| `Date`[] \| [`DateRange`](DateRange.md) \| [`DateBefore`](DateBefore.md) \| [`DateAfter`](DateAfter.md) \| [`DateInterval`](DateInterval.md) \| [`DayOfWeek`](DayOfWeek.md)

A value or a function that matches a specific day.

Matchers are passed to DayPicker via [DayPickerBase.disabled](../interfaces/DayPickerBase.md#disabled),
[]] or [[DayPickerProps.selected](../interfaces/DayPickerBase.md#hidden) and are used to
determine if a day should get a [Modifier](Modifier.md).

Matchers can be of different types:

```tsx
// will always match the day
const booleanMatcher: Matcher = true;

// will match the today's date
const dateMatcher: Matcher = new Date();

// will match the days in the array
const arrayMatcher: Matcher = [
  new Date(2019, 1, 2),
  new Date(2019, 1, 4)
];

// will match days after the 2nd of February 2019
const afterMatcher: DateAfter = { after: new Date(2019, 1, 2) };
// will match days before the 2nd of February 2019 }
const beforeMatcher: DateBefore = { before: new Date(2019, 1, 2) };

// will match Sundays
const dayOfWeekMatcher: DayOfWeek = {
  dayOfWeek: 0
};

// will match the included days, except the two dates
const intervalMatcher: DateInterval = {
  after: new Date(2019, 1, 2),
  before: new Date(2019, 1, 5)
};

// will match the included days, including the two dates
const rangeMatcher: DateRange = {
  from: new Date(2019, 1, 2),
  to: new Date(2019, 1, 5)
};

// will match when the function return true
const functionMatcher: Matcher = (day: Date) => {
  return day.getMonth() === 2; // match when month is March
};
```

## Source

[src/types/Matchers.ts:51](https://github.com/gpbl/react-day-picker/blob/9ad13dc72fff814dcf720a62f6e3b5ea38e8af6d/src/types/Matchers.ts#L51)

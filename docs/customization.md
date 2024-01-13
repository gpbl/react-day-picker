# Options

Learn how to change how months, weeks and days are displayed in the calendar.

## Showing the Outside Days

```tsx example fileName="OutsideDays.tsx"
import { DayPicker } from 'react-day-picker';

export function OutsideDays() {
  return <DayPicker showOutsideDays />;
}
```

## Render Multiple Months

Use `numberOfMonths` to render more than one calendar.

```tsx example fileName="MultipleMonths.tsx"
import { DayPicker } from 'react-day-picker';

export function MultipleMonths() {
  return <DayPicker numberOfMonths={2} />;
}
```

Toggle `pagedNavigation` to navigate the number of months per time.

```tsx example fileName="MultipleMonthsPaged.tsx"
import { DayPicker } from 'react-day-picker';

export function MultipleMonthsPaged() {
  return <DayPicker numberOfMonths={2} pagedNavigation />;
}
```

## Using Fixed Weeks

Use `fixedWeeks` to display six weeks per months. This will prevent the calendar
to change its height when navigating.

```tsx example fileName="Fixedweeks.tsx"
import { DayPicker } from 'react-day-picker';

export function Fixedweeks() {
  return <DayPicker showOutsideDays fixedWeeks />;
}
```

## Show the Week Numbers

Use `showWeeknumber` to display the week numbers. When this prop is set, use
`onWeeknumberClick` to handle the click on a week number.

```tsx example fileName="Weeknumber.tsx"
import { DayPicker } from 'react-day-picker';

import { useState } from 'react';

export function Weeknumber() {
  const [weekNumber, setWeekNumber] = useState<number>();

  const footer = weekNumber
    ? `You clicked the week n. ${weekNumber}.`
    : 'Try clicking a week number.';

  return (
    <DayPicker
      showWeekNumber
      onWeekNumberClick={setWeekNumber}
      footer={footer}
    />
  );
}
```

### Customize the Week Numbers

- To set the first day of the week, use `weekStartsOn`.
- To set the day of January in the first week of the year
  `firstWeekContainsDate`.
- Use the `formatWeeknumber` formatter to change how week numbers are displayed.

#### Example

This example shows the different props affecting the week numbers.

```tsx example fileName="WeeknumberCustom.tsx"
import { addMonths } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const today = new Date(2021, 0, 1);

export function WeeknumberCustom() {
  return (
    <DayPicker
      defaultMonth={addMonths(today, -1)}
      weekStartsOn={6} // Saturday as first day of the week
      firstWeekContainsDate={1} // Number the first week of the year from day 1
      showWeekNumber
      labels={{
        labelWeekNumber: (weekNumber: number) => `Week ${weekNumber}`
      }}
      formatters={{
        // Add `W` prefix to week number
        formatWeekNumber: (weekNumber: number) => `W${weekNumber}`
      }}
    />
  );
}
```

## Switch to ISO Week Dates

DayPicker uses [date-fns getWeek](https://date-fns.org/docs/getWeek) to
calculate the week number. By default, the week starts on Sunday and the first
week of the year is the one that contains January 1st. Use `ISOWeek` to switch
using [ISO Week Dates](https://en.wikipedia.org/wiki/ISO_week_date) instead of
the locale setting.

```tsx example fileName="WeeknumberIso.tsx"
import { DayPicker } from 'react-day-picker';

export function WeeknumberIso() {
  return <DayPicker ISOWeek showWeekNumber />;
}
```

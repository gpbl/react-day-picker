---
section: Customization
title: Months Navigation
description: Configure how users can navigate between months.
---

# Months Navigation

Configure how users can navigate between months.

## Change the Default Month

DayPicker displays the month of the current date. To change the
default month, set the `defaultMonth` prop.

<DayPicker defaultMonth={new Date(1979, 8)} />

```tsx
<DayPicker defaultMonth={new Date(1979, 8)} />
```

## Control the Current Month

DayPicker controls the displayed month and stores it in its internal state. To
control the current month, set it in your component’s state.

To control the current month, use `month` (as opposed to `defaultMonth`) and
`onMonthChange` to handle the current month.

```tsx example fileName="Controlled.tsx"
import { DayPicker } from 'react-day-picker';

import { addMonths, isSameMonth } from 'date-fns';
import { useState } from 'react';

export function Controlled() {
  const today = new Date();
  const nextMonth = addMonths(new Date(), 1);
  const [month, setMonth] = useState<Date>(nextMonth);

  const footer = (
    <button
      disabled={isSameMonth(today, month)}
      onClick={() => setMonth(today)}
    >
      Go to Today
    </button>
  );

  return <DayPicker month={month} onMonthChange={setMonth} footer={footer} />;
}
```

## Limiting the Month Navigation

As default, DayPicker can navigate indefinitely in the past or in the future. To limit the navigable months between two years, use `fromYear` or `toYear`.

```tsx example fileName="FromToYear.tsx"
import { DayPicker } from 'react-day-picker';

export function FromToYear() {
  return (
    <DayPicker defaultMonth={new Date(2024, 0)} fromYear={2024} toYear={2026} />
  );
}
```

### Limiting Between Months or Dates

You can also limit the navigation with `fromDate`/`toDate` and `fromMonth` and
`toMonth`. For example, to limit the calendar between June 2015 and the 20th
Nov, 2015:

```tsx example fileName="FromToMonth.tsx"
import { DayPicker } from 'react-day-picker';

export function FromToMonth() {
  const defaultMonth = new Date(2015, 5);
  return (
    <DayPicker
      defaultMonth={defaultMonth}
      fromMonth={defaultMonth}
      toDate={new Date(2015, 10, 20)}
    />
  );
}
```

## Using dropdowns Navigation

Set the `dropdownNavigation` to display a combobox to change the month and/or the year.

```tsx example fileName="Dropdown.tsx"
import { DayPicker } from 'react-day-picker';

export function Dropdown() {
  return <DayPicker dropdownNavigation />;
}
```

## Hiding the Navigation Buttons

Hide the navigation buttons with the `hideNavigation` prop. This will not disable the navigation.

You may want to hide the navigation buttons to display instead a combobox.

```tsx example fileName="HideNavigation.tsx"

```

## Disabling Navigation

To disable the navigation between months, use `disableNavigation`.

```tsx example fileName="DisableNavigation.tsx"
import { DayPicker } from 'react-day-picker';

export function DisableNavigation() {
  return <DayPicker disableNavigation />;
}
```

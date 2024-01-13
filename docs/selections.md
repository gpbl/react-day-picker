# Selections

DayPicker supports 3 built-in selection modes, that fit the most common use-cases for a date picker:

- **single mode**: only one day can be selected;
- **multi mode**: allow selection of multiple days;
- **range mode**: allow the selection of a range of days;
- **none mode**: do not allow any selection.

You can also implement your own selection logic by setting up a **custom selection mode**.

### Entering a Selection Mode

- To use the built-in modes, use the `mode` prop.
- To set a custom selection mode, use the `modifiers` and the `onDayClick` prop.

```tsx
// Enter the single selection mode
<DayPicker mode="single" selected={/*...*/} onSelect={/*...*/} />

// Enter the multi selection mode
<DayPicker mode="multi"  selected={/*...*/} onSelect={/*...*/} />

// Enter the range selection mode
<DayPicker mode="range" selected={/*...*/} onSelect={/*...*/} />

// Enter a custom selection mode
<DayPicker modifiers={{ selected: /*...*/ }} onDayClick={/*...*/} />
```

## Single Selection Mode

When using `mode="single"{:tsx}`, users can select only one day from the calendar:

```tsx example fileName="Single.tsx"
import { DayPicker } from 'react-day-picker';
import { useState } from 'react';

export function Single() {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>();

  return (
    <DayPicker mode="single" selected={selectedDay} onSelect={setSelectedDay} />
  );
}
```

### Making a Selection Required

To make a selection required, use the `required` prop. Setting this prop won't allow the user to unselect the selected day.

> NOTE
> **Note about typings**: when `required` is set, the `selected` and `onSelect` props will still allow undefined values.

```tsx example fileName="SingleRequired.tsx"
import { DayPicker } from 'react-day-picker';

import { useState } from 'react';

export function SingleRequired() {
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());

  return (
    <DayPicker
      mode="single"
      required
      selected={selectedDay}
      onSelect={(date) => date && setSelectedDay(date)}
    />
  );
}
```

## Selecting Multiple Days

Use `mode="multiple"{:tsx}` to allow the selection of multiple days:

```tsx example fileName="Multiple.tsx"
import { DayPicker } from 'react-day-picker';

import { useState } from 'react';

export function Multiple() {
  const initialDays: Date[] = [];
  const [days, setDays] = useState<Date[]>(initialDays);

  return (
    <DayPicker
      mode="multi"
      selected={days}
      onSelect={(dates) => setDays(dates || [])}
    />
  );
}
```

### Limiting the Selectable Days

Use `required` or the `min` and `max` props to limit the amount of days that can be selected.

```tsx example fileName="MultipleMinMax.tsx"
import { DayPicker } from 'react-day-picker';

import { useState } from 'react';

export function MultipleMinMax() {
  const [selected, setSelected] = useState<Date[]>();

  return (
    <DayPicker
      mode="multi"
      min={2}
      max={5}
      selected={selected}
      onSelect={setSelected}
    />
  );
}
```

## Selecting a Range of days

Use `mode="range"` and `onSelect` to allow the selection of multiple days.

```tsx example fileName="Range.tsx"
import { DateRange, DayPicker } from 'react-day-picker';

import { addDays } from 'date-fns';
import { useState } from 'react';

export function Range() {
  const defaultSelected: DateRange = {
    from: new Date(),
    to: addDays(new Date(), 4)
  };

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  return <DayPicker mode="range" selected={range} onSelect={setRange} />;
}
```

### Limiting the range size

Use the `min` and `max` props to limit the amount of days in the range.

```tsx example fileName="RangeMinMax.tsx"
import { DateRange, DayPicker } from 'react-day-picker';

import { useState } from 'react';

export function RangeMinMax() {
  const [range, setRange] = useState<DateRange | undefined>();

  return (
    <DayPicker
      defaultMonth={new Date(2022, 8)}
      mode="range"
      min={3}
      max={6}
      selected={range}
      onSelect={setRange}
    />
  );
}
```

## Disabling days

Use the `disabled` prop to disable the days in the selection mode.

## Turning off selection mode

Use the `min` and `max` props to limit the amount of days in the range.

```tsx example fileName="None.tsx"
import { DayPicker } from 'react-day-picker';

export function None() {
  return <DayPicker mode="none" />;
}
```

## Custom Selections

If the built-in selections mode doesn't fit your application's requirements, implement custom selections as explained in the [Custom Selections](/guides/custom-selections) advanced guide.

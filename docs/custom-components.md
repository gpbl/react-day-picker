import { Callout } from 'nextra/components';

# Custom Components

Use the `components` prop to replace some of the internal components used by DayPicker with a custom implementation.

<Callout emoji="🚧">
  This section is still under construction. If you need help, please reach out
  the maintainers in the [discussion
  page](https://github.com/gpbl/react-day-picker/discussions) on GitHub.
</Callout>

## DayPicker hooks

When creating custom components, you will find useful the DayPicker hooks.

## Examples

### Custom Caption

Implement a custom `Caption` component with next/previous buttons. Note the use of the [useNavigation hook](/api/functions/useNavigation) to navigate between months.

```tsx example fileName="CustomCaption.tsx"
import {
  DayPicker,
  useCalendar,
  type MonthCaptionProps
} from 'react-day-picker';

import { format } from 'date-fns/format';

function CustomMonthCaption(props: MonthCaptionProps) {
  const { goToMonth, nextMonth, previousMonth } = useCalendar();
  return (
    <h2>
      {format(props.month.date, 'MMM yyy')}
      <button
        disabled={!previousMonth}
        onClick={() => previousMonth && goToMonth(previousMonth)}
      >
        Previous
      </button>
      <button
        disabled={!nextMonth}
        onClick={() => nextMonth && goToMonth(nextMonth)}
      >
        Next
      </button>
    </h2>
  );
}

export function CustomCaption() {
  return (
    <DayPicker
      components={{
        MonthCaption: CustomMonthCaption
      }}
    />
  );
}
```

### Wrapping the day

```tsx example fileName="CustomDay.tsx"
import { DayGridCellProps, DayPicker } from 'react-day-picker';

function CustomDayGridCell(props: DayGridCellProps) {
  const isFirstDay =
    props.day.date.getDate() === 1 && props.modifiers.outside === false;
  return (
    <time {...props.htmlAttributes}>
      {props.children}
      {isFirstDay && <div>(first day)</div>}
    </time>
  );
}

export function CustomDay() {
  return (
    <DayPicker
      today={new Date(2021, 10, 25)}
      components={{ DayGridCell: CustomDayGridCell }}
    />
  );
}
```

### Range selections with Shift key

Implement a custom `Day` component to select ranges while pressing the <kbd>Shift</kbd> key.

```tsx example fileName="RangeShiftKey.tsx"
import { DateRange, DayPicker, SelectHandler } from 'react-day-picker';

import { useEffect, useState } from 'react';
import { isSameDay } from 'date-fns';

export function RangeShiftKey() {
  const [range, setRange] = useState<DateRange>();
  const [shiftPressed, setShiftPressed] = useState(false);

  // Use event listeners to checks whether the shift key is being pressed or not
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) =>
      event.shiftKey ? setShiftPressed(true) : undefined;
    const handleKeyUp = () => setShiftPressed(false);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleSelect: SelectHandler<'range'> = (newRange, date) => {
    if (!shiftPressed) {
      // If the shift key is not pressed, reset the selection
      if (range?.from && isSameDay(range.from, date)) {
        setRange({ from: undefined, to: undefined });
      } else {
        setRange({ from: date, to: undefined });
      }
    } else {
      setRange(newRange);
    }
  };

  return <DayPicker mode="range" selected={range} onSelect={handleSelect} />;
}
```

### Disable rows in the past

Implement a custom component to hide the rows of past weeks.

```tsx example fileName="CustomDisableRow.tsx"
import { DayPicker, WeekRow, WeekRowProps } from 'react-day-picker';

import { differenceInCalendarDays } from 'date-fns';

function isPastDate(date: Date) {
  return differenceInCalendarDays(date, new Date()) < 0;
}

function OnlyFutureRow(props: WeekRowProps) {
  const isPastRow = props.week.days.every((day) => isPastDate(day.date));
  if (isPastRow)
    return (
      <div role="row" aria-rowindex={props['aria-rowindex']} aria-hidden></div>
    );
  return <WeekRow {...props} />;
}

export function CustomDisableRow() {
  return (
    <DayPicker
      fromDate={new Date()}
      components={{ WeekRow: OnlyFutureRow }}
      hidden={isPastDate}
      showOutsideDays
      today={new Date(2021, 10, 25)}
    />
  );
}
```

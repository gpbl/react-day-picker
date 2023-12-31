# Localization

Learn to localize DayPicker in any language.

## Changing Locale

To change the locale, pass to the `locale` prop a date-fns [Locale
object](http://date-fns.org/docs/Locale).

For example, to localize the calendar in Spanish, import the locale object from
date-fns and pass it to the component:

```tsx example fileName="Spanish.tsx"
import { DayPicker } from 'react-day-picker';

import { es } from 'date-fns/locale';

export function Spanish() {
  return <DayPicker locale={es} />;
}
```

### Overriding the First Day of the Week

Use the `weekStartsOn` prop to change the first day of the week:

```tsx example fileName="SpanishWeekStartsOn.tsx"
import { DayPicker } from 'react-day-picker';
import { es } from 'date-fns/locale';

export function SpanishWeekStartsOn() {
  return <DayPicker locale={es} weekStartsOn={0} />;
}
```

### First Week of the Year

To override the date in the first week of the year, use `firstWeekContainsDate`.
Use this prop to change the week number calculation according to [date-fns
getWeek](https://date-fns.org/docs/getWeek) function.

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

## Switching to ISO Week Dates

By default, week numbers and week days follow the DayPicker's locale. Use the
`ISOWeek` prop to switch to [ISO week
dates](https://en.wikipedia.org/wiki/ISO_week_date).

```tsx example fileName="WeekIso.tsx"
import { DayPicker } from 'react-day-picker';

export function WeekIso() {
  return <DayPicker ISOWeek showWeekNumber showOutsideDays />;
}
```

## Translating ARIA labels

Use the [labels prop](/api/interfaces/daypickerdefaultprops#labels) to translate
the labels used for ARIA.

## Right-To-Left Direction

To add right-to-left text direction, set the `dir` prop to `rtl`.

```tsx example fileName="Rtl.tsx"
import { DayPicker } from 'react-day-picker';

import { arSA } from 'date-fns/locale';

export function Rtl() {
  return <DayPicker dir="rtl" locale={arSA} />;
}
```

## Numbering System

Use [formatters](/guides/formatters) to change the [numbering system](https://en.wikipedia.org/wiki/Numeral_system) used in the
calendar.

For example, to switch to hindu-arabic using
[toLocaleString](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString):

```tsx example fileName="NumberingSystem.tsx"
import { DayPicker, Formatters } from 'react-day-picker';

import { format } from 'date-fns/format';
import { arSA } from 'date-fns/locale';

const NU_LOCALE = 'ar-u-nu-arab';

const formatDay: Formatters['formatDay'] = (day) =>
  day.getDate().toLocaleString(NU_LOCALE);

const formatWeekNumber: Formatters['formatWeekNumber'] = (weekNumber) => {
  return weekNumber.toLocaleString(NU_LOCALE);
};

const formatMonthCaption: Formatters['formatMonthCaption'] = (
  date,
  options
) => {
  const y = date.getFullYear().toLocaleString(NU_LOCALE);
  const m = format(date, 'LLLL', { locale: options?.locale });
  return `${m} ${y}`;
};

export function NumberingSystem() {
  return (
    <DayPicker
      locale={arSA}
      dir="rtl"
      showWeekNumber
      formatters={{ formatDay, formatMonthCaption, formatWeekNumber }}
    />
  );
}
```

# LocaleUtils

`LocaleUtils` is a set of functions used to localize the component (see: [Custom localization](LocalizationCustom.md)). You may want to implement your own `LocaleUtils`, or override some of its functions. 

For example, this code renders the month's title as `M/YYYY` instead of the default:

```jsx
import DayPicker, { LocaleUtils } from "react-day-picker";

function formatMonthTitle(d, locale) {
 return `${d.getMonth() + 1}/${d.getFullYear}` 
}

<DayPicker localeUtils={{ ...LocaleUtils, formatMonthTitle }} />

```

## Functions

### `formatMonthTitle(d: date, locale: string) -> string`

Return the string used to format the month's title in the day picker for the given date `d`.

### `formatWeekdayShort(i: number, locale: string) -> string`

Return the string used to render the weekday's short name, e.g. `Mo` for Monday.

### `formatWeekdayLong(i: number, locale: string) -> string`

Return the string used to render the weekday's long name, e.g. `Monday`. It is used mainly for ARIA.

### `getFirstDayOfWeek(locale: string) -> number`

Return the first day of the week for the given locale, e.g. `0` (Sunday) when `locale` is `en`.

### `getMonths(locale: string) -> array`

Return the twelve months for the given locale (full name, e.g. `January`).

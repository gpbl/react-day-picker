# localeUtils

`localeUtils` is a set of functions used to work with localization. See also [Custom localization](LocalizationCustom.md).

Usually, you want to implement your own `localeUtils`, or override the behavior of some of its functions. For example, the following code will render the month title as `M/YYYY` instead of the default:

```jsx
import DayPicker from "react-day-picker";
import { localeUtils } from "react-day-picker/utils"

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

### `getFirstDayOfWeek(locale: string) -> bool`

Return the first day of the week for the given locale, e.g. `0` (Sunday) when `locale` is `en`.

# Custom localization

You can define your custom utility to localize the day picker – for example to reduce the size of your javascript bundle.

The `DayPicker` component uses [localeUtils](LocaleUtils.md), a small set of functions defining how to display the day picker for the given locale.
You can overwrite its behavior passing a custom set of functions to the `localeUtils` props.

[See an example](http://www.gpbl.org/react-day-picker/examples/#localizedCustom).

## Code

The following `localeUtils` object is used to localize the calendar in English or in Italian.

```jsx

const WEEKDAYS_LONG = {
  "en": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "it": ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"]
}
const WEEKDAYS_SHORT = {
  "en": ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  "it": ["L", "M", "M", "G", "V", "S", "D"]

const MONTHS = {
  "en": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  "it": ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

const FIRST_DAY = {
  "en": 0,
  "it": 1
}

const localeUtils = {
  formatMonthTitle: (d, locale) => `${MONTHS[locale][d.getMonth()]} ${d.getFullYear()}`,
  formatWeekdayShort: (i, locale) => WEEKDAYS_SHORT[locale][i],
  formatWeekdayLong: (i, locale) => WEEKDAYS_LONG[locale][i],
  getFirstDayOfWeek: (locale) => FIRST_DAY[locale]
}

function MyComponent() {
  return <DayPicker locale="it" localeUtils={ localeUtils } />
}

```

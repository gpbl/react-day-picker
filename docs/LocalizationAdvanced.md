# Custom localization

You can define your custom utility to localize the day picker.

The `DayPicker` component internally uses [localeUtils](LocaleUtils.md), a small set of functions defining how to display the day picker for the given locale. You can overwrite its behavior by passing your own custom set of functions to the `localeUtils` props.

[See an example](http://react-day-picker.js.org/examples?localizedCustom).

## Code

The following `localeUtils` object is used to localize the calendar in English or in Italian.

```jsx

const WEEKDAYS_LONG = {
  "en": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "it": ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]
}
const WEEKDAYS_SHORT = {
  "en": ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  "it": ["D", "L", "M", "M", "G", "V", "S"]

const MONTHS = {
  "en": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  "it": ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

const FIRST_DAY = {
  "en": 0,
  "it": 1 // Use Monday as first day of the week
}

const localeUtils = {
  formatDay: (d, locale="en") => `${weekdaysLong[locale][d.getDay()]}, ${d.getDate()} ${months[locale][d.getMonth()]} ${d.getFullYear()}`,
  formatMonthTitle: (d, locale) => `${MONTHS[locale][d.getMonth()]} ${d.getFullYear()}`,
  formatWeekdayShort: (i, locale) => WEEKDAYS_SHORT[locale][i],
  formatWeekdayLong: (i, locale) => WEEKDAYS_LONG[locale][i],
  getFirstDayOfWeek: (locale) => FIRST_DAY[locale]
}

function MyComponent() {
  return <DayPicker locale="it" localeUtils={ localeUtils } />
}

```

# Custom localization

You can define your custom utility to localize the day picker – for example to reduce the size of your javascript bundle.

The `DayPicker` component uses [localeUtils](LocaleUtils.md), a small set of functions defining how to display the day picker for the given locale.
You can overwrite its behavior passing a custom set of functions to the `localeUtils` props. For example, the following utility can be used to localize the calendar in English or in Italian, without moment.js or any other library:

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

const localeCustomUtils = {

  formatMonthTitle(d, locale) {
    return `${MONTHS[locale][d.getMonth()]} ${d.getFullYear()}`;
  },

  formatWeekdayShort(i, locale) {
    return WEEKDAYS_SHORT[locale][i];
  },

  formatWeekdayLong(i, locale) {
    return WEEKDAYS_LONG[locale][i];
  },

  getFirstDayOfWeek(locale) {
    if (locale === "it") {
      return 1;
    }
    return 0;
  }

}

function MyComponent() {
  return <DayPicker locale="it" localeUtils={ localeCustomUtils } />
}

```

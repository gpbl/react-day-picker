# Localization

## Changing locale

To change the locale, pass to the `locale` prop a date-fns [Locale object](http://date-fns.org/docs/Locale).

For example, to localize the calendar in Spanish, import the locale object from date-fns and pass it to the component:

```include-example
spanish
```

### Overriding the first day of the week

Use the `weekStartsOn` prop to change the first day of the week:

```include-example
spanish-week-starts-on
```

### First week of the year

To override the date in the first week of the year, use `firstWeekContainsDate`. Use this prop to change the week number calculation.
See also https://date-fns.org/docs/getWeek and https://en.wikipedia.org/wiki/Week#Week_numbering.

```include-example
weeknumber-custom
```

## Switching to ISO week dates

Weeks and week days are calculated according to the locale. To use ISO week dates instead, use the `ISOWeek` prop. See also https://en.wikipedia.org/wiki/ISO_week_date.

```include-example
week-iso
```

## Switching to right-to-left direction

To add right-to-left text direction, set the `dir` prop to `rtl`.

```include-example
rtl
```

## Adopting other numbering systems

Use [formatters](/guides/formatters) to change the numbering system used in the calendar.

For example, to switch to hindu-arabic using [toLocaleString](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString):

```include-example
numbering-system
```

## ARIA labels translations

Use the [labels prop](/api/interfaces/daypickerdefaultprops#labels) to translate the labels used for ARIA.

# Customization

## Multiple months

Use `numberOfMonths` to render more than one calendar.

```include-example
multiple-months
```

### Paged navigation

When rendering multiple months, use `pagedNavigation` to navigate the number of
months per time.

```include-example
multiple-months-paged
```

## Showing the outside days

Use `showOutsideDays` to display the days falling out the current month.

```include-example
outside-days
```

## Using fixed weeks

When `showOutsideDays` is turned on, use `fixedWeeks` to display six weeks per
months. This will prevent the calendar to change its height when navigating.

```include-example
fixedweeks
```

## Showing the week numbers

Use `showWeekNumber` to display the week numbers.

```include-example
weeknumber
```

## Advanced weeks settings

- To customize the week number format, pass a `weekNumberFormat` formatter to the `formatters` prop.
- To change the first day of the week, use `firstDayOfWeek`.
- To override the date in the first week of the year, use
  `firstWeekContainsDate`. Use this prop to change the week number calculation.
  See also https://date-fns.org/docs/getWeek and
  https://en.wikipedia.org/wiki/Week#Week_numbering.

```include-example
weeknumber-custom
```

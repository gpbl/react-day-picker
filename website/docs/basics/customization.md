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

### Switching to ISO Week Dates

DayPicker uses [date-fns getWeek](https://date-fns.org/docs/getWeek) to calculate the week number. By default, the week starts on Sunday and the first week of the year is the one that contains January 1st.

Use [`ISOWeek`](/api/interfaces/DayPickerDefaultProps#isoweek) to switch using [ISO Week Dates](https://en.wikipedia.org/wiki/ISO_week_date) instead of the locale setting.

```include-example
weeknumber-iso
```

### Customizing week numbers

- use [`weekStartsOn`](/api/interfaces/DayPickerDefaultProps#weekstartson) to set the first day of the week.
- use [`firstWeekContainsDate`](/api/interfaces/DayPickerDefaultProps#firstweekcontainsdate) to set the day of January, which is always in the first week of the year.
- use [`formatters.formatWeekNumber`](/api/interfaces/DayPickerDefaultProps#formatters) to change how week numbers are displayed.

```include-example
weeknumber-custom
```

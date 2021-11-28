# Navigating Months

## Change the default month

DayPicker displays the month of the current day. To change the
default month, set the `defaultMonth` prop.

For example, to set the default month to September 1979:

```include
default-month
```

## Controlling the current month

DayPicker controls the displayed month and stores it in its internal state. To
control the current month – for example, to implement a "Go to today" button –
set the month in the parent component’s state.

To control the current month, use `month` (as opposed to `defaultMonth`) and
`onMonthChange` to handle the current month.

```include
controlled
```

## Limiting the month navigation

As default, DayPicker can navigate indefinitely in the past or in the future.

To limit the navigable months between two years, use `fromYear` or `toYear`.

```include
from-to-year
```

### Between months or dates

You can also limit the navigation with `fromDate`/`toDate` and `fromMonth` and
`toMonth`. For example, to limit the calendar between June 2015 and the 20th
Nov, 2015:

```include
from-to-month
```

## Using a drop-down to change the month

When limiting the navigable months, use `captionLayout` to display a drop-down
(a select HTML element) for navigating between months – instead of the previous
/ next buttons.

```include
dropdown
```

## Disabling navigation

To disable the navigation between months, use `disableNavigation`.

```include
disabled
```

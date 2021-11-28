# Modifiers

A **modifier** represents the state or the style of a day.

DayPicker comes with some built in modifiers: `disabled`, `selected`, `hidden`, `today`.

## Disabling days

When in selection mode, use the `disabled` modifier to disable one or more days. Pass a [`Matcher`](/api/types/matcher) or an array of `Matchers` to choose the disabled days.

```include
modifiers-disabled
```

## Hidden days

The `hidden` modifier removes the day from the calendar. Set the hidden days using the `hidden` prop.

```include
modifiers-hidden
```

## The `today` modifier

The `today` modifier is added to the current date.

```include
modifiers-today
```

:::info
You can change the current date using the `today` prop.
:::

## Custom modifiers

Add new modifiers according to your app’s requirements. For example, a booking app may use a `booked` modifier to mark days as already booked.

Use the `modifiers` prop to pass an object with custom modifiers. Change the inline-style of the cell with `modifierStyles`.

```include
modifiers-custom
```

## Styling modifiers

A day can be styled according to its modifiers – using CSS or inline styles.

### Via class names

A modifier is added in the class of the Day element. Assign classes to modifiers via the `modifierClassNames` prop.

For example, a disabled day will get the `.rdp-day_disabled` class name, a "booked" day
`.rdp-day_booked`, etc.

The following example adds `.my-booked-class` to the day with a `booked` modifier – applying a custom class name to it.

```include
modifiers-classnames
```

### Via inline styles

Another practical way is using inline styles. Use [modifierStyles](/api/interfaces/daypickerprops#modifierstyles) to change the style of a day
matching the specified modifier.

In the following example, the available days are styled via inline styles.

```include
modifiers-style
```

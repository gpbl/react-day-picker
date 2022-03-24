# Modifiers

In DayPicker, a **modifier** represents the state or the style of a day.

DayPicker comes with some built-in modifiers, such as `disabled`, `selected`, `hidden`, `today`, `range_start`, etc. See the [InternalModifiers enum](/api/enums/InternalModifier) for the list.

You can also add your custom modifiers. See [Custom Modifiers](#custom-modifiers).

## Selecting days

When in selection mode, DayPicker will apply modifiers to the selected days. See [Selecting days](/basics/selecting-days) to configure DayPicker to add the `selected` modifiers to the selected days.

## Disabling days

When in selection mode, use the `disabled` modifier to disable one or more days. Pass a [`Matcher`](/api/types/matcher) or an array of `Matchers` to choose the disabled days.

```include-example
modifiers-disabled
```

## Hidden days

The `hidden` modifier removes the day from the calendar. Set the hidden days using the `hidden` prop.

```include-example
modifiers-hidden
```

## The `today` modifier

The `today` modifier is added to the current date.

```include-example
modifiers-today
```

:::info
You can change the current date using the `today` prop.
:::

## Custom modifiers

Add new modifiers according to your app’s requirements. For example, a booking app may use a `booked` modifier to mark days as already booked.

Use the `modifiers` prop to pass an object with custom modifiers. Change the inline-style of the cell with `modifierStyles`.

```include-example
modifiers-custom
```

## Styling modifiers

A day can be styled according to its modifiers – using CSS or inline styles. See [Styling DayPicker](/basics/styling) for more details.

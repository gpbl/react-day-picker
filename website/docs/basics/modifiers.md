# Modifiers

In DayPicker, a **modifier** is added to a day when the day matches a specific condition, called [`Matcher`](/api/types/matcher). For example, selected days have the `selected` modifiers, disabled days the `disabled` modifier, the today's date matches the `today` modifier, etc.

```tsx
<DayPicker selected={new Date()} />
<DayPicker disabled={new Date()} />
<DayPicker hidden={new Date()} />
```

### Understanding modifiers

- Use modifiers to change the appearance of the days in the calendar or to inspect the days the user has interacted with (e.g. picking a day)
- DayPicker comes with some pre-built modifiers, such as `disabled`, `selected`, `hidden`, `today`, `range_start`, etc. designed to cover the most common use cases. See the [InternalModifiers enum](/api/enums/InternalModifier) for a list of the internal modifiers.
- It is possible to implement custom modifiers, extending the behavior of DayPicker: see [Custom Modifiers](#custom-modifiers) below for more details.

## The `selected` modifier

```tsx
<DayPicker selected={new Date()} />
```

When in selection mode, use the `selected` prop to add the `selected` modifier to the selected dates, and style them accordingly. To see how to implement the `selected` modifier, see the [Selecting days guide](/basics/selecting-days).

## Disabling days

When in selection mode, use the `disabled` modifier to disable one or more days. Pass a [`Matcher`](/api/types/matcher) or an array of `Matchers` to choose the disabled days:

```include-example
modifiers-disabled
```

## Hidden days

The `hidden` modifier removes the day from the calendar. Set the hidden days using the `hidden` prop.

```include-example
modifiers-hidden
```

## The `today` modifier

The `today` modifier is added to the current date:

```include-example
modifiers-today
```

:::info
You can change the current date using the `today` prop.
:::

## Custom modifiers

Add new modifiers according to your app’s requirements. For example, a booking app may use a `booked` modifier to mark days as already booked.

Use the `modifiers` prop to pass an object with custom modifiers and their matcher. Change the inline-style of the cell with `modifiersStyles` or with `modifiersClassName`.

```include-example
modifiers-custom
```

## Styling modifiers

A day can be styled according to its modifiers – using CSS or inline styles. See [Styling DayPicker](/basics/styling) for more details.

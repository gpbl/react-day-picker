# Modifiers

A **modifier** represents the state or the style of a day.

DayPicker comes with some built in modifiers: `disabled`, `selected`, `hidden`,
`today`.

## Disabling days

The `disabled` modifier disables the interaction with a day. It is set using the
`disabled` prop. Pass a [`Matcher`](/api/types/matcher) or an array of Matchers
to choose the disabled days.

```include
modifiers-disabled.tsx
```

## Hidden days

The `hidden` modifier disables the interaction with a day. It is set using the `hidden` prop.

```include
modifiers-hidden.tsx
```

## The `today` modifier

The `today` modifier is added to the current date.

```include
modifiers-today.tsx
```

Change the current date with the `today` prop:

```include
modifiers-today-change.tsx
```

## Custom modifiers

Add new modifiers according to your app’s requirements. For example, a booking
app may use a `booked` modifier to mark days as already booked.

Use the `modifiers` prop to pass an object with custom modifiers. Change the
inline-style of the cell with `modifierStyles`.

```include
modifiers-custom.tsx
```

## Styling days with modifiers

A day can be styled according to its modifiers – using CSS or inline
styles.

### Styling via class names

A modifier is added in the class name of the Day element: for example, a disabled day will get the `.rdp-day_disabled` class name,
a "booked" day `.rdp-day_booked`, etc.

You can change which class name get each modifier via
[modifierClassNames](/api/interfaces/daypickerbase#modifiersclassnames). Is also
possible to just the class name prefix via
[modifierPrefix](/api/interfaces/daypickerbase#modifierPrefix).

The following example adds `.my-booked-class` to the day with a `booked` modifier – applying a custom class name to it.

```include
modifiers-classnames.tsx
```

### Styling via inline styles

Another practical way is using inline styles. Use
[modifierStyles](/api/interfaces/daypickerbase#modifierstyles) to change the
style of a day matching the specified modifier.

In the following example, the available days are styled via inline styles.

```include
modifiers-style.tsx
```

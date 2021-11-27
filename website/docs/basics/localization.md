# Localization

## Changing locale

To change the locale, pass to the `locale` prop a date-fns [Locale object](http://date-fns.org/docs/Locale).

For example, to localize the calendar in Spanish, import the locale object from date-fns and pass it to the component:

```include
localization-spanish.tsx
```

## Switching to right-to-left direction

To add right-to-left text direction, set the `dir` prop to `rtl`.

```include
localization-rtl.tsx
```

## Adopting another numbering system

Use [formatters](/guides/formatters) to change the numbering system used in the calendar.

For example, to switch to hindu-arabic using [toLocaleString](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString):

```include
localization-numbering-system.tsx
```

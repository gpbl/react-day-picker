# API Reference

Use this reference to inspect the exported APIs for DayPicker and its calendar packages. Start with [@daypicker/react](react/index.md) for the core component API, then use the calendar package pages when you import a calendar-specific DayPicker.

## Packages

| Package | Use it for |
| --- | --- |
| [@daypicker/react](react/index.md) | Core DayPicker exports: the React component, props, custom component contracts, hooks, utilities, formatters, labels, and shared types. |
| [@daypicker/buddhist](buddhist/index.md) | Buddhist calendar exports, including the Thai calendar DayPicker component, locale constants, and date-library helpers. |
| [@daypicker/ethiopic](ethiopic/index.md) | Ethiopic calendar exports, including the Ethiopic DayPicker component, locale constants, and date-library helpers. |
| [@daypicker/hebrew](hebrew/index.md) | Hebrew calendar exports, including the Hebrew DayPicker component, locale constants, and date-library helpers. |
| [@daypicker/hijri](hijri/index.md) | Hijri calendar exports, including the Umm al-Qura DayPicker component, locale constants, and date-library helpers. |
| [@daypicker/persian](persian/index.md) | Persian calendar exports, including the Jalali DayPicker component, locale constants, and date-library helpers. |

## Common Tasks

- Configure the calendar with [DayPicker](react/functions/DayPicker.md) and [DayPickerProps](react/type-aliases/DayPickerProps.md).
- Customize rendered elements with [Components](react/index.md#components) and [CustomComponents](react/type-aliases/CustomComponents.md).
- Translate labels and formatted text with [Labels](react/type-aliases/Labels.md) and [Formatters](react/type-aliases/Formatters.md).
- Use a calendar package when you need its calendar-specific DayPicker, locales, or date-library helpers.

## Components

Component contracts live in [@daypicker/react](react/index.md#components). Use the [Components](react/index.md#components) group to inspect the default renderers and [CustomComponents](react/type-aliases/CustomComponents.md) to see which components can be replaced with the `components` prop.

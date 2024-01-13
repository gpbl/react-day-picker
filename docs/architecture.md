---
sort: 20
section: Development
title: DayPicker Architecture
description: Learn how DayPicker is designed and how it works under the hood.
---

# DayPicker Architecture

## General Design

DayPicker renders one or multiple grids, each one representing a month.

TODO.

### Date Library

TODO.

## HTML Structure

TODO.

### Styles

TODO.

## Components

TODO.

### Custom Components

TODO.

## Hooks

TODO.

## Contexts

TODO.

## Performance Concerns

TODO.

## Accessibility Concerns

TODO.

## Builds and Continuous Integration

TODO.

## Examples

In the [`examples`](../examples) directory (included in the package) you can find a comprehensive list of examples implementing DayPicker in its various configurations.
Examples are mostly used in the website to show code snippets and its preview, handy for developers to quickly implement DayPicker in their code.

Each example consists in a React component exporting a small application using DayPicker.

```tsx fileName="ExampleName.tsx"
export function ExampleName() [
  return <DayPicker {...props} />;
]
```

We use the examples also for the integration tests and to manually test the library during development.

## Documentation

The documentation is found in the [`docs`](../docs) directory as markdown files.

The markdowns are parsed by the `parse-docs` script to identify code blocks that should be replaced by the source of an example.

````
```tsx example fileName="ExampleName.tsx"
export function ExampleName() [
  return <DayPicker {...props} />;
]
```
````

## Testing

TODO.

---
sort: 1
section: Getting Started
title: Styling DayPicker
description: Change the appearance of the HTML elements, such as headings, grid cells and buttons.
---

# Styling DayPicker

## Using the Default Styles

DayPicker comes with for a minimal, lightweight style. Import
`react-day-picker/dist/style.css` in your application root component, or add it
into your build pipeline:

```tsx showLineNumbers filename="App.tsx" {2}
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css'; // Import this CSS for using the default class names

function App() {
  return (
    <div role="application">
      <DayPicker />
    </div>
  );
}
```

### Importing as CSS module

If you need to import CSS modules to generate unique class names, import from `style.module.css`
instead. Use then the `classNames` prop to pass the new class names to DayPicker.

```tsx showLineNumbers filename="App.tsx" {2,7} showLineNumbers
import { DayPicker } from 'react-day-picker';
import classNames from 'react-day-picker/dist/style.module.css'; // Import this for CSS modules

function App() {
  return (
    <div role="application">
      <DayPicker classNames={classNames} />
    </div>
  );
}
```

## Changing the CSS variables

You can also override the CSS variables using the `className` prop:

```tsx example fileName="styles/css-variables.module.css"

```

```tsx example fileName="CssVariables.tsx"

```

### CSS Variables Playground

🚧 This section is still under construction.

## Extending the Default Styles

To further customize the styles, override the DayPicker CSS. For example, to
change the background color of the day cells, add this style sheet:

```css showLineNumbers filename="App.css"
.rdp-day {
  background-color: #f0f0f0;
}
```

```tsx filename="App.tsx" {4}
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import './App.css'; // Import your custom styles to override the default CSS

function App() {
  return <DayPicker />;
}
```

### Extending with CSS modules

When using CSS modules, override the class names with your custom CSS:

```css example fileName="styles/styling-css-modules.module.css"

```

### Using Inline Styles

To change the appearance of any DayPicker element via inline-styles use the
`styles` prop.

Using inline styles won't override the default class names. Mouse hover effects
cannot be styled inline.

```tsx example fileName="StylingInline.tsx"
import { DayPicker } from 'react-day-picker';

export function StylingInline() {
  const monthCaptionStyle = {
    borderBottom: '1px solid currentColor',
    paddingBottom: '0.5em'
  };
  return (
    <DayPicker
      styles={{
        month_caption: monthCaptionStyle
      }}
    />
  );
}
```

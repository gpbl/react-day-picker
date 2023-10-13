# Styling DayPicker

DayPicker comes with for a minimal, lightweight appearance: import `react-day-picker/dist/style.css` into your root component, or bundle it within your build pipeline.

```tsx
// Your App.tsx file
import 'react-day-picker/dist/style.css';
```

This will add the [DayPicker stylesheet](https://github.com/gpbl/react-day-picker/blob/main/src/style.css) into your app. The stylesheet includes some CSS global variables, to override colors and sizes:

```css
.rdp {
  --rdp-cell-size: 40px; /* Size of the day cells. */
  --rdp-caption-font-size: 18px; /* Font size for the caption labels. */
  --rdp-accent-color: #0000ff; /* Accent color for the background of selected days. */
  --rdp-background-color: #e7edff; /* Background color for the hovered/focused elements. */
  --rdp-accent-color-dark: #3003e1; /* Accent color for the background of selected days (to use in dark-mode). */
  --rdp-background-color-dark: #180270; /* Background color for the hovered/focused elements (to use in dark-mode). */
  --rdp-outline: 2px solid var(--rdp-accent-color); /* Outline border for focused elements */
  --rdp-outline-selected: 3px solid var(--rdp-accent-color); /* Outline border for focused _and_ selected elements */
  --rdp-selected-color: #fff; /* Color of selected day text */
}
```

## Styling Modifiers

Use the [modifiersClassNames](/api/interfaces/daypickerdefaultprops#modifiersclassnames) or [modifiersStyles](/api/interfaces/daypickerdefaultprops#modifiersstyles) props to change the class name, or the inline-style, of the days with active modifiers.

You can style an [internal modifier](/api/enums/InternalModifier), like `selected`, `hidden`, `today`..., or your own [custom modifiers](/basics/modifiers#custom-modifiers).

```include-example
styling-modifiers
```

With CSS modules, pass the generated class name instead:

```tsx
import style from './day-picker.module.css';

function App() {
  return (
    <DayPicker
      mode="multiple"
      modifiersClassNames={{
        selected: style.selected,
        today: style.today
      }}
    />
  );
}
```

## Styling DayPicker elements

You can override the appearance of the HTML elements composing DayPicker, such as heading, cells, buttons. The elements that can be styled are listed in the [StyledElement type](/api/types/StyledElement).

### Pure CSS solution

This approach involves just CSS and works well if you need the same style across your app.

1. create a new CSS file to import after the default style, e.g. `day-picker.css`

   ```tsx
   // Your App.tsx file
   import 'react-day-picker/dist/style.css';
   import './day-picker.css';
   ```

2. change the appearance of DayPicker overriding the original selectors in the new CSS file. Refer to the [stylesheet source](https://github.com/gpbl/react-day-picker/blob/main/src/style.css) to find the right selectors to override.
   ```css
   /* day-picker.css */
   /* Paint the today's date in red */
   .rdp-day_today:not(.rdp-day_outside) {
     color: red;
   }
   ```

:::note
Keep in mind that the selectors may be a bit complex, and they may break in future style updates.
:::

### Using CSS Modules

With CSS modules, import instead `react-day-picker/dist/style.module.css` (not `style.css`) and pass the generated class names to the `classNames` prop.

```include-example
styling-css-modules
```

### Using Inline Styles

To change the appearance of any DayPicker element via inline-styles use the
`styles` prop.

```include-example
styling-inline
```

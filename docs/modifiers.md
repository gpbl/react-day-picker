# Modifiers

## Styling Modifiers

Change the style of [Modifiers](/basics/modifiers) with the
`modifiersClassNames` or `modifiersStyles`. This will set the class name or the
inline style for the days with the modifiers.

```tsx example fileName="StylingModifiers.tsx"
import { DayPicker } from 'react-day-picker';

import { addDays } from 'date-fns';
import customStyles from './styles/styling-modifiers.module.css';

const today = new Date();
const beforeYesterday = addDays(today, -2);

export function StylingModifiers() {
  return (
    <DayPicker
      mode="single"
      selected={new Date()}
      disabled={beforeYesterday}
      modifiersClassNames={{
        selected: customStyles.purpleToday
      }}
      modifiersStyles={{
        disabled: {
          // Add a line-through style to the disabled days
          textDecoration: 'line-through'
        }
      }}
    />
  );
}
```

With CSS modules, pass the generated class name instead:

```tsx {7-10,1} showLineNumbers
import style from './your-style.module.css';

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

---
hide_table_of_contents: true
---

# Getting Started

1. Add `react-day-picker` and [date-fns](https://date-fns.org) to your dependencies:

```bash
npm install date-fns react-day-picker@next
```

2. When importing, include the DayPicker CSS in your component:

```tsx
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

function Component() {
  return <DayPicker />;
}
```

## Example

```include-example
start
```

<<<<<<<< HEAD:website/examples/styling-inline.tsx
import React from 'react';

========
>>>>>>>> v9-latest:docs/examples/dropdown-multiple-months.tsx
import { DayPicker } from 'react-day-picker';

export default function App() {
  return (
    <DayPicker
      numberOfMonths={5}
      captionLayout="dropdown-buttons"
      fromYear={2015}
      toYear={2025}
    />
  );
}

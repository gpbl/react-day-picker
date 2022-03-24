import React, { useState } from 'react';

import { DayPicker } from 'react-day-picker';

const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid currentColor;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: blue;
    color: blue;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: red;
  }
`;

export default function App() {
  const [selectedDay, setSelectedDay] = useState<Date>();
  return (
    <>
      <style>{css}</style>
      <DayPicker
        mode="multiple"
        selected={selectedDay}
        max={3}
        onSelect={setSelectedDay}
        modifiersClassNames={{
          selected: 'my-selected',
          today: 'my-today'
        }}
        modifiersStyles={{
          disabled: { fontSize: '75%' }
        }}
        footer="Try to select 3+ days to see the custom class names or styles applied."
      />
    </>
  );
}

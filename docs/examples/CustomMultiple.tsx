import { DayMouseEventHandler, DayPicker } from 'react-day-picker';

import { isSameDay } from 'date-fns';
import { useState } from 'react';

export function CustomMultiple() {
  const [value, setValue] = useState<Date[]>([]);

  const handleDayClick: DayMouseEventHandler = (day, modifiers) => {
    const newValue = [...value];
    if (modifiers.selected) {
      const index = value.findIndex((d) => isSameDay(day, d));
      newValue.splice(index, 1);
    } else {
      newValue.push(day);
    }
    setValue(newValue);
  };

  const handleResetClick = () => setValue([]);

  let footer = <>Please pick one or more days.</>;

  if (value.length > 0)
    footer = (
      <>
        You selected {value.length} days.{' '}
        <button onClick={handleResetClick}>Reset</button>
      </>
    );

  return (
    <DayPicker
      onDayClick={handleDayClick}
      modifiers={{ selected: value }}
      footer={footer}
    />
  );
}

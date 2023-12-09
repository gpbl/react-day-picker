import { DateRange, DayPicker, SelectHandler } from 'react-day-picker';

import { useEffect, useState } from 'react';
import { isSameDay } from 'date-fns';

export function RangeShiftKey() {
  const [range, setRange] = useState<DateRange>();
  const [shiftPressed, setShiftPressed] = useState(false);

  // Use event listeners to checks whether the shift key is being pressed or not
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) =>
      event.shiftKey ? setShiftPressed(true) : undefined;
    const handleKeyUp = () => setShiftPressed(false);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleSelect: SelectHandler<'range'> = (newRange, date) => {
    if (!shiftPressed) {
      // If the shift key is not pressed, reset the selection
      if (range?.from && isSameDay(range.from, date)) {
        setRange({ from: undefined, to: undefined });
      } else {
        setRange({ from: date, to: undefined });
      }
    } else {
      setRange(newRange);
    }
  };

  return <DayPicker mode="range" selected={range} onSelect={handleSelect} />;
}

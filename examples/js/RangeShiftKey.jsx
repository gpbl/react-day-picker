import { DayPicker } from 'react-day-picker';
import { useEffect, useState } from 'react';
import { isSameDay } from 'date-fns';
export function RangeShiftKey() {
  const [range, setRange] = useState();
  const [shiftPressed, setShiftPressed] = useState(false);
  useEffect(() => {
    const handleKeyDown = (event) =>
      event.shiftKey ? setShiftPressed(true) : undefined;
    const handleKeyUp = () => setShiftPressed(false);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
  const handleSelect = (newRange, date) => {
    if (!shiftPressed) {
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

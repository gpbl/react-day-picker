import { useEffect, useState } from "react";

import { Callout } from "@/components/Callout";
import { isSameDay } from "date-fns";
import {
  DateRange,
  DayPicker,
  SelectRangeEventHandler,
} from "react-day-picker";

export function RangeShiftKey() {
  const [range, setRange] = useState<DateRange>();
  const [shiftPressed, setShiftPressed] = useState(false);

  // Use event listeners to checks whether the shift key is being pressed or not
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) =>
      event.shiftKey ? setShiftPressed(true) : undefined;
    const handleKeyUp = () => setShiftPressed(false);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const handleSelect: SelectRangeEventHandler = (newRange, date) => {
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

  return (
    <div>
      <Callout>
        {!range?.from && !range?.to
          ? "Try selecting a range of days with the shift key pressed."
          : `From ${range?.from?.toLocaleDateString()} to ${range?.to?.toLocaleDateString() ?? "..."}`}
      </Callout>
      <DayPicker
        mode="range"
        selected={range}
        onSelect={handleSelect}
        numberOfMonths={2}
      />
    </div>
  );
}

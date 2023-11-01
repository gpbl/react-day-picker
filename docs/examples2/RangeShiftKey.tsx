import { DateRange, DayGridCellProps, DayPicker } from 'react-day-picker';

import { isSameDay } from 'date-fns';
import { MouseEventHandler, useRef, useState } from 'react';

function DayWithShiftKey(props: DayGridCellProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!props.modifiers.selected || e.shiftKey) {
      props.htmlAttributes.onClick?.(e);
    }
  };

  return <div {...props.htmlAttributes} ref={ref} onClick={handleClick} />;
}

export function RangeShiftKey() {
  const [range, setRange] = useState<DateRange>();

  let footer = <p>Please pick a day.</p>;

  if (range?.from && range?.to) {
    if (isSameDay(range.from, range.to)) {
      footer = <p>Press Shift to choose more days.</p>;
    } else {
      footer = (
        <p>
          {range.from.toLocaleDateString()}—{range.to.toLocaleDateString()}.
        </p>
      );
    }
  }
  return (
    <DayPicker
      components={{
        DayGridCell: DayWithShiftKey
      }}
      mode="range"
      onSelect={setRange}
      selected={range}
      footer={footer}
    />
  );
}

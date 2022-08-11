import React from 'react';

import { format } from 'date-fns';
import { CaptionProps, DayPicker, useNavigation } from 'react-day-picker';

function CustomCaption(props: CaptionProps) {
  const { goToMonth, nextMonth, previousMonth } = useNavigation();
  return (
    <h2>
      {format(props.displayMonth, 'MMM yyy')}
      <button
        disabled={!previousMonth}
        onClick={() => goToMonth(previousMonth)}
      >
        Previous
      </button>
      <button disabled={!nextMonth} onClick={() => goToMonth(nextMonth)}>
        Next
      </button>
    </h2>
  );
}

export default function App() {
  return (
    <DayPicker
      components={{
        Caption: CustomCaption
      }}
    />
  );
}

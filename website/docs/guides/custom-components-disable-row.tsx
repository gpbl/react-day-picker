import * as React from 'react';

import { differenceInCalendarDays } from 'date-fns';

import { DayPicker, Row, RowProps } from 'react-day-picker';
import 'react-day-picker/style.css';

function isPastDate(date) {
  return differenceInCalendarDays(date, new Date()) < 0;
}

function OnlyFutureRow(props: RowProps) {
  const isPastRow = props.dates.every(isPastDate);
  if (isPastRow) return <></>;
  return <Row {...props} />;
}

export default function Example() {
  return (
    <DayPicker
      fromDate={new Date()}
      components={{ Row: OnlyFutureRow }}
      hidden={isPastDate}
      showOutsideDays
    />
  );
}

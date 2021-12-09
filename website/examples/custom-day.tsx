import React from 'react';
import {
  DayContent,
  DayContentProps,
  DayPicker
} from 'react-day-picker';

import { format } from 'date-fns';

function DateTime(props: DayContentProps) {
  const dateTime = format(props.date, 'yyyy-MM-dd');
  return (
    <time dateTime={dateTime}>
      <DayContent {...props} />
    </time>
  );
}

export default function App() {
  return <DayPicker components={{ DayContent: DateTime }} />;
}

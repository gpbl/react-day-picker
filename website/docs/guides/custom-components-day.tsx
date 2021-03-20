import * as React from 'react';

import { format } from 'date-fns';

import { DayContent, DayContentProps, DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

function DateTime(props: DayContentProps) {
  const dateTime = format(props.date, 'yyyy-MM-dd');
  return (
    <time dateTime={dateTime}>
      <DayContent {...props} />
    </time>
  );
}

export default function Example() {
  return <DayPicker components={{ DayContent: DateTime }} />;
}

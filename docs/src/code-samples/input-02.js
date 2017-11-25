import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default function MyDatePicker() {
  return (
    <DayPickerInput
      dayPickerProps={{
        month: new Date(2018, 10),
        showWeekNumbers: true,
        todayButton: 'Today',
      }}
    />
  );
}

import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default function StylingInline() {
  const modifiers = {
    thursdays: { daysOfWeek: [4] },
    birthday: new Date(2018, 9, 30),
  };
  const modifiersStyles = {
    birthday: {
      color: 'white',
      backgroundColor: '#ffc107',
    },
    thursdays: {
      color: '#ffc107',
      backgroundColor: '#fffdee',
    },
  };
  return (
    <DayPicker
      month={new Date(2018, 9)}
      modifiers={modifiers}
      modifiersStyles={modifiersStyles}
    />
  );
}

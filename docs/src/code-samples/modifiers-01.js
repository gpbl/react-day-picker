import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const birthdayStyle = `.DayPicker-Day--highlighted {
  background-color: orange;
  color: white;
}`;

const modifiers = {
  highlighted: new Date(2018, 8, 19),
};

export default function MyBirthday() {
  return (
    <div>
      <style>{birthdayStyle}</style>
      <DayPicker modifiers={modifiers} month={new Date(2018, 8)} />
    </div>
  );
}

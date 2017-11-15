import React from 'react';
import Helmet from 'react-helmet';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const modifiers = {
  disabled: { daysOfWeek: [6] },
  birthday: new Date(2018, 8, 19),
  monday: { daysOfWeek: [1] },
};

export default function Example() {
  return (
    <div>
      <Helmet>
        <style>{`
          .DayPicker-Day--birthday {
            background-color: #00bcd4;
            color: white;
          }
          .DayPicker-Day--monday {
            color: #00bcd4;
          }
          `}</style>
      </Helmet>
      <DayPicker month={new Date(2018, 8)} modifiers={modifiers} />
    </div>
  );
}

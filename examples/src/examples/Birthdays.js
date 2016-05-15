import React from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';
import '../styles/birthdays.css';

const birthdays = {
  3: [{ name: 'Mirko', age: 35 }, { name: 'Gianluca', age: 29 }],
  8: [{ name: 'Elena', age: 21 }],
  9: [{ name: 'Irene', age: 43 }],
  12: [{ name: 'Paolo', age: 78 }, { name: 'Giorgia', age: 18 }],
  18: [{ name: 'Claudia', age: 54 }],
  22: [{ name: 'Maria', age: 9 }, { name: 'Luigi', age: 67 }],
  25: [{ name: 'Simone', age: 31 }],
  26: [{ name: 'Marta', age: 46 }],
};

function renderDay(day) {
  const date = day.getDate();
  return (
    <div>
      {date}
      <div className="Birthdays-List">
        {birthdays[date] &&
          birthdays[date].map((birthday, i) =>
            <div key={i}>
              🎁 {birthday.name} ({birthday.age})
            </div>
          )
        }
      </div>
    </div>
  );
}

export default function Birthdays() {
  return <DayPicker canChangeMonth={false} className="Birthdays" renderDay={renderDay} />;
}

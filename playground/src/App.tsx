import './App.css';
import 'react-day-picker/style.css';

import { useState } from 'react';
import { DayPicker, MonthChangeEventHandler } from 'react-day-picker';

import { addMonths } from 'date-fns';

function App() {
  const [month, setMonth] = useState<Date>(addMonths(new Date(), 1));
  const handleMonthChange: MonthChangeEventHandler = (newMonth) =>
    setMonth(newMonth);

    console.log(month);
  return (
    <>
      <DayPicker month={month} onMonthChange={handleMonthChange} />
      <p>
        <button onClick={() => setMonth(new Date())}>Go to Today</button>
      </p>
    </>
  );
}

export default App;

import './App.css';
import 'react-day-picker/style.css';

import { useState } from 'react';
import { DayPicker, MonthChangeEventHandler } from 'react-day-picker';

import { addMonths } from 'date-fns';

function Example() {
  const [month, setMonth] = useState<Date>(addMonths(new Date(), 1));
  const handleMonthChange: MonthChangeEventHandler = (newMonth) =>
    setMonth(newMonth);
  console.log(month);
  return <DayPicker captionLayout="dropdown" numberOfMonths={4} />;
}

function App() {
  return (
    <div className="App">
      <Example />
    </div>
  );
}

export default App;

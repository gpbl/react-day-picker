import './App.css';
import 'react-day-picker/style.css';

import { DayPicker } from 'react-day-picker';

import { addYears } from 'date-fns';

function App() {
  return (
    <main className="App">
      <h1>Number of months</h1>
      <DayPicker showOutsideDays numberOfMonths={3} />
      <h1>Today</h1>
      <h2>Today is in 10 years</h2>
      <DayPicker today={addYears(new Date(), 10)} />
      <h2>Today off</h2>
      <DayPicker modifiers={{ today: false }} />
      <h1>Week numbers</h1>
      <DayPicker showOutsideDays showWeekNumber numberOfMonths={3} />
      <h1>Dropdowns</h1>
      <DayPicker fromYear={2010} toYear={2020} captionLayout="dropdown" />
      <h1>Range selection</h1>
      <DayPicker
        mode="range"
        fromYear={2010}
        toYear={2020}
        showOutsideDays
        showWeekNumber
        numberOfMonths={1}
      />
    </main>
  );
}

export default App;

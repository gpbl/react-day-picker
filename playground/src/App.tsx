import './App.css';
import 'react-day-picker/style.css';

import { DayPicker } from 'react-day-picker';

function App() {
  return (
    <main className="App">
      <h1>Number of months</h1>
      <DayPicker showOutsideDays numberOfMonths={3} />
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

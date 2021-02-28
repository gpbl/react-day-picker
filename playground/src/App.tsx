import './App.css';
import 'react-day-picker/style.css';

import { DayPicker } from 'react-day-picker';

function Example() {
  return (
    <DayPicker
      mode="range"
      fromYear={2010}
      toYear={2020}
      showOutsideDays
      showWeekNumber
      numberOfMonths={1}
    />
  );
}

function App() {
  return (
    <main className="App">
      <Example />
    </main>
  );
}

export default App;

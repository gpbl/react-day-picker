import { addDays, addYears } from 'date-fns';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

import './App.css';

function App() {
  return (
    <main className="App">
      <h1>Selections</h1>

      <h2>Single selection mode</h2>
      <p>DayPicker is in "single selection mode".</p>
      <DayPicker mode="single" showOutsideDays />
      <h3>Limiting amount of selectable days</h3>
      <p>Cannot select less than one. Default selected is today.</p>
      <DayPicker
        mode="multiple"
        defaultSelected={[new Date()]}
        onSelect={console.log}
      />

      <hr />

      <h2>Multiple selection mode </h2>
      <p>Can select an infinite amount of days.</p>
      <DayPicker mode="multiple" onSelect={console.log} />

      <h3>Limiting amount of selectable days</h3>
      <p>
        Cannot select more than 10 or less than 3. Days disabled when 10
        reached.
      </p>
      <DayPicker
        defaultSelected={[
          new Date(),
          addDays(new Date(), 2),
          addDays(new Date(), 3),
        ]}
        mode="multiple"
        min={3}
        max={10}
      />

      <hr />

      <h2>Range selection mode </h2>

      <p>Can select a range.</p>
      <DayPicker mode="range" onSelect={console.log} />

      <p>Can select a range (min, max).</p>
      <DayPicker mode="range" max={5} onSelect={console.log} />

      <hr />

      <h1>Number of months</h1>
      <DayPicker showOutsideDays numberOfMonths={3} />

      <h2>Select ranges</h2>
      <DayPicker showOutsideDays mode="range" numberOfMonths={3} />

      <hr />

      <h1>Today</h1>
      <p>Today is in 10 years</p>
      <DayPicker today={addYears(new Date(), 10)} onSelect={console.log} />

      <hr />

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

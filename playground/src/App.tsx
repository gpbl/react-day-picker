import './App.css';
import 'react-day-picker/style.css';

import { ClassNames, DayPicker } from 'react-day-picker';

import classNames from './style.module.css';

function Example() {
  return (
    <DayPicker
      classNames={classNames as ClassNames}
      mode="range"
      fromYear={2010}
      toYear={2020}
      showOutsideDays
      showWeekNumber
      onWeekNumberClick={() => ({})}
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

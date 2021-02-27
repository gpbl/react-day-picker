import './App.css';
import 'react-day-picker/style.css';

import { DayPicker } from 'react-day-picker';

function Example() {
  return <DayPicker captionLayout="dropdown" numberOfMonths={4} />;
}

function App() {
  return (
    <main className="App">
      <Example />
    </main>
  );
}

export default App;

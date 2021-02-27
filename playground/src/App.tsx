import './App.css';
import 'react-day-picker/style.css';

import { DayPicker } from 'react-day-picker';

function Example() {
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

import { DayPicker } from "react-day-picker";
import * as Examples from "react-day-picker/examples";
import "react-day-picker/style.css";

import "./App.css";

function App() {
  return (
    <>
      {/* <DayPicker mode="single" /> */}
      <Examples.CustomMultiple />
    </>
  );
}

export default App;

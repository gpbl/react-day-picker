import React from "react";
import { DayPicker } from "react-day-picker";

export default function App() {
  return <DayPicker today={new Date(2022, 2, 18)} />;
}

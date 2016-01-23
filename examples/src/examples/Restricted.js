import React from "react";
import DayPicker from "react-day-picker";

import "react-day-picker/lib/style.css";

const fromMonth = new Date(2015, 3, 1, 0, 0);
const toMonth = new Date(2015, 10, 30, 23, 59);

const disabled = day => fromMonth > day || day > toMonth;

export default function Restricted() {
  return (
    <DayPicker
      enableOutsideDays
      numberOfMonths={ 3 }
      initialMonth={ fromMonth }
      fromMonth={ fromMonth }
      toMonth={ toMonth }
      modifiers={{ disabled }}
      onDayClick={ (e, day) => {
        if (!disabled(day)) {
          console.log(day.toLocaleDateString());
        }
      }}
    />
  )
}

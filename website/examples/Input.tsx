import { useState } from "react";

import { format, isValid, parse } from "date-fns";
import { DayPicker } from "react-day-picker";

export function Input() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [inputValue, setInputValue] = useState("");

  const handleSelect = (date: Date | undefined) => {
    if (!date) {
      setInputValue("");
      setSelectedDate(undefined);
    } else {
      setSelectedDate(date);
      setInputValue(format(date, "MM/dd/yyyy"));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedDate = parse(e.target.value, "MM/dd/yyyy", new Date());
    if (isValid(parsedDate)) {
      setSelectedDate(parsedDate);
    }
    setInputValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor="booking-input">
        <strong>Selected Date: </strong>
      </label>
      <input
        style={{ fontSize: "inherit" }}
        id="booking-input"
        type="text"
        value={inputValue}
        placeholder="MM/dd/yyyy"
        onChange={handleInputChange}
      />
      <DayPicker
        month={selectedDate || new Date()}
        mode="single"
        selected={selectedDate}
        onSelect={handleSelect}
        footer={
          <p aria-live="assertive" aria-atomic="true">
            {selectedDate !== undefined && (
              <>Selected: {selectedDate.toDateString()}</>
            )}
          </p>
        }
      />
    </div>
  );
}

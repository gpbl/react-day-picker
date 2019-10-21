import React from 'react';
import { DayPicker, useInput } from 'react-day-picker';

export function InputBindingExample() {
  const {
    currentMonth,
    selectedDay,
    inputValue,
    createDayClickHandler,
    createMonthChangeHandler,
    createChangeHandler,
    createFocusHandler,
    createBlurHandler,
  } = useInput(new Date(), 'yyyy-MM-dd', { required: true });

  const handleDayClick = createDayClickHandler(day => console.log(day));
  const handleMonthChange = createMonthChangeHandler();
  const handleChange = createChangeHandler();
  const handleFocus = createFocusHandler();
  const handleBlur = createBlurHandler();

  return (
    <form className="center">
      <label>
        <p>Type a day or pick one from the calendar.</p>
        <input
          placeholder="YYYY-MM-DD"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={inputValue}
        />
      </label>
      <br />
      <DayPicker
        month={currentMonth}
        selected={selectedDay}
        onDayClick={handleDayClick}
        onMonthChange={handleMonthChange}
      />
    </form>
  );
}

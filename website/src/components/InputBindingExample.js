import React from 'react';
import { DayPicker, useInput } from 'react-day-picker';

export function InputBindingExample() {
  const [
    currentMonth,
    selectedDay,
    inputValue,
    { onDayClick, onMonthChange, onChange, onFocus, onBlur },
  ] = useInput(new Date(), 'yyyy-MM-dd', { required: true });

  return (
    <form className="center">
      <label>
        <p>Type a day or pick one from the calendar.</p>
        <input
          placeholder="YYYY-MM-DD"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={inputValue}
        />
      </label>
      <br />
      <DayPicker
        month={currentMonth}
        selected={selectedDay}
        onDayClick={onDayClick}
        onMonthChange={onMonthChange}
      />
    </form>
  );
}

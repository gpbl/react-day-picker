/* eslint-disable import/no-unresolved */
import * as React from 'react';
import spanish from 'date-fns/locale/es';

import { DayPicker, useInput } from 'react-day-picker';

function Playground() {
  const {
    currentMonth,
    selectedDay,
    inputValue,
    createDayClickHandler,
    createChangeHandler,
    createMonthChangeHandler,
  } = useInput(new Date(), 'yyyy-MM-dd', {
    locale: spanish,
  });

  const handleDayClick = createDayClickHandler(day => console.log(day));
  const handleChange = createChangeHandler(e => console.log(e));
  const handleMonthChange = createMonthChangeHandler();

  return (
    <form className="center">
      <label>
        <p>Type a day or pick one from the calendar.</p>
        <input
          placeholder="YYYY-MM-DD"
          onChange={handleChange}
          value={inputValue}
          onBlur={() => {}}
        />
      </label>
      <br />
      <DayPicker
        locale={spanish}
        month={currentMonth}
        selected={selectedDay}
        onDayClick={handleDayClick}
        onMonthChange={handleMonthChange}
      />
    </form>
  );
}

export default Playground;

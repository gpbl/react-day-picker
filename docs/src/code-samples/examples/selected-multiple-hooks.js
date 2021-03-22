import React, { useCallback, useState } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const ExampleWithHooks = () => {
  const [days, setDays] = useState([]);

  const handleDayClick = useCallback(
    (day, { selected }) => {
      const selectedDays = days.concat();
      if (selected) {
        const selectedIndex = selectedDays.findIndex(selectedDay =>
          DateUtils.isSameDay(selectedDay, day)
        );
        selectedDays.splice(selectedIndex, 1);
      } else {
        selectedDays.push(day);
      }
      setDays(selectedDays);
    },
    [days]
  );

  return (
    <div>
      <DayPicker selectedDays={days} onDayClick={handleDayClick} />
    </div>
  );
};

export default ExampleWithHooks;

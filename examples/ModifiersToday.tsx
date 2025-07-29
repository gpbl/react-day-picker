import React, { useState } from "react";

import { type DayEventHandler, DayPicker } from "react-day-picker";

export function ModifiersToday() {
  const initialFooter = "Try clicking the today’s date.";
  const [footer, setFooter] = useState(initialFooter);

  const handleDayClick: DayEventHandler<React.MouseEvent> = (
    _day,
    modifiers,
  ) => {
    if (modifiers.today) {
      setFooter("You clicked the today’s date.");
    } else {
      setFooter("This is not the today’s date.");
    }
  };
  return <DayPicker onDayClick={handleDayClick} footer={footer} />;
}

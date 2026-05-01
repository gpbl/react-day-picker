import { DayPicker, type PropsSingle } from "@daypicker/react";
import { subDays } from "date-fns";
import React from "react";

export function ModifiersSelected() {
  const yesterday = subDays(new Date(), 1);
  const handleSelect: PropsSingle["onSelect"] = (_value, _date, modifiers) => {
    if (modifiers.selected) {
      alert("You clicked a selected day.");
    }
    if (modifiers.today) {
      alert("You clicked today");
    }
  };
  return (
    <DayPicker mode="single" selected={yesterday} onSelect={handleSelect} />
  );
}

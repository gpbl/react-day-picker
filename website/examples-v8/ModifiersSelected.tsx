import { subDays } from "date-fns";
import { DayPicker, SelectSingleEventHandler } from "./DayPicker";

export function ModifiersSelected() {
  const yesterday = subDays(new Date(), 1);
  const handleSelect: SelectSingleEventHandler = (value, date, modifiers) => {
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

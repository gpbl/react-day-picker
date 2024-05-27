import { DayPicker } from "./DayPicker";

export function DefaultMonth() {
  return <DayPicker defaultMonth={new Date(1979, 8)} />;
}

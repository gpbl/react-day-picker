import { DayPicker } from "./react-day-picker-v8";

export function FromToMonth() {
  const defaultMonth = new Date(2015, 5);
  return (
    <DayPicker
      defaultMonth={defaultMonth}
      fromMonth={defaultMonth}
      toDate={new Date(2015, 10, 20)}
    />
  );
}

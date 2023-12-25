import { DayPicker } from 'react-day-picker';
export function ModifiersHidden() {
  const hiddenDays = [
    new Date(2022, 5, 10),
    new Date(2022, 5, 20),
    new Date(2022, 5, 11)
  ];
  return <DayPicker defaultMonth={hiddenDays[0]} hidden={hiddenDays} />;
}

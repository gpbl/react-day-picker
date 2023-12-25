import { DayPicker } from 'react-day-picker';
export function ModifiersDisabled() {
  const disabledDays = [
    new Date(2022, 5, 10),
    new Date(2022, 5, 12),
    new Date(2022, 5, 20),
    { from: new Date(2022, 4, 18), to: new Date(2022, 4, 29) }
  ];
  return (
    <DayPicker defaultMonth={new Date(2022, 5, 10)} disabled={disabledDays} />
  );
}

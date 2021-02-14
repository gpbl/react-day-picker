import { Caption, DayPicker } from 'react-day-picker';

export function Playground() {
  return (
    <DayPicker
      components={{ Caption }}
      modifiers={{
        test: { before: new Date() }
      }}
    />
  );
}

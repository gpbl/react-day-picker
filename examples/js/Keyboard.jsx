import { DayPicker } from 'react-day-picker';
export function Keyboard(props) {
  return <DayPicker {...props} today={new Date(2022, 5, 10)} />;
}

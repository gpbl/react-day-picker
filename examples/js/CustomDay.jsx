import { DayPicker } from 'react-day-picker';
function CustomDayGridCell(props) {
  const isFirstDay =
    props.day.date.getDate() === 1 && props.modifiers.outside === false;
  return (
    <time {...props.htmlAttributes}>
      {props.children}
      {isFirstDay && <div>(first day)</div>}
    </time>
  );
}
export function CustomDay() {
  return (
    <DayPicker
      today={new Date(2021, 10, 25)}
      components={{ DayGridCell: CustomDayGridCell }}
    />
  );
}

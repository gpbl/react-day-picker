import { DayGridCellProps, DayPicker } from 'react-day-picker';

function CustomDayGridCell(props: DayGridCellProps) {
  const isFirstDay =
    props.day.date.getDate() === 1 && props.modifiers.outside === false;
  return (
    <time {...props.htmlAttributes}>
      {props.children}
      {isFirstDay && <div>(first day)</div>}
    </time>
  );
}

export default function App() {
  return (
    <DayPicker
      today={new Date(2021, 10, 25)}
      components={{ DayGridCell: CustomDayGridCell }}
    />
  );
}

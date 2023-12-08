import { Week } from '../../classes';
import { useDayPicker } from '../../contexts/DayPickerContext';

export interface WeekNumberRowHeaderProps {
  week: Week;
}

/** Render the cell with the number of the week. */
export function WeekNumberRowHeader(props: WeekNumberRowHeaderProps) {
  const {
    classNames,
    formatters: { formatWeekNumber },
    labels: { labelWeekNumber },
    locale,
    styles,
    onWeekNumberClick
  } = useDayPicker();
  return (
    <div
      role="rowheader"
      aria-colindex={1}
      aria-label={labelWeekNumber(props.week.weekNumber, { locale })}
      className={classNames.weeknumber_rowheader}
      style={styles?.weeknumber_rowheader}
      onClick={(e) =>
        onWeekNumberClick?.(
          props.week.weekNumber,
          props.week.days.map((day) => day.date),
          e
        )
      }
    >
      {formatWeekNumber(props.week.weekNumber, { locale })}
    </div>
  );
}

import type { CalendarWeek } from "../classes";
import { useProps } from "../contexts/props";

/**
 * Render the cell with the number of the week.
 *
 * @group Components
 */
export function WeekNumberRowHeader(props: { week: CalendarWeek }) {
  const {
    classNames,
    formatters: { formatWeekNumber },
    labels: { labelWeekNumber },
    locale,
    styles,
    onWeekNumberClick
  } = useProps();
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

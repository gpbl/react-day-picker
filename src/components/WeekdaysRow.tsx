import { useDayPicker } from "../contexts/DayPickerContext";
import { WeekdayColumnHeader as DefaultWeekdayColumnHeader } from "./WeekdayColumnHeader";
import { getWeekdays } from "./utils/getWeekdays";

/**
 * Render the row with the weekday names.
 *
 * @category Custom Components
 */
export function WeekdaysRow() {
  const {
    classNames,
    components,
    hideWeekdayRow,
    ISOWeek,
    locale,
    showWeekNumber,
    styles,
    weekStartsOn,
  } = useDayPicker();

  const weekdays = getWeekdays(locale, weekStartsOn, ISOWeek);
  const WeekdayColumnHeader =
    components?.WeekdayColumnHeader ?? DefaultWeekdayColumnHeader;

  return (
    <div
      role="row"
      hidden={hideWeekdayRow}
      aria-rowindex={1}
      style={styles?.weekdays_row}
      className={classNames.weekdays_row}
      onClick={(e) => e.stopPropagation()}
    >
      {showWeekNumber && <WeekdayColumnHeader aria-colindex={1} />}
      {weekdays.map((weekday, i) => (
        <WeekdayColumnHeader
          key={i}
          weekday={weekday}
          aria-colindex={showWeekNumber ? i + 2 : i + 1}
        />
      ))}
    </div>
  );
}

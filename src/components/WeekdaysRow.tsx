import { UI } from "../UI";
import { useProps } from "../contexts/props";
import { getWeekdays } from "../helpers/getWeekdays";

import { WeekdayColumnHeader as DefaultWeekdayColumnHeader } from "./WeekdayColumnHeader";

/**
 * Render the row with the weekday names.
 *
 * @group Components
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
    weekStartsOn
  } = useProps();

  const weekdays = getWeekdays(locale, weekStartsOn, ISOWeek);
  const WeekdayColumnHeader =
    components?.WeekdayColumnHeader ?? DefaultWeekdayColumnHeader;

  return (
    <div
      role="row"
      hidden={hideWeekdayRow}
      aria-rowindex={1}
      style={styles?.[UI.WeekdaysRow]}
      className={classNames[UI.WeekdaysRow]}
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

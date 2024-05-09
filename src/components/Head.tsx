import { useDayPicker } from "../contexts/DayPicker";

import { WeekdaysRow as DefaultWeekdaysRow } from "./WeekdaysRow";

/**
 * Render the table head.
 *
 * @deprecated This component should be removed in the next major version. Use
 *   only `WeekdaysRow`.
 */
export function Head(): JSX.Element {
  const { classNames, styles, components } = useDayPicker();
  const WeekdaysRow = components?.WeekdaysRow ?? DefaultWeekdaysRow;
  return (
    <thead style={styles.head} className={classNames.head}>
      <WeekdaysRow />
    </thead>
  );
}

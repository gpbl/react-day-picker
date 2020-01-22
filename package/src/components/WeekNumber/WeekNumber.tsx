import * as React from "react";
import { WeekNumberProps } from "./types";

/**
 * Render the number of the week when {@link showWeekNumber} is enabled.
 *
 * @category Components
 */
export function WeekNumber(props: WeekNumberProps): JSX.Element {
  const { number, dayPickerProps } = props;
  const { formatWeekNumber, locale, classNames, styles } = dayPickerProps;
  return (
    <span className={classNames?.weekNumber} style={styles?.weekNumber}>
      {formatWeekNumber!(number, { locale: locale! })}
    </span>
  );
}

import { MouseEventHandler } from "react";

import { useDayPicker } from "../contexts/DayPicker";

import { Button } from "./Button";

export interface WeekNumberRowHeaderProps {
  /** The number of the week. */
  number: number;
  /** The dates in the week. */
  dates: Date[];
}

/** Render the cell with the number of the week. */
export function WeekNumberRowHeader(props: WeekNumberRowHeaderProps) {
  const { number: weekNumber, dates } = props;
  const {
    onWeekNumberClick,
    styles,
    classNames,
    locale,
    labels: { labelWeekNumber },
    formatters: { formatWeekNumber }
  } = useDayPicker();

  const content = formatWeekNumber(Number(weekNumber), { locale });

  if (!onWeekNumberClick) {
    return (
      <span className={classNames.weeknumber} style={styles.weeknumber}>
        {content}
      </span>
    );
  }

  const label = labelWeekNumber(Number(weekNumber), { locale });

  const handleClick: MouseEventHandler = function (e) {
    onWeekNumberClick(weekNumber, dates, e);
  };

  return (
    <Button
      name="week-number"
      aria-label={label}
      className={classNames.weeknumber}
      style={styles.weeknumber}
      onClick={handleClick}
    >
      {content}
    </Button>
  );
}

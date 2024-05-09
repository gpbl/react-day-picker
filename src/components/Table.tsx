import { useDayPicker } from "../contexts/DayPicker";

import { Footer as DefaultFooter } from "./Footer";
import { Head as DefaultHead } from "./Head";
import { WeekRow as DefaultWeekRow } from "./WeekRow";
import { getMonthWeeks } from "./utils/getMonthWeeks";

/** The props for the {@link Table} component. */
export interface TableProps {
  /** ID of table element */
  id?: string;
  /** The ID of the label of the table (the same given to the Caption). */
  ["aria-labelledby"]?: string;
  /** The month where the table is displayed. */
  displayMonth: Date;
}

/** Render the table with the calendar. */
export function Table(props: TableProps): JSX.Element {
  const {
    locale,
    classNames,
    styles,
    hideHead,
    fixedWeeks,
    components,
    weekStartsOn,
    firstWeekContainsDate,
    ISOWeek
  } = useDayPicker();

  const weeks = getMonthWeeks(props.displayMonth, {
    useFixedWeeks: Boolean(fixedWeeks),
    ISOWeek,
    locale,
    weekStartsOn,
    firstWeekContainsDate
  });

  const Head = components?.Head ?? DefaultHead;
  const WeekRow = components?.WeekRow ?? DefaultWeekRow;
  const Footer = components?.Footer ?? DefaultFooter;
  return (
    <table
      id={props.id}
      className={classNames.table}
      style={styles.table}
      role="grid"
      aria-labelledby={props["aria-labelledby"]}
    >
      {!hideHead && <Head />}
      <tbody className={classNames.tbody} style={styles.tbody}>
        {weeks.map((week) => (
          <WeekRow
            displayMonth={props.displayMonth}
            key={week.weekNumber}
            dates={week.dates}
            weekNumber={week.weekNumber}
          />
        ))}
      </tbody>
      <Footer displayMonth={props.displayMonth} />
    </table>
  );
}

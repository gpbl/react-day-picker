import type { CalendarMonth } from "../classes";
import { useProps } from "../contexts/props";

import { DropdownNav } from "./DropdownNav";

/**
 * Render the caption of a month in the calendar.
 *
 * @group Components
 */
export function MonthCaption(props: {
  /** The month where the grid is displayed. */
  month: CalendarMonth;
  /** Used for the aria-label. */
  id: string;
  /** The index where this month is displayed. */
  index: number;
}) {
  const {
    classNames,
    dropdownNavigation,
    formatters: { formatCaption },
    locale,
    styles
  } = useProps();

  return (
    <div
      id={props.id}
      className={classNames.month_caption}
      style={styles?.month_caption}
    >
      {dropdownNavigation ? (
        <DropdownNav
          month={props.month}
          index={props.index}
          showMonths
          showYears
        />
      ) : dropdownNavigation ? (
        <DropdownNav
          month={props.month}
          index={props.index}
          showMonths={
            dropdownNavigation === true || dropdownNavigation === "month"
          }
          showYears={
            dropdownNavigation === true || dropdownNavigation === "year"
          }
        />
      ) : (
        <span className={classNames.caption_label} aria-live="polite">
          {formatCaption(props.month.date, { locale })}
        </span>
      )}
    </div>
  );
}

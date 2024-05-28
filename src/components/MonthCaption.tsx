import { UI } from "../UI";
import type { CalendarMonth } from "../classes";
import { useProps } from "../contexts/props";

import { DropdownNav } from "./DropdownNav";

/**
 * Render the caption of a month in the calendar.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
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
      className={classNames[UI.MonthCaption]}
      style={styles?.[UI.MonthCaption]}
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
        <span className={classNames[UI.CaptionLabel]} aria-live="polite">
          {formatCaption(props.month.date, { locale })}
        </span>
      )}
    </div>
  );
}

export type MonthCaptionProps = Parameters<typeof MonthCaption>[0];

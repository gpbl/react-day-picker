import { Month } from "../classes";
import { useDayPicker } from "../contexts/DayPickerContext";
import { DropdownNav } from "./DropdownNav";

/**
 * Render the caption of a month in the calendar.
 *
 * @category Custom Components
 */
export function MonthCaption(props: {
  /** The month where the grid is displayed. */
  month: Month;
  /** Used for the aria-label. */
  id: string;
  /** The index where this month is displayed. */
  index: number;
}) {
  const {
    classNames,
    captionLayout,
    dropdownNavigation,
    formatters: { formatCaption },
    locale,
    styles,
  } = useDayPicker();

  return (
    <div
      id={props.id}
      className={classNames.month_caption}
      style={styles?.month_caption}
    >
      {captionLayout === "dropdown" || captionLayout === "dropdown-buttons" ? (
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
        <span className={classNames.caption_label}>
          {formatCaption(props.month.date, { locale })}
        </span>
      )}
    </div>
  );
}

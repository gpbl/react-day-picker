import { Month } from "../classes";
import { useDayPicker } from "../contexts/DayPickerContext";
import { MonthsDropdown } from "./MonthsDropdown";
import { YearsDropdown } from "./YearsDropdown";

/**
 * Render the dropdowns to navigate between months.
 *
 * @category Custom Components
 */
export function DropdownNav(props: {
  /** The month where the dropdown navigation is displayed. */
  month: Month;
  /** Whether the user can change the month. */
  showMonths?: boolean;
  /** Whether the user can change the year. */
  showYears?: boolean;
  /** The index where this month is displayed. */
  index: number;
}) {
  const { classNames, styles } = useDayPicker();

  return (
    <div className={classNames?.dropdown_nav} style={styles?.dropdown_nav}>
      {props.showMonths && <MonthsDropdown month={props.month} />}
      {props.showYears && <YearsDropdown month={props.month} />}
    </div>
  );
}

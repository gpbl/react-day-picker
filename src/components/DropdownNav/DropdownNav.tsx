import { DayPickerMonth } from '../../contexts/CalendarContext';
import { MonthsDropdown } from '../MonthsDropdown';
import { useDayPicker } from '../../contexts/DayPickerContext';
import { YearsDropdown } from '../YearsDropdown';

export interface DropdownNavProps {
  /** The month where the dropdown navigation is displayed. */
  month: DayPickerMonth;
  /** Whether the user can change the month. */
  showMonths?: boolean;
  /** Whether the user can change the year. */
  showYears?: boolean;
}

/**
 * Render the drop-downs to navigate between months.
 */
export function DropdownNav(props: DropdownNavProps) {
  const { classNames, styles } = useDayPicker();

  return (
    <nav className={classNames?.dropdown_nav} style={styles?.dropdown_nav}>
      {props.showMonths && <MonthsDropdown month={props.month} />}
      {props.showYears && <YearsDropdown month={props.month} />}
    </nav>
  );
}

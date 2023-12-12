import { Month } from '../../classes';
import { MonthsDropdown } from '../MonthsDropdown';
import { useDayPicker } from '../../contexts/DayPickerContext';
import { YearsDropdown } from '../YearsDropdown';

export interface DropdownNavProps {
  /** The month where the dropdown navigation is displayed. */
  month: Month;
  /** Whether the user can change the month. */
  showMonths?: boolean;
  /** Whether the user can change the year. */
  showYears?: boolean;
  /** The index where this month is displayed. */
  index: number;
}

/**
 * Render the dropdowns to navigate between months.
 */
export function DropdownNav(props: DropdownNavProps) {
  const { classNames, styles } = useDayPicker();

  return (
    <div className={classNames?.dropdown_nav} style={styles?.dropdown_nav}>
      {props.showMonths && <MonthsDropdown month={props.month} />}
      {props.showYears && <YearsDropdown month={props.month} />}
    </div>
  );
}

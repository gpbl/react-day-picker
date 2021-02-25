import * as React from 'react';

import { isSameYear, setMonth as setDateMonth, startOfMonth } from 'date-fns';

import { useDayPicker } from '../../hooks';
import { MonthChangeEventHandler, UIElement } from '../../types';

/**
 * The props for the [[MonthsDropdown]] component.
 */
export interface MonthsDropdownProps {
  onChange: MonthChangeEventHandler;
  /** The month where the dropdown is displayed. */
  displayMonth: Date;
}

/**
 * Render the dropdown to navigate between months.
 */
export function MonthsDropdown(props: MonthsDropdownProps): JSX.Element {
  const { displayMonth } = props;

  const {
    fromDate,
    toDate,
    styles,
    locale,
    formatters: { formatMonthCaption },
    classNames,
    components: { Dropdown }
  } = useDayPicker();
  const dropdownMonths: Date[] = [];

  if (fromDate && toDate) {
    if (isSameYear(fromDate, toDate)) {
      // only display the months included in the range
      for (
        let month = fromDate.getMonth();
        month <= toDate.getMonth();
        month++
      ) {
        dropdownMonths.push(setDateMonth(startOfMonth(fromDate), month));
      }
    } else {
      // display all the 12 months
      for (let month = 0; month <= 11; month++) {
        const anyDate = new Date(); // any date is OK, we just need the year
        dropdownMonths.push(setDateMonth(startOfMonth(anyDate), month));
      }
    }
  }

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newMonth = setDateMonth(
      new Date(displayMonth),
      Number(e.target.value)
    );
    props.onChange(newMonth);
  };

  return (
    <Dropdown
      className={classNames[UIElement.DropdownMonth]}
      style={styles[UIElement.DropdownMonth]}
      onChange={handleChange}
      value={displayMonth.getMonth()}
      caption={formatMonthCaption(displayMonth, { locale })}
    >
      {dropdownMonths.map((m) => (
        <option key={m.getMonth()} value={m.getMonth()}>
          {formatMonthCaption(m, { locale })}
        </option>
      ))}
    </Dropdown>
  );
}

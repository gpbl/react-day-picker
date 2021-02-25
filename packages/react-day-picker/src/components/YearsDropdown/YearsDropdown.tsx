import * as React from 'react';

import { setYear, startOfYear } from 'date-fns';

import { useDayPicker } from '../../hooks';
import { MonthChangeEventHandler, UIElement } from '../../types';

/**
 * The props for the [[YearsDropdown]] component.
 */
export interface YearsDropdownProps {
  onChange: MonthChangeEventHandler;
  displayMonth: Date;
}

/**
 * Render a dropdown to change the year. Take in account the `nav.fromDate` and
 * `toDate` from context.
 */
export function YearsDropdown(props: YearsDropdownProps): JSX.Element {
  const { displayMonth } = props;
  const {
    fromDate,
    toDate,
    locale,
    styles,
    classNames,
    components: { Dropdown },
    formatters: { formatYearCaption }
  } = useDayPicker();

  const years: Date[] = [];
  if (fromDate && toDate) {
    const fromYear = fromDate.getFullYear();
    const toYear = toDate.getFullYear();
    for (let year = fromYear; year <= toYear; year++) {
      years.push(setYear(startOfYear(new Date()), year));
    }
  }

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newMonth = setYear(new Date(displayMonth), Number(e.target.value));
    props.onChange(newMonth);
  };

  return (
    <Dropdown
      className={classNames[UIElement.DropdownMonth]}
      style={styles[UIElement.DropdownMonth]}
      onChange={handleChange}
      value={displayMonth.getFullYear()}
      caption={formatYearCaption(displayMonth, { locale })}
    >
      {years.map((year) => (
        <option key={year.getFullYear()} value={year.getFullYear()}>
          {formatYearCaption(year, { locale })}
        </option>
      ))}
    </Dropdown>
  );
}

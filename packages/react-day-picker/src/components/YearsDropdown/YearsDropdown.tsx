import * as React from 'react';

import { setYear, startOfYear } from 'date-fns';

import { useDayPicker } from '../../hooks';
import { UIElement } from '../../types';

/**
 * The props for the [[YearsDropdown]] component.
 */
export interface YearsDropdownProps {
  displayMonth: Date;
}

/**
 * Render a dropdown to change the year. Take in account the `fromDate` and
 * `toDate` from context.
 */
export function YearsDropdown(props: YearsDropdownProps): JSX.Element {
  const { displayMonth } = props;

  const {
    locale,
    onMonthChange,
    fromDate,
    toDate,
    classNames,
    styles,
    components: { Dropdown },
    formatters: { formatYearCaption }
  } = useDayPicker();

  const years: Date[] = [];

  if (fromDate && toDate) {
    for (
      let year = fromDate.getFullYear();
      year <= toDate.getFullYear();
      year++
    ) {
      const anyDate = new Date(); // any date is OK, we just need the year
      years.push(setYear(startOfYear(anyDate), year));
    }
  }

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newMonth = new Date(displayMonth);
    newMonth.setFullYear(Number(e.target.value));
    onMonthChange?.(newMonth, e);
  };

  return (
    <Dropdown
      className={classNames[UIElement.DropdownMonth]}
      style={styles?.[UIElement.DropdownMonth]}
      onChange={handleChange}
      value={displayMonth.getMonth()}
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

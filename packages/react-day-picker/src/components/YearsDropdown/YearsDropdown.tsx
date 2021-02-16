import * as React from 'react';

import { setYear, startOfYear } from 'date-fns';

import { Dropdown } from '../../components';
import { useProps } from '../../hooks';
import { UIElement } from '../../types';

export interface YearsDropdownProps {
  displayMonth: Date;
}

export function YearsDropdown(props: YearsDropdownProps): JSX.Element {
  const { displayMonth } = props;

  const {
    locale,
    onMonthChange,
    fromDate,
    toDate,
    classNames,
    formatters: { formatYearCaption }
  } = useProps();

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

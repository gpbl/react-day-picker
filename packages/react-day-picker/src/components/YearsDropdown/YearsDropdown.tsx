import * as React from 'react';

import { setYear, startOfYear } from 'date-fns';

import { IconDropdown } from '../../components';
import { useProps } from '../../hooks';

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
  const disabled = !fromDate || !toDate;

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

  const handleYearChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newMonth = new Date(displayMonth);
    newMonth.setFullYear(Number(e.target.value));
    onMonthChange?.(newMonth, e);
  };

  return (
    <div className={classNames.DropdownYear}>
      <select
        className={classNames.Dropdown}
        value={displayMonth.getFullYear()}
        onChange={handleYearChange}
        disabled={disabled}
      >
        {years.map((year) => (
          <option key={year.getFullYear()} value={year.getFullYear()}>
            {formatYearCaption(year, { locale })}
          </option>
        ))}
      </select>
      <div className={classNames.DropdownLabel} aria-live="polite">
        {formatYearCaption(displayMonth, { locale })}
        <IconDropdown className={classNames.IconDropdown} />
      </div>
    </div>
  );
}

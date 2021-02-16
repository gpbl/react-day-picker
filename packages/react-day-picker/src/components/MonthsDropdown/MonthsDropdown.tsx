import * as React from 'react';

import { isSameYear, setMonth, startOfMonth } from 'date-fns';

import { IconDropdown } from '../../components';
import { useProps } from '../../hooks';

export interface MonthsDropdownProps {
  displayMonth: Date;
}

export function MonthsDropdown(props: MonthsDropdownProps): JSX.Element {
  const { displayMonth } = props;
  const {
    locale,
    onMonthChange,
    fromDate,
    toDate,
    classNames,
    dropdownNavigation,
    formatters: { formatMonthCaption }
  } = useProps();

  const dropdownMonths: Date[] = [];
  const showDropdown =
    dropdownNavigation && Boolean(fromDate) && Boolean(toDate);
  if (fromDate && toDate) {
    if (isSameYear(fromDate, toDate)) {
      // only display the months included in the range
      for (
        let month = fromDate.getMonth();
        month <= toDate.getMonth();
        month++
      ) {
        dropdownMonths.push(setMonth(startOfMonth(fromDate), month));
      }
    } else {
      // display all the 12 months
      for (let month = 0; month <= 11; month++) {
        const anyDate = new Date(); // any date is OK, we just need the year
        dropdownMonths.push(setMonth(startOfMonth(anyDate), month));
      }
    }
  }

  const handleMonthChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    const newMonth = new Date(displayMonth);
    newMonth.setMonth(Number(e.target.value));
    onMonthChange?.(newMonth, e);
  };

  return (
    <div className={classNames.DropdownMonth}>
      {showDropdown && (
        <select
          className={classNames.Dropdown}
          value={displayMonth.getMonth()}
          onChange={handleMonthChange}
        >
          {dropdownMonths.map((m) => (
            <option key={m.getMonth()} value={m.getMonth()}>
              {formatMonthCaption(m, { locale })}
            </option>
          ))}
        </select>
      )}
      <div className={classNames.DropdownLabel} aria-live="polite">
        {formatMonthCaption(displayMonth, { locale })}
        {showDropdown && <IconDropdown className={classNames.IconDropdown} />}
      </div>
    </div>
  );
}

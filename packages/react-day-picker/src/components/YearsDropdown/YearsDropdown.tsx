import * as React from 'react';
import { setYear, startOfYear } from 'date-fns';
import { IconDropdown, DayPickerContext } from '../../components';

export interface YearsDropdownProps {
  displayMonth: Date;
}

export function YearsDropdown(props: YearsDropdownProps): JSX.Element {
  const { displayMonth } = props;

  const context = React.useContext(DayPickerContext);
  const {
    locale,
    onMonthChange,
    fromDate,
    toDate,
    classNames,
    dropdownNavigation
  } = context;

  const { formatYearCaption } = context.formatters;
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

  const showDropdown = dropdownNavigation && !disabled && years.length > 1;
  return (
    <div className={classNames.DropdownYear}>
      {showDropdown && (
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
      )}
      <div className={classNames.DropdownLabel} aria-live="polite">
        {formatYearCaption(displayMonth, { locale })}
        {showDropdown && <IconDropdown className={classNames.IconDropdown} />}
      </div>
    </div>
  );
}

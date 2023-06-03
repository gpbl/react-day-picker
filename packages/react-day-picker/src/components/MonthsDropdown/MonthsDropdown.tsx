import React from 'react';

import { isSameYear, setMonth, startOfMonth } from 'date-fns';

import { Dropdown } from 'components/Dropdown';
import { DropdownOption } from 'components/DropdownOption';
import { useDayPicker } from 'contexts/DayPicker';
import { MonthChangeEventHandler } from 'types/EventHandlers';

/** The props for the {@link MonthsDropdown} component. */
export interface MonthsDropdownProps {
  /** The month where the dropdown is displayed. */
  displayMonth: Date;
  onChange: MonthChangeEventHandler;
}

/** Render the dropdown to navigate between months. */
export function MonthsDropdown(props: MonthsDropdownProps): JSX.Element {
  const {
    fromDate,
    toDate,
    styles,
    locale,
    formatters: { formatMonthCaption },
    classNames,
    components,
    labels: { labelMonthDropdown }
  } = useDayPicker();

  // Dropdown should appear only when both from/toDate is set
  if (!fromDate) return <></>;
  if (!toDate) return <></>;

  const dropdownMonths: Date[] = [];

  if (isSameYear(fromDate, toDate)) {
    // only display the months included in the range
    const date = startOfMonth(fromDate);
    for (let month = fromDate.getMonth(); month <= toDate.getMonth(); month++) {
      dropdownMonths.push(setMonth(date, month));
    }
  } else {
    // display all the 12 months
    const date = startOfMonth(new Date()); // Any date should be OK, as we just need the year
    for (let month = 0; month <= 11; month++) {
      dropdownMonths.push(setMonth(date, month));
    }
  }

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const selectedMonth = Number(e.target.value);
    const newMonth = setMonth(startOfMonth(props.displayMonth), selectedMonth);
    props.onChange(newMonth);
  };

  const DropdownComponent = components?.Dropdown ?? Dropdown;
  const OptionComponent = components?.DropdownOption ?? DropdownOption;

  return (
    <DropdownComponent
      name="months"
      aria-label={labelMonthDropdown()}
      className={classNames.dropdown_month}
      style={styles.dropdown_month}
      onChange={handleChange}
      value={props.displayMonth.getMonth()}
      caption={formatMonthCaption(props.displayMonth, { locale })}
    >
      {dropdownMonths.map((m) => {
        const label = formatMonthCaption(m, { locale });
        return (
          <OptionComponent
            type="month"
            key={m.getMonth()}
            value={m.getMonth()}
            label={typeof label === 'string' ? label : undefined}
            date={m}
          >
            {label}
          </OptionComponent>
        );
      })}
    </DropdownComponent>
  );
}

import React from 'react';

import setYear from 'date-fns/setYear';
import startOfMonth from 'date-fns/startOfMonth';
import startOfYear from 'date-fns/startOfYear';

import { Dropdown } from 'components/Dropdown';
import { useDayPicker } from 'contexts/DayPicker';
import { MonthChangeEventHandler } from 'types/EventHandlers';

/**
 * The props for the [[YearsDropdown]] component.
 */
export interface YearsDropdownProps {
  /** The month where the drop-down is displayed. */
  displayMonth: Date;
  /** Callback to handle the `change` event. */
  onChange: MonthChangeEventHandler;
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
    components,
    formatters: { formatYearCaption },
    labels: { labelYearDropdown }
  } = useDayPicker();

  const years: Date[] = [];

  // Dropdown should appear only when both from/toDate is set
  if (!fromDate) return <></>;
  if (!toDate) return <></>;

  const fromYear = fromDate.getFullYear();
  const toYear = toDate.getFullYear();
  for (let year = fromYear; year <= toYear; year++) {
    years.push(setYear(startOfYear(new Date()), year));
  }

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newMonth = setYear(
      startOfMonth(displayMonth),
      Number(e.target.value)
    );
    props.onChange(newMonth);
  };

  const DropdownComponent = components?.Dropdown ?? Dropdown;

  return (
    <DropdownComponent
      aria-label={labelYearDropdown()}
      className={classNames.dropdown_month}
      style={styles.dropdown_month}
      onChange={handleChange}
      value={displayMonth.getFullYear()}
      caption={formatYearCaption(displayMonth, { locale })}
    >
      {years.map((year) => (
        <option key={year.getFullYear()} value={year.getFullYear()}>
          {formatYearCaption(year, { locale })}
        </option>
      ))}
    </DropdownComponent>
  );
}

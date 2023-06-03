import React from 'react';

import { setYear, startOfMonth, startOfYear } from 'date-fns';

import { Dropdown } from 'components/Dropdown';
import { DropdownOption } from 'components/DropdownOption';
import { useDayPicker } from 'contexts/DayPicker';
import { MonthChangeEventHandler } from 'types/EventHandlers';

/**
 * The props for the {@link YearsDropdown} component.
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
  const OptionComponent = components?.DropdownOption ?? DropdownOption;

  return (
    <DropdownComponent
      name="years"
      aria-label={labelYearDropdown()}
      className={classNames.dropdown_year}
      style={styles.dropdown_year}
      onChange={handleChange}
      value={displayMonth.getFullYear()}
      caption={formatYearCaption(displayMonth, { locale })}
    >
      {years.map((year) => {
        const label = formatYearCaption(year, { locale });
        return (
          <OptionComponent
            type="year"
            key={year.getFullYear()}
            value={year.getFullYear()}
            label={typeof label === 'string' ? label : undefined}
            date={year}
          >
            {label}
          </OptionComponent>
        );
      })}
    </DropdownComponent>
  );
}

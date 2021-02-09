import * as DateFns from 'date-fns';
import * as React from 'react';

import { DEFAULT_PROPS } from '../../components/DayPicker/defaults/props';
import { UseInput, UseInputOptions } from './types';

/**
 * @private
 */
function isValidDate(day: Date): boolean {
  return !isNaN(day.getTime());
}

/**
 * Hook to bind a input with a calendar.
 *
 * ```jsx
 * const { dayPickerProps, inputProps } = useInput(new Date());
 *
 * <DayPicker {...dayPickerProps} />
 * <input {...inputProps} />
 * ```
 *
 * @category Hook
 */
export function useInput(
  initialDay: Date,
  formatStr: string,
  options?: UseInputOptions
): UseInput {
  // Defaults from options
  const locale = options?.locale || DEFAULT_PROPS.locale;
  const required = options?.required || false;

  // Shortcut to the DateFns functions
  const format = (day: Date) => DateFns.format(day, formatStr, { locale });
  const parse = (value: string) =>
    DateFns.parse(value, formatStr, new Date(), { locale });

  // The initial value of the input field
  const initialValue = initialDay ? format(initialDay) : '';

  // Initialize state
  const [selected, setSelected] = React.useState<Date | undefined>(initialDay);
  const [value, setValue] = React.useState(initialValue);
  const [month, setMonth] = React.useState(initialDay || new Date());

  // DayPicker event handlers
  const onDayClick = (day: Date) => {
    setSelected(day);
    setValue(format(day));
  };
  const onMonthChange = (month: React.SetStateAction<Date>) => {
    setMonth(month);
  };

  // When changing the input field, save its value in state and check if the
  // string is a valid date. If it is a valid day, set it as selected and update
  // the calendar’s month.
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    const day = parse(e.target.value);
    if (!isValidDate(day)) {
      setSelected(undefined);
      return;
    }
    setSelected(day);
    setMonth(day);
  };

  // Special case for _required_ fields: on blur, if the value of the input is not
  // a valid date, reset the calendar and the input value.
  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const day = parse(e.target.value);
    if (!required || isValidDate(day)) {
      return;
    }
    setSelected(initialDay);
    setMonth(initialDay || new Date());
    setValue(initialValue || '');
  };

  // When focusing, make sure DayPicker visualize the month of the date in the
  // input field.
  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const day = parse(e.target.value);
      if (isValidDate(day)) {
        setMonth(day);
      }
      return;
    }
    setSelected(initialDay);
    setMonth(initialDay || new Date());
    setValue(initialValue || '');
  };

  return {
    setMonth,
    setValue,
    dayPickerProps: {
      month,
      selected,
      onDayClick,
      onMonthChange
    },
    inputProps: {
      value,
      onChange,
      onFocus,
      onBlur
    }
  };
}

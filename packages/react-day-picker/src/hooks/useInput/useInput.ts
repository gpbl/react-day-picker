import * as React from 'react';

import { format, parse } from 'date-fns';
import { DayPickerProps } from 'types';

export type UseInput = {
  setMonth: React.Dispatch<React.SetStateAction<Date>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  dayPickerProps: Partial<DayPickerProps>;
  inputProps: Partial<JSX.IntrinsicElements['input']>;
};

/** @private */
function isValidDate(day: Date): boolean {
  return !isNaN(day.getTime());
}

/**
 * Return the props for binding an input field with DayPicker.
 *
 * **Example**
 *
 * ```
 * function Example() {
 *   const { dayPickerProps, inputProps } = useInput(new Date(), 'yyyy-MM-dd');
 *   return (
 *     <>
 *       <p>
 *         Type a day or pick one from the calendar:
 *         <input {...inputProps} placeholder="YYYY-MM-DD" />
 *       </p>
 *       <DayPicker {...dayPickerProps} />
 *     </>
 *   );
 * }
 * ```
 */

export function useInput(
  initialDay: Date,
  formatStr: string,
  options?: {
    locale?: Locale;
    required: boolean;
  }
): UseInput {
  // Defaults from options
  const locale = options?.locale;
  const required = options?.required ?? false;

  // Shortcut to the DateFns functions
  const formatDay = (day: Date) => format(day, formatStr, { locale });
  const parseValue = (value: string) =>
    parse(value, formatStr, new Date(), { locale });

  // The initial value of the input field
  const initialValue = initialDay ? formatDay(initialDay) : '';

  // Initialize state
  const [selected, setSelected] = React.useState<Date | undefined>(initialDay);
  const [value, setValue] = React.useState(initialValue);
  const [month, setMonth] = React.useState(initialDay ?? new Date());

  const onDayClick = (day: Date) => {
    setSelected(day);
    setValue(formatDay(day));
  };
  const onMonthChange = (month: React.SetStateAction<Date>) => {
    setMonth(month);
  };

  // When changing the input field, save its value in state and check if the
  // string is a valid date. If it is a valid day, set it as selected and update
  // the calendar’s month.
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    const day = parseValue(e.target.value);
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
    const day = parseValue(e.target.value);
    if (!required ?? isValidDate(day)) {
      return;
    }
    setSelected(initialDay);
    setMonth(initialDay ?? new Date());
    setValue(initialValue ?? '');
  };

  // When focusing, make sure DayPicker visualizes the month of the date in the
  // input field.
  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const day = parseValue(e.target.value);
      if (isValidDate(day)) {
        setMonth(day);
      }
      return;
    }
    setSelected(initialDay);
    setMonth(initialDay ?? new Date());
    setValue(initialValue ?? '');
  };

  return {
    setMonth,
    setValue,
    dayPickerProps: {
      month,
      selected,
      onDayClick,
      onMonthChange,
      mode: 'uncontrolled'
    },
    inputProps: {
      value,
      onChange,
      onFocus,
      onBlur
    }
  };
}

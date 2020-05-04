import * as React from 'react';
import * as DateFns from 'date-fns';

import { DayPickerProps } from '../components/DayPicker';
import { defaultProps } from '../components/DayPicker/defaults/defaultProps';

/**
 * @private
 */
function isValidDate(day: Date): boolean {
  return !isNaN(day.getTime());
}

/** Props to attach to the DayPicker component */
export type UseInputDayPickerProps = {
  onMonthChange: DayPickerProps['onMonthChange'];
  onDayClick: DayPickerProps['onDayClick'];
};

/** Props to attach to the `input` HTML element */
export type UseInputInputProps = {
  value: JSX.IntrinsicElements['input']['value'];
  onFocus: JSX.IntrinsicElements['input']['onFocus'];
  onBlur: JSX.IntrinsicElements['input']['onBlur'];
  onChange: JSX.IntrinsicElements['input']['onChange'];
};

/**
 * Hook to bind a input with a calendar.
 *
 * ```jsx
 * const {
 *  month,
 *  selected,
 *  dayPickerProps,
 *  inputProps
 * } = useInput(new Date());
 *
 * <DayPicker {...dayPickerProps} />
 * <input {...inputProps} />
 * ```
 *
 * @category Hooks
 */
export function useInput(
  initialSelectedDay: Date | undefined,
  formatStr: string,
  options: {
    locale: DateFns.Locale;
    required: boolean;
  }
): {
  month: Date;
  selected: Date | undefined; // current month
  dayPickerProps: UseInputDayPickerProps;
  inputProps: UseInputInputProps;
} {
  const opts = {
    locale: defaultProps.locale,
    required: false,
    ...options
  };
  const initialInputValue = initialSelectedDay
    ? DateFns.format(initialSelectedDay, formatStr, opts)
    : '';

  const [selectedDay, setSelectedDay] = React.useState<Date | undefined>(
    initialSelectedDay
  );
  const [inputValue, setInputValue] = React.useState(initialInputValue);
  const [currentMonth, setCurrentMonth] = React.useState(
    initialSelectedDay || new Date()
  );

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const el = e.target;
    setInputValue(el.value);
    const day = DateFns.parse(el.value, formatStr, new Date(), opts);
    if (!isValidDate(day)) {
      setSelectedDay(undefined);
      return;
    }
    setSelectedDay(day);
    setCurrentMonth(day); // Update the month shown in the calendar.
  }

  function onBlur(e: React.FocusEvent<HTMLInputElement>): void {
    const el = e.target;
    const day = DateFns.parse(el.value, formatStr, new Date(), opts);
    if (isValidDate(day) || !opts.required) {
      if (onBlur) onBlur(e);
      return;
    }

    setSelectedDay(initialSelectedDay);
    setCurrentMonth(initialSelectedDay || new Date());
    setInputValue(initialInputValue || '');
  }

  function onFocus(e: React.FocusEvent<HTMLInputElement>): void {
    const el = e.target;

    if (el.value) {
      const day = DateFns.parse(el.value, formatStr, new Date(), opts);
      if (isValidDate(day)) {
        setCurrentMonth(day);
      }
      if (onFocus) onFocus(e);
      return;
    }
    setSelectedDay(initialSelectedDay);
    setCurrentMonth(initialSelectedDay || new Date());
    setInputValue(initialInputValue || '');

    if (onFocus) onFocus(e);
  }

  function onDayClick(day: Date): void {
    // if (day.modifiers.selected) {
    //   if (!opts.required) {
    //     setSelectedDay(undefined);
    //     setInputValue('');
    //   }
    //   return;
    // }
    setSelectedDay(day);
    const value = DateFns.format(day, formatStr, opts);
    setInputValue(value);
  }

  function onMonthChange(month: React.SetStateAction<Date>): void {
    setCurrentMonth(month);
  }

  return {
    month: currentMonth,
    selected: selectedDay,
    dayPickerProps: { onDayClick, onMonthChange },
    inputProps: {
      value: inputValue,
      onChange,
      onFocus,
      onBlur
    }
  };
}

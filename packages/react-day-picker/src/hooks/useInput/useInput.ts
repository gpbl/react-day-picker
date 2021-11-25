import * as React from 'react';

import { differenceInCalendarDays, format as _format, parse } from 'date-fns';
import enUS from 'date-fns/locale/en-US';

import { parseFromToProps } from '../../contexts/DayPicker/utils';
import { DayClickEventHandler, MonthChangeEventHandler } from '../../types';
import { isValidDate } from './utils/isValidDate';

/** Represent the props to attach to the input field. */
export interface UseInputFieldProps {
  /** Event handler for the blur event. */
  onBlur: React.FocusEventHandler;
  /** Event handler for the change event. */
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  /** Event handler for the focus event. */
  onFocus: React.FocusEventHandler;
  /** The value of the input field */
  value: string;
  /** The input field placeholder */
  placeholder?: string;
}

/** Represent the props to attach to DayPicker component. */
export interface UseInputDayPickerProps {
  mode: 'custom';
  fromDate?: Date;
  locale: Locale;
  min: number;
  month: Date;
  onDayClick: DayClickEventHandler;
  onMonthChange: MonthChangeEventHandler;
  selected: Date | undefined;
  toDate?: Date;
  today: Date;
}

export interface UseInputOptions {
  /**
   * The date-fns locale object to localize the user interface. Defaults to `en-US`.
   *
   * ```
   * import es from 'date-fns/locale/es';
   * ```
   *
   * See also date-fns [Internationalization guide](https://date-fns.org/docs/I18n).
   *
   */
  locale?: Locale;
  /** The format string for formatting the input field. See https://date-fns.org/docs/format for a list of format strings. Default to `PP`. */
  format?: string;
  /** The earliest day to start the month navigation. */
  fromDate?: Date;
  /** The latest day to end the month navigation. */
  toDate?: Date;
  /** The earliest month to start the month navigation. */
  fromMonth?: Date;
  /** The latest month to end the month navigation. */
  toMonth?: Date;
  /** The earliest year to start the month navigation. */
  fromYear?: number;
  /** The latest year to end the month navigation. */
  toYear?: number;
  /** The date to use as "today". */
  today?: Date;
  /** Make the selection required. */
  required?: boolean;
  /** The initially selected day. */
  defaultSelected?: Date;
}

/** Represent the value returned by [[useInput]]. */
export interface UseInput {
  /** The props to pass to a DayPicker component: `<DayPicker {...dayPickerProps} />` */
  dayPickerProps: UseInputDayPickerProps;
  /** The props to pass to an input field: `<input {...inputProps} />` */
  inputProps: UseInputFieldProps;
  /** A function to reset to the initial state. */
  reset: () => void;
  /** A function to set the selected day. */
  setSelected: (day: Date) => void;
}

/** Return props and setters for binding an input field to DayPicker. */
export function useInput(options: UseInputOptions = {}): UseInput {
  const {
    locale = enUS,
    required,
    format = 'PP',
    defaultSelected,
    today = new Date()
  } = options;
  const { fromDate, toDate } = parseFromToProps(options);

  const min = required ? 1 : 0;

  // Shortcut to the DateFns functions
  const parseValue = (value: string) => parse(value, format, today, { locale });

  // Initialize states
  const [month, setMonth] = React.useState(defaultSelected ?? today);
  const [selectedDay, setSelectedDay] = React.useState<Date | undefined>(
    defaultSelected
  );
  const defaultInputValue = defaultSelected
    ? _format(defaultSelected, format, { locale })
    : '';
  const [inputValue, setInputValue] = React.useState(defaultInputValue);

  const reset = () => {
    setSelectedDay(defaultSelected);
    setMonth(defaultSelected ?? today);
    setInputValue(defaultInputValue ?? '');
  };

  const setSelected = (date: Date | undefined) => {
    setSelectedDay(date);
    setMonth(date ?? today);
    setInputValue(date ? _format(date, format, { locale }) : '');
  };

  const handleDayClick: DayClickEventHandler = (day, { selected }) => {
    if (!required && selected) {
      setSelectedDay(undefined);
      setInputValue('');
      return;
    }
    setSelectedDay(day);
    setInputValue(day ? _format(day, format, { locale }) : '');
  };

  const handleMonthChange: MonthChangeEventHandler = (month) => {
    setMonth(month);
  };

  // When changing the input field, save its value in state and check if the
  // string is a valid date. If it is a valid day, set it as selected and update
  // the calendar’s month.
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
    const day = parseValue(e.target.value);
    const isBefore = fromDate && differenceInCalendarDays(fromDate, day) > 0;
    const isAfter = toDate && differenceInCalendarDays(day, toDate) > 0;
    if (!isValidDate(day) || isBefore || isAfter) {
      setSelectedDay(undefined);
      return;
    }
    setSelectedDay(day);
    setMonth(day);
  };

  // Special case for _required_ fields: on blur, if the value of the input is not
  // a valid date, reset the calendar and the input value.
  const handleBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    const day = parseValue(e.target.value);
    if (!isValidDate(day)) {
      reset();
    }
  };

  // When focusing, make sure DayPicker visualizes the month of the date in the
  // input field.
  const handleFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.value) {
      reset();
      return;
    }
    const day = parseValue(e.target.value);
    if (isValidDate(day)) {
      setMonth(day);
    }
  };

  const dayPickerProps: UseInputDayPickerProps = {
    mode: 'custom',
    month: month,
    onDayClick: handleDayClick,
    onMonthChange: handleMonthChange,
    selected: selectedDay,
    locale,
    fromDate: options?.fromDate,
    toDate: options?.toDate,
    today,
    min
  };

  const inputProps: UseInputFieldProps = {
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus,
    value: inputValue,
    placeholder: _format(new Date(), format, { locale })
  };

  return { dayPickerProps, inputProps, reset, setSelected };
}

import React from 'react';

import { differenceInCalendarDays, format as _format, parse } from 'date-fns';
import enUS from 'date-fns/locale/en-US';

import { parseFromToProps } from 'contexts/DayPicker/utils';
import { DayPickerProps } from 'types/DayPicker';
import { DayPickerCustomProps } from 'types/DayPickerCustom';
import {
  DayClickEventHandler,
  MonthChangeEventHandler
} from 'types/EventHandlers';

import { isValidDate } from './utils/isValidDate';

/** The props to attach to the input field when using [[useInput]]. */
export type InputHTMLAttributes = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onBlur' | 'onChange' | 'onFocus' | 'value' | 'placeholder'
>;

/** The props to attach to the DayPicker component when using [[useInput]]. */
export type InputDayPickerProps = Pick<
  DayPickerCustomProps,
  | 'mode'
  | 'fromDate'
  | 'toDate'
  | 'locale'
  | 'month'
  | 'onDayClick'
  | 'onMonthChange'
  | 'selected'
  | 'today'
>;

export interface UseInputOptions
  extends Pick<
    DayPickerProps,
    | 'locale'
    | 'fromDate'
    | 'toDate'
    | 'fromMonth'
    | 'toMonth'
    | 'fromYear'
    | 'toYear'
    | 'today'
  > {
  /** The initially selected date */
  defaultSelected?: Date;
  /** The format string for formatting the input field. See https://date-fns.org/docs/format for a list of format strings. Default to `PP`. */
  format?: string;
  /** Make the selection required. */
  required?: boolean;
}

/** Represent the value returned by [[useInput]]. */
export interface UseInput {
  /** The props to pass to a DayPicker component. */
  dayPickerProps: InputDayPickerProps;
  /** The props to pass to an input field. */
  inputProps: InputHTMLAttributes;
  /** A function to reset to the initial state. */
  reset: () => void;
  /** A function to set the selected day. */
  setSelected: (day: Date | undefined) => void;
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

  // Shortcut to the DateFns functions
  const parseValue = (value: string) => parse(value, format, today, { locale });

  // Initialize states
  const [month, setMonth] = React.useState(defaultSelected ?? today);
  const [selectedDay, setSelectedDay] = React.useState(defaultSelected);
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

  const dayPickerProps: InputDayPickerProps = {
    mode: 'custom',
    month: month,
    onDayClick: handleDayClick,
    onMonthChange: handleMonthChange,
    selected: selectedDay,
    locale,
    fromDate: options?.fromDate,
    toDate: options?.toDate,
    today
  };

  const inputProps: InputHTMLAttributes = {
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus,
    value: inputValue,
    placeholder: _format(new Date(), format, { locale })
  };

  return { dayPickerProps, inputProps, reset, setSelected };
}

import * as React from 'react';
import { format, parse } from 'date-fns';
import { defaultProps } from '../defaultProps';

function isValid(day: Date): boolean {
  return !isNaN(day.getTime());
}

export const useInput: ReactDayPicker.useInput = (
  initialSelectedDay,
  formatStr,
  _options
) => {
  const options: ReactDayPicker.UseInputOptions = {
    locale: defaultProps.locale,
    required: false,
    ..._options,
  };

  const initialInputValue = initialSelectedDay
    ? format(initialSelectedDay, formatStr, options)
    : '';

  const [selectedDay, setSelectedDay] = React.useState<Date | undefined>(
    initialSelectedDay
  );
  const [inputValue, setInputValue] = React.useState(initialInputValue);
  const [currentMonth, setCurrentMonth] = React.useState(
    initialSelectedDay || new Date()
  );

  const createChangeHandler: ReactDayPicker.ChangeEventHandlerCreator = onChange => {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
      const el = e.target as HTMLInputElement;
      setInputValue(el.value);
      const day = parse(el.value, formatStr, new Date(), options);
      if (!isValid(day)) {
        setSelectedDay(undefined);
        return;
      }
      setSelectedDay(day);
      setCurrentMonth(day); // Update the month shown in the calendar.
      if (onChange) onChange(e);
    }
    return handleChange;
  };

  const createBlurHandler: ReactDayPicker.BlurEventHandlerCreator = onBlur => {
    function handleBlur(e: React.FocusEvent<HTMLInputElement>): void {
      const el = e.target as HTMLInputElement;
      const day = parse(el.value, formatStr, new Date(), options);
      if (isValid(day) || !options.required) {
        if (onBlur) onBlur(e);
        return;
      }

      setSelectedDay(initialSelectedDay);
      setCurrentMonth(initialSelectedDay || new Date());
      setInputValue(initialInputValue || '');

      if (onBlur) onBlur(e);
    }
    return handleBlur;
  };

  const createFocusHandler: ReactDayPicker.FocusEventHandlerCreator = onFocus => {
    function handleFocus(e: React.FocusEvent<HTMLInputElement>): void {
      const el = e.target as HTMLInputElement;

      if (el.value) {
        const day = parse(el.value, formatStr, new Date(), options);
        if (isValid(day)) {
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
    return handleFocus;
  };

  const createDayClickHandler: ReactDayPicker.DayClickEventHandlerCreator = onDayClick => {
    const handleDayClick: ReactDayPicker.DayClickEventHandler = (
      day,
      modifiers,
      e
    ) => {
      if (modifiers.selected) {
        if (!options.required) {
          setSelectedDay(undefined);
          setInputValue('');
        }
        return;
      }
      setSelectedDay(day);
      const value = format(day, formatStr, options);
      setInputValue(value);
      if (onDayClick) onDayClick(day, modifiers, e);
    };
    return handleDayClick;
  };

  const createMonthChangeHandler: ReactDayPicker.MonthEventHandlerCreator = onMonthChange => {
    const handleMonthChange: ReactDayPicker.MonthChangeEventHandler = (
      month,
      e
    ) => {
      setCurrentMonth(month);
      if (onMonthChange) onMonthChange(month, e);
    };
    return handleMonthChange;
  };

  return {
    currentMonth,
    selectedDay,
    inputValue,
    createDayClickHandler,
    createMonthChangeHandler,
    createChangeHandler,
    createFocusHandler,
    createBlurHandler,
  };
};

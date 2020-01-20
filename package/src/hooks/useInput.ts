import * as React from "react";
import * as DateFns from "date-fns";

import {
  DayClickEventHandler,
  MonthChangeEventHandler,
  MatchingModifiers
} from "../components/DayPicker";

import { defaultProps } from "../components/DayPicker/defaultProps";

/**
 * @category Hooks
 * @ignore
 */
function isValid(day: Date): boolean {
  return !isNaN(day.getTime());
}

/**
 * @category Hooks
 */
export type UseInputOptions = {
  locale: DateFns.Locale;
  required: boolean;
};

/**
 * @category Hooks
 */
export type useInput = (
  initialValue: Date | undefined,
  formatStr: string,
  options?: UseInputOptions
) => [
  Date, // current month
  Date | undefined, // selected day
  string, // input value
  {
    onDayClick: DayClickEventHandler;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onBlur: React.FocusEventHandler<HTMLInputElement>;
    onMonthChange: MonthChangeEventHandler;
  }
];

/**
 * @category Hooks
 */
export const useInput: useInput = (initialSelectedDay, formatStr, _options) => {
  const options: UseInputOptions = {
    locale: defaultProps.locale,
    required: false,
    ..._options
  };

  const initialInputValue = initialSelectedDay
    ? DateFns.format(initialSelectedDay, formatStr, options)
    : "";

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
    const day = DateFns.parse(el.value, formatStr, new Date(), options);
    if (!isValid(day)) {
      setSelectedDay(undefined);
      return;
    }
    setSelectedDay(day);
    setCurrentMonth(day); // Update the month shown in the calendar.
  }

  function onBlur(e: React.FocusEvent<HTMLInputElement>): void {
    const el = e.target;
    const day = DateFns.parse(el.value, formatStr, new Date(), options);
    if (isValid(day) || !options.required) {
      if (onBlur) onBlur(e);
      return;
    }

    setSelectedDay(initialSelectedDay);
    setCurrentMonth(initialSelectedDay || new Date());
    setInputValue(initialInputValue || "");
  }

  function onFocus(e: React.FocusEvent<HTMLInputElement>): void {
    const el = e.target;

    if (el.value) {
      const day = DateFns.parse(el.value, formatStr, new Date(), options);
      if (isValid(day)) {
        setCurrentMonth(day);
      }
      if (onFocus) onFocus(e);
      return;
    }
    setSelectedDay(initialSelectedDay);
    setCurrentMonth(initialSelectedDay || new Date());
    setInputValue(initialInputValue || "");

    if (onFocus) onFocus(e);
  }

  function onDayClick(day: Date, modifiers: MatchingModifiers): void {
    if (modifiers.selected) {
      if (!options.required) {
        setSelectedDay(undefined);
        setInputValue("");
      }
      return;
    }
    setSelectedDay(day);
    const value = DateFns.format(day, formatStr, options);
    setInputValue(value);
  }

  function onMonthChange(month: React.SetStateAction<Date>): void {
    setCurrentMonth(month);
  }

  return [
    currentMonth,
    selectedDay,
    inputValue,
    { onDayClick, onMonthChange, onChange, onFocus, onBlur }
  ];
};

import React, { useState } from 'react';

import {
  addDays,
  addWeeks,
  isAfter,
  isBefore,
  isSameMonth,
  startOfMonth
} from 'date-fns';

import { Root } from '../../components';
import { Caption } from '../../components/Caption';
import { useSelect } from '../../hooks';
import { useRangeSelect } from '../../hooks/useRangeSelect';
import { useMultipleSelect } from '../../hooks/useSelectMultiple';
import {
  DayClickEventHandler,
  DayFocusEventHandler,
  DayKeyboardEventHandler,
  DayPickerContextValue,
  DayPickerProps,
  KeyCode,
  MonthChangeEventHandler
} from '../../types';
import { NavigationContextValue } from '../../types/NavigationContextValue';
import { DayPickerContext } from './DayPickerContext';
import { defaultContext as defaults } from './defaults/defaultContext';
import { NavigationContext } from './NavigationContext';
import { getMonthsToRender } from './utils/getMonthsToRender';
import { getNavMonths } from './utils/getNavMonths';

console.log({ Caption });
/**
 * Render the date picker component.
 */
export function DayPicker(props: DayPickerProps): JSX.Element {
  //#region Default values
  const mode = props.mode ?? defaults.mode;
  const today = props.today ?? defaults.today;
  const locale = props.locale || defaults.locale;
  const numberOfMonths = props.numberOfMonths || defaults.numberOfMonths;
  const showOutsideDays = props.showOutsideDays || props.fixedWeeks;
  const modifierPrefix = props.modifierPrefix || defaults.modifierPrefix;

  // Give precedence to `fromYear` and `fromMonth`
  let fromDate: Date | undefined = props.fromDate;
  if (props.fromMonth) fromDate = startOfMonth(props.fromMonth);
  else if (props.fromYear) fromDate = new Date(props.fromYear, 0, 1);

  // Give precedence to `toYear` and `toMonth`
  let toDate: Date | undefined = props.toDate;
  if (props.toMonth) toDate = startOfMonth(props.toMonth);
  else if (props.toYear) toDate = new Date(props.toYear, 11, 31);

  let captionLayout = props.captionLayout || defaults.captionLayout;
  if (
    captionLayout === 'dropdown' &&
    ((!fromDate && !toDate) || numberOfMonths > 1)
  ) {
    captionLayout = 'buttons';
  }
  //#endregion

  //#region Current month

  // As default, month is controlled by DayPicker, where the initial value is
  // `defaultMonth`. If props.month is passed, then the parent component must
  // control the month via `onMonthChange`.
  const [isMonthControlled, setIsMonthControlled] = useState(
    !('month' in props)
  );
  const [controlledMonth, setControlledMonth] = useState(
    props.defaultMonth ? startOfMonth(props.defaultMonth) : undefined
  );
  React.useEffect(() => {
    setIsMonthControlled(!('month' in props));
  }, [props.defaultMonth]);
  const currentMonth = controlledMonth || props.month || startOfMonth(today);

  const displayMonths = getMonthsToRender(currentMonth, numberOfMonths, {
    toDate,
    fromDate,
    reverseMonths: props.reverseMonths
  });

  //#endregion

  //#region Controlled selection

  // Single select
  const singleSelect = useSelect(
    'single',
    props.defaultSelected,
    props.required,
    props.onSelect
  );

  // Multiple select
  const multipleSelect = useMultipleSelect(
    'multiple',
    props.defaultSelected,
    props.required,
    props.onSelectMultiple
  );

  const rangeSelect = useRangeSelect(
    'range',
    props.defaultSelected,
    props.required,
    props.onSelectRange
  );
  const selected =
    mode === 'single'
      ? singleSelect.selected
      : mode === 'multiple'
      ? multipleSelect.selected
      : mode === 'range'
      ? rangeSelect.selected
      : props.selected;
  //#endregion

  //#region Focused day
  const [focusedDay, setFocusedDay] = useState<Date | undefined>();
  //#endregion

  //#region From/to date

  //#endregion

  //#region events

  const onMonthChange: MonthChangeEventHandler = (newMonth, e) => {
    // Do nothing if outside of range
    if (toDate && isAfter(newMonth, startOfMonth(toDate))) return;
    if (fromDate && isBefore(newMonth, startOfMonth(fromDate))) return;
    if (isMonthControlled) setControlledMonth(newMonth);
    props.onMonthChange?.(newMonth, e);
  };
  const onDayFocus: DayFocusEventHandler = (day, modifiers, e) => {
    const sameMonth = isSameMonth(day, currentMonth);
    if (!sameMonth && props.disableNavigation) return;
    if (!sameMonth) onMonthChange(startOfMonth(day), e);
    setFocusedDay(day);
    props.onDayFocus?.(day, modifiers, e);
  };
  const onDayBlur: DayFocusEventHandler = (day, modifiers, e) => {
    setFocusedDay(undefined);
    props.onDayBlur?.(day, modifiers, e);
  };
  const onDayClick: DayClickEventHandler = (day, modifiers, e) => {
    props.onDayClick?.(day, modifiers, e);
    if (modifiers.outside) return;
    if (mode === 'single') singleSelect.onDayClick(day, modifiers, e);
    if (mode === 'multiple') multipleSelect.onDayClick(day, modifiers, e);
    if (mode === 'range') rangeSelect.onDayClick(day, modifiers, e);
  };
  const onDayKeyDown: DayKeyboardEventHandler = (day, modifiers, e) => {
    switch (e.key) {
      case KeyCode.ArrowLeft: {
        e.preventDefault();
        e.stopPropagation();
        const nextDay = addDays(day, -1);
        onDayFocus?.(nextDay, modifiers, e);
        break;
      }
      case KeyCode.ArrowRight: {
        e.preventDefault();
        e.stopPropagation();
        const nextDay = addDays(day, 1);
        onDayFocus?.(nextDay, modifiers, e);
        return;
      }
      case KeyCode.ArrowUp: {
        e.preventDefault();
        e.stopPropagation();
        const nextDay = addWeeks(day, -1);
        onDayFocus?.(nextDay, modifiers, e);
        break;
      }
      case KeyCode.ArrowDown: {
        e.preventDefault();
        e.stopPropagation();
        const nextDay = addWeeks(day, 1);
        onDayFocus?.(nextDay, modifiers, e);
        break;
      }
    }
    props.onDayKeyDown?.(day, modifiers, e);
  };
  //#endregion

  const propsValues: DayPickerContextValue = {
    ...props,
    captionLayout,

    classNames: {
      ...defaults.classNames,
      ...props.classNames
    },
    components: {
      ...defaults.components,
      ...props.components
    },
    formatters: {
      ...defaults.formatters,
      ...props.formatters
    },
    labels: {
      ...defaults.labels,
      ...props.labels
    },
    modifiers: {
      ...defaults.modifiers,
      ...props.modifiers
    },

    fromDate,
    toDate,

    locale,
    modifierPrefix,
    numberOfMonths,
    onDayBlur,
    onDayClick,
    onDayFocus,
    onDayKeyDown,
    onMonthChange,
    selected,
    showOutsideDays,
    today,
    originalProps: props
  };
  const [prevMonth, nextMonth] = getNavMonths(currentMonth, {
    fromDate,
    toDate,
    pagedNavigation: props.pagedNavigation,
    numberOfMonths,
    disableNavigation: props.disableNavigation
  });

  const navigationValues: NavigationContextValue = {
    nextMonth,
    prevMonth,
    currentMonth,
    displayMonths,
    focusedDay
  };

  console.log('defaults.components,', defaults.components);
  return (
    <DayPickerContext.Provider value={propsValues}>
      <NavigationContext.Provider value={navigationValues}>
        <Root />
      </NavigationContext.Provider>
    </DayPickerContext.Provider>
  );
}

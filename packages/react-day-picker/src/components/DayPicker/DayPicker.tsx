import * as React from 'react';

import {
  addDays,
  addWeeks,
  isAfter,
  isBefore,
  isSameMonth,
  startOfMonth
} from 'date-fns';

import {
  DayPickerProps,
  PropsContext,
  PropsValues,
  Root
} from '../../components';
import {
  DayClickEventHandler,
  DayFocusEventHandler,
  DayKeyboardEventHandler,
  KeyCode,
  MonthChangeEventHandler
} from '../../types';
import { getPrevNextMonths } from '../Navigation/utils/getPrevNextMonths';
import {
  defaultClassNames,
  defaultComponents,
  defaultLabels,
  defaultModifiers
} from './defaults';
import { defaultFormatters } from './defaults/defaultFormatters';
import { NavigationContext, NavigationContextValue } from './NavigationContext';
import { defaultPropsValues } from './PropsContext';

/**
 * Render a date picker component.
 *
 * **Example**
 *
 * ```jsx showOutput
 * function Example() {
 *   const [selected, setSelected] = useState();
 *
 *   const handleDayClick = (day, { selected }) => {
 *     if (!selected) setSelected(day);
 *     else setSelected();
 *   };
 *
 *   return <DayPicker selected={selected} onDayClick={handleDayClick} />;
 * }
 * ```
 */
export function DayPicker(props: DayPickerProps): JSX.Element {
  const isControlled = !('month' in props); // DayPicker will handle the state
  const today = props.today ?? new Date();

  const [controlledMonth, setControlledMonth] = React.useState(
    props.initialMonth ? startOfMonth(props.initialMonth) : undefined
  );

  const currentMonth = controlledMonth || props.month || startOfMonth(today);
  const [focusedDay, setFocusedDay] = React.useState<Date | undefined>();

  // #region events
  const onMonthChange: MonthChangeEventHandler = (newMonth, e) => {
    if (props.toDate && isAfter(newMonth, props.toDate)) return;
    if (props.fromDate && isBefore(newMonth, props.fromDate)) return;
    if (isControlled) setControlledMonth(newMonth);
    props.onMonthChange?.(newMonth, e);
  };

  const onDayFocus: DayFocusEventHandler = (day, modifiers, e) => {
    if (!isSameMonth(day, currentMonth)) {
      onMonthChange(startOfMonth(day), e);
    }
    setFocusedDay(day);
    props.onDayFocus?.(day, modifiers, e);
  };

  const onDayBlur: DayFocusEventHandler = (day, modifiers, e) => {
    setFocusedDay(undefined);
    props.onDayBlur?.(day, modifiers, e);
  };

  const onDayClick: DayClickEventHandler = (day, modifiers, e) => {
    props.onDayClick?.(day, modifiers, e);
  };

  const onDayKeyDown: DayKeyboardEventHandler = (day, modifiers, e) => {
    switch (e.code) {
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
  // #endregion

  const numberOfMonths =
    props.numberOfMonths || defaultPropsValues.numberOfMonths;

  const propsValues: PropsValues = {
    dropdownNavigation:
      Boolean(props.fromDate) &&
      Boolean(props.toDate) &&
      props.dropdownNavigation,
    classNames: { ...defaultClassNames, ...props.classNames },
    components: { ...defaultComponents, ...props.components },
    formatters: { ...defaultFormatters, ...props.formatters },
    fromDate: props.fromDate,
    toDate: props.toDate,
    labels: { ...defaultLabels, ...props.labels },
    locale: props.locale || defaultPropsValues.locale,
    modifierPrefix: props.modifierPrefix || defaultPropsValues.modifierPrefix,
    modifiers: { ...defaultModifiers, ...props.modifiers },
    numberOfMonths,
    onMonthChange,
    onDayBlur,
    onDayClick,
    onDayFocus,
    onDayKeyDown,
    selected: props.selected,
    hidden: props.hidden,
    disabled: props.disabled,
    fixedWeeks: props.fixedWeeks,
    showWeekNumber: props.showWeekNumber,
    showOutsideDays: props.showOutsideDays || props.fixedWeeks,
    today
  };

  const [prevMonth, nextMonth] = getPrevNextMonths(currentMonth, {
    fromDate: props.fromDate,
    toDate: props.toDate,
    pagedNavigation: props.pagedNavigation,
    numberOfMonths
  });
  const navigationContext: NavigationContextValue = {
    nextMonth,
    prevMonth,
    currentMonth,
    focusedDay
  };

  return (
    <PropsContext.Provider value={propsValues}>
      <NavigationContext.Provider value={navigationContext}>
        <Root />
      </NavigationContext.Provider>
    </PropsContext.Provider>
  );
}

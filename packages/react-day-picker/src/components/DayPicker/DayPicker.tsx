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
import {
  defaultClassNames,
  defaultComponents,
  defaultLabels,
  defaultModifiers
} from './defaults';
import { defaultFormatters } from './defaults/defaultFormatters';
import { NavigationContext, NavigationContextValue } from './NavigationContext';
import { defaultPropsValues } from './PropsContext';
import { getNavMonths } from './utils/getNavMonths';

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

  const numberOfMonths =
    props.numberOfMonths || defaultPropsValues.numberOfMonths;

  // Calculate the from/to dates according to the other `from*` props
  let calculatedFromDate: Date | undefined;
  if (props.fromDate) {
    calculatedFromDate = props.fromDate;
  } else if (props.fromMonth) {
    calculatedFromDate = startOfMonth(props.fromMonth);
  } else if (props.fromYear) {
    calculatedFromDate = new Date(props.fromYear, 0, 1);
  }
  let calculatedToDate: Date | undefined;
  if (props.toDate) {
    calculatedToDate = props.toDate;
  } else if (props.toMonth) {
    calculatedToDate = startOfMonth(props.toMonth);
  } else if (props.toYear) {
    calculatedToDate = new Date(props.toYear, 11, 31);
  }

  let calculatedNavigationType =
    props.navigationType || defaultPropsValues.navigationType;
  if (
    calculatedNavigationType === 'dropdown' &&
    !calculatedFromDate &&
    !calculatedToDate
  ) {
    calculatedNavigationType = 'buttons';
  }

  // #region events
  const onMonthChange: MonthChangeEventHandler = (newMonth, e) => {
    // Do nothing if outside of range
    if (calculatedToDate && isAfter(newMonth, startOfMonth(calculatedToDate)))
      return;
    if (
      calculatedFromDate &&
      isBefore(newMonth, startOfMonth(calculatedFromDate))
    )
      return;
    if (isControlled) setControlledMonth(newMonth);
    props.onMonthChange?.(newMonth, e);
  };

  const onDayFocus: DayFocusEventHandler = (day, modifiers, e) => {
    const sameMonth = isSameMonth(day, currentMonth);
    if (!sameMonth && calculatedNavigationType === 'none') {
      return;
    }
    if (!sameMonth) {
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

  const propsValues: PropsValues = {
    classNames: { ...defaultClassNames, ...props.classNames },
    components: { ...defaultComponents, ...props.components },
    formatters: { ...defaultFormatters, ...props.formatters },
    fromDate: calculatedFromDate,
    toDate: calculatedToDate,
    labels: { ...defaultLabels, ...props.labels },
    locale: props.locale || defaultPropsValues.locale,
    modifierPrefix: props.modifierPrefix || defaultPropsValues.modifierPrefix,
    modifiers: { ...defaultModifiers, ...props.modifiers },
    navigationType: calculatedNavigationType,
    numberOfMonths,
    onMonthChange,
    onDayBlur,
    onDayClick,
    onDayFocus,
    onDayKeyDown,
    originalProps: props,
    selected: props.selected,
    hidden: props.hidden,
    disabled: props.disabled,
    fixedWeeks: props.fixedWeeks,
    showWeekNumber: props.showWeekNumber,
    showOutsideDays: props.showOutsideDays || props.fixedWeeks,
    today
  };

  const [prevMonth, nextMonth] = getNavMonths(currentMonth, {
    fromDate: calculatedFromDate,
    toDate: calculatedToDate,
    pagedNavigation: props.pagedNavigation,
    numberOfMonths,
    navigation: calculatedNavigationType
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

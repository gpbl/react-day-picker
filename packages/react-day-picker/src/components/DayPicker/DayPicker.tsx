import { isSameMonth, startOfMonth } from 'date-fns';
import * as React from 'react';
import {
  DayClickEventHandler,
  DayFocusEventHandler,
  DayPickerComponentProps,
  DayPickerProps,
  MonthChangeEventHandler
} from 'types';

import { Root } from '../Root';
import { defaultProps } from './defaults';
import { getMonthFromProps } from './utils/getMonthFromProps';

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
export function DayPicker(props: DayPickerComponentProps): JSX.Element {
  const isControlled = !('month' in props); // DayPicker will handle the state

  const month = getMonthFromProps(props);
  const [currentMonth, setCurrentMonth] = React.useState<Date>(month);
  const [focusedDay, setFocusedDay] = React.useState<Date | undefined>();

  const onMonthChange: MonthChangeEventHandler = (newMonth, e) => {
    if (isControlled) setCurrentMonth(newMonth);
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

  const overrideProps = {
    month: isControlled ? currentMonth : month,
    onMonthChange,
    onDayClick: props.onDayClick ? onDayClick : undefined,
    onDayFocus,
    onDayBlur,
    focusedDay
  };
  const dayPickerProps: DayPickerProps = {
    ...defaultProps,
    ...props,
    components: { ...defaultProps.components, ...props.components },
    modifiers: {
      ...defaultProps.modifiers,
      ...props.modifiers
    },
    ...overrideProps
  };
  return <Root dayPickerProps={dayPickerProps} />;
}

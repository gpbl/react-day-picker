import * as React from 'react';
import { DayPickerComponentProps, DayPickerProps } from 'types';

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
  const [currentMonth, setCurrentMonth] = React.useState(month);

  const onMonthChange = (newMonth: Date, e: React.MouseEvent) => {
    if (isControlled) setCurrentMonth(newMonth);
    props.onMonthChange?.(newMonth, e);
  };

  const dayPickerProps: DayPickerProps = {
    ...defaultProps,
    ...props,

    month: isControlled ? currentMonth : month,
    onMonthChange,
    components: { ...defaultProps.components, ...props.components },
    modifiers: {
      ...defaultProps.modifiers,
      ...props.modifiers
    }
  };

  return <Root dayPickerProps={dayPickerProps} />;
}

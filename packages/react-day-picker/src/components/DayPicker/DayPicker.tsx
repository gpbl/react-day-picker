import * as React from 'react';
import { DayPickerProps } from 'types';

import { Root } from '../Root';
import { defaultProps } from './defaultProps';
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
export function DayPicker(props: DayPickerProps = {}): JSX.Element {
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
    components: { ...defaultProps.components, ...props.components },
    modifiers: {
      ...defaultProps.modifiersClassNames,
      ...props.modifiersClassNames
    },
    onMonthChange,
    month: isControlled ? currentMonth : month
  };

  return <Root dayPickerProps={dayPickerProps} />;
}

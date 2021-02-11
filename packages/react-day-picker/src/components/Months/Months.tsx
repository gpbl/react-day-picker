import { getTime } from 'date-fns';
import React from 'react';

import {
  CustomComponents,
  DayPickerClassNames,
  DayPickerProps
} from '../DayPicker';
import { DefaultProps } from '../DayPicker/defaults/DefaultProps';
import { MonthTable } from '../MonthTable';
import { filterUndefinedProps } from './filterUndefinedProps';
import { getMonths } from './getMonths';

export function Months(initialProps = DefaultProps): JSX.Element {
  const components: CustomComponents = Object.assign(
    {},
    DefaultProps.components,
    initialProps.components
  );
  const Navigation = components.Navigation;

  const classNames: DayPickerClassNames = Object.assign(
    {},
    DefaultProps.classNames,
    initialProps.classNames
  );
  const props: DayPickerProps = {
    ...DefaultProps,
    ...filterUndefinedProps(initialProps),
    components: components,
    classNames
  };

  // From `style` prop
  const style = { ...props.styles?.root, ...props.style };

  // From `className prop`
  const className = [props.classNames?.root || ''];
  if (props.className) {
    className.concat(props.className.split(' '));
  }

  const months = getMonths(props);

  return (
    <div className={className.join(' ')} style={style} dir={props.dir}>
      {props.showNavigation && props.onMonthChange && (
        <Navigation dayPickerProps={props} />
      )}
      <div
        className={props.classNames?.months}
        style={props.styles ? props.styles.month : undefined}
      >
        {months.map((month: Date) => (
          <MonthTable
            key={getTime(month)}
            month={month}
            dayPickerProps={props}
          />
        ))}
      </div>
    </div>
  );
}

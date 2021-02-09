import { getTime } from 'date-fns';
import React from 'react';

import {
  CustomComponents,
  DayPickerClassNames,
  DayPickerProps
} from '../DayPicker';
import { DEFAULT_PROPS } from '../DayPicker/defaults/props';
import { MonthTable } from '../MonthTable';
import { filterUndefinedProps } from './filterUndefinedProps';
import { getMonths } from './getMonths';

/**
 * Render the months and the navigation.
 *
 * @category Component
 */
export function Months(initialProps = DEFAULT_PROPS): JSX.Element {
  // Extend props with defaults
  // TODO: this looks ugly try something better...
  const components: CustomComponents = Object.assign(
    {},
    DEFAULT_PROPS.components,
    initialProps.components
  );
  const Navigation = components.Navigation;

  const classNames: DayPickerClassNames = Object.assign(
    {},
    DEFAULT_PROPS.classNames,
    initialProps.classNames
  );
  const props: DayPickerProps = {
    ...DEFAULT_PROPS,
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

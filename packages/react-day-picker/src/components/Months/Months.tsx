import React from 'react';
import { MonthTable } from '../MonthTable';
import { getTime } from 'date-fns';

import { getMonths } from './getMonths';
import { filterUndefinedProps } from './filterUndefinedProps';
import { defaultProps } from '../DayPicker/defaults/defaultProps';
import {
  CustomComponents,
  DayPickerClassNames,
  DayPickerProps
} from '../DayPicker';

/**
 * Render the months and the navigation.
 * @category Components
 */
export function Months(initialProps = defaultProps): JSX.Element {
  // Extend props with defaults
  const components: CustomComponents = Object.assign(
    {},
    defaultProps.components,
    initialProps.components
  );
  const classNames: DayPickerClassNames = Object.assign(
    {},
    defaultProps.classNames,
    initialProps.classNames
  );
  const props: DayPickerProps = {
    ...defaultProps,
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

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const Navigation = props.components?.Navigation!;

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

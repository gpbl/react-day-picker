import * as React from 'react';
import { getTime } from 'date-fns';

import { prepareDayPicker } from './helpers';
import { defaultProps } from './defaultProps';

import { DayPickerProps } from '../types/DayPicker';
import { ClassNames } from '../types/ClassNames';
import { Components } from '../types/Components';

import { Month } from './Month';

import { filterUndefinedProps } from './utils/filterUndefinedProps';

export const DayPicker: React.FC<DayPickerProps> = (
  initialProps = defaultProps
) => {
  // Extend props with defaults
  const components: Components = {
    ...defaultProps.components,
    ...filterUndefinedProps(initialProps.components),
  };
  const classNames: ClassNames = {
    ...defaultProps.classNames,
    ...filterUndefinedProps(initialProps.classNames),
  };
  const props: DayPickerProps = {
    ...defaultProps,
    ...filterUndefinedProps(initialProps),
    components,
    classNames,
  };

  // From `style` prop
  const style = { ...props.styles.container, ...props.style };

  // From `className prop`
  const className = [props.classNames.container];
  if (props.className) {
    className.concat(props.className.split(' '));
  }
  const classNameStr = className.join(' ');

  const { months } = prepareDayPicker(props);
  const { Navigation } = props.components;
  return (
    <div className={classNameStr} style={style} dir={props.dir}>
      {props.showNavigation && <Navigation dayPickerProps={props} />}
      <div
        className={props.classNames.months}
        style={props.styles ? props.styles.month : undefined}
      >
        {months.map((month: Date) => (
          <Month key={getTime(month)} month={month} dayPickerProps={props} />
        ))}
      </div>
    </div>
  );
};

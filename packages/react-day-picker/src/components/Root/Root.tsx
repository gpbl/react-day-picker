import { getTime } from 'date-fns';
import React from 'react';

import { RootProps } from '../../types/RootProps';
import { Month } from '../Month';
import { getMonths } from './utils/getMonths';

export function Root(props: RootProps): JSX.Element {
  const { dayPickerProps } = props;
  const {
    components,
    className,
    classNames,
    style,
    styles,
    dir,
    showNavigation,
    onMonthChange
  } = dayPickerProps;
  const { Navigation } = components;

  const months = getMonths(dayPickerProps);

  const rootClassNames = [classNames?.root ?? ''];
  if (className) {
    rootClassNames.concat(className.split(' '));
  }

  return (
    <div
      className={rootClassNames.join(' ')}
      style={{ ...styles?.root, ...style }}
      dir={dir}
    >
      {showNavigation && onMonthChange && (
        <Navigation dayPickerProps={dayPickerProps} />
      )}
      <div className={classNames?.months} style={styles?.month}>
        {months.map((month: Date) => (
          <Month
            key={getTime(month)}
            month={month}
            dayPickerProps={dayPickerProps}
          />
        ))}
      </div>
    </div>
  );
}

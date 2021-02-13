import { getTime } from 'date-fns';
import React from 'react';

import { RootProps } from '../../types/RootProps';
import { defaultProps } from '../DayPicker/defaultProps';
import { Month } from '../Month';
import { getMonths } from './utils/getMonths';

export function Root(props: RootProps): JSX.Element {
  const { dayPickerProps } = props;
  const Navigation =
    dayPickerProps.components?.Navigation ?? defaultProps.components.Navigation;

  const style = {
    ...dayPickerProps.styles?.root,
    ...dayPickerProps.style
  };

  const rootClassNames = [dayPickerProps.classNames?.root ?? ''];
  if (dayPickerProps.className) {
    rootClassNames.concat(dayPickerProps.className.split(' '));
  }

  const { dir, showNavigation, onMonthChange, styles } = dayPickerProps;

  const months = getMonths(dayPickerProps);

  return (
    <div className={rootClassNames.join(' ')} style={style} dir={dir}>
      {showNavigation && onMonthChange && (
        <Navigation dayPickerProps={dayPickerProps} />
      )}
      <div className={dayPickerProps.classNames?.months} style={styles?.month}>
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

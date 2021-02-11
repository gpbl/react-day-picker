import { getTime } from 'date-fns';
import React from 'react';

import { MonthTable } from '../MonthTable';
import { Navigation as DefaultNavigation } from '../Navigation';
import { getMonths } from './utils/getMonths';
import { RootProps } from './types/RootProps';

export function Root(props: RootProps): JSX.Element {
  const { dayPickerProps } = props;
  const Navigation = dayPickerProps.components?.Navigation || DefaultNavigation;

  const style = {
    ...dayPickerProps.styles?.root,
    ...dayPickerProps.style
  };

  const rootClassNames = [dayPickerProps.classNames?.root || ''];
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
          <MonthTable
            key={getTime(month)}
            month={month}
            dayPickerProps={dayPickerProps}
          />
        ))}
      </div>
    </div>
  );
}

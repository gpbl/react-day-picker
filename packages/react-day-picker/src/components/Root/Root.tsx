import React from 'react';

import { useDayPicker } from '../../contexts/DayPicker';
import { useNavigation } from '../../contexts/Navigation';
import { Month } from '../Month';

/**
 * Render the container with the months and their captions. The number of months
 * rendered depends by the `numberOfMonths` prop.
 */
export function Root(): JSX.Element {
  const {
    dir,
    className,
    classNames,
    style,
    styles,
    numberOfMonths,
    showWeekNumber
  } = useDayPicker();

  const { displayMonths } = useNavigation();

  const rootClassNames = [className ?? classNames.root];
  if (numberOfMonths > 1) {
    rootClassNames.push(classNames.multiple_month);
  }
  if (showWeekNumber) {
    rootClassNames.push(classNames.with_weeknumber);
  }
  if (className) {
    rootClassNames.concat(className.split(' '));
  }

  return (
    <div
      className={rootClassNames.join(' ')}
      style={{ ...styles.root, ...style }}
      dir={dir}
    >
      <div className={classNames.months} style={styles.months}>
        {displayMonths.map((month, i) => (
          <Month key={i} displayIndex={i} displayMonth={month} />
        ))}
      </div>
    </div>
  );
}

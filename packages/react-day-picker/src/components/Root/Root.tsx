import React, { useEffect, useState } from 'react';

import { Month } from 'components/Month';
import { useDayPicker } from 'contexts/DayPicker';
import { useFocusContext } from 'contexts/Focus';
import { useNavigation } from 'contexts/Navigation';

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
    showWeekNumber,
    initialFocus
  } = useDayPicker();

  const { focusTarget, focus } = useFocusContext();
  const [hasInitialFocus, setHasInitialFocus] = useState(false);
  const { displayMonths } = useNavigation();

  const rootClassNames = [className ?? classNames.root];
  if (numberOfMonths > 1) {
    rootClassNames.push(classNames.multiple_months);
  }
  if (showWeekNumber) {
    rootClassNames.push(classNames.with_weeknumber);
  }

  useEffect(() => {
    if (initialFocus && !hasInitialFocus && focusTarget) {
      focus(focusTarget);
      setHasInitialFocus(true);
    }
  }, [initialFocus, hasInitialFocus, focus, focusTarget]);

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

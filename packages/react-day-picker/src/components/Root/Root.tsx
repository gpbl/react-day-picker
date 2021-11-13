import * as React from 'react';

import { Table } from '../Table';
import { useDayPicker } from '../../contexts/DayPicker';
import { useNavigation } from '../../contexts/Navigation';

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
    components: { Caption }
  } = useDayPicker();

  const { displayMonths } = useNavigation();

  const rootClassNames = [className ?? classNames.root];
  if (numberOfMonths > 1) {
    rootClassNames.push(classNames.multiple_month);
  }
  if (showWeekNumber) {
    rootClassNames.push(classNames.with_weeknumber);
  }
  if (className) rootClassNames.concat(className.split(' '));

  const renderMonth = (displayMonth: Date, displayIndex: number) => {
    const className = [classNames.month];
    const style = { ...styles.month };
    let isFirst = displayIndex === 0;
    let isLast = displayIndex === displayMonths.length - 1;

    if (dir === 'rtl') [isLast, isFirst] = [isFirst, isLast];

    if (isFirst) {
      className.push(classNames.caption_first);
      Object.assign(style, styles.caption_first);
    }
    if (isLast) className.push(classNames.caption_last);
    if (!isFirst && !isLast) className.push(classNames.caption_middle);

    return (
      <div key={displayIndex} className={className.join(' ')} style={style}>
        <Caption displayMonth={displayMonth} />
        <Table displayMonth={displayMonth} />
      </div>
    );
  };

  return (
    <div
      className={rootClassNames.join(' ')}
      style={{ ...styles.root, ...style }}
      dir={dir}
    >
      <div className={classNames.months} style={styles.months}>
        {displayMonths.map(renderMonth)}
      </div>
    </div>
  );
}

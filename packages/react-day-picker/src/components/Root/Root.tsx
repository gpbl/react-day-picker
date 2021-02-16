import * as React from 'react';

import { Caption, Table } from '../../components';
import { useNavigation, useProps } from '../../hooks';
import { getMonthsToRender } from './utils/getMonthsToRender';

export interface RootProps {
  className?: string;
  style?: React.CSSProperties;
}

export function Root(props: RootProps): JSX.Element {
  const { className, style } = props;
  const {
    dir,
    hideCaption,
    toDate,
    fromDate,
    reverseMonths,
    classNames,
    styles,
    numberOfMonths
  } = useProps();

  const { currentMonth } = useNavigation();

  const displayMonths = getMonthsToRender(currentMonth, numberOfMonths, {
    toDate,
    fromDate,
    reverseMonths
  });

  const rootClassNames = [classNames.Root];
  if (className) rootClassNames.concat(className.split(' '));

  const renderMonth = (displayMonth: Date, i: number) => (
    <div className={classNames.Month} key={i}>
      {!hideCaption && <Caption displayMonth={displayMonth} />}
      <Table displayMonth={displayMonth} />
    </div>
  );

  return (
    <div
      className={rootClassNames.join(' ')}
      style={{ ...styles?.Root, ...style }}
      dir={dir}
    >
      <div className={classNames.Months} style={styles?.Month}>
        {displayMonths.map(renderMonth)}
      </div>
    </div>
  );
}

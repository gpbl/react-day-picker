import * as React from 'react';

import { Caption, Table } from '../../components';
import { useNavigation, useProps } from '../../hooks';
import { UIElement } from '../../types';
import { getMonthsToRender } from './utils/getMonthsToRender';

export interface RootProps {
  className?: string;
  style?: React.CSSProperties;
}

export function Root(props: RootProps): JSX.Element {
  const { className, style } = props;
  const dayPickerProps = useProps();
  const { dir, hideCaption, classNames, styles } = dayPickerProps;
  const { toDate, fromDate, reverseMonths, numberOfMonths } = dayPickerProps;
  const { currentMonth } = useNavigation();

  const displayMonths = getMonthsToRender(currentMonth, numberOfMonths, {
    toDate,
    fromDate,
    reverseMonths
  });

  const rootClassNames = [classNames[UIElement.Root]];
  if (className) rootClassNames.concat(className.split(' '));

  const renderMonth = (displayMonth: Date, i: number) => (
    <div className={classNames[UIElement.Month]} key={i}>
      {!hideCaption && <Caption displayMonth={displayMonth} />}
      <Table displayMonth={displayMonth} />
    </div>
  );

  return (
    <div
      className={rootClassNames.join(' ')}
      style={{ ...styles?.[UIElement.Root], ...style }}
      dir={dir}
    >
      <div
        className={classNames[UIElement.Months]}
        style={styles?.[UIElement.Months]}
      >
        {displayMonths.map(renderMonth)}
      </div>
    </div>
  );
}

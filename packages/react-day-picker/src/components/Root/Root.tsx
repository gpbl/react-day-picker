import * as React from 'react';

import { Caption, Table } from '../../components';
import { useNavigation, useProps } from '../../hooks';
import { UIElement as UI } from '../../types';

export interface RootProps {
  className?: string;
  style?: React.CSSProperties;
}

export function Root(props: RootProps): JSX.Element {
  const { className, style } = props;
  const { dir, classNames, styles, numberOfMonths } = useProps();
  const { displayMonths } = useNavigation();

  const rootClassNames = [classNames[UI.Root]];
  if (numberOfMonths > 1) {
    rootClassNames.push(classNames[UI.RootMultipleMonths]);
  }
  if (className) rootClassNames.concat(className.split(' '));

  const renderMonth = (displayMonth: Date, displayIndex: number) => {
    const className = [classNames[UI.Month]];
    // When numberOfMonths > 1, keep track of the position of this month between
    // the other – so that we can style them better and give a different layout.
    let isFirst = numberOfMonths > 1 && displayIndex === 0;
    let isLast =
      numberOfMonths > 1 && displayIndex === displayMonths.length - 1;

    if (dir === 'rtl') {
      // swap first/last in RTL
      [isLast, isFirst] = [isFirst, isLast];
    }

    const isBetween = numberOfMonths > 1 && !isFirst && !isLast;

    if (isFirst) className.push(classNames[UI.MonthFirst]);
    if (isLast) className.push(classNames[UI.MonthLast]);
    if (isBetween) className.push(classNames[UI.MonthBetween]);

    return (
      <div className={className.join(' ')} key={displayIndex}>
        <Caption
          displayMonth={displayMonth}
          displayIndex={displayIndex}
          isFirst={isFirst}
          isLast={isLast}
          isBetween={isBetween}
        />
        <Table displayMonth={displayMonth} />
      </div>
    );
  };

  return (
    <div
      className={rootClassNames.join(' ')}
      style={{ ...styles?.[UI.Root], ...style }}
      dir={dir}
    >
      <div className={classNames[UI.Months]} style={styles?.[UI.Months]}>
        {displayMonths.map(renderMonth)}
      </div>
    </div>
  );
}

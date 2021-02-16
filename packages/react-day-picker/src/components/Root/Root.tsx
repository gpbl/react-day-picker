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
  const { dir, hideCaption, classNames, styles, numberOfMonths } = useProps();
  const { displayMonths } = useNavigation();

  const rootClassNames = [classNames[UI.Root]];
  if (numberOfMonths > 1) {
    rootClassNames.push(classNames[UI.RootMultipleMonths]);
  }
  if (className) rootClassNames.concat(className.split(' '));

  const renderMonth = (displayMonth: Date, i: number) => (
    <div className={classNames[UI.Month]} key={i}>
      {!hideCaption && <Caption displayMonth={displayMonth} />}
      <Table displayMonth={displayMonth} />
    </div>
  );

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

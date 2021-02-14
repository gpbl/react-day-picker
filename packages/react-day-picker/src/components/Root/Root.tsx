import { getTime } from 'date-fns';
import React from 'react';

import { RootProps } from '../../types/RootProps';
import { Table } from '../Table';
import { getMonths } from './utils/getMonths';

export function Root(props: RootProps): JSX.Element {
  const { dayPickerProps } = props;
  const { className, classNames, style, styles, dir } = dayPickerProps;
  const months = getMonths(dayPickerProps);
  const rootClassNames = [classNames?.Root ?? ''];
  if (className) {
    rootClassNames.concat(className.split(' '));
  }
  return (
    <div
      className={rootClassNames.join(' ')}
      style={{ ...styles?.Root, ...style }}
      dir={dir}
    >
      <div className={classNames?.Months} style={styles?.Month}>
        {months.map((month: Date) => (
          <div className={classNames?.Month} key={getTime(month)}>
            <Table month={month} dayPickerProps={dayPickerProps} />
          </div>
        ))}
      </div>
    </div>
  );
}

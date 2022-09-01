import React from 'react';

import { useDayPicker } from 'contexts/DayPicker';

import { HeadRow } from 'components/HeadRow';

/**
 * Render the Head component - i.e. the table head with the weekday names.
 */
export function Head(): JSX.Element {
  const { classNames, styles } = useDayPicker();

  return (
    <thead style={styles.head} className={classNames.head}>
      <HeadRow />
    </thead>
  );
}

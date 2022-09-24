import React from 'react';

import { useDayPicker } from 'contexts/DayPicker';

/** Render the table head. */
export function Head(): JSX.Element {
  const {
    classNames,
    styles,
    components: { HeadRow }
  } = useDayPicker();
  return (
    <thead style={styles.head} className={classNames.head}>
      <HeadRow />
    </thead>
  );
}

import * as React from 'react';

import { useDayPicker } from '../../contexts/DayPicker';

import { DayContentProps } from './DayContentProps';

/**
 * Render the content of the day cell.
 */
export function DayContent(props: DayContentProps): JSX.Element {
  const {
    locale,
    classNames,
    styles,
    labels: { labelDay },
    formatters: { formatDay }
  } = useDayPicker();
  return (
    <>
      <span aria-hidden="true">{formatDay(props.date, { locale })}</span>
      <span className={classNames.vhidden} style={styles.vhidden}>
        {labelDay(props.date, props.modifiers, { locale })}
      </span>
    </>
  );
}

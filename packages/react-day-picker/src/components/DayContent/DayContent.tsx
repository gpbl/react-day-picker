import React from 'react';

import { useDayPicker } from 'contexts/DayPicker';
import { ActiveModifiers } from 'types/Modifiers';

/** Represent the props for the {@link DayContent} component. */
export interface DayContentProps {
  /** The date representing the day. */
  date: Date;
  /** The month where the day is displayed. */
  displayMonth: Date;
  /** The active modifiers for the given date. */
  activeModifiers: ActiveModifiers;
}

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
        {labelDay(props.date, props.activeModifiers, { locale })}
      </span>
    </>
  );
}

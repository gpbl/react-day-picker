import { PropsWithChildren } from 'react';

import { useDayPicker } from 'contexts/DayPicker';

/** The props for the {@link Months} component. */
export type MonthsProps = PropsWithChildren;

/**
 * Render the wrapper for the mont grids.
 */
export function Months(props: MonthsProps): JSX.Element {
  const { classNames, styles } = useDayPicker();

  return (
    <div className={classNames.months} style={styles.months}>
      {props.children}
    </div>
  );
}

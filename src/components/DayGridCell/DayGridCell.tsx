import type { HTMLAttributes } from 'react';

import type { Day } from '../../classes';
import type { Modifiers } from '../../types/modifiers';

export interface DayGridCellProps {
  /** The day to be rendered in the gridcell. */
  day: Day;
  /** Modifiers for the day. */
  modifiers: Modifiers;
  /** HTML attributes for the gridcell. */
  htmlAttributes: HTMLAttributes<HTMLElement>;
  /** Children of the gridcell. */
  children?: React.ReactNode;
}

/**
 * Renders the gridcell with the Day.
 */
export function DayGridCell(props: DayGridCellProps) {
  const { children, htmlAttributes } = props;
  return <div {...htmlAttributes}>{children}</div>;
}

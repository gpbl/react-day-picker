import { forwardRef, type HTMLAttributes } from 'react';

import type { CalendarDay } from '../../classes';
import type { Modifiers } from '../../types/modifiers';

export interface DayGridCellProps {
  /** The day to be rendered in the gridcell. */
  day: CalendarDay;
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
function _DayGridCell(props: DayGridCellProps, ref: React.Ref<HTMLDivElement>) {
  const { children, htmlAttributes } = props;
  return (
    <div {...htmlAttributes} ref={ref}>
      {children}
    </div>
  );
}

export const DayGridCell = forwardRef(_DayGridCell);

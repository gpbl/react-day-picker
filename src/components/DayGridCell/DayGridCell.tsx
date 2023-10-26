import { HTMLAttributes } from 'react';

import { DayPickerDay } from '../../contexts/CalendarContext';
import { Modifiers } from '../../types/modifiers';

export interface DayGridCellProps {
  day: DayPickerDay;
  modifiers: Modifiers;
  htmlAttributes: HTMLAttributes<HTMLElement>;
  children?: React.ReactNode;
}

/** Render the gridcell with the Day. */
export function DayGridCell(props: DayGridCellProps): JSX.Element {
  const { children, htmlAttributes } = props;
  return <div {...htmlAttributes}>{children}</div>;
}

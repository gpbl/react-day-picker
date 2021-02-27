import React from 'react';

import { DateFormatter, ModifierStatus } from '../../types';

/** Represent the props for the [[DayContent]] component. */
export interface DayContentProps {
  /** The date representing the day. */
  date: Date;
  /** The month where the day is displayed. */
  displayMonth: Date;
  /** The modifier status for `date`. */
  modifiers: ModifierStatus;
  /** Whether the day is outside the `displayMonth`. */
  outside: boolean;
  /** Function to format `date` according to the initial props. */
  format: DateFormatter;
  /** The locale in use. */
  locale: Locale;
  /** Whether DayPicker should show the outside day. */
  showOutsideDays?: boolean;
}
/**
 * Render the content of the day cell.
 */
export function DayContent(props: DayContentProps): JSX.Element {
  if (props.outside && !props.showOutsideDays) return <></>;
  if (props.modifiers.hidden) return <></>;

  return <>{props.format(props.date, { locale: props.locale })}</>;
}

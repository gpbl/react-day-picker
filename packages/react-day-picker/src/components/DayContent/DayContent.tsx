import React, { HTMLAttributes } from 'react';

import { DateFormatter, ModifierStatus } from 'types';

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
  /** The ARIA label for the content. */
  'aria-label': HTMLAttributes<HTMLSpanElement>['aria-label'];
  /** The class name for the aria-label (this element should stay not visible) */
  hiddenClassName: string;
}
/**
 * Render the content of the day cell.
 */
export function DayContent(props: DayContentProps): JSX.Element {
  if (props.outside && !props.showOutsideDays) return <></>;
  if (props.modifiers.hidden) return <></>;

  return (
    <>
      <span className={props.hiddenClassName}>{props['aria-label']}</span>
      <span aria-hidden="true">
        {props.format(props.date, { locale: props.locale })}
      </span>
    </>
  );
}

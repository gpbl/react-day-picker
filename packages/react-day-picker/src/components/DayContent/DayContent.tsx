import * as React from 'react';

import { DayContentProps } from './DayContentProps';

/**
 * Render the content of the day cell.
 */
export function DayContent(props: DayContentProps): JSX.Element {
  if (props.outside && !props.showOutsideDays) return <></>;
  if (props.modifiers.hidden) return <></>;

  return (
    <>
      <span aria-hidden="true">
        {props.format(props.date, { locale: props.locale })}
      </span>
      <span className={props.hiddenClassName} style={props.hiddenStyle}>
        {props['aria-label']}
      </span>
    </>
  );
}

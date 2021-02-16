import * as React from 'react';

import { MonthsDropdown, Navigation, YearsDropdown } from '../../components';
import { useProps } from '../../hooks/useProps';

export interface CaptionProps {
  /** The month where the caption is displayed. */
  displayMonth: Date;
}

export function Caption(props: CaptionProps): JSX.Element {
  const { classNames, dropdownNavigation } = useProps();
  return (
    <div className={classNames.Caption}>
      <div className={classNames.CaptionDropdowns}>
        <MonthsDropdown displayMonth={props.displayMonth} />
        <YearsDropdown displayMonth={props.displayMonth} />
      </div>
      {!dropdownNavigation && <Navigation displayMonth={props.displayMonth} />}
    </div>
  );
}

import * as React from 'react';

import {
  MonthsDropdown,
  Navigation,
  YearsDropdown,
  DayPickerContext
} from '../../components';

export interface CaptionProps {
  /** The month where the caption is displayed. */
  displayMonth: Date;
}

export function Caption(props: CaptionProps): JSX.Element {
  const { classNames, dropdownNavigation } = React.useContext(DayPickerContext);
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

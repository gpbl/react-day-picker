import * as React from 'react';

import { MonthsDropdown, Navigation, YearsDropdown } from '../../components';
import { DayPickerContext } from '../../types';

export function Caption(props: DayPickerContext): JSX.Element {
  const disabled = !props.fromDate || !props.toDate;
  const { prevMonth, nextMonth } = props;

  return (
    <div className={props.classNames.Caption}>
      <div className={props.classNames.CaptionDropdowns}>
        <MonthsDropdown {...props} disableSelect={disabled} />
        <YearsDropdown {...props} disableSelect={disabled} />
      </div>
      <Navigation prevMonth={prevMonth} nextMonth={nextMonth} {...props} />
    </div>
  );
}

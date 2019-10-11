import * as React from 'react';

import { prepareCaption } from './helpers';
import { DayPicker } from 'types/DayPicker';

interface CaptionProps {
  month: Date;
  dayPickerProps: DayPicker;
}

export const Caption: React.FC<CaptionProps> = ({ month, dayPickerProps }) => {
  const { htmlProps } = prepareCaption(dayPickerProps);
  const { locale } = dayPickerProps;
  return (
    <caption {...htmlProps}>
      {dayPickerProps.formatCaption(month, { locale })}
    </caption>
  );
};

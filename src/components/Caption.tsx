import * as React from 'react';

import { prepareCaption } from './helpers';
import { DayPickerProps } from '../types/DayPicker';

export interface CaptionProps {
  month: Date;
  dayPickerProps: DayPickerProps;
}

export const Caption: React.FC<CaptionProps> = ({ month, dayPickerProps }) => {
  const { containerProps } = prepareCaption(dayPickerProps);
  const { locale } = dayPickerProps;
  return (
    <caption {...containerProps}>
      {dayPickerProps.formatCaption(month, { locale })}
    </caption>
  );
};

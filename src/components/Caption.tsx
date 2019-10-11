import * as React from 'react';

import { prepareCaption } from './helpers';
import { DayPickerProps } from 'types/props';

interface CaptionProps {
  month: Date;
  dayPickerProps: DayPickerProps;
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

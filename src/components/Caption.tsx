import React from 'react';

import { prepareCaption } from './helpers';
import { DayPickerProps } from 'types/props';

interface CaptionProps {
  month: Date;
  dayPickerProps: DayPickerProps;
}

export const Caption: React.FC<CaptionProps> = ({ month, dayPickerProps }) => {
  const { props } = prepareCaption(dayPickerProps);
  const { locale } = dayPickerProps;
  return (
    <caption {...props}>
      {dayPickerProps.formatCaption(month, { locale })}
    </caption>
  );
};

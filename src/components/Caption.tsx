import * as React from 'react';
import { prepareCaption } from './helpers';
import { CaptionProps } from '../types';
export const Caption: React.FC<CaptionProps> = ({ month, dayPickerProps }) => {
  const { containerProps } = prepareCaption(dayPickerProps);
  const { locale } = dayPickerProps;
  return (
    <caption {...containerProps}>
      {dayPickerProps.formatCaption(month, { locale })}
    </caption>
  );
};

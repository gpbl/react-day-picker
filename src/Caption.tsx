import * as React from 'react';
import { getCaptionProps } from './helpers/getCaptionProps';
import { CaptionProps } from '../typings/react-day-picker';
export const Caption: React.FC<CaptionProps> = ({ month, dayPickerProps }) => {
  const { containerProps } = getCaptionProps(dayPickerProps);
  const { locale } = dayPickerProps;
  return (
    <caption {...containerProps}>
      {dayPickerProps.formatCaption(month, { locale })}
    </caption>
  );
};

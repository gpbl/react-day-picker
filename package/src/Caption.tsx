import * as React from 'react';
import { getCaptionProps } from './helpers/getCaptionProps';

export const Caption: React.FC<ReactDayPicker.CaptionProps> = ({
  month,
  dayPickerProps,
}) => {
  const { containerProps } = getCaptionProps(dayPickerProps);
  const { locale } = dayPickerProps;
  return (
    <caption {...containerProps}>
      {dayPickerProps.formatCaption(month, { locale })}
    </caption>
  );
};

import * as React from 'react';

import {
  defaultFormatCaption,
  defaultLocale
} from '../DayPicker/defaults/DefaultProps';
import { getCaptionProps } from './getCaptionProps';
import { MonthCaptionProps } from './types/MonthCaptionProps';

export function MonthCaption(props: MonthCaptionProps): JSX.Element {
  const { containerProps } = getCaptionProps(props.dayPickerProps);
  const locale = props.dayPickerProps.locale || defaultLocale;
  const formatCaption =
    props.dayPickerProps.formatCaption || defaultFormatCaption;
  return (
    <caption {...containerProps}>
      {formatCaption(props.month, { locale })}
    </caption>
  );
}

import * as React from 'react';

import {
  defaultFormatCaption,
  defaultLocale
} from '../DayPicker/defaults/DefaultProps';
import { getCaptionProps } from './getCaptionProps';
import { CaptionProps } from './types/CaptionProps';

export function Caption(props: CaptionProps): JSX.Element {
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

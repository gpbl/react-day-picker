import * as React from 'react';

import { defaultProps } from '../DayPicker';
import { getCaptionProps } from './getCaptionProps';
import { CaptionProps } from './types/CaptionProps';

export function Caption(props: CaptionProps): JSX.Element {
  const { containerProps } = getCaptionProps(props.dayPickerProps);
  const locale = props.dayPickerProps.locale || defaultProps.locale;
  const formatCaption =
    props.dayPickerProps.formatCaption || defaultProps.formatCaption;
  return (
    <caption {...containerProps}>
      {formatCaption(props.month, { locale })}
    </caption>
  );
}

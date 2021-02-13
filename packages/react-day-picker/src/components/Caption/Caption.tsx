import * as React from 'react';

import { CaptionProps } from '../../types/CaptionProps';
import { defaultProps } from '../DayPicker/defaultProps';
import { getCaptionComponent } from './getCaptionComponent';

export function Caption(props: CaptionProps): JSX.Element {
  const { containerProps } = getCaptionComponent(props.dayPickerProps);
  const locale = props.dayPickerProps.locale || defaultProps.locale;
  const formatCaption =
    props.dayPickerProps.formatCaption ?? defaultProps.formatCaption;
  return (
    <caption {...containerProps}>
      {formatCaption(props.month, { locale })}
    </caption>
  );
}

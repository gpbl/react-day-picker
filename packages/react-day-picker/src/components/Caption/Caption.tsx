import * as React from 'react';

import { CaptionProps } from '../../types/CaptionProps';
import { getCaptionComponent } from './getCaptionComponent';

export function Caption(props: CaptionProps): JSX.Element {
  const { rootProps } = getCaptionComponent(props.dayPickerProps);
  const { locale, formatCaption } = props.dayPickerProps;
  return (
    <caption {...rootProps}>{formatCaption(props.month, { locale })}</caption>
  );
}

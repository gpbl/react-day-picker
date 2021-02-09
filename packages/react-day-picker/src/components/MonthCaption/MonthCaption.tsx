import * as React from 'react';

import { getCaptionProps } from './getCaptionProps';
import { MonthCaptionProps } from './types/MonthCaptionProps';

/**
 * Renders the caption of the month.
 *
 * @category Component
 */
export function MonthCaption(props: MonthCaptionProps): JSX.Element {
  const { containerProps } = getCaptionProps(props.dayPickerProps);
  const { locale } = props.dayPickerProps;
  return (
    <caption {...containerProps}>
      {props.dayPickerProps.formatCaption?.(props.month, { locale })}
    </caption>
  );
}

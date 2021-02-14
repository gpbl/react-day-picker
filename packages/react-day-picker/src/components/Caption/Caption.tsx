import { Navigation } from '../../components/Navigation';
import * as React from 'react';

import { CaptionProps } from '../../types/CaptionProps';
import { getCaptionComponent } from './getCaptionComponent';

export function Caption(props: CaptionProps): JSX.Element {
  const { rootProps } = getCaptionComponent(props.dayPickerProps);
  const {
    locale,
    formatCaption,
    showNavigation,
    onMonthChange
  } = props.dayPickerProps;
  return (
    <caption {...rootProps}>
      <span>
        <span>{formatCaption(props.month, { locale })}</span>
        {showNavigation && onMonthChange && (
          <Navigation dayPickerProps={props.dayPickerProps} />
        )}
      </span>
    </caption>
  );
}

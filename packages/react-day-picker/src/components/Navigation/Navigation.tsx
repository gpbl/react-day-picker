import * as React from 'react';
import { NavigationProps } from 'types';

import { defaultProps } from '../DayPicker/defaultProps';
import { getNavigationComponent } from './getNavigationComponent';

export function Navigation(props: NavigationProps): JSX.Element {
  const { dayPickerProps } = props;
  const { rootProps, nextProps, prevProps } = getNavigationComponent(
    dayPickerProps
  );

  const PrevIcon =
    dayPickerProps.components?.PrevIcon ?? defaultProps.components.PrevIcon;
  const prevButton = (
    <button {...prevProps} key="prev" type="button">
      <PrevIcon />
    </button>
  );

  const NextIcon =
    dayPickerProps.components?.NextIcon ?? defaultProps.components.NextIcon;
  const nextButton = (
    <button {...nextProps} key="next" type="button">
      <NextIcon />
    </button>
  );

  let buttons = [prevButton, nextButton];
  if (dayPickerProps.dir === 'rtl') {
    buttons = buttons.reverse();
  }
  return <div {...rootProps}>{buttons}</div>;
}

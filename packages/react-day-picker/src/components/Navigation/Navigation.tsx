import * as React from 'react';
import { NavigationProps } from 'types';

import { defaultProps } from '../DayPicker/defaultProps';
import { getNavigationComponent } from './getNavigationComponent';

export function Navigation(props: NavigationProps): JSX.Element {
  const { components, dir } = props.dayPickerProps;
  const {
    rootProps,
    nextButtonProps,
    prevButtonProps
  } = getNavigationComponent(props.dayPickerProps);

  const PrevIcon = components?.PrevIcon ?? defaultProps.components.PrevIcon;
  const prevButton = (
    <button {...prevButtonProps} key="prev">
      <PrevIcon />
    </button>
  );

  const NextIcon = components?.NextIcon ?? defaultProps.components.NextIcon;
  const nextButton = (
    <button {...nextButtonProps} key="next">
      <NextIcon />
    </button>
  );

  let buttons = [prevButton, nextButton];
  if (dir === 'rtl') {
    buttons = buttons.reverse();
  }
  return <div {...rootProps}>{buttons}</div>;
}

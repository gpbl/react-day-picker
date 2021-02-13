import * as React from 'react';
import { NavigationProps } from 'types';

import { getNavigationComponent } from './getNavigationComponent';

export function Navigation(props: NavigationProps): JSX.Element {
  const { dayPickerProps } = props;
  const {
    rootProps,
    nextButtonProps,
    prevButtonProps
  } = getNavigationComponent(dayPickerProps);
  const { PrevIcon, NextIcon } = dayPickerProps.components;
  const prevButton = (
    <button {...prevButtonProps} key="prev">
      <PrevIcon />
    </button>
  );
  const nextButton = (
    <button {...nextButtonProps} key="next">
      <NextIcon />
    </button>
  );

  let buttons = [prevButton, nextButton];
  if (dayPickerProps.dir === 'rtl') {
    buttons = buttons.reverse();
  }
  return <div {...rootProps}>{buttons}</div>;
}

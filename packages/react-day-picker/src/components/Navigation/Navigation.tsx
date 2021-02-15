import * as React from 'react';
import { SharedProps } from '../../types';

import { getNavigationComponent } from './getNavigationComponent';

export function Navigation(props: SharedProps): JSX.Element {
  const { dayPickerProps } = props;
  const {
    rootProps,
    nextButtonProps,
    prevButtonProps
  } = getNavigationComponent(dayPickerProps);
  const { PrevIcon, NextIcon } = dayPickerProps.components;
  const prevButton = (
    <button {...prevButtonProps} key="prev">
      <PrevIcon dayPickerProps={dayPickerProps} />
    </button>
  );
  const nextButton = (
    <button {...nextButtonProps} key="next">
      <NextIcon dayPickerProps={dayPickerProps} />
    </button>
  );

  let buttons = [prevButton, nextButton];
  if (dayPickerProps.dir === 'rtl') {
    buttons = buttons.reverse();
  }
  return <span {...rootProps}>{buttons}</span>;
}

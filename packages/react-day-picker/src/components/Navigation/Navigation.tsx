import * as React from 'react';
import { NavigationProps } from 'types';

import { getNavigationComponent } from './getNavigationComponent';

export function Navigation(props: NavigationProps): JSX.Element {
  const { dayPickerProps } = props;
  const { rootProps, nextProps, prevProps } = getNavigationComponent(
    dayPickerProps
  );
  const { PrevIcon, NextIcon } = dayPickerProps.components;

  const prevButton = (
    <button {...prevProps} key="prev" type="button">
      <PrevIcon />
    </button>
  );
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

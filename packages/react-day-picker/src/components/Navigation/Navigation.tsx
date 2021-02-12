import * as React from 'react';

import { getNavigationProps } from './getNavigationProps';
import { NextIcon as DefaultNextIcon } from '../NextIcon';
import { PrevIcon as DefaultPrevIcon } from '../PrevIcon';
import { NavigationProps } from './types';

export function Navigation(props: NavigationProps): JSX.Element {
  const { dayPickerProps } = props;

  const { containerProps, nextProps, prevProps } = getNavigationProps(
    dayPickerProps
  );

  const PrevIcon = dayPickerProps.components?.PrevIcon ?? DefaultPrevIcon;
  const prevButton = (
    <button {...prevProps} key="prev" type="button">
      <PrevIcon />
    </button>
  );

  const NextIcon = dayPickerProps.components?.NextIcon ?? DefaultNextIcon;
  const nextButton = (
    <button {...nextProps} key="next" type="button">
      <NextIcon />
    </button>
  );

  let buttons = [prevButton, nextButton];
  if (dayPickerProps.dir === 'rtl') {
    buttons = buttons.reverse();
  }
  return <div {...containerProps}>{buttons}</div>;
}

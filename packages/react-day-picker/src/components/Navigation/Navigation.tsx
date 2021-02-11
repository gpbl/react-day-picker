import * as React from 'react';

import { getNavigation } from './getNavigation';
import { getNavigationProps } from './getNavigationProps';
import { NavigationProps } from './types';

export function Navigation(props: NavigationProps): JSX.Element | null {
  const { dayPickerProps } = props;
  const { onMonthChange, onPrevClick, onNextClick } = dayPickerProps;

  const { nextMonth, prevMonth } = getNavigation(dayPickerProps);
  const { containerProps, nextProps, prevProps } = getNavigationProps(
    dayPickerProps
  );

  const handlePrevClick: React.MouseEventHandler = (e) => {
    if (!prevMonth) return;
    if (onMonthChange) onMonthChange(prevMonth, e);
    if (onPrevClick) onPrevClick(prevMonth, e);
  };

  const handleNextClick: React.MouseEventHandler = (e): void => {
    if (!nextMonth) return;
    if (onMonthChange) onMonthChange(nextMonth, e);
    if (onNextClick) onNextClick(nextMonth, e);
  };

  const { prevLabel, nextLabel } = dayPickerProps;

  const prevButton = prevLabel && (
    <button
      {...prevProps}
      key="prev"
      disabled={!prevMonth}
      type="button"
      onClick={handlePrevClick}
    >
      {prevLabel}
    </button>
  );

  const nextButton = nextLabel && (
    <button
      {...nextProps}
      key={'next'}
      disabled={!nextMonth}
      type="button"
      onClick={handleNextClick}
    >
      {nextLabel}
    </button>
  );
  let buttons = [prevButton, nextButton];
  if (dayPickerProps.dir === 'rtl') {
    buttons = buttons.reverse();
  }
  return <div {...containerProps}>{buttons}</div>;
}

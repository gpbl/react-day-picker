import * as React from 'react';

import { getNavigation } from './helpers/getNavigation';
import { getNavigationProps } from './helpers/getNavigationProps';

export const Navigation: React.FC<ReactDayPicker.NavigationProps> = props => {
  const { dayPickerProps } = props;
  const { onMonthChange, onPrevClick, onNextClick } = dayPickerProps;

  const { nextMonth, prevMonth } = getNavigation(dayPickerProps);

  const { containerProps, nextProps, prevProps } = getNavigationProps(
    dayPickerProps
  );

  const handlePrevClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    onMonthChange && prevMonth && onMonthChange(prevMonth, e);
    onPrevClick && prevMonth && onPrevClick(prevMonth, e);
  };
  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    onMonthChange && nextMonth && onMonthChange(nextMonth, e);
    onNextClick && nextMonth && onNextClick(nextMonth, e);
  };
  if (!dayPickerProps.onMonthChange) {
    return null;
  }

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
};

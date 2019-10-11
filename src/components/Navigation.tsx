import * as React from 'react';

import { prepareNavigation } from './helpers';
import { DayPickerProps } from 'types/props';

interface Navigation {
  dayPickerProps: DayPickerProps;
}

export const Navigation: React.FC<Navigation> = props => {
  const { dayPickerProps } = props;
  const {
    onMonthChange,
    onPrevClick,
    onNextClick,
    onStartClick,
    startDay,
  } = dayPickerProps;

  const {
    htmlProps,
    htmlNextProps,
    nextMonth,
    htmlPrevProps,
    prevMonth,
    htmlStartProps,
  } = prepareNavigation(dayPickerProps);

  const handlePrevClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onMonthChange && onMonthChange(prevMonth, e);
    onPrevClick && onPrevClick(prevMonth, e);
  };
  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onMonthChange && onMonthChange(nextMonth, e);
    onNextClick && onNextClick(nextMonth, e);
  };
  const handleStartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onMonthChange && onMonthChange(startDay, e);
    onStartClick && onStartClick(startDay, e);
  };

  if (!dayPickerProps.onMonthChange) {
    return null;
  }

  let { startLabel, styles, classNames, prevLabel, nextLabel } = dayPickerProps;

  const prevButton = prevLabel && (
    <button
      {...htmlPrevProps}
      key="prev"
      disabled={!prevMonth}
      type="button"
      onClick={handlePrevClick}
    >
      {prevLabel}
    </button>
  );

  const startButton = startLabel && (
    <button
      {...htmlStartProps}
      key="start"
      type="button"
      onClick={handleStartClick}
    >
      {startLabel}
    </button>
  );

  const nextButton = nextLabel && (
    <button
      {...htmlNextProps}
      key={'next'}
      disabled={!nextMonth}
      type="button"
      onClick={handleNextClick}
    >
      {nextLabel}
    </button>
  );
  let buttons = [prevButton, startButton, nextButton];
  if (dayPickerProps.dir === 'rtl') {
    buttons = buttons.reverse();
  }
  return <div {...htmlProps}>{buttons}</div>;
};

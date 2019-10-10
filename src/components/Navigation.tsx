import * as React from 'react';

import { prepareNavigation } from './helpers';
import { DayPickerProps } from 'types/props';

interface Navigation {
  dayPickerProps: DayPickerProps;
}

export const Navigation: React.FC<Navigation> = props => {
  const { dayPickerProps } = props;
  const { styles, classNames } = dayPickerProps;
  const {
    prevMonth,
    nextMonth,
    handlePrevClick,
    handleNextClick,
    handleStartClick,
  } = prepareNavigation(dayPickerProps);

  if (!dayPickerProps.onMonthChange) {
    return null;
  }

  let { startLabel, prevLabel, nextLabel } = dayPickerProps;

  const prevButton = prevLabel && (
    <button
      key="prev"
      disabled={!prevMonth}
      type="button"
      onClick={handlePrevClick}
      className={classNames.navPrev}
      style={styles.navPrev}
    >
      {prevLabel}
    </button>
  );

  const startButton = startLabel && (
    <button
      key="start"
      type="button"
      onClick={handleStartClick}
      className={classNames.navStart}
      style={styles.navStart}
    >
      {startLabel}
    </button>
  );

  const nextButton = nextLabel && (
    <button
      key={'next'}
      disabled={!nextMonth}
      type="button"
      onClick={handleNextClick}
      className={classNames.navNext}
      style={styles.navNext}
    >
      {nextLabel}
    </button>
  );
  let buttons = [prevButton, startButton, nextButton];
  if (dayPickerProps.dir === 'rtl') {
    buttons = buttons.reverse();
  }
  return (
    <div className={classNames.nav} style={styles.nav}>
      {buttons}
    </div>
  );
};

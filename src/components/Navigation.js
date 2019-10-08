import React from 'react';
import PropTypes from 'prop-types';

import { prepareNavigation } from './helpers';

function Navigation({ dayPickerProps }) {
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

  // TODO: deprecated prop, remove
  if (dayPickerProps.todayButton) {
    startLabel = dayPickerProps.todayButton;
  }

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
}

Navigation.propTypes = {
  dayPickerProps: PropTypes.shape({
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    onMonthChange: PropTypes.func,
    startLabel: PropTypes.string,
    prevLabel: PropTypes.string,
    nextLabel: PropTypes.string,
    todayButton: PropTypes.string,
    styles: PropTypes.shape({
      nav: PropTypes.string,
      navNext: PropTypes.string,
      navPrev: PropTypes.string,
      navStart: PropTypes.string,
    }),
    classNames: PropTypes.shape({
      nav: PropTypes.string,
      navNext: PropTypes.string,
      navPrev: PropTypes.string,
      navStart: PropTypes.string,
    }),
  }).isRequired,
};

export default Navigation;

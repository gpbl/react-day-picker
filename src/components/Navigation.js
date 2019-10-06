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
  return (
    <div className={classNames.nav} style={styles.nav}>
      {prevLabel && (
        <button
          disabled={!prevMonth}
          type="button"
          onClick={handlePrevClick}
          className={classNames.navPrev}
          style={styles.navPrev}
        >
          {prevLabel}
        </button>
      )}
      {startLabel && (
        <button
          type="button"
          onClick={handleStartClick}
          className={classNames.navStart}
          style={styles.navStart}
        >
          {startLabel}
        </button>
      )}
      {nextLabel && (
        <button
          disabled={!nextMonth}
          type="button"
          onClick={handleNextClick}
          className={classNames.navNext}
          style={styles.navNext}
        >
          {nextLabel}
        </button>
      )}
    </div>
  );
}

Navigation.propTypes = {
  dayPickerProps: PropTypes.shape({
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

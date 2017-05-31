import React from 'react';
import PropTypes from './PropTypes';
import defaultClassNames from './classNames';

export default function Navbar({
  classNames,
  className,
  showPreviousButton,
  showNextButton,
  onPreviousClick,
  onNextClick,
  labels,
  dir,
}) {
  const previousClickHandler = dir === 'rtl' ? onNextClick : onPreviousClick;
  const nextClickHandler = dir === 'rtl' ? onPreviousClick : onNextClick;

  const previousButton = (
    <span
      role="button"
      aria-label={labels.previousMonth}
      key="previous"
      className={
        showPreviousButton
          ? classNames.navButtonPrev
          : `${classNames.navButtonPrev} DayPicker-NavButton-disabled`
      }
      onClick={showPreviousButton ? () => previousClickHandler() : null}
    />
  );

  const nextButton = (
    <span
      role="button"
      aria-label={labels.nextMonth}
      key="right"
      className={
        showNextButton
          ? classNames.navButtonNext
          : `${classNames.navButtonNext} DayPicker-NavButton-disabled`
      }
      onClick={showNextButton ? () => nextClickHandler() : null}
    />
  );

  return (
    <div className={className || classNames.navBar}>
      {dir === 'rtl'
        ? [nextButton, previousButton]
        : [previousButton, nextButton]}
    </div>
  );
}

export const NavbarPropTypes = {
  classNames: PropTypes.shape({
    navBar: PropTypes.string.isRequired,
    navButtonPrev: PropTypes.string.isRequired,
    navButtonNext: PropTypes.string.isRequired,
  }),
  className: PropTypes.string,
  showPreviousButton: PropTypes.bool,
  showNextButton: PropTypes.bool,
  onPreviousClick: PropTypes.func,
  onNextClick: PropTypes.func,
  dir: PropTypes.string,
  labels: PropTypes.shape({
    previousMonth: PropTypes.string.isRequired,
    nextMonth: PropTypes.string.isRequired,
  }),
};

Navbar.propTypes = NavbarPropTypes;

Navbar.defaultProps = {
  classNames: defaultClassNames,
  dir: 'ltr',
  labels: {
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month',
  },
  showPreviousButton: true,
  showNextButton: true,
};

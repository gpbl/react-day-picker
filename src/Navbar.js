import React, { PropTypes } from 'react';

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

  const previousButton = showPreviousButton &&
    <span
      role="button"
      aria-label={ labels.previousMonth }
      key="previous"
      className={ classNames.navButtonPrev }
      onClick={ () => previousClickHandler() }
    />;

  const nextButton = showNextButton &&
    <span
      role="button"
      aria-label={ labels.nextMonth }
      key="right"
      className={ classNames.navButtonNext }
      onClick={ () => nextClickHandler() }
    />;

  return (
    <div className={ className || classNames.navBar }>
      {dir === 'rtl' ? [nextButton, previousButton] : [previousButton, nextButton]}
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

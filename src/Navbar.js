import React, { PropTypes } from 'react';

const buttonBaseClass = 'DayPicker-NavButton DayPicker-NavButton';

export default function Navbar({
  className,
  showPreviousButton,
  showNextButton,
  onPreviousClick,
  onNextClick,
  dir,
}) {
  const previousClickHandler = dir === 'rtl' ? onNextClick : onPreviousClick;
  const nextClickHandler = dir === 'rtl' ? onPreviousClick : onNextClick;

  const previousButton = showPreviousButton &&
    <span
      role="button"
      key="previous"
      className={ `${buttonBaseClass}--prev` }
      onClick={ () => previousClickHandler() }
    />;

  const nextButton = showNextButton &&
    <span
      role="button"
      key="right"
      className={ `${buttonBaseClass}--next` }
      onClick={ () => nextClickHandler() }
    />;

  return (
    <div className={ className }>
      {dir === 'rtl' ? [nextButton, previousButton] : [previousButton, nextButton]}
    </div>
  );
}

export const NavbarPropTypes = {
  className: PropTypes.string,
  showPreviousButton: PropTypes.bool,
  showNextButton: PropTypes.bool,
  onPreviousClick: PropTypes.func,
  onNextClick: PropTypes.func,
  dir: PropTypes.string,
};

Navbar.propTypes = NavbarPropTypes;

Navbar.defaultProps = {
  className: 'DayPicker-NavBar',
  dir: 'ltr',
  showPreviousButton: true,
  showNextButton: true,
};

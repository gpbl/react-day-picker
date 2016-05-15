import React, { PropTypes } from 'react';

const buttonBaseClass = 'DayPicker-NavButton DayPicker-NavButton';

export default function Navbar({
  showPreviousButton,
  showNextButton,
  onPreviousClick,
  onNextClick,
  dir,
}) {
  let previousClickHandler = dir === 'rtl' ? onNextClick : onPreviousClick;
  let nextClickHandler = dir === 'rtl' ? onPreviousClick : onNextClick;

  const previousButton = showPreviousButton &&
    <span
      role="button"
      key="previous"
      className={`${buttonBaseClass}--prev`}
      onClick={previousClickHandler}
    />;

  const nextButton = showNextButton &&
    <span
      role="button"
      key="right"
      className={`${buttonBaseClass}--next`}
      onClick={nextClickHandler}
    />;

  return (
    <div className="DayPicker-NavBar">
      {dir === 'rtl' ? [nextButton, previousButton] : [previousButton, nextButton]}
    </div>
  );
}

Navbar.propTypes = {
  showPreviousButton: PropTypes.bool,
  showNextButton: PropTypes.bool,
  onPreviousClick: PropTypes.func,
  onNextClick: PropTypes.func,
  dir: PropTypes.string,
};

Navbar.defaultProps = {
  dir: 'ltr',
  showPreviousButton: true,
  showNextButton: true,
};

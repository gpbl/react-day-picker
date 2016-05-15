import React, { PropTypes } from 'react';

const buttonBaseClass = 'DayPicker-NavButton DayPicker-NavButton';

export default function Navbar({
  showPreviousButton = true,
  showNextButton = true,
  onPreviousClick,
  onNextClick,
  dir = 'ltr',
}) {
  const previousButton = showPreviousButton &&
    <span
      key="previous"
      className={`${buttonBaseClass}--prev`}
      onClick={onPreviousClick}
    />;

  const nextButton = showNextButton &&
    <span
      key="right"
      className={`${buttonBaseClass}--next`}
      onClick={dir === 'rtl' ? onPreviousClick : onNextClick}
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

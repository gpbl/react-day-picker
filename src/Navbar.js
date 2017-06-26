import React, { Component } from 'react';
import PropTypes from './PropTypes';
import defaultClassNames from './classNames';
import { SPACE, ENTER } from './keys';

export default class Navbar extends Component {
  static defaultProps = {
    classNames: defaultClassNames,
    dir: 'ltr',
    labels: {
      previousMonth: 'Previous Month',
      nextMonth: 'Next Month',
    },
    showPreviousButton: true,
    showNextButton: true,
  };

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.labels !== this.props.labels ||
      this.props.showPreviousButton !== nextProps.showPreviousButton ||
      this.props.showNextButton !== nextProps.showNextButton
    );
  }

  handleNextClick = () => {
    if (this.props.onNextClick) {
      this.props.onNextClick();
    }
  };

  handlePreviousClick = () => {
    if (this.props.onPreviousClick) {
      this.props.onPreviousClick();
    }
  };

  handleNextKeyDown = e => {
    if (e.keyCode !== ENTER && e.keyCode !== SPACE) {
      return;
    }
    e.preventDefault();
    this.handleNextClick();
  };

  handlePreviousKeyDown = e => {
    if (e.keyCode !== ENTER && e.keyCode !== SPACE) {
      return;
    }
    e.preventDefault();
    this.handlePreviousClick();
  };

  render() {
    const {
      classNames,
      className,
      showPreviousButton,
      showNextButton,
      labels,
      dir,
    } = this.props;

    let previousClickHandler;
    let nextClickHandler;
    let previousKeyDownHandler;
    let nextKeyDownHandler;

    if (dir === 'rtl') {
      previousClickHandler = this.handleNextClick;
      nextClickHandler = this.handlePreviousClick;
      previousKeyDownHandler = this.handleNextKeyDown;
      nextKeyDownHandler = this.handlePreviousKeyDown;
    } else {
      previousClickHandler = this.handlePreviousClick;
      nextClickHandler = this.handleNextClick;
      previousKeyDownHandler = this.handlePreviousKeyDown;
      nextKeyDownHandler = this.handleNextKeyDown;
    }

    const previousClassName = showPreviousButton
      ? classNames.navButtonPrev
      : `${classNames.navButtonPrev} ${classNames.navButtonInteractionDisabled}`;

    const nextClassName = showNextButton
      ? classNames.navButtonNext
      : `${classNames.navButtonNext} ${classNames.navButtonInteractionDisabled}`;

    const previousButton = (
      <span
        tabIndex="0"
        role="button"
        aria-label={labels.previousMonth}
        key="previous"
        className={previousClassName}
        onKeyDown={showPreviousButton ? previousKeyDownHandler : undefined}
        onClick={showPreviousButton ? previousClickHandler : undefined}
      />
    );

    const nextButton = (
      <span
        tabIndex="0"
        role="button"
        aria-label={labels.nextMonth}
        key="right"
        className={nextClassName}
        onKeyDown={showNextButton ? nextKeyDownHandler : undefined}
        onClick={showNextButton ? nextClickHandler : undefined}
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

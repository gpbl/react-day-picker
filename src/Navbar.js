import React, { Component } from 'react';
import PropTypes from 'prop-types';

import defaultClassNames from './classNames';
import { SPACE, ENTER } from './keys';

export default class Navbar extends Component {
  static propTypes = {
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
      nextProps.dir !== this.props.dir ||
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
    let shouldShowPrevious;
    let shouldShowNext;

    if (dir === 'rtl') {
      previousClickHandler = this.handleNextClick;
      nextClickHandler = this.handlePreviousClick;
      previousKeyDownHandler = this.handleNextKeyDown;
      nextKeyDownHandler = this.handlePreviousKeyDown;
      shouldShowNext = showPreviousButton;
      shouldShowPrevious = showNextButton;
    } else {
      previousClickHandler = this.handlePreviousClick;
      nextClickHandler = this.handleNextClick;
      previousKeyDownHandler = this.handlePreviousKeyDown;
      nextKeyDownHandler = this.handleNextKeyDown;
      shouldShowNext = showNextButton;
      shouldShowPrevious = showPreviousButton;
    }

    const previousClassName = shouldShowPrevious
      ? classNames.navButtonPrev
      : `${classNames.navButtonPrev} ${
          classNames.navButtonInteractionDisabled
        }`;

    const nextClassName = shouldShowNext
      ? classNames.navButtonNext
      : `${classNames.navButtonNext} ${
          classNames.navButtonInteractionDisabled
        }`;

    const previousButton = (
      <span
        tabIndex="0"
        role="button"
        aria-label={labels.previousMonth}
        key="previous"
        className={previousClassName}
        onKeyDown={shouldShowPrevious ? previousKeyDownHandler : undefined}
        onClick={shouldShowPrevious ? previousClickHandler : undefined}
      />
    );

    const nextButton = (
      <span
        tabIndex="0"
        role="button"
        aria-label={labels.nextMonth}
        key="right"
        className={nextClassName}
        onKeyDown={shouldShowNext ? nextKeyDownHandler : undefined}
        onClick={shouldShowNext ? nextClickHandler : undefined}
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

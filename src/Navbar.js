import React, { Component } from 'react';
import PropTypes from './PropTypes';
import defaultClassNames from './classNames';

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

  render() {
    const {
      classNames,
      className,
      showPreviousButton,
      showNextButton,
      onPreviousClick,
      onNextClick,
      labels,
      dir,
    } = this.props;
    const previousClickHandler = dir === 'rtl' ? onNextClick : onPreviousClick;
    const nextClickHandler = dir === 'rtl' ? onPreviousClick : onNextClick;

    const previousButton = (
      <span
        tabIndex="0"
        role="button"
        aria-label={labels.previousMonth}
        key="previous"
        className={
          showPreviousButton
            ? classNames.navButtonPrev
            : `${classNames.navButtonPrev} ${classNames.navButtonInteractionDisabled}`
        }
        onClick={showPreviousButton ? () => previousClickHandler() : undefined}
      />
    );

    const nextButton = (
      <span
        tabIndex="0"
        role="button"
        aria-label={labels.nextMonth}
        key="right"
        className={
          showNextButton
            ? classNames.navButtonNext
            : `${classNames.navButtonNext} ${classNames.navButtonInteractionDisabled}`
        }
        onClick={showNextButton ? () => nextClickHandler() : undefined}
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

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'; // eslint-disable-line import/no-extraneous-dependencies

import DayPicker from './DayPicker';
import { getModifiersForDay } from './ModifiersUtils';
import keys from './keys';

function getStateFromProps(props) {
  return {
    showOverlay: false,
    value: props.value,
    month: props.value
      ? moment(props.value, props.format).toDate()
      : props.dayPickerProps.initialMonth ||
          props.dayPickerProps.month ||
          new Date(),
  };
}

export default class DayInput extends React.Component {
  static propTypes = {
    value: (props, propName, componentName) => {
      if (!props.format || !props.value) {
        return undefined;
      }
      const m = moment(props.value, props.format, true);
      if (!m.isValid()) {
        return new Error(
          `Invalid prop \`${propName}="${props.value}"\` supplied to \`${componentName}\`. Make sure \`value\` is formatted as ${props.format}`
        );
      }
      return undefined;
    },

    format: PropTypes.string.isRequired,
    dayPickerProps: PropTypes.object,
    hideOnDayClick: PropTypes.bool,
    component: PropTypes.any,

    classNames: PropTypes.shape({
      container: PropTypes.string,
      overlayWrapper: PropTypes.string,
      overlay: PropTypes.string.isRequired,
    }),

    onDayChange: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyUp: PropTypes.func,
  };

  static defaultProps = {
    dayPickerProps: {},
    value: '',
    format: 'L',
    hideOnDayClick: true,
    component: 'input',
    classNames: {
      container: 'DayPickerInput',
      overlayWrapper: 'DayPickerInput-OverlayWrapper',
      overlay: 'DayPickerInput-Overlay',
    },
  };

  constructor(props) {
    super(props);
    /* istanbul ignore next */
    // for the ignore above see: https://github.com/gotwarlost/istanbul/issues/690

    this.state = getStateFromProps(props);
  }

  componentWillUnmount() {
    clearTimeout(this.clickTimeout);
    clearTimeout(this.hideTimeout);
  }

  input = null;
  daypicker = null;
  clickedInside = false;
  clickTimeout = null;
  hideTimeout = null;

  showDayPicker() {
    this.setState({
      showOverlay: true,
    });
  }

  hideDayPicker() {
    this.setState({
      showOverlay: false,
    });
  }

  hideAfterDayClick = () => {
    if (!this.props.hideOnDayClick) {
      return;
    }
    this.hideTimeout = setTimeout(
      () => this.setState({ showOverlay: false }),
      100
    );
  };

  handleContainerMouseDown = () => {
    this.clickedInside = true;
    // The input's onBlur method is called from a queue right after onMouseDown event.
    // setTimeout adds another callback in the queue, but is called later than onBlur event
    this.clickTimeout = setTimeout(() => {
      this.clickedInside = false;
    }, 0);
  };

  handleClick = e => {
    this.setState({
      showOverlay: true,
    });
    if (this.props.onClick) {
      e.persist();
      this.props.onClick(e);
    }
  };

  handleFocus = e => {
    this.setState({
      showOverlay: true,
    });
    if (this.props.onFocus) {
      e.persist();
      this.props.onFocus(e);
    }
  };

  handleBlur = e => {
    const showOverlay = this.clickedInside;

    this.setState({
      showOverlay,
    });

    // Force input's focus if blur event was caused by clicking on the calendar
    if (showOverlay) {
      this.input.focus();
    }

    if (this.props.onBlur) {
      e.persist();
      this.props.onBlur(e);
    }
  };

  handleChange = e => {
    const { value } = e.target;
    const { format, dayPickerProps, onDayChange, onChange } = this.props;
    const m = moment(value, format, true);

    if (onChange) {
      e.persist();
      onChange(e);
    }

    if (!m.isValid()) {
      this.setState({ value });
      if (onDayChange) {
        onDayChange(undefined, {});
      }
      return;
    }

    const day = m.toDate();
    this.setState({ month: day, value });

    if (onDayChange) {
      const modifiersObj = {
        disabled: dayPickerProps.disabledDays,
        selected: dayPickerProps.selectedDays,
        ...dayPickerProps.modifiers,
      };
      const modifiers = getModifiersForDay(
        day,
        modifiersObj
      ).reduce((obj, modifier) => {
        const newObj = { ...obj };
        newObj[modifier] = true;
        return newObj;
      }, {});

      this.props.onDayChange(m, modifiers);
    }
  };

  handleOnKeyUp = e => {
    this.setState({
      showOverlay: e.keyCode !== keys.ESC,
    });
    if (this.props.onKeyUp) {
      e.persist();
      this.props.onKeyUp(e);
    }
  };

  handleDayClick = (day, modifiers, e) => {
    if (this.props.dayPickerProps.onDayClick) {
      this.props.dayPickerProps.onDayClick(day, modifiers, e);
    }

    if (modifiers.disabled) {
      // Do nothing if the day is disabled
      return;
    }
    if (modifiers.selected) {
      // Unselect the day
      this.setState({ value: '' }, this.hideAfterDayClick);
      if (this.props.onDayChange) {
        this.props.onDayChange(undefined, modifiers);
      }
      return;
    }

    const m = moment(day);
    this.setState(
      { value: m.format(this.props.format), month: day },
      this.hideAfterDayClick
    );
    if (this.props.onDayChange) {
      this.props.onDayChange(m, modifiers);
    }
    this.input.blur();
  };

  render() {
    let selectedDay;
    if (this.state.value) {
      const m = moment(this.state.value, this.props.format, true);
      if (m.isValid()) {
        selectedDay = m.toDate();
      }
    }

    const inputProps = { ...this.props };
    delete inputProps.component;
    delete inputProps.dayPickerProps;
    delete inputProps.format;
    delete inputProps.hideOnDayClick;
    delete inputProps.onDayChange;
    delete inputProps.classNames;

    return (
      <div
        className={this.props.classNames.container}
        onMouseDown={this.handleContainerMouseDown}
      >
        {React.createElement(this.props.component, {
          ref: el => (this.input = el),
          ...inputProps,
          value: this.state.value,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onKeyUp: this.handleOnKeyUp,
          onClick: this.handleClick,
        })}
        {this.state.showOverlay &&
          <div className={this.props.classNames.overlayWrapper}>
            <div className={this.props.classNames.overlay}>
              <DayPicker
                ref={el => (this.daypicker = el)}
                fixedWeeks
                {...this.props.dayPickerProps}
                month={this.state.month}
                selectedDays={selectedDay}
                onDayClick={this.handleDayClick}
                numberOfMonths={1}
              />

            </div>
          </div>}
      </div>
    );
  }
}

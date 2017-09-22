import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'; // eslint-disable-line import/no-extraneous-dependencies

import DayPicker from './DayPicker';
import { getModifiersForDay } from './ModifiersUtils';
import { ESC } from './keys';

export const HIDE_TIMEOUT = 100;

function getStateFromProps(props) {
  let month;
  if (props.value) {
    const m = moment(props.value, props.format, true);
    if (m.isValid()) {
      month = m.toDate();
    }
  } else {
    month =
      props.dayPickerProps.initialMonth ||
      props.dayPickerProps.month ||
      new Date();
  }

  return {
    value: props.value,
    month,
  };
}

export default class DayPickerInput extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    value: PropTypes.string,

    format: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]).isRequired,

    dayPickerProps: PropTypes.object,
    hideOnDayClick: PropTypes.bool,
    clickUnselectsDay: PropTypes.bool,
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
    clickUnselectsDay: false,
    component: 'input',
    classNames: {
      container: 'DayPickerInput',
      overlayWrapper: 'DayPickerInput-OverlayWrapper',
      overlay: 'DayPickerInput-Overlay',
    },
  };

  constructor(props) {
    super(props);
    this.state = getStateFromProps(props);
    this.state.showOverlay = false;
  }

  componentWillReceiveProps(nextProps) {
    const { dayPickerProps: { month }, value } = this.props;
    const {
      dayPickerProps: { month: nextMonth },
      value: nextValue,
    } = nextProps;

    const hasDifferentValue = nextValue !== value;

    const monthExistsOnBoth = nextMonth && month;

    const newMonthProp = nextMonth && !month;

    const shouldDisplayAnotherMonth =
      newMonthProp ||
      (monthExistsOnBoth &&
        (nextMonth.getFullYear() !== month.getFullYear() ||
          nextMonth.getMonth() !== month.getMonth()));

    if (hasDifferentValue && !shouldDisplayAnotherMonth) {
      this.setState(getStateFromProps(nextProps));
    } else if (shouldDisplayAnotherMonth) {
      this.setState({ month: nextMonth });
    }
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
      () => this.hideDayPicker(),
      HIDE_TIMEOUT // give a timeout to show the clicked day
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
    this.showDayPicker();
    if (this.props.onClick) {
      e.persist();
      this.props.onClick(e);
    }
  };

  handleFocus = e => {
    this.showDayPicker();
    if (this.props.onFocus) {
      e.persist();
      this.props.onFocus(e);
    }
  };

  handleBlur = e => {
    this.setState({
      showOverlay: this.clickedInside,
    });

    // Force input's focus if blur event was caused
    // by clicking inside the overlay
    if (this.clickedInside) {
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

    if (value.trim() === '') {
      this.setState({ value });
      if (this.props.onDayChange) {
        this.props.onDayChange(undefined, {});
      }
      return;
    }

    if (!m.isValid()) {
      this.setState({ value });
      return;
    }

    const day = m.toDate();
    this.setState({ month: day, value }, () => {
      if (!onDayChange) {
        return;
      }
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
    });
  };

  handleOnKeyUp = e => {
    this.setState({
      showOverlay: e.keyCode !== ESC,
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
    if (modifiers.selected && this.props.clickUnselectsDay) {
      // Unselect the day
      this.setState({ value: '' }, this.hideAfterDayClick);
      if (this.props.onDayChange) {
        this.props.onDayChange(undefined, modifiers);
      }
      return;
    }

    const m = moment(day);
    this.setState({ value: m.format(this.props.format), month: day }, () => {
      if (this.props.onDayChange) {
        this.props.onDayChange(m, modifiers);
      }
      this.hideAfterDayClick();
    });
  };

  renderOverlay() {
    let selectedDay;
    if (this.state.value) {
      const m = moment(this.state.value, this.props.format, true);
      if (m.isValid()) {
        selectedDay = m.toDate();
      }
    }

    return (
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
      </div>
    );
  }

  render() {
    const inputProps = { ...this.props };
    delete inputProps.component;
    delete inputProps.dayPickerProps;
    delete inputProps.format;
    delete inputProps.clickUnselectsDay;
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
        {this.state.showOverlay && this.renderOverlay()}
      </div>
    );
  }
}

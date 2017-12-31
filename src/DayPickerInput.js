import React from 'react';
import PropTypes from 'prop-types';

import DayPicker from './DayPicker';
import { getModifiersForDay } from './ModifiersUtils';
import { ESC } from './keys';

// When clicking on a day cell, overlay will be hidden after this timeout
export const HIDE_TIMEOUT = 100;

function isDate(date) {
  return date instanceof Date && !isNaN(date.valueOf());
}

export function defaultFormat(d) {
  if (isDate(d)) {
    const year = d.getFullYear();
    const month = `${d.getMonth() + 1}`;
    const day = `${d.getDate()}`;
    return `${year}-${month}-${day}`;
  }
  return '';
}

export function defaultParse(str) {
  if (typeof str !== 'string') {
    return undefined;
  }
  const split = str.split('-');
  if (split.length !== 3) {
    return undefined;
  }
  const year = parseInt(split[0], 10);
  const month = parseInt(split[1], 10) - 1;
  const day = parseInt(split[2], 10);
  if (
    isNaN(year) ||
    isNaN(month) ||
    isNaN(day) ||
    day <= 0 ||
    day > 31 ||
    month < 0 ||
    month >= 12
  ) {
    return undefined;
  }

  return new Date(year, month, day);
}

export default class DayPickerInput extends React.Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    inputProps: PropTypes.object,
    placeholder: PropTypes.string,

    format: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),

    formatDate: PropTypes.func,
    parseDate: PropTypes.func,

    showOverlay: PropTypes.bool,
    dayPickerProps: PropTypes.object,
    hideOnDayClick: PropTypes.bool,
    clickUnselectsDay: PropTypes.bool,
    component: PropTypes.any,
    overlayComponent: PropTypes.any,

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
    placeholder: 'YYYY-M-D',
    format: 'L',
    formatDate: defaultFormat,
    parseDate: defaultParse,
    showOverlay: false,
    hideOnDayClick: true,
    clickUnselectsDay: false,
    component: 'input',
    inputProps: {},
    overlayComponent: ({ children, classNames }) => (
      <div className={classNames.overlayWrapper}>
        <div className={classNames.overlay}>{children}</div>
      </div>
    ),
    classNames: {
      container: 'DayPickerInput',
      overlayWrapper: 'DayPickerInput-OverlayWrapper',
      overlay: 'DayPickerInput-Overlay',
    },
  };

  constructor(props) {
    super(props);

    this.state = this.getStateFromProps(props);
    this.state.showOverlay = props.showOverlay;

    this.hideAfterDayClick = this.hideAfterDayClick.bind(this);
    this.handleContainerMouseDown = this.handleContainerMouseDown.bind(this);
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const monthFromProps = this.props.dayPickerProps.month;
    const nextMonthFromProps = nextProps.dayPickerProps.month;

    const selectedDaysFromProps = this.props.dayPickerProps.selectedDays;
    const nextSelectedDaysFromProps = nextProps.dayPickerProps.selectedDays;

    let nextValue = nextProps.value;
    const currentValue = this.props.value;

    const monthChanged =
      (nextMonthFromProps && !monthFromProps) ||
      (nextMonthFromProps &&
        (nextMonthFromProps.getFullYear() !== monthFromProps.getFullYear() ||
          nextMonthFromProps.getMonth() !== monthFromProps.getMonth()));

    if (nextValue !== currentValue) {
      if (isDate(nextValue)) {
        nextValue = this.props.formatDate(
          nextValue,
          this.props.format,
          this.props.dayPickerProps.locale
        );
      }
      this.setState({
        value: nextValue,
      });
    }
    if (monthChanged) {
      this.setState({ month: nextMonthFromProps });
    }
    if (selectedDaysFromProps !== nextSelectedDaysFromProps) {
      this.setState({ selectedDays: nextSelectedDaysFromProps });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.clickTimeout);
    clearTimeout(this.hideTimeout);
    clearTimeout(this.blurTimeout);
  }

  getStateFromProps(props) {
    const { dayPickerProps, formatDate, format } = props;
    let { value } = props;
    let month;
    let day;
    if (props.value) {
      if (isDate(props.value)) {
        day = props.value;
        value = formatDate(props.value, format, dayPickerProps.locale);
      } else {
        day = props.parseDate(props.value, format, dayPickerProps.locale);
      }
      if (day) {
        month = day;
      }
    } else {
      // Otherwise display the month coming from `dayPickerProps` or the current month
      month = dayPickerProps.initialMonth || dayPickerProps.month || new Date();
    }
    return {
      value,
      month,
      selectedDays: dayPickerProps.selectedDays,
    };
  }

  getInput() {
    return this.input;
  }

  getDayPicker() {
    return this.daypicker;
  }

  input = null;
  daypicker = null;
  clickedInside = false;
  clickTimeout = null;
  hideTimeout = null;

  /**
   * Update the component's state and fire the `onDayChange` event
   * passing the day's modifiers to it
   * @param {Date} day - Will be used for changing the month
   * @param {String} value - Input field value
   * @private
   */
  updateState(day, value, callback) {
    const { dayPickerProps, onDayChange } = this.props;
    this.setState({ month: day, value }, () => {
      if (callback) {
        callback();
      }
      if (!onDayChange) {
        return;
      }
      const modifiersObj = {
        disabled: dayPickerProps.disabledDays,
        selected: dayPickerProps.selectedDays,
        ...dayPickerProps.modifiers,
      };
      const modifiers = getModifiersForDay(day, modifiersObj).reduce(
        (obj, modifier) => {
          const newObj = { ...obj };
          newObj[modifier] = true;
          return newObj;
        },
        {}
      );
      onDayChange(day, modifiers);
    });
  }

  /**
   * Show the Day Picker overlay.
   *
   * @memberof DayPickerInput
   */
  showDayPicker() {
    this.setState({
      showOverlay: true,
    });
  }

  /**
   * Hide the Day Picker overlay
   *
   * @memberof DayPickerInput
   */
  hideDayPicker() {
    this.setState({
      showOverlay: false,
    });
  }

  hideAfterDayClick() {
    if (!this.props.hideOnDayClick) {
      return;
    }
    this.hideTimeout = setTimeout(() => this.hideDayPicker(), HIDE_TIMEOUT);
  }

  handleContainerMouseDown() {
    this.clickedInside = true;
    // The input's onBlur method is called from a queue right after the onMouseDown event.
    // setTimeout adds another callback in the queue, which is called after the onBlur event.
    this.clickTimeout = setTimeout(() => {
      this.clickedInside = false;
    }, 0);
  }

  handleInputClick(e) {
    this.showDayPicker();
    if (this.props.inputProps.onClick) {
      e.persist();
      this.props.inputProps.onClick(e);
    }
  }

  handleInputFocus(e) {
    this.showDayPicker();
    if (this.props.inputProps.onFocus) {
      e.persist();
      this.props.inputProps.onFocus(e);
    }
  }

  handleInputBlur(e) {
    this.setState({
      showOverlay: this.clickedInside,
    });
    // Force input's focus if blur event was caused by clicking inside the overlay
    if (this.clickedInside) {
      this.blurTimeout = setTimeout(() => this.input.focus(), 0);
    }
    if (this.props.inputProps.onBlur) {
      e.persist();
      this.props.inputProps.onBlur(e);
    }
  }

  handleInputChange(e) {
    const {
      dayPickerProps,
      format,
      inputProps,
      onDayChange,
      parseDate,
    } = this.props;
    if (inputProps.onChange) {
      e.persist();
      inputProps.onChange(e);
    }
    const { value } = e.target;
    if (value.trim() === '') {
      this.setState({ value });
      if (onDayChange) {
        onDayChange(undefined, {});
      }
      return;
    }
    const day = parseDate(value, format, dayPickerProps.locale);
    if (!day) {
      this.setState({ value });
      return;
    }
    this.updateState(day, value);
  }

  handleInputKeyUp(e) {
    // Hide the overlay if the ESC key is pressed
    if (e.keyCode === ESC) {
      this.setState({ showOverlay: false });
    }
    if (this.props.inputProps.onKeyUp) {
      e.persist();
      this.props.inputProps.onKeyUp(e);
    }
  }

  handleDayClick(day, modifiers, e) {
    const {
      clickUnselectsDay,
      dayPickerProps,
      onDayChange,
      formatDate,
      format,
    } = this.props;
    if (dayPickerProps.onDayClick) {
      dayPickerProps.onDayClick(day, modifiers, e);
    }

    // Do nothing if the day is disabled
    if (modifiers.disabled) {
      return;
    }

    // If the clicked day is already selected, remove the clicked day
    // from the selected days and empty the field value
    if (modifiers.selected && clickUnselectsDay) {
      let { selectedDays } = this.state;
      if (Array.isArray(selectedDays)) {
        selectedDays = selectedDays.slice(0);
        const selectedDayIdx = selectedDays.indexOf(day);
        selectedDays.splice(selectedDayIdx, 1);
      } else if (selectedDays) {
        selectedDays = null;
      }
      this.setState({ value: '', selectedDays }, this.hideAfterDayClick);
      if (onDayChange) {
        onDayChange(undefined, modifiers);
      }
      return;
    }

    const value = formatDate(day, format, dayPickerProps.locale);
    this.setState({ value, month: day }, () => {
      if (onDayChange) {
        onDayChange(day, modifiers);
      }
      this.hideAfterDayClick();
    });
  }

  renderOverlay() {
    const {
      classNames,
      dayPickerProps,
      parseDate,
      formatDate,
      format,
    } = this.props;
    const { selectedDays, value } = this.state;
    let selectedDay;
    if (!selectedDays && value) {
      const day = parseDate(value, format, dayPickerProps.locale);
      if (day) {
        selectedDay = day;
      }
    } else if (selectedDays) {
      selectedDay = selectedDays;
    }
    let onTodayButtonClick;
    if (dayPickerProps.todayButton) {
      // Set the current day when clicking the today button
      onTodayButtonClick = () =>
        this.updateState(
          new Date(),
          formatDate(new Date(), format, dayPickerProps.locale),
          this.hideAfterDayClick
        );
    }
    const Overlay = this.props.overlayComponent;
    return (
      <Overlay
        classNames={classNames}
        month={this.state.month}
        selectedDay={selectedDay}
        input={this.input}
      >
        <DayPicker
          ref={el => (this.daypicker = el)}
          onTodayButtonClick={onTodayButtonClick}
          {...dayPickerProps}
          month={this.state.month}
          selectedDays={selectedDay}
          onDayClick={this.handleDayClick}
          onMonthChange={month => this.setState({ month })}
        />
      </Overlay>
    );
  }

  render() {
    const Input = this.props.component;
    return (
      <div
        className={this.props.classNames.container}
        onMouseDown={this.handleContainerMouseDown}
      >
        <Input
          ref={el => (this.input = el)}
          placeholder={this.props.placeholder}
          {...this.props.inputProps}
          value={this.state.value}
          onChange={this.handleInputChange}
          onFocus={this.handleInputFocus}
          onBlur={this.handleInputBlur}
          onKeyUp={this.handleInputKeyUp}
          onClick={this.handleInputClick}
        />
        {this.state.showOverlay && this.renderOverlay()}
      </div>
    );
  }
}

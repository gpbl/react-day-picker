import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'; // eslint-disable-line import/no-extraneous-dependencies

import DayPicker from './DayPicker';
import { getModifiersForDay } from './ModifiersUtils';
import MomentLocaleUtils from './addons/MomentLocaleUtils';
import { ESC } from './keys';

// When clicking on a day cell, overlay will be hidden after this timeout
export const HIDE_TIMEOUT = 100;

export default class DayPickerInput extends React.Component {
  static propTypes = {
    value: PropTypes.string,

    format: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]),

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
    format: 'L',
    hideOnDayClick: true,
    clickUnselectsDay: false,
    component: 'input',
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
    this.state.showOverlay = false;

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
    const nextValue = nextProps.value;
    const currentValue = this.props.value;

    const monthChanged =
      (nextMonthFromProps && !monthFromProps) ||
      (nextMonthFromProps &&
        (nextMonthFromProps.getFullYear() !== monthFromProps.getFullYear() ||
          nextMonthFromProps.getMonth() !== monthFromProps.getMonth()));

    if (nextValue !== currentValue) {
      this.setState({ value: nextValue });
    }
    if (monthChanged) {
      this.setState({ month: nextMonthFromProps });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.clickTimeout);
    clearTimeout(this.hideTimeout);
    clearTimeout(this.blurTimeout);
  }

  getStateFromProps(props) {
    const { dayPickerProps, format, value } = props;
    let month;
    if (value) {
      // Display the month specified in the value prop
      const m = moment(value, format, true);
      if (m.isValid()) {
        month = m.toDate();
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
  updateState(day, value) {
    const { dayPickerProps, onDayChange } = this.props;
    this.setState({ month: day, value }, () => {
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
      onDayChange(moment(day), modifiers);
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
    if (this.props.onClick) {
      e.persist();
      this.props.onClick(e);
    }
  }

  handleInputFocus(e) {
    this.showDayPicker();
    if (this.props.onFocus) {
      e.persist();
      this.props.onFocus(e);
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
    if (this.props.onBlur) {
      e.persist();
      this.props.onBlur(e);
    }
  }

  handleInputChange(e) {
    const { onChange, onDayChange, format } = this.props;
    if (onChange) {
      e.persist();
      onChange(e);
    }
    const { value } = e.target;
    const m = moment(value, format, true);
    if (value.trim() === '') {
      this.setState({ value });
      if (onDayChange) {
        onDayChange(undefined, {});
      }
      return;
    }
    if (!m.isValid()) {
      this.setState({ value });
      return;
    }
    const day = m.toDate();
    this.updateState(day, value);
  }

  handleInputKeyUp(e) {
    // Hide the overlay if the ESC key is pressed
    this.setState({ showOverlay: e.keyCode !== ESC });
    if (this.props.onKeyUp) {
      e.persist();
      this.props.onKeyUp(e);
    }
  }

  handleDayClick(day, modifiers, e) {
    const {
      clickUnselectsDay,
      dayPickerProps,
      onDayChange,
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
      } else if (moment(selectedDays).isValid()) {
        selectedDays = null;
      }
      this.setState({ value: '', selectedDays }, this.hideAfterDayClick);
      if (onDayChange) {
        onDayChange(undefined, modifiers);
      }
      return;
    }

    const m = moment(day);
    const value = m.format(typeof format === 'string' ? format : format[0]);
    this.setState({ value, month: day }, () => {
      if (onDayChange) {
        onDayChange(m, modifiers);
      }
      this.hideAfterDayClick();
    });
  }

  renderOverlay() {
    const { format, classNames, dayPickerProps } = this.props;
    const { selectedDays, value } = this.state;
    let selectedDay;
    if (!selectedDays && value) {
      const m = moment(value, format, true);
      if (m.isValid()) {
        selectedDay = m.toDate();
      }
    } else if (selectedDays) {
      selectedDay = selectedDays;
    }

    let onTodayButtonClick;
    if (dayPickerProps.todayButton) {
      // Set the current day when clicking the today button
      onTodayButtonClick = () =>
        this.updateState(new Date(), moment().format(this.props.format));
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
          localeUtils={MomentLocaleUtils}
          fixedWeeks
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
    const {
      component,
      overlayComponent,
      dayPickerProps,
      format,
      clickUnselectsDay,
      hideOnDayClick,
      onDayChange,
      classNames,
      ...inputProps
    } = this.props;
    const Input = this.props.component;
    return (
      <div
        className={this.props.classNames.container}
        onMouseDown={this.handleContainerMouseDown}
      >
        <Input
          ref={el => (this.input = el)}
          {...inputProps}
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

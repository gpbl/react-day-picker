import React from 'react';
import PropTypes from 'prop-types';

import DayPicker from './DayPicker';
import { isSameMonth, isDate } from './DateUtils';
import { getModifiersForDay } from './ModifiersUtils';
import { ESC, TAB } from './keys';

// When clicking on a day cell, overlay will be hidden after this timeout
export const HIDE_TIMEOUT = 100;

/**
 * The default component used as Overlay.
 *
 * @param {Object} props
 */
export function OverlayComponent({
  input,
  selectedDay,
  month,
  children,
  classNames,
  ...props
}) {
  return (
    <div className={classNames.overlayWrapper} {...props}>
      <div className={classNames.overlay}>{children}</div>
    </div>
  );
}

OverlayComponent.propTypes = {
  input: PropTypes.any,
  selectedDay: PropTypes.any,
  month: PropTypes.instanceOf(Date),
  children: PropTypes.node,
  classNames: PropTypes.object,
};

/**
 * The default function used to format a Date to String, passed to the `format`
 * prop.
 * @param {Date} d
 * @return {String}
 */
export function defaultFormat(d) {
  if (isDate(d)) {
    const year = d.getFullYear();
    const month = `${d.getMonth() + 1}`;
    const day = `${d.getDate()}`;
    return `${year}-${month}-${day}`;
  }
  return '';
}

/**
 * The default function used to parse a String as Date, passed to the `parse`
 * prop.
 * @param {String} str
 * @return {Date}
 */
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
    String(year).length > 4 ||
    isNaN(month) ||
    isNaN(day) ||
    day <= 0 ||
    day > 31 ||
    month < 0 ||
    month >= 12
  ) {
    return undefined;
  }

  return new Date(year, month, day, 12, 0, 0, 0); // always set noon to avoid time zone issues
}

export default class DayPickerInput extends React.Component {
  input = null;

  daypicker = null;

  clickTimeout = null;

  hideTimeout = null;

  inputBlurTimeout = null;

  inputFocusTimeout = null;

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
    typedValue: PropTypes.string,

    showOverlay: PropTypes.bool,
    dayPickerProps: PropTypes.object,
    hideOnDayClick: PropTypes.bool,
    clickUnselectsDay: PropTypes.bool,
    keepFocus: PropTypes.bool,
    component: PropTypes.any,
    overlayComponent: PropTypes.any,

    style: PropTypes.object,
    classNames: PropTypes.shape({
      container: PropTypes.string,
      overlayWrapper: PropTypes.string,
      overlay: PropTypes.string.isRequired,
    }),

    onDayChange: PropTypes.func,
    onDayPickerHide: PropTypes.func,
    onDayPickerShow: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyUp: PropTypes.func,
  };

  static defaultProps = {
    dayPickerProps: {},
    value: '',
    typedValue: '',
    placeholder: 'YYYY-M-D',
    format: 'L',
    formatDate: defaultFormat,
    parseDate: defaultParse,
    showOverlay: false,
    hideOnDayClick: true,
    clickUnselectsDay: false,
    keepFocus: true,
    component: 'input',
    inputProps: {},
    overlayComponent: OverlayComponent,
    classNames: {
      container: 'DayPickerInput',
      overlayWrapper: 'DayPickerInput-OverlayWrapper',
      overlay: 'DayPickerInput-Overlay',
    },
  };

  constructor(props) {
    super(props);

    this.state = this.getInitialStateFromProps(props);
    this.state.showOverlay = props.showOverlay;

    this.hideAfterDayClick = this.hideAfterDayClick.bind(this);
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleOverlayFocus = this.handleOverlayFocus.bind(this);
    this.handleOverlayBlur = this.handleOverlayBlur.bind(this);
  }

  componentDidUpdate(prevProps) {
    const newState = {};

    // Current props
    const { value, formatDate, format, dayPickerProps } = this.props;

    // Update the input value if `value`, `dayPickerProps.locale` or `format`
    // props have changed
    if (
      value !== prevProps.value ||
      dayPickerProps.locale !== prevProps.dayPickerProps.locale ||
      format !== prevProps.format
    ) {
      if (isDate(value)) {
        newState.value = formatDate(value, format, dayPickerProps.locale);
      } else {
        newState.value = value;
      }
    }

    // Update the month if the months from props changed
    const prevMonth = prevProps.dayPickerProps.month;
    if (
      dayPickerProps.month &&
      dayPickerProps.month !== prevMonth &&
      !isSameMonth(dayPickerProps.month, prevMonth)
    ) {
      newState.month = dayPickerProps.month;
    }

    // Updated the selected days from props if they changed
    if (prevProps.dayPickerProps.selectedDays !== dayPickerProps.selectedDays) {
      newState.selectedDays = dayPickerProps.selectedDays;
    }

    if (Object.keys(newState).length > 0) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState(newState);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.clickTimeout);
    clearTimeout(this.hideTimeout);
    clearTimeout(this.inputFocusTimeout);
    clearTimeout(this.inputBlurTimeout);
    clearTimeout(this.overlayBlurTimeout);
  }

  getInitialMonthFromProps(props) {
    const { dayPickerProps, format } = props;
    let day;
    if (props.value) {
      if (isDate(props.value)) {
        day = props.value;
      } else {
        day = props.parseDate(props.value, format, dayPickerProps.locale);
      }
    }
    return (
      dayPickerProps.initialMonth || dayPickerProps.month || day || new Date()
    );
  }

  getInitialStateFromProps(props) {
    const { dayPickerProps, formatDate, format, typedValue } = props;
    let { value } = props;
    if (props.value && isDate(props.value)) {
      value = formatDate(props.value, format, dayPickerProps.locale);
    }

    return {
      value,
      typedValue,
      month: this.getInitialMonthFromProps(props),
      selectedDays: dayPickerProps.selectedDays,
    };
  }

  getInput() {
    return this.input;
  }

  getDayPicker() {
    return this.daypicker;
  }

  /**
   * Update the component's state and fire the `onDayChange` event passing the
   * day's modifiers to it.
   *
   * @param {Date} day - Will be used for changing the month
   * @param {String} value - Input field value
   * @private
   */
  updateState(day, value, callback) {
    const { dayPickerProps, onDayChange } = this.props;
    this.setState({ month: day, value, typedValue: '' }, () => {
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
        (obj, modifier) => ({
          ...obj,
          [modifier]: true,
        }),
        {}
      );
      onDayChange(day, modifiers, this);
    });
  }

  /**
   * Show the Day Picker overlay.
   *
   * @memberof DayPickerInput
   */
  showDayPicker() {
    const { parseDate, format, dayPickerProps } = this.props;
    const { value, showOverlay } = this.state;
    if (showOverlay) {
      return;
    }
    // Reset the current displayed month when showing the overlay
    const month = value
      ? parseDate(value, format, dayPickerProps.locale) // Use the month in the input field
      : this.getInitialMonthFromProps(this.props); // Restore the month from the props
    this.setState(
      state => ({
        showOverlay: true,
        month: month || state.month,
      }),
      () => {
        if (this.props.onDayPickerShow) this.props.onDayPickerShow();
      }
    );
  }

  /**
   * Hide the Day Picker overlay
   *
   * @memberof DayPickerInput
   */
  hideDayPicker() {
    if (this.state.showOverlay === false) {
      return;
    }
    this.setState({ showOverlay: false }, () => {
      if (this.props.onDayPickerHide) this.props.onDayPickerHide();
    });
  }

  hideAfterDayClick() {
    if (!this.props.hideOnDayClick) {
      return;
    }
    this.hideTimeout = setTimeout(() => {
      this.overlayHasFocus = false;
      this.hideDayPicker();
    }, HIDE_TIMEOUT);
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
    // Set `overlayHasFocus` after a timeout so the overlay can be hidden when
    // the input is blurred
    this.inputFocusTimeout = setTimeout(() => {
      this.overlayHasFocus = false;
    }, 2);
    if (this.props.inputProps.onFocus) {
      e.persist();
      this.props.inputProps.onFocus(e);
    }
  }

  // When the input is blurred, the overlay should disappear. However the input
  // is blurred also when the user interacts with the overlay (e.g. the overlay
  // get the focus by clicking it). In these cases, the overlay should not be
  // hidden. There are different approaches to avoid hiding the overlay when
  // this happens, but the only cross-browser hack we’ve found is to set all
  // these timeouts in code before changing `overlayHasFocus`.
  handleInputBlur(e) {
    this.inputBlurTimeout = setTimeout(() => {
      if (!this.overlayHasFocus) {
        this.hideDayPicker();
      }
    }, 1);
    if (this.props.inputProps.onBlur) {
      e.persist();
      this.props.inputProps.onBlur(e);
    }
  }

  handleOverlayFocus(e) {
    e.preventDefault();
    this.overlayHasFocus = true;
    if (
      !this.props.keepFocus ||
      !this.input ||
      typeof this.input.focus !== 'function'
    ) {
      return;
    }
    this.input.focus();
  }

  handleOverlayBlur() {
    // We need to set a timeout otherwise IE11 will hide the overlay when
    // focusing it
    this.overlayBlurTimeout = setTimeout(() => {
      this.overlayHasFocus = false;
    }, 3);
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
    const day = parseDate(value, format, dayPickerProps.locale);
    if (value.trim() === '' || !day) {
      this.setState({ value, typedValue: value });
      if (onDayChange) onDayChange(value, {}, this);
      return;
    }
    this.updateState(day, value);
  }

  handleInputKeyDown(e) {
    if (e.keyCode === TAB) {
      this.hideDayPicker();
    } else {
      this.showDayPicker();
    }
    if (this.props.inputProps.onKeyDown) {
      e.persist();
      this.props.inputProps.onKeyDown(e);
    }
  }

  handleInputKeyUp(e) {
    if (e.keyCode === ESC) {
      this.hideDayPicker();
    } else {
      this.showDayPicker();
    }
    if (this.props.inputProps.onKeyUp) {
      e.persist();
      this.props.inputProps.onKeyUp(e);
    }
  }

  handleMonthChange(month) {
    this.setState({ month }, () => {
      if (
        this.props.dayPickerProps &&
        this.props.dayPickerProps.onMonthChange
      ) {
        this.props.dayPickerProps.onMonthChange(month);
      }
    });
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
    if (
      modifiers.disabled ||
      (dayPickerProps &&
        dayPickerProps.classNames &&
        modifiers[dayPickerProps.classNames.disabled])
    ) {
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

      this.setState(
        { value: '', typedValue: '', selectedDays },
        this.hideAfterDayClick
      );

      if (onDayChange) {
        onDayChange(undefined, modifiers, this);
      }
      return;
    }

    const value = formatDate(day, format, dayPickerProps.locale);
    this.setState({ value, typedValue: '', month: day }, () => {
      if (onDayChange) {
        onDayChange(day, modifiers, this);
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
        tabIndex={0} // tabIndex is necessary to catch focus/blur events on Safari
        onFocus={this.handleOverlayFocus}
        onBlur={this.handleOverlayBlur}
      >
        <DayPicker
          ref={el => (this.daypicker = el)}
          onTodayButtonClick={onTodayButtonClick}
          {...dayPickerProps}
          month={this.state.month}
          selectedDays={selectedDay}
          onDayClick={this.handleDayClick}
          onMonthChange={this.handleMonthChange}
        />
      </Overlay>
    );
  }

  render() {
    const Input = this.props.component;
    const { inputProps } = this.props;
    return (
      <div className={this.props.classNames.container} style={this.props.style}>
        <Input
          ref={el => (this.input = el)}
          placeholder={this.props.placeholder}
          value={this.state.value}
          {...inputProps}
          onChange={this.handleInputChange}
          onFocus={this.handleInputFocus}
          onBlur={this.handleInputBlur}
          onKeyDown={this.handleInputKeyDown}
          onKeyUp={this.handleInputKeyUp}
          onClick={!inputProps.disabled ? this.handleInputClick : undefined}
        />
        {this.state.showOverlay && this.renderOverlay()}
      </div>
    );
  }
}

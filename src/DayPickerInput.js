import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'; // eslint-disable-line import/no-extraneous-dependencies

import DayPicker from './DayPicker';
import { getModifiersForDay } from './ModifiersUtils';
import MomentLocaleUtils from './addons/MomentLocaleUtils';
import { ESC } from './keys';

export const HIDE_TIMEOUT = 100;

function getStateFromProps(props) {
  const { dayPickerProps, format, value } = props;
  let month;
  if (value) {
    const m = moment(value, format, true);
    if (m.isValid()) {
      month = m.toDate();
    }
  } else {
    month = dayPickerProps.initialMonth || dayPickerProps.month || new Date();
  }

  return {
    value,
    month,
    selectedDays: dayPickerProps.selectedDays,
  };
}

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
    const { dayPickerProps, value } = this.props;
    const { dayPickerProps: nextDayPickerProps, value: nextValue } = nextProps;

    const hasDifferentValue = nextValue !== value;

    const willUpdateDayPickerMonth =
      nextDayPickerProps.month && dayPickerProps.month;

    const newMonthProp = nextDayPickerProps.month && !dayPickerProps.month;

    const shouldDisplayAnotherMonth =
      newMonthProp ||
      (willUpdateDayPickerMonth &&
        (nextDayPickerProps.month.getFullYear() !==
          dayPickerProps.month.getFullYear() ||
          nextDayPickerProps.month.getMonth() !==
            dayPickerProps.month.getMonth()));

    if (hasDifferentValue && !shouldDisplayAnotherMonth) {
      this.setState(getStateFromProps(nextProps));
    } else if (shouldDisplayAnotherMonth) {
      this.setState({ month: nextDayPickerProps.month });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.clickTimeout);
    clearTimeout(this.hideTimeout);
    clearTimeout(this.blurTimeout);
  }

  input = null;
  daypicker = null;
  clickedInside = false;
  clickTimeout = null;
  hideTimeout = null;

  updateValue(newValue) {
    const { format, dayPickerProps, onDayChange } = this.props;
    let value = newValue;
    let day = value;
    let m;
    if (typeof value === 'string') {
      m = moment(value, format, true);
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
      day = m.toDate();
    } else {
      m = moment(day);
      value = m.format(format);
    }
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
      onDayChange(m, modifiers);
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

    // Force input's focus if blur event was caused by clicking inside the overlay
    if (this.clickedInside) {
      this.blurTimeout = setTimeout(() => this.input.focus(), 0);
    }

    if (this.props.onBlur) {
      e.persist();
      this.props.onBlur(e);
    }
  };

  handleChange = e => {
    if (this.props.onChange) {
      e.persist();
      this.props.onChange(e);
    }
    this.updateValue(e.target.value);
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
      let { selectedDays } = this.state;
      if (Array.isArray(selectedDays)) {
        selectedDays = selectedDays.slice(0);
        const selectedDayIdx = selectedDays.indexOf(day);
        selectedDays.splice(selectedDayIdx, 1);
      } else if (moment(selectedDays).isValid()) {
        selectedDays = null;
      }
      this.setState({ value: '', selectedDays }, this.hideAfterDayClick);
      if (this.props.onDayChange) {
        this.props.onDayChange(undefined, modifiers);
      }
      return;
    }

    const { format } = this.props;
    const m = moment(day);
    this.setState(
      {
        value: m.format(typeof format === 'string' ? format : format[0]),
        month: day,
      },
      () => {
        if (this.props.onDayChange) {
          this.props.onDayChange(m, modifiers);
        }
        this.hideAfterDayClick();
      }
    );
  };

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
      onTodayButtonClick = () => this.updateValue(new Date());
    }

    return (
      <div className={classNames.overlayWrapper}>
        <div className={classNames.overlay}>
          <DayPicker
            ref={el => (this.daypicker = el)}
            localeUtils={MomentLocaleUtils}
            fixedWeeks
            onTodayButtonClick={onTodayButtonClick}
            {...dayPickerProps}
            month={this.state.month}
            selectedDays={selectedDay}
            onDayClick={this.handleDayClick}
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

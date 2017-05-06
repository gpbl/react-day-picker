import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'; // eslint-disable-line import/no-extraneous-dependencies

import DayPicker from './DayPicker';
import { dayMatchesModifier } from './ModifiersUtils';

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

    onDayChange: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
  };

  static defaultProps = {
    dayPickerProps: {},
    value: '',
    format: 'L',
  };

  constructor(props) {
    super(props);
    this.state = this.getStateFromProps(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState(this.getStateFromProps(nextProps));
    }
  }

  getStateFromProps(props) {
    return {
      value: props.value,
      month: props.value
        ? moment(props.value, props.format).toDate()
        : props.dayPickerProps.initialMonth,
    };
  }

  showCurrentDate = () => {
    this.daypicker.showMonth(this.state.month);
  };

  handleFocus = e => {
    this.daypicker.showMonth(this.state.month);
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  };

  handleChange = e => {
    const { value } = e.target;
    const { format, dayPickerProps, onDayChange, onChange } = this.props;
    const m = moment(value, format, true);
    if (m.isValid()) {
      this.setState(
        {
          month: m.toDate(),
          value,
        },
        this.showCurrentDate
      );

      if (onDayChange) {
        let isDisabled = false;
        if (dayPickerProps.disabledDays) {
          isDisabled = dayMatchesModifier(
            m.toDate(),
            dayPickerProps.disabledDays
          );
        }
        if (!isDisabled) {
          this.props.onDayChange(m);
        }
      }
    } else {
      this.setState({ value }, this.showCurrentDate);
      if (onDayChange) {
        onDayChange(undefined);
      }
    }

    if (onChange) {
      onChange(e);
    }
  };

  handleDayClick = (day, modifiers, e) => {
    if (this.props.dayPickerProps.onDayClick) {
      this.props.dayPickerProps.onDayClick(day, modifiers, e);
    }
    if (modifiers.disabled) {
      return;
    }
    if (modifiers.selected) {
      this.setState({
        value: '',
      });
      if (this.props.onDayChange) {
        this.props.onDayChange();
      }
      return;
    }
    const m = moment(day);
    this.setState({
      value: m.format(this.props.format),
      month: day,
    });
    if (this.props.onDayChange) {
      this.props.onDayChange(m);
    }
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
    delete inputProps.format;
    delete inputProps.onDayChange;
    delete inputProps.dayPickerProps;

    return (
      <div>
        <p>
          <input
            {...inputProps}
            value={this.state.value}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
          />
        </p>
        <DayPicker
          ref={el => (this.daypicker = el)}
          {...this.props.dayPickerProps}
          initialMonth={this.state.month}
          selectedDays={selectedDay}
          onDayClick={this.handleDayClick}
        />
      </div>
    );
  }
}

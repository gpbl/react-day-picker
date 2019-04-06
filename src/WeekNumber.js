import React, { Component } from 'react';
import PropTypes from 'prop-types';
import defaultClassNames from './classNames';
import { ENTER } from './keys';

export default class WeekNumber extends Component {
  static propTypes = {
    className: PropTypes.string,
    classNames: PropTypes.shape({
      weekNumber: PropTypes.string.isRequired,
    }),
    month: PropTypes.instanceOf(Date),
    onWeekClick: PropTypes.func,
    renderWeek: PropTypes.func,
    week: PropTypes.array,
    weekNumber: PropTypes.number,
  };

  static defaultProps = {
    classNames: defaultClassNames,
  };

  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }

  render() {
    const {
      className,
      classNames,
      month,
      onWeekClick,
      renderWeek,
      week,
      weekNumber,
    } = this.props;

    return (
      <div
        className={className || classNames.weekNumber}
        tabIndex={onWeekClick ? 0 : -1}
        role="gridcell"
        onClick={
          onWeekClick ? e => onWeekClick(weekNumber, week, e) : undefined
        }
        onKeyUp={
          onWeekClick
            ? e => e.keyCode === ENTER && onWeekClick(weekNumber, week, e)
            : undefined
        }
      >
        {renderWeek(weekNumber, week, month)}
      </div>
    );
  }
}

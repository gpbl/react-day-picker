import React from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class Example extends React.Component {
  state = {
    hoverRange: null,
    selectedDays: [],
  };

  daysFromWeek = weekStart => [
    weekStart,
    moment(weekStart)
      .add(1, 'days')
      .toDate(),
    moment(weekStart)
      .add(2, 'days')
      .toDate(),
    moment(weekStart)
      .add(3, 'days')
      .toDate(),
    moment(weekStart)
      .add(4, 'days')
      .toDate(),
    moment(weekStart)
      .add(5, 'days')
      .toDate(),
    moment(weekStart)
      .add(6, 'days')
      .toDate(),
  ];

  weekFromDay = date => ({
    from: moment(date)
      .startOf('week')
      .toDate(),
    to: moment(date)
      .endOf('week')
      .toDate(),
  });

  handelDayChange = date => {
    this.setState(prevState => ({
      ...prevState,
      selectedDays: this.daysFromWeek(this.weekFromDay(date).from),
    }));
  };

  handleDayEnter = date => {
    this.setState(prevState => ({
      ...prevState,
      hoverRange: this.weekFromDay(date),
    }));
  };

  handleDayLeave = () => {
    this.setState(prevState => ({
      ...prevState,
      hoverRange: null,
    }));
  };

  render() {
    const { hoverRange, selectedDays } = this.state;

    const daysAreSelected = selectedDays.length > 0;

    const modifiers = {
      hoverRange,
      selectedRange: daysAreSelected && {
        from: selectedDays[0],
        to: selectedDays[6],
      },
      hoverRangeStart: hoverRange && hoverRange.from,
      hoverRangeEnd: hoverRange && hoverRange.to,
      selectedRangeStart: daysAreSelected && selectedDays[0],
      selectedRangeEnd: daysAreSelected && selectedDays[6],
    };

    return (
      <div>
        <DayPicker
          selectedDays={selectedDays}
          onDayClick={this.handelDayChange}
          onDayMouseEnter={this.handleDayEnter}
          onDayMouseLeave={this.handleDayLeave}
          modifiers={modifiers}
        />
        <Helmet>
          <style>{`
            .DayPicker-Day--hoverRange {
              background-color: rgb(209, 238, 248) !important;
            }

            .DayPicker-Day--selectedRange {
              background-color: lightblue !important;
            }

            .DayPicker-Day--hoverRangeStart,
            .DayPicker-Day--selectedRangeStart {
              border-top-left-radius: 5px;
              border-bottom-left-radius: 5px;
            }

            .DayPicker-Day--hoverRangeEnd,
            .DayPicker-Day--selectedRangeEnd {
              border-top-right-radius: 5px;
              border-bottom-right-radius: 5px;
            }

            .DayPicker-Day--selectedRangeStart,
            .DayPicker-Day--selectedRangeEnd {
              background-color: lightskyblue !important;
            }

            .DayPicker-Day--selectedRange.DayPicker-Day--selected,
            .DayPicker-Day--hoverRange.DayPicker-Day--selected {
              border-radius: 0 !important;
              color: black !important;
            }

            .DayPicker-Day--hoverRange:hover {
              border-radius: 0 !important;
            }
          `}</style>
        </Helmet>
      </div>
    );
  }
}

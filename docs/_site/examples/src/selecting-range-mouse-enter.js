const initialState = {
  from: null,
  to: null,
  enteredTo: null, // Keep track of the last day for mouseEnter.
};

function isSelectingFirstDay(from, to, day) {
  const firstDayIsNotSelected = !from;
  const selectedDayIsBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
  const rangeIsSelected = from && to;
  return (
    firstDayIsNotSelected || selectedDayIsBeforeFirstDay || rangeIsSelected
  );
}

export default class Example extends React.Component {
  state = initialState;

  handleDayClick = day => {
    const { from, to } = this.state;

    if (from && to && day >= from && day <= to) {
      this.reset();
      return;
    }

    if (isSelectingFirstDay(from, to, day)) {
      this.setState({
        from: day,
        to: null,
        enteredTo: null,
      });
    } else {
      this.setState({
        to: day,
        enteredTo: day,
      });
    }
  };

  handleDayMouseEnter = day => {
    const { from, to } = this.state;

    if (!isSelectingFirstDay(from, to, day)) {
      this.setState({
        enteredTo: day,
      });
    }
  };

  reset = () => {
    this.setState(initialState);
  };

  render() {
    const { from, to, enteredTo } = this.state;
    const modifiers = { start: from, end: enteredTo };
    const disabledDays = { before: this.state.from };
    const selectedDays = [from, { from, to: enteredTo }];
    return (
      <div>
        {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
        {from && !to && <p>Please select the <strong>last day</strong>.</p>}
        {from &&
          to &&
          <p>
            You chose from
            {' '}
            {moment(from).format('L')}
            {' '}
            to
            {' '}
            {moment(enteredTo).format('L')}
            .
            {' '}
            <a onClick={this.reset}>Reset</a>
          </p>}
        <DayPicker
          className="Range"
          numberOfMonths={2}
          fromMonth={from}
          fixedWeeks
          selectedDays={selectedDays}
          disabledDays={disabledDays}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
          onDayMouseEnter={this.handleDayMouseEnter}
        />
      </div>
    );
  }
}

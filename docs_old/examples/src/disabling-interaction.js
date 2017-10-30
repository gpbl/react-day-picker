export default class Example extends React.Component {
  state = {
    selectedDay: null,
  };
  handleDayClick = (day, { disabled, selected }) => {
    if (disabled) {
      return;
    }
    this.setState({
      selectedDay: selected ? null : day,
    });
  };
  render() {
    const disabledDays = {
      daysOfWeek: [0, 6],
    };
    return (
      <div>
        <DayPicker
          enableOutsideDays
          selectedDays={this.state.selectedDay}
          disabledDays={disabledDays}
          onDayClick={this.handleDayClick}
        />
        <p>
          {this.state.selectedDay
            ? this.state.selectedDay.toLocaleDateString()
            : 'Please select a day 👻'}
        </p>
      </div>
    );
  }
}

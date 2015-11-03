var React = require("react");
var DayPicker = require("react-day-picker");
var { isSameDay } = require("../utils/DateUtils");

require("react-day-picker/lib/style.css");
require("../style/SelectableDayExample.scss");

module.exports = React.createClass({

  displayName: "SelectableDayExample",

  getInitialState() {
    return {
      selectedDay: new Date()
    };
  },

  handleDayClick(e, day) {
    this.setState({
      selectedDay: day
    });
  },

  render() {
    var { selectedDay } = this.state;

    // Add the `selected` modifier to the cell corresponding to the day that
    // has been clicked. The cell will have a `DayPicker-Day--selected` CSS class.
    var modifiers = {
      "selected": (day) => isSameDay(selectedDay, day)
    };

    return (
      <div className="SelectableDayExample">
        <DayPicker
          numberOfMonths={2}
          enableOutsideDays={true}
          modifiers={ modifiers }
          onDayClick={ this.handleDayClick }
        />
        <p>
          Selected: { selectedDay.toLocaleDateString() }
        </p>
      </div>
    );
  }


});

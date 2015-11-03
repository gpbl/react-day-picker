var React = require("react");
var DayPicker = require("react-day-picker");

require("react-day-picker/lib/style.css");

module.exports = React.createClass({

  displayName: "SimpleCalendarExample",

  render() {
    return <DayPicker />;
  }

});

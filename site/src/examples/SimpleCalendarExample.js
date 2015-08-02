var React = require("react");
var DayPicker = require("react-day-picker");

require("../style/DayPicker.scss");

module.exports = React.createClass({

  displayName: "SimpleCalendarExample",

  render() {
    return <DayPicker />;
  }

});

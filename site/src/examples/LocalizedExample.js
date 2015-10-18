var React = require("react");
var DayPicker = require("react-day-picker");

// Use a custom util to format the calendar values according to the
// selected locale. This one is based on moment.js
var { LocaleUtils } = require("react-day-picker/lib/addons");

// Make sure moment.js has the required locale data
require("moment/locale/ja");
require("moment/locale/ar");
require("moment/locale/it");

require("../style/DayPicker.scss");

module.exports = React.createClass({

  displayName: "LocalizedExample",

  getInitialState() {
    return {
      locale: "en"
    };
  },

  switchLocale(e) {
    var locale = e.target.value || "en";
    this.setState({
      locale: locale
    });
  },

  render() {
    var { locale } = this.state;

    var modifiers = {
      "sunday": (day) => day.getDay() === 0
    };

    return (
      <div>
        <p>
          <select onChange={ this.switchLocale }>
            <option value="en">English</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="ar">Arabic</option>
          </select>
        </p>
        <DayPicker locale={ locale } localeUtils={ LocaleUtils } modifiers={ modifiers } />
      </div>
    );
  }

});

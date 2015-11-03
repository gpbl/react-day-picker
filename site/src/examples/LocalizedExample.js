import React from "react";
import DayPicker from "react-day-picker";

// Use a custom util to format the calendar values according to the
// selected locale. This one is based on moment.js
import MomentUtils from "react-day-picker/MomentUtils";

// Make sure moment.js has the required locale data
import "moment/locale/ja";
import "moment/locale/ar";
import "moment/locale/it";

import "react-day-picker/lib/style.css";

export default class Example extends React.Component {

  static displayName = "LocalizedExample"

  state = {
    locale: "en"
  }

  switchLocale(e) {
    const locale = e.target.value || "en";
    this.setState({ locale });
  }

  render() {
    const { locale } = this.state;

    const modifiers = {
      sunday: day => day.getDay() === 0
    };

    return (
      <div>
        <p>
          <select onChange={ this.switchLocale.bind(this) }>
            <option value="en">English</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="ar">Arabic</option>
          </select>
        </p>
        <DayPicker locale={ locale } localeUtils={ MomentUtils } modifiers={ modifiers } />
      </div>
    );
  }

}

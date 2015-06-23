import React from "react";
import DayPicker from "react-day-picker";

// Use a custom util to format the calendar values according to the
// selected locale. This one is based on moment.js
import { LocaleUtils } from "react-day-picker/lib/addons";

// Make sure moment.js has the required locale data
import "moment/locale/ja";
import "moment/locale/ar";
import "moment/locale/it";

import "../style/DayPicker.scss";

class LocalizedExample extends React.Component {

  static displayName = "LocalizedExample"

  constructor() {
    super();
    this.state = {
      locale: "en"
    };
  }

  render() {
    const { locale } = this.state;

    const modifiers = {
      "sunday": (day) => day.getDay() === 0
    };

    return (
      <div>
        <p>
          <select onChange={ ::this.switchLocale }>
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

  switchLocale(e) {
    const locale = e.target.value || "en";
    this.setState({
      locale: locale
    });
  }
}

export default LocalizedExample;

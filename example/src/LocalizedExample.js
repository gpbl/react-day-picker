import React from "react";
import DayPicker from "react-day-picker";

import "./style/DayPicker.scss";

import "moment/locale/ja";
import "moment/locale/ar";
import "moment/locale/it";


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
      sunday: (day) => day.getDay() === 0
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
        <DayPicker locale={ locale } modifiers={ modifiers } />
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

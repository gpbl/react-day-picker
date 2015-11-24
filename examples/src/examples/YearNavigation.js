import React from "react";
import DayPicker from "react-day-picker";

import "react-day-picker/lib/style.css";

function YearMonthForm({ date, localeUtils, onChange }) {

  const months = localeUtils.getMonths();

  const currentYear = (new Date()).getFullYear();
  const years = [];
  for (let i = currentYear; i < currentYear + 10; i++) {
    years.push(i);
  }

  const handleChange = function(e) {
    const { year, month } = e.target.form;
    onChange(new Date(year.value, month.value));
  }

  return (
    <form className="DayPicker-Caption">
      <select name="month" onChange={ handleChange } value={ date.getMonth() }>
        { months.map((month, i) =>
          <option key={ i } value={ i }>
            { month }
          </option>)
        }
      </select>
      <select name="year" onChange={ handleChange } value={ date.getFullYear() }>
        { years.map((year, i) =>
          <option key={ i } value={ year }>
            { year }
          </option>)
        }
      </select>
    </form>
  )
}

export default class YearNavigation extends React.Component {

  state = {
    initialMonth: new Date()
  }

  render() {
    return (
      <div className="YearNavigation">
        <DayPicker
          initialMonth={ this.state.initialMonth }
          captionElement={
            <YearMonthForm onChange={ initialMonth => this.setState({ initialMonth }) } />
          }
        />
      </div>
    );
  }

}

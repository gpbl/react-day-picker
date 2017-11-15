import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

// Include the locale utils designed for moment
import MomentLocaleUtils from 'react-day-picker/moment';

// Make sure moment.js has the required locale data
import 'moment/locale/ja';
import 'moment/locale/ar';
import 'moment/locale/it';

export default class LocalizedExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.state = {
      locale: 'en',
    };
  }
  handleSelectChange(e) {
    this.setState({
      locale: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <p>
          <select onChange={this.handleSelectChange}>
            <option value="en">English</option>
            <option value="ja">Japanese</option>
            <option value="ar">Arabic</option>
            <option value="it">Italian</option>
          </select>
        </p>
        <DayPicker localeUtils={MomentLocaleUtils} locale={this.state.locale} />
      </div>
    );
  }
}

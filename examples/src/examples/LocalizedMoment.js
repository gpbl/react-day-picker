import React from 'react';
// Make sure moment.js has the required locale data
import 'moment/locale/ja';
import 'moment/locale/ar';
import 'moment/locale/it';

// Use a custom util to format the calendar values according to the
// selected locale. This one is based on moment.js
import MomentLocaleUtils from 'react-day-picker/moment';
import DayPicker from '../../../src';


import '../../../src/style.css';

export default class LocalizedMoment extends React.Component {
  constructor(props) {
    super(props);
    this.switchLocale = this.switchLocale.bind(this);
  }
  state = {
    locale: 'en',
  };
  switchLocale(e) {
    const locale = e.target.value || 'en';
    this.setState({ locale });
  }
  render() {
    const { locale } = this.state;
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
        <DayPicker
          dir={ locale === 'ar' ? 'rtl' : 'ltr' }
          locale={ locale }
          localeUtils={ MomentLocaleUtils }
          modifiers={ { sunday: day => day.getDay() === 0 } }
        />
      </div>
    );
  }
}

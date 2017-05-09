import React from 'react';

// Make sure moment.js has the required locale data
import 'moment/locale/ja';
import 'moment/locale/ar';
import 'moment/locale/it';

import DayPicker from '../../../src';

// Use a custom util to format the calendar values according to the
// selected locale. This one is based on moment.js
import MomentLocaleUtils from '../../../src/addons/MomentLocaleUtils';

import '../../../src/style.css';

// Translate aria-labels
const LABELS = {
  it: { nextMonth: 'Prossimo mese', previousMonth: 'Mese precedente' },
  ja: { nextMonth: '来月', previousMonth: '前月' },
  ar: { nextMonth: 'الشهر المقبل', previousMonth: 'الشهر السابق' },
};

export default class LocalizedMoment extends React.Component {
  state = {
    locale: 'en',
  };
  switchLocale = e => {
    const locale = e.target.value || 'en';
    this.setState({ locale });
  };
  render() {
    const { locale } = this.state;
    return (
      <div>
        <p>
          <select value={locale} onChange={this.switchLocale}>
            <option value="en">English</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="ar">Arabic</option>
          </select>
        </p>
        <DayPicker
          dir={locale === 'ar' ? 'rtl' : 'ltr'}
          labels={LABELS[locale]}
          locale={locale}
          localeUtils={MomentLocaleUtils}
          disabledDays={{ daysOfWeek: [0] }}
          renderDay={day => day.getDate().toLocaleString(locale)}
        />
      </div>
    );
  }
}

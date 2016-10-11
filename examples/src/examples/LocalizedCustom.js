import React from 'react';
import DayPicker from '../../../src';

const weekdaysLong = {
  ru: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
};
const weekdaysShort = {
  // Idem
  ru: ['Во', 'По', 'Вт', 'Ср', 'Че', 'Пя', 'Су'],
  en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
};
const months = {
  ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'ноябрь', 'Декабрь'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};
const firstDayOfWeek = {
  ru: 1,
  en: 0,
};

const localeUtils = {
  formatDay: (d, locale = 'en') =>
    `${weekdaysLong[locale][d.getDay()]}, ${d.getDate()} ${months[locale][d.getMonth()]} ${d.getFullYear()}`,
  formatWeekdayShort: (index, locale = 'en') => weekdaysShort[locale][index],
  formatWeekdayLong: (index, locale = 'en') => weekdaysLong[locale][index],
  getFirstDayOfWeek: locale => firstDayOfWeek[locale],
  getMonths: locale => months[locale],
  formatMonthTitle: (d, locale) => `${months[locale][d.getMonth()]} ${d.getFullYear()}`,
};

export default class LocalizedCustom extends React.Component {

  constructor(props) {
    super(props);
    this.switchLocale = this.switchLocale.bind(this);
  }

  state = {
    locale: 'ru',
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
            <option value="ru">Русский (Russian)</option>
            <option value="en">English</option>
          </select>
        </p>
        <DayPicker
          locale={ locale }
          localeUtils={ localeUtils }
          modifiers={ { sunday: day => day.getDay() === 0 } }
        />
      </div>
    );
  }

}

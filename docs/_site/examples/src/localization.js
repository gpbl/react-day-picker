const WEEKDAYS_LONG = {
  ru: [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ],
  it: [
    'Domenica',
    'Lunedì',
    'Martedì',
    'Mercoledì',
    'Giovedì',
    'Venerdì',
    'Sabato',
  ],
};
const WEEKDAYS_SHORT = {
  ru: ['Во', 'По', 'Вт', 'Ср', 'Че', 'Пя', 'Су'],
  it: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
};
const MONTHS = {
  ru: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'ноябрь',
    'Декабрь',
  ],
  it: [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre',
  ],
};
const FIRST_DAY_OF_WEEK = {
  ru: 1,
  it: 1,
};

// Translate aria-labels
const LABELS = {
  ru: { nextMonth: 'следующий месяц', previousMonth: 'предыдущий месяц' },
  it: { nextMonth: 'Prossimo mese', previousMonth: 'Mese precedente' },
};

export default class Example extends React.Component {
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
            <option value="ru">Русский (Russian)</option>
            <option value="it">Italian</option>
          </select>
        </p>
        <DayPicker
          locale={locale}
          months={MONTHS[locale]}
          weekdaysLong={WEEKDAYS_LONG[locale]}
          weekdaysShort={WEEKDAYS_SHORT[locale]}
          firstDayOfWeek={FIRST_DAY_OF_WEEK[locale]}
          labels={LABELS[locale]}
        />
      </div>
    );
  }
}

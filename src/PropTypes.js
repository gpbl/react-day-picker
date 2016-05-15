import { PropTypes } from 'react';

export default {
  localeUtils: PropTypes.shape({
    formatMonthTitle: PropTypes.func,
    formatWeekdayShort: PropTypes.func,
    formatWeekdayLong: PropTypes.func,
    getFirstDayOfWeek: PropTypes.func,
  }),
};

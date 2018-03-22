import PropTypes from 'prop-types';

const PrimitiveTypes = {
  localeUtils: PropTypes.shape({
    formatMonthTitle: PropTypes.func,
    formatWeekdayShort: PropTypes.func,
    formatWeekdayLong: PropTypes.func,
    getFirstDayOfWeek: PropTypes.func,
  }),
  range: PropTypes.shape({
    from: PropTypes.instanceOf(Date),
    to: PropTypes.instanceOf(Date),
  }),
  after: PropTypes.shape({
    after: PropTypes.instanceOf(Date),
  }),
  before: PropTypes.shape({
    before: PropTypes.instanceOf(Date),
  }),
};

export const ModifierPropType = PropTypes.oneOfType([
  PrimitiveTypes.after,
  PrimitiveTypes.before,
  PrimitiveTypes.range,
  PropTypes.func,
  PropTypes.array,
]);

export const RoleTypesShape = {
  caption: PropTypes.string,
  month: PropTypes.string,
  body: PropTypes.string,
  weeknumber: PropTypes.string,
  week: PropTypes.string,
  weekday: PropTypes.string,
  weekdays: PropTypes.string,
  weekdaysRow: PropTypes.string,
  day: PropTypes.string,
  disabledDay: PropTypes.string,
};

export const defaultRoles = {
  caption: 'heading',
  weeknumber: 'gridrow',
  weekdays: 'rowgroup',
  month: 'grid',
  body: 'rowgroup',
  week: 'row',
  day: 'gridcell',
  disabledDay: 'gridcell',
};

export default PrimitiveTypes;

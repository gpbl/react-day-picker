import { getMonthsAndDates } from './getMonthsAndDates';

const today = new Date(2023, 9, 19);

jest.setSystemTime(today);

const firstMonth = today;
const toDate = undefined;

describe('when using the default options', () => {
  const calendar = getMonthsAndDates(firstMonth, toDate, {
    numberOfMonths: 1,
    reverseMonths: false,
    ISOWeek: false,
    fixedWeeks: false,
    locale: undefined,
    weekStartsOn: undefined,
    firstWeekContainsDate: undefined
  });
  test('should match the snapshot', () => {
    expect(calendar).toMatchSnapshot();
  });
  test('should return 1 month', () => {
    expect(calendar.months).toHaveLength(1);
  });
  test('should return 42 dates', () => {
    expect(calendar.dates).toHaveLength(35);
  });
  test('the first date should be sunday', () => {
    expect(calendar.dates[0].getDay()).toBe(0);
  });
  test('the last date should be sunday', () => {
    expect(calendar.dates[0].getDay()).toBe(0);
  });
});

describe('when using fixed weeks', () => {
  const calendar = getMonthsAndDates(today, toDate, {
    numberOfMonths: 1,
    reverseMonths: false,
    ISOWeek: false,
    fixedWeeks: true,
    locale: undefined,
    weekStartsOn: undefined,
    firstWeekContainsDate: undefined
  });
  test('should return 42 dates', () => {
    expect(calendar.dates).toHaveLength(42);
  });
  test('dates should match the snapshot', () => {
    expect(calendar.dates).toMatchSnapshot();
  });
});

describe('when using ISO week dates', () => {
  const calendar = getMonthsAndDates(today, toDate, {
    numberOfMonths: 1,
    reverseMonths: false,
    ISOWeek: true,
    fixedWeeks: false,
    locale: undefined,
    weekStartsOn: undefined,
    firstWeekContainsDate: undefined
  });

  test('should return 42 dates', () => {
    expect(calendar.dates).toHaveLength(42);
  });
  test('dates should match the snapshot', () => {
    expect(calendar).toMatchSnapshot();
  });
  test('first week number should be 39', () => {
    expect(calendar.months[0].weeks[0].weekNumber).toBe(39);
  });
  test('last day of the first week should be 1', () => {
    expect(calendar.months[0].weeks[0].days[6].date.getDate()).toBe(1);
  });
});

import { defaultProps } from '../../DayPicker';
import { getPrevNextMonths } from './getPrevNextMonths';

describe('getPrevNextMonths', () => {
  it('return next and previous months with default props', () => {
    const [prevMonth, nextMonth] = getPrevNextMonths(defaultProps);
    expect(nextMonth).toBeDefined();
    expect(prevMonth).toBeDefined();
  });
  it('defaults to current month', () => {
    const [prevMonth, nextMonth] = getPrevNextMonths({
      ...defaultProps
    });
    expect(nextMonth).toBeDefined();
    expect(prevMonth).toBeDefined();
  });
  it('return next and previous months for the specified month', () => {
    const [prevMonth, nextMonth] = getPrevNextMonths({
      ...defaultProps,
      month: new Date(2019, 8)
    });
    expect(nextMonth && nextMonth.getMonth()).toBe(9);
    expect(prevMonth && prevMonth.getMonth()).toBe(7);
  });
  it('respect the passed number of months', () => {
    const [prevMonth, nextMonth] = getPrevNextMonths({
      ...defaultProps,
      month: new Date(2019, 8),
      pagedNavigation: true,
      numberOfMonths: 3
    });
    expect(nextMonth && nextMonth.getMonth()).toBe(11);
    expect(prevMonth && prevMonth.getMonth()).toBe(5);
  });
  it('returns undefined as prev month when fromMonth is set', () => {
    const [prevMonth] = getPrevNextMonths({
      ...defaultProps,
      month: new Date(2019, 8),
      fromMonth: new Date(2019, 8)
    });
    expect(prevMonth).toBeUndefined();
  });
  it('returns undefined as next month when toMonth is set', () => {
    const [, nextMonth] = getPrevNextMonths({
      ...defaultProps,
      month: new Date(2019, 8),
      toMonth: new Date(2019, 8)
    });
    expect(nextMonth).toBeUndefined();
  });
});

/* eslint-env jest */
import { getNavigation } from './getNavigation';
import { defaultProps } from '../defaultProps';

describe('getNavigation', function() {
  it('return next and previous months with default props', function() {
    const result = getNavigation(defaultProps);

    expect(result.nextMonth).toBeDefined();
    expect(result.prevMonth).toBeDefined();
  });
  it('defaults to current month', function() {
    const result = getNavigation({ ...defaultProps, month: undefined });

    expect(result.nextMonth).toBeDefined();
    expect(result.prevMonth).toBeDefined();
  });
  it('return next and previous months for the specified month', function() {
    const result: ReactDayPicker.NavigationMonths = getNavigation({
      ...defaultProps,
      month: new Date(2019, 8),
    });

    expect(result.nextMonth && result.nextMonth.getMonth()).toBe(9);
    expect(result.prevMonth && result.prevMonth.getMonth()).toBe(7);
  });
  it('respect the passed number of months', function() {
    const result: ReactDayPicker.NavigationMonths = getNavigation({
      ...defaultProps,
      month: new Date(2019, 8),
      pagedNavigation: true,
      numberOfMonths: 3,
    });

    expect(result.nextMonth && result.nextMonth.getMonth()).toBe(11);
    expect(result.prevMonth && result.prevMonth.getMonth()).toBe(5);
  });
});

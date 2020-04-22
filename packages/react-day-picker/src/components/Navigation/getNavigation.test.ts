import { defaultProps } from '../DayPicker/defaults/defaultProps';
import { getNavigation } from './getNavigation';
import { NavigationMonths } from './types';

describe('getNavigation', () => {
  it('return next and previous months with default props', () => {
    const result = getNavigation(defaultProps);
    expect(result.nextMonth).toBeDefined();
    expect(result.prevMonth).toBeDefined();
  });
  it('defaults to current month', () => {
    const result = getNavigation({ ...defaultProps, month: undefined });
    expect(result.nextMonth).toBeDefined();
    expect(result.prevMonth).toBeDefined();
  });
  it('return next and previous months for the specified month', () => {
    const result: NavigationMonths = getNavigation({
      ...defaultProps,
      month: new Date(2019, 8)
    });
    expect(result.nextMonth && result.nextMonth.getMonth()).toBe(9);
    expect(result.prevMonth && result.prevMonth.getMonth()).toBe(7);
  });
  it('respect the passed number of months', () => {
    const result: NavigationMonths = getNavigation({
      ...defaultProps,
      month: new Date(2019, 8),
      pagedNavigation: true,
      numberOfMonths: 3
    });
    expect(result.nextMonth && result.nextMonth.getMonth()).toBe(11);
    expect(result.prevMonth && result.prevMonth.getMonth()).toBe(5);
  });
  it('returns undefined as prev month when fromMonth is set', () => {
    const result: NavigationMonths = getNavigation({
      ...defaultProps,
      month: new Date(2019, 8),
      fromMonth: new Date(2019, 8)
    });
    expect(result.prevMonth).toBeUndefined();
  });
  it('returns undefined as next month when toMonth is set', () => {
    const result: NavigationMonths = getNavigation({
      ...defaultProps,
      month: new Date(2019, 8),
      toMonth: new Date(2019, 8)
    });
    expect(result.nextMonth).toBeUndefined();
  });
});

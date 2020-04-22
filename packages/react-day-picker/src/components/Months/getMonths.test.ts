import { getMonths } from './getMonths';
import { defaultProps } from '../DayPicker/defaults/defaultProps';

describe('getMonths', () => {
  it('returns one month with default props', () => {
    expect(getMonths(defaultProps).length).toBe(1);
  });
  it('uses today as default month', () => {
    const props = { ...defaultProps, month: undefined };
    expect(getMonths(props)[0].getMonth()).toBe(new Date().getMonth());
  });
  it('returns the number of months', () => {
    const props = { ...defaultProps, numberOfMonths: 2 };
    expect(getMonths(props).length).toBe(2);
  });
  it('respects the toMonth prop', () => {
    const result = getMonths({
      ...defaultProps,
      numberOfMonths: 12,
      month: new Date(2019, 0),
      toMonth: new Date(2019, 4)
    });
    expect(result.length).toBe(5);
  });
  it('respects the fromMonth prop', () => {
    const result = getMonths({
      ...defaultProps,
      numberOfMonths: 12,
      month: new Date(2019, 0),
      fromMonth: new Date(2019, 5)
    });
    expect(result.length).toBe(7);
    expect(result[0].getMonth()).toBe(5);
  });
  it('reverses the months', () => {
    const result = getMonths({
      ...defaultProps,
      numberOfMonths: 12,
      reverseMonths: true,
      month: new Date(2019, 0)
    });
    // first month is january, reversed is december
    expect(result[0].getMonth()).toBe(11);
  });
});

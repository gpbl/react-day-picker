import { DEFAULT_PROPS } from '../DayPicker/defaults/props';
import { getMonths } from './getMonths';

describe('getMonths', () => {
  it('returns one month with default props', () => {
    expect(getMonths(DEFAULT_PROPS).length).toBe(1);
  });
  it('uses today as default month', () => {
    const props = { ...DEFAULT_PROPS, month: undefined };
    expect(getMonths(props)[0].getMonth()).toBe(new Date().getMonth());
  });
  it('returns the number of months', () => {
    const props = { ...DEFAULT_PROPS, numberOfMonths: 2 };
    expect(getMonths(props).length).toBe(2);
  });
  it('respects the toMonth prop', () => {
    const result = getMonths({
      ...DEFAULT_PROPS,
      numberOfMonths: 12,
      month: new Date(2019, 0),
      toMonth: new Date(2019, 4)
    });
    expect(result.length).toBe(5);
  });
  it('respects the fromMonth prop', () => {
    const result = getMonths({
      ...DEFAULT_PROPS,
      numberOfMonths: 12,
      month: new Date(2019, 0),
      fromMonth: new Date(2019, 5)
    });
    expect(result.length).toBe(7);
    expect(result[0].getMonth()).toBe(5);
  });
  it('reverses the months', () => {
    const result = getMonths({
      ...DEFAULT_PROPS,
      numberOfMonths: 12,
      reverseMonths: true,
      month: new Date(2019, 0)
    });
    // first month is january, reversed is december
    expect(result[0].getMonth()).toBe(11);
  });
});

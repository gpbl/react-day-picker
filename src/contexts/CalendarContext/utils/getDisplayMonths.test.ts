import { getDisplayMonths } from './getDisplayMonths';

describe('when the number of months is 1', () => {
  it('should return the months to display in the calendar', () => {
    const firstMonth = new Date(2020, 0);
    const expectedResult = [new Date(2020, 0)];
    const result = getDisplayMonths(firstMonth, { numberOfMonths: 1 });
    expect(result).toEqual(expectedResult);
  });
});

describe('when the number of months is greater than 1', () => {
  it('should return the months to display in the calendar', () => {
    const firstMonth = new Date(2020, 0);
    const expectedResult = [
      new Date(2020, 0),
      new Date(2020, 1),
      new Date(2020, 2)
    ];
    const result = getDisplayMonths(firstMonth, { numberOfMonths: 3 });
    expect(result).toEqual(expectedResult);
  });

  describe('when reversing the months order', () => {
    it('should return the months to display in the calendar', () => {
      const firstMonth = new Date(2020, 0);
      const expectedResult = [
        new Date(2020, 2),
        new Date(2020, 1),
        new Date(2020, 0)
      ];
      const result = getDisplayMonths(firstMonth, {
        numberOfMonths: 3,
        reverseMonths: true
      });
      expect(result).toEqual(expectedResult);
    });
  });
});

describe('when passing a max date', () => {
  it('should return the months to display in the calendar', () => {
    const firstMonth = new Date(2020, 0);
    const expectedResult = [new Date(2020, 0), new Date(2020, 1)];
    const result = getDisplayMonths(firstMonth, {
      numberOfMonths: 3,
      toDate: new Date(2020, 1, 10)
    });
    expect(result).toEqual(expectedResult);
  });
});

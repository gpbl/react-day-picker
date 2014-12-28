/* global jest, describe, it, expect */

jest.dontMock('../src/utils');
jest.dontMock('moment');

describe('weeks', function() {
  
  import { weeks } from '../src/utils';
  import moment from 'moment';
  
  it('counts the right days for jan 2015', function() {
    const day = moment('2015-01-01', 'YYYY-MM-DD');
    var weeksInJan = weeks(day);
    expect(weeksInJan.length).toBe(5);
    expect(weeksInJan[0].length).toBe(3);
    expect(weeksInJan[1].length).toBe(7);
    expect(weeksInJan[4].length).toBe(7);
  });

  it('counts the right days for nov 2014', function() {
    const day = moment('2014-11-01', 'YYYY-MM-DD');
    var weeksInNovember = weeks(day);
    expect(weeksInNovember.length).toBe(6);
    expect(weeksInNovember[0].length).toBe(1);
    expect(weeksInNovember[1].length).toBe(7);
    expect(weeksInNovember[5].length).toBe(1);
  });

  it('counts the right days for dec 2014', function() {
    const day = moment('2014-12-01', 'YYYY-MM-DD');
    var weeksInDecember = weeks(day);
    expect(weeksInDecember.length).toBe(5);
    expect(weeksInDecember[0].length).toBe(6);
    expect(weeksInDecember[4].length).toBe(4);
  });

});
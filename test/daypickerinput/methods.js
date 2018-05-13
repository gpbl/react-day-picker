import React from 'react';
import { mount } from 'enzyme';

import DayPickerInput, {
  defaultFormat,
  defaultParse,
} from '../../src/DayPickerInput';
import DayPicker from '../../src/DayPicker';

describe('DayPickerInput', () => {
  describe('methods', () => {
    it('getInput should return the input field', () => {
      const wrapper = mount(<DayPickerInput />);
      const instance = wrapper.instance();
      expect(instance.getInput().tagName.toLowerCase()).toBe('input');
    });
    it('getDayPicker should return the input field', () => {
      const wrapper = mount(<DayPickerInput />);
      const instance = wrapper.instance();
      instance.showDayPicker();
      wrapper.update();
      expect(instance.getDayPicker()).toBeInstanceOf(DayPicker);
    });
  });
  describe('defaultFormat', () => {
    it('should return an empty string for invalid dates', () => {
      const formatted = defaultFormat('foo');
      expect(formatted).toBe('');
    });
    it('should format a date', () => {
      const formatted = defaultFormat(new Date(2018, 6, 12));
      expect(formatted).toBe('2018-7-12');
    });
  });
  describe('defaultParse', () => {
    it('should return `undefined` for not valid dates', () => {
      expect(defaultParse('foo')).toBeUndefined();
      expect(defaultParse({})).toBeUndefined();
      expect(defaultParse(null)).toBeUndefined();
      expect(defaultParse(new Date())).toBeUndefined();
      expect(defaultParse('foo-10-11')).toBeUndefined();
      expect(defaultParse('2017-foo-10')).toBeUndefined();
      expect(defaultParse('2017-10-foo')).toBeUndefined();
      expect(defaultParse('2012-2-0')).toBeUndefined();
      expect(defaultParse('2012-0-20')).toBeUndefined();
      expect(defaultParse('2012-13-20')).toBeUndefined();
      expect(defaultParse('20112-13-20')).toBeUndefined();
    });
    it('should return a parsed date', () => {
      const parsed = defaultParse('2018-7-12');
      expect(parsed).toEqual(new Date(2018, 6, 12));
    });
  });
});

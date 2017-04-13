import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import DayPicker from '../../src/DayPicker';
import * as LocaleUtils from '../../src/LocaleUtils';

describe('DayPicker’s localization', () => {
  it('should use the months prop to localize the month names', () => {
    const wrapper = mount(
      <DayPicker
        initialMonth={new Date(2015, 0)}
        months={['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']}
      />);
    expect(wrapper.find('.DayPicker-Caption')).to.have.text('Gennaio 2015');
  });
  it('should use the firstDayOfWeek prop to set the first day of the week', () => {
    const wrapper = mount(
      <DayPicker
        initialMonth={new Date(2015, 0)}
        firstDayOfWeek={1}
      />);
    expect(wrapper.find('.DayPicker-Weekday').first()).to.have.text('Mo');
    expect(wrapper.find('.DayPicker-Day').at(3)).to.have.text('1');
  });
  it('should use the weekdaysShort prop to localize the weekday names', () => {
    const wrapper = mount(
      <DayPicker
        initialMonth={new Date(2015, 0)}
        weekdaysShort={['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa']}
      />);
    expect(wrapper.find('.DayPicker-Weekday').first()).to.have.text('Do');
  });
  it('should use the weekdaysLong prop to localize the weekday names', () => {
    const wrapper = mount(
      <DayPicker
        initialMonth={new Date(2015, 0)}
        weekdaysLong={['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato']}
      />);
    expect(wrapper.find('.DayPicker-Weekday > abbr').first()).to.have.attr('title', 'Domenica');
  });
  it('should render weekday labels accounting for locale settings', () => {
    const localeUtils = Object.assign({}, LocaleUtils, { getFirstDayOfWeek: () => 1 });
    const wrapper = mount(<DayPicker localeUtils={localeUtils} />);
    expect(wrapper.find('.DayPicker-Weekday').first()).to.have.text('Mo');
  });
});

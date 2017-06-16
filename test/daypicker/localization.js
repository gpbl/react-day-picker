import React from 'react';
import { mount } from 'enzyme';

import DayPicker from '../../src/DayPicker';
import * as LocaleUtils from '../../src/LocaleUtils';

describe('DayPicker’s localization', () => {
  it('should use the months prop to localize the month names', () => {
    const wrapper = mount(
      <DayPicker
        initialMonth={new Date(2015, 0)}
        months={[
          'Gennaio',
          'Febbraio',
          'Marzo',
          'Aprile',
          'Maggio',
          'Giugno',
          'Luglio',
          'Agosto',
          'Settembre',
          'Ottobre',
          'Novembre',
          'Dicembre',
        ]}
      />
    );
    expect(wrapper.find('.DayPicker-Caption')).toHaveText('Gennaio 2015');
  });
  it('should use the firstDayOfWeek prop to set the first day of the week', () => {
    const wrapper = mount(
      <DayPicker initialMonth={new Date(2015, 0)} firstDayOfWeek={1} />
    );
    expect(wrapper.find('.DayPicker-Weekday').first()).toHaveText('Mo');
    expect(wrapper.find('.DayPicker-Day').at(3)).toHaveText('1');
  });
  it('should use the weekdaysShort prop to localize the weekday names', () => {
    const wrapper = mount(
      <DayPicker
        initialMonth={new Date(2015, 0)}
        weekdaysShort={['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa']}
      />
    );
    expect(wrapper.find('.DayPicker-Weekday').first()).toHaveText('Do');
  });
  it('should use the weekdaysLong prop to localize the weekday names', () => {
    const wrapper = mount(
      <DayPicker
        initialMonth={new Date(2015, 0)}
        weekdaysLong={[
          'Domenica',
          'Lunedì',
          'Martedì',
          'Mercoledì',
          'Giovedì',
          'Venerdì',
          'Sabato',
        ]}
      />
    );
    expect(wrapper.find('.DayPicker-Weekday > abbr').first()).toHaveProp(
      'title',
      'Domenica'
    );
  });
  it('should render weekday labels accounting for locale settings', () => {
    const localeUtils = Object.assign({}, LocaleUtils, {
      getFirstDayOfWeek: () => 1,
    });
    const wrapper = mount(<DayPicker localeUtils={localeUtils} />);
    expect(wrapper.find('.DayPicker-Weekday').first()).toHaveText('Mo');
  });
});

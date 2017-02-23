
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import DayPicker from '../../src/DayPicker';

describe('DayPicker’s day modifiers', () => {
  it('should use `selectedDays` prop as `selected` modifier', () => {
    const wrapper = mount(
      <DayPicker
        initialMonth={ new Date(2015, 6) }
        selectedDays={ () => true }
        modifiers={ { foo: () => true } }
      />,
    );
    expect(wrapper.find('.DayPicker-Day--selected')).to.have.length(35);
    expect(wrapper.find('.DayPicker-Day--foo')).to.have.length(35);
  });
  it('should add the `aria-selected` attribute for `selected` days', () => {
    const wrapper = mount(
      <DayPicker initialMonth={ new Date(2015, 6) } selectedDays={ () => true } />,
    );
    expect(wrapper.find('.DayPicker-Day--selected').at(15)).to.have.attr('aria-selected', 'true');
  });
  it('should use `disabledDays` prop as `selected` modifier', () => {
    const wrapper = mount(
      <DayPicker
        initialMonth={ new Date(2015, 6) }
        disabledDays={ () => true }
        modifiers={ { foo: () => true } }
      />,
    );
    expect(wrapper.find('.DayPicker-Day--disabled')).to.have.length(35);
    expect(wrapper.find('.DayPicker-Day--foo')).to.have.length(35);
  });
  it('should add the `aria-disabled` attribute for `disabled` days', () => {
    const wrapper = mount(
      <DayPicker initialMonth={ new Date(2015, 6) } disabledDays={ () => true } />);
    expect(wrapper.find('.DayPicker-Day--disabled').first()).to.have.attr('aria-disabled', 'true');
  });
  it('should include "outside" for outside days', () => {
    const wrapper = mount(
      <DayPicker initialMonth={ new Date(2015, 6) } enableOutsideDays />,
    );
    expect(wrapper.find('.DayPicker-Day').at(0)).to.have.className('DayPicker-Day--outside');
  });
  it('should include "today"', () => {
    const wrapper = mount(<DayPicker />);
    expect(wrapper.find('.DayPicker-Day--today')).to.have.text((new Date()).getDate());
  });
  it('should add custom modifiers', () => {
    const modifiers = {
      firstDayOfMonth: day => day.getDate() === 1,
      all: () => true,
      none: () => false,
    };
    const wrapper = mount(
      <DayPicker
        initialMonth={ new Date(2015, 6) }
        modifiers={ modifiers }
      />,
    );
    expect(wrapper.find('.DayPicker-Day--firstDayOfMonth')).to.have.length(2);
    expect(wrapper.find('.DayPicker-Day--none')).to.have.length(0);
    expect(wrapper.find('.DayPicker-Day--all')).to.have.length(35);
  });
});

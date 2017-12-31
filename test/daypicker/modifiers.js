import React from 'react';
import { mount } from 'enzyme';

import DayPicker from '../../src/DayPicker';

describe('DayPicker’s day modifiers', () => {
  it('should use `selectedDays` prop as `selected` modifier', () => {
    const wrapper = mount(
      <DayPicker
        initialMonth={new Date(2015, 6)}
        selectedDays={() => true}
        modifiers={{ foo: () => true }}
      />
    );
    expect(wrapper.find('.DayPicker-Day--selected')).toHaveLength(35);
    expect(wrapper.find('.DayPicker-Day--foo')).toHaveLength(35);
  });
  it('should have `red` background style on `foo` modified days', () => {
    const wrapper = mount(
      <DayPicker
        initialMonth={new Date(2015, 6)}
        modifiers={{ foo: () => true }}
        modifiersStyles={{ foo: { background: 'red' } }}
      />
    );
    expect(wrapper.find('.DayPicker-Day--foo').at(0)).toHaveStyle(
      'background',
      'red'
    );
  });
  it('should add the `aria-selected` attribute for `selected` days', () => {
    const wrapper = mount(
      <DayPicker initialMonth={new Date(2015, 6)} selectedDays={() => true} />
    );
    expect(wrapper.find('.DayPicker-Day--selected').at(15)).toHaveProp(
      'aria-selected',
      true
    );
  });
  it('should use `disabledDays` prop as `selected` modifier', () => {
    const wrapper = mount(
      <DayPicker
        initialMonth={new Date(2015, 6)}
        disabledDays={() => true}
        modifiers={{ foo: () => true }}
      />
    );
    expect(wrapper.find('.DayPicker-Day--disabled')).toHaveLength(35);
    expect(wrapper.find('.DayPicker-Day--foo')).toHaveLength(35);
  });
  it('should add the `aria-disabled` attribute for `disabled` days', () => {
    const wrapper = mount(
      <DayPicker initialMonth={new Date(2015, 6)} disabledDays={() => true} />
    );
    expect(wrapper.find('.DayPicker-Day--disabled').first()).toHaveProp(
      'aria-disabled',
      true
    );
  });
  it('should include "outside" for outside days', () => {
    const wrapper = mount(
      <DayPicker initialMonth={new Date(2015, 6)} showOutsideDays />
    );
    expect(wrapper.find('.DayPicker-Day').at(0)).toHaveClassName(
      'DayPicker-Day--outside'
    );
  });
  it('should include "today"', () => {
    const wrapper = mount(<DayPicker />);
    expect(wrapper.find('.DayPicker-Day--today')).toHaveText(
      new Date().getDate().toString()
    );
  });
  it('should add custom modifiers', () => {
    const modifiers = {
      firstDayOfMonth: day => day.getDate() === 1,
      all: () => true,
      none: () => false,
    };
    const wrapper = mount(
      <DayPicker initialMonth={new Date(2015, 6)} modifiers={modifiers} />
    );
    expect(wrapper.find('.DayPicker-Day--firstDayOfMonth')).toHaveLength(2);
    expect(wrapper.find('.DayPicker-Day--none')).toHaveLength(0);
    expect(wrapper.find('.DayPicker-Day--all')).toHaveLength(35);
  });
  it('should allow to override "today" modifier', () => {
    const newToday = new Date(2018, 2, 10);
    newToday.setDate(new Date(2018, 2, 10).getDate() + 1);
    newToday.setMonth(new Date(2018, 2, 10).getMonth());

    const modifiers = { today: newToday };
    const wrapper = mount(
      <DayPicker initialMonth={new Date(2018, 2, 10)} modifiers={modifiers} />
    );
    expect(wrapper.find('.DayPicker-Day--today')).toHaveText(
      newToday.getDate().toString()
    );
  });
});

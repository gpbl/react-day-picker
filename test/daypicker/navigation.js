import React from 'react';
import { shallow, mount } from 'enzyme';

import DayPicker from '../../src/DayPicker';
import * as keys from '../../src/keys';
import defaultClassNames from '../../src/classNames';

describe('DayPicker’s navigation', () => {
  it('should not allow the previous month when the first month is the first allowed one', () => {
    const wrapper = shallow(
      <DayPicker
        initialMonth={new Date(2015, 9)}
        fromMonth={new Date(2015, 9)}
        numberOfMonths={3}
      />
    );
    expect(wrapper.instance().allowPreviousMonth()).toBe(false);
  });
  it('should not allow the previous month when cannot change months', () => {
    const wrapper = shallow(<DayPicker canChangeMonth={false} />);
    expect(wrapper.instance().allowPreviousMonth()).toBe(false);
  });
  it('should not allow the next month when the last month is the last allowed one', () => {
    const wrapper = shallow(
      <DayPicker
        initialMonth={new Date(2015, 7)}
        toMonth={new Date(2015, 9)}
        numberOfMonths={3}
      />
    );
    expect(wrapper.instance().allowNextMonth()).toBe(false);
  });
  it('should not allow the next month when cannot change months', () => {
    const wrapper = shallow(<DayPicker canChangeMonth={false} />);
    expect(wrapper.instance().allowNextMonth()).toBe(false);
  });
  it('should show the next month when clicking the next button', () => {
    const wrapper = mount(<DayPicker initialMonth={new Date(2015, 7)} />);
    wrapper.find('.DayPicker-NavButton--next').simulate('click');
    const instance = wrapper.instance();
    expect(instance.state.currentMonth.getFullYear()).toBe(2015);
    expect(instance.state.currentMonth.getMonth()).toBe(8);
    expect(instance.state.currentMonth.getDate()).toBe(1);
  });
  it('should show the next month when clicking outside days', () => {
    const wrapper = mount(
      <DayPicker
        initialMonth={new Date(2015, 7)}
        showOutsideDays
        onDayClick={() => {}}
      />
    );
    wrapper
      .find('.DayPicker-Day--outside')
      .last()
      .simulate('click');
    const instance = wrapper.instance();
    expect(instance.state.currentMonth.getFullYear()).toBe(2015);
    expect(instance.state.currentMonth.getMonth()).toBe(8);
  });
  it('should show the next month when clicking outside days with classNames set', () => {
    const wrapper = mount(
      <DayPicker
        initialMonth={new Date(2015, 7)}
        showOutsideDays
        classNames={{ ...defaultClassNames, outside: 'fakeOutside' }}
        onDayClick={() => {}}
      />
    );
    wrapper
      .find('.fakeOutside')
      .last()
      .simulate('click');
    const instance = wrapper.instance();
    expect(instance.state.currentMonth.getFullYear()).toBe(2015);
    expect(instance.state.currentMonth.getMonth()).toBe(8);
  });
  it('should show the previous month when clicking the previous button', () => {
    const wrapper = mount(<DayPicker initialMonth={new Date(2015, 7)} />);
    wrapper.find('.DayPicker-NavButton--prev').simulate('click');
    const instance = wrapper.instance();
    expect(instance.state.currentMonth.getFullYear()).toBe(2015);
    expect(instance.state.currentMonth.getMonth()).toBe(6);
  });
  it('should show the previous month when clicking outside days', () => {
    const wrapper = mount(
      <DayPicker
        initialMonth={new Date(2015, 7)}
        showOutsideDays
        onDayClick={() => {}}
      />
    );
    wrapper
      .find('.DayPicker-Day--outside')
      .first()
      .simulate('click');
    const instance = wrapper.instance();
    expect(instance.state.currentMonth.getFullYear()).toBe(2015);
    expect(instance.state.currentMonth.getMonth()).toBe(6);
  });
  it('should show the previous month when clicking outside days with classNames set', () => {
    const wrapper = mount(
      <DayPicker
        initialMonth={new Date(2015, 7)}
        showOutsideDays
        classNames={{ ...defaultClassNames, outside: 'fakeOutside' }}
        onDayClick={() => {}}
      />
    );
    wrapper
      .find('.fakeOutside')
      .first()
      .simulate('click');
    const instance = wrapper.instance();
    expect(instance.state.currentMonth.getFullYear()).toBe(2015);
    expect(instance.state.currentMonth.getMonth()).toBe(6);
  });
  it('should not show the previous month when clicking outside days from the first month out of 2', () => {
    const wrapper = mount(
      <DayPicker
        initialMonth={new Date(2015, 3)}
        numberOfMonths={2}
        showOutsideDays
        onDayClick={() => {}}
      />
    );
    wrapper
      .find('.DayPicker-Day--outside')
      .at(6)
      .simulate('click');
    const instance = wrapper.instance();
    expect(instance.state.currentMonth.getFullYear()).toBe(2015);
    expect(instance.state.currentMonth.getMonth()).toBe(3);
  });
  it('should not allow changing to the year when cannot change months', () => {
    const wrapper = shallow(<DayPicker canChangeMonth={false} />);
    expect(wrapper.instance().allowYearChange()).toBe(false);
  });
  it('should call `showNextMonth()` when the RIGHT key is pressed', () => {
    const wrapper = mount(<DayPicker />);
    const showNextMonth = jest.spyOn(wrapper.instance(), 'showNextMonth');
    wrapper
      .find('.DayPicker-wrapper')
      .simulate('keyDown', { keyCode: keys.RIGHT });
    expect(showNextMonth).toHaveBeenCalledTimes(1);
    showNextMonth.mockReset();
  });
  it('should call `showPreviousMonth()` when the LEFT key is pressed', () => {
    const wrapper = mount(<DayPicker />);
    const showPreviousMonth = jest.spyOn(
      wrapper.instance(),
      'showPreviousMonth'
    );
    wrapper
      .find('.DayPicker-wrapper')
      .simulate('keyDown', { keyCode: keys.LEFT });
    expect(showPreviousMonth).toHaveBeenCalledTimes(1);
    showPreviousMonth.mockReset();
  });
  it('should call `showPreviousMonth()` when the RIGHT key is pressed and the direction is rtl', () => {
    const wrapper = mount(<DayPicker dir="rtl" />);
    const showPreviousMonth = jest.spyOn(
      wrapper.instance(),
      'showPreviousMonth'
    );
    wrapper
      .find('.DayPicker-wrapper')
      .simulate('keyDown', { keyCode: keys.RIGHT });
    expect(showPreviousMonth).toHaveBeenCalledTimes(1);
    showPreviousMonth.mockReset();
  });
  it('should call `showNextMonth()` when the LEFT key is pressed and the direction is rtl', () => {
    const wrapper = mount(<DayPicker dir="rtl" />);
    const showNextMonth = jest.spyOn(wrapper.instance(), 'showNextMonth');
    wrapper
      .find('.DayPicker-wrapper')
      .simulate('keyDown', { keyCode: keys.LEFT });
    expect(showNextMonth).toHaveBeenCalledTimes(1);
    showNextMonth.mockReset();
  });
  it('should call `showPreviousYear()` when the UP key is pressed', () => {
    const wrapper = mount(<DayPicker />);
    const showPreviousYear = jest.spyOn(wrapper.instance(), 'showPreviousYear');
    wrapper
      .find('.DayPicker-wrapper')
      .simulate('keyDown', { keyCode: keys.UP });
    expect(showPreviousYear).toHaveBeenCalledTimes(1);
    showPreviousYear.mockReset();
  });
  it('should call `showNextYear()` when the DOWN key is pressed', () => {
    const wrapper = mount(<DayPicker />);
    const showNextYear = jest.spyOn(wrapper.instance(), 'showNextYear');
    wrapper
      .find('.DayPicker-wrapper')
      .simulate('keyDown', { keyCode: keys.DOWN });
    expect(showNextYear).toHaveBeenCalledTimes(1);
    showNextYear.mockReset();
  });
  it('should call `focusNextDay()` when the RIGHT key is pressed on a day', () => {
    const wrapper = mount(<DayPicker />);
    const focusNextDay = jest.spyOn(wrapper.instance(), 'focusNextDay');
    wrapper
      .find('.DayPicker-Day')
      .filterWhere(node => !node.hasClass('DayPicker-Day--outside'))
      .first()
      .simulate('keyDown', { keyCode: keys.RIGHT });
    expect(focusNextDay).toHaveBeenCalledTimes(1);
    focusNextDay.mockReset();
  });
  it('should call `focusPreviousDay()` when the LEFT key is pressed on a day', () => {
    const wrapper = mount(<DayPicker />);
    const focusPreviousDay = jest.spyOn(wrapper.instance(), 'focusPreviousDay');
    wrapper
      .find('.DayPicker-Day')
      .filterWhere(node => !node.hasClass('DayPicker-Day--outside'))
      .first()
      .simulate('keyDown', { keyCode: keys.LEFT });
    expect(focusPreviousDay).toHaveBeenCalledTimes(1);
    focusPreviousDay.mockReset();
  });
  it('should call `focusPreviousDay()` when the RIGHT key is pressed on a day and the direction is rtl', () => {
    const wrapper = mount(<DayPicker dir="rtl" />);
    const focusPreviousDay = jest.spyOn(wrapper.instance(), 'focusPreviousDay');
    wrapper
      .find('.DayPicker-Day')
      .filterWhere(node => !node.hasClass('DayPicker-Day--outside'))
      .first()
      .simulate('keyDown', { keyCode: keys.RIGHT });
    expect(focusPreviousDay).toHaveBeenCalledTimes(1);
    focusPreviousDay.mockReset();
  });
  it('should call `focusNextDay()` when the LEFT key is pressed on a day and the direction is rtl', () => {
    const wrapper = mount(<DayPicker dir="rtl" />);
    const focusNextDay = jest.spyOn(wrapper.instance(), 'focusNextDay');
    wrapper
      .find('.DayPicker-Day')
      .filterWhere(node => !node.hasClass('DayPicker-Day--outside'))
      .first()
      .simulate('keyDown', { keyCode: keys.LEFT });
    expect(focusNextDay).toHaveBeenCalledTimes(1);
    focusNextDay.mockReset();
  });
  it('should call `focusNextWeek()` when the DOWN key is pressed on a day', () => {
    const wrapper = mount(<DayPicker />);
    const focusNextWeek = jest.spyOn(wrapper.instance(), 'focusNextWeek');
    wrapper
      .find('.DayPicker-Day')
      .filterWhere(node => !node.hasClass('DayPicker-Day--outside'))
      .first()
      .simulate('keyDown', { keyCode: keys.DOWN });
    expect(focusNextWeek).toHaveBeenCalledTimes(1);
    focusNextWeek.mockReset();
  });
  it('should call `focusPreviousWeek()` when the UP key is pressed on a day', () => {
    const wrapper = mount(<DayPicker />);
    const focusPreviousWeek = jest.spyOn(
      wrapper.instance(),
      'focusPreviousWeek'
    );
    wrapper
      .find('.DayPicker-Day')
      .filterWhere(node => !node.hasClass('DayPicker-Day--outside'))
      .last()
      .simulate('keyDown', { keyCode: keys.UP });
    expect(focusPreviousWeek).toHaveBeenCalledTimes(1);
    focusPreviousWeek.mockReset();
  });
  it('should set the current month to the first month in its page if fromMonth is set', () => {
    const instance = shallow(
      <DayPicker
        initialMonth={new Date(2015, 7)}
        fromMonth={new Date(2015, 1)}
        numberOfMonths={4}
        pagedNavigation
      />
    ).instance();
    expect(instance.state.currentMonth.getFullYear()).toBe(2015);
    expect(instance.state.currentMonth.getMonth()).toBe(5);
    expect(instance.state.currentMonth.getDate()).toBe(1);
  });
  it('should update the `currentMonth` to the first rendered month when `toMonth` is the current month', () => {
    const instance = shallow(
      <DayPicker
        initialMonth={new Date(2015, 7)}
        toMonth={new Date(2015, 7)}
        numberOfMonths={3}
      />
    ).instance();
    expect(instance.state.currentMonth.getFullYear()).toBe(2015);
    expect(instance.state.currentMonth.getMonth()).toBe(5);
    expect(instance.state.currentMonth.getDate()).toBe(1);
  });
  it('should update from props the `currentMonth` to the first rendered month when `toMonth` is the current month', () => {
    const wrapper = shallow(
      <DayPicker
        initialMonth={new Date(2015, 7)}
        toMonth={new Date(2015, 7)}
        numberOfMonths={2}
      />
    );
    wrapper.setProps({ month: new Date(2015, 1) });
    wrapper.update();
    const instance = wrapper.instance();
    expect(instance.state.currentMonth.getFullYear()).toBe(2015);
    expect(instance.state.currentMonth.getMonth()).toBe(1);
    expect(instance.state.currentMonth.getDate()).toBe(1);
  });
  describe('with custom classNames', () => {
    const getDaysInMonth = wrapper =>
      wrapper
        .find('.day.another-day-class')
        .filterWhere(
          node =>
            !node.hasClass('othermonth') &&
            !node.hasClass('another-othermonth-class')
        );
    const classes = {
      container: 'datepicker',
      interactionDisabled: 'interaction-disabled',
      navBar: 'navbar',
      navButtonPrev: 'prev',
      navButtonNext: 'next',
      month: 'month',
      caption: 'caption',
      weekdays: 'weekdays',
      weekdaysRow: 'weekdaysRow',
      weekday: 'weekday',
      body: 'body',
      week: 'week',
      day: 'day another-day-class',
      today: 'today',
      selected: 'selected',
      outside: 'othermonth another-othermonth-class',
      disabled: 'disabled',
    };

    it('should call `focusNextDay()` when the RIGHT key is pressed on a day', () => {
      const wrapper = mount(<DayPicker classNames={classes} />);
      const focusNextDay = jest.spyOn(wrapper.instance(), 'focusNextDay');
      getDaysInMonth(wrapper)
        .first()
        .simulate('keyDown', { keyCode: keys.RIGHT });
      expect(focusNextDay).toHaveBeenCalledTimes(1);
      focusNextDay.mockReset();
    });
    it('should call `focusPreviousDay()` when the LEFT key is pressed on a day', () => {
      const wrapper = mount(<DayPicker classNames={classes} />);
      const focusPreviousDay = jest.spyOn(
        wrapper.instance(),
        'focusPreviousDay'
      );
      getDaysInMonth(wrapper)
        .first()
        .simulate('keyDown', { keyCode: keys.LEFT });
      expect(focusPreviousDay).toHaveBeenCalledTimes(1);
      focusPreviousDay.mockReset();
    });
    it('should call `focusNextWeek()` when the DOWN key is pressed on a day', () => {
      const wrapper = mount(<DayPicker classNames={classes} />);
      const focusNextWeek = jest.spyOn(wrapper.instance(), 'focusNextWeek');
      getDaysInMonth(wrapper)
        .first()
        .simulate('keyDown', { keyCode: keys.DOWN });
      expect(focusNextWeek).toHaveBeenCalledTimes(1);
      focusNextWeek.mockReset();
    });
    it('should call `focusPreviousWeek()` when the UP key is pressed on a day', () => {
      const wrapper = mount(<DayPicker classNames={classes} />);
      const focusPreviousWeek = jest.spyOn(
        wrapper.instance(),
        'focusPreviousWeek'
      );
      getDaysInMonth(wrapper)
        .last()
        .simulate('keyDown', { keyCode: keys.UP });
      expect(focusPreviousWeek).toHaveBeenCalledTimes(1);
      focusPreviousWeek.mockReset();
    });
  });
});

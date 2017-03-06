import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import DayPicker from '../../src/DayPicker';
import keys from '../../src/keys';

describe('DayPicker’s navigation', () => {
  it('should not allow the previous month when the first month is the first allowed one', () => {
    const wrapper = shallow(
      <DayPicker
        initialMonth={ new Date(2015, 9) }
        fromMonth={ new Date(2015, 9) }
        numberOfMonths={ 3 }
      />,
    );
    expect(wrapper.instance().allowPreviousMonth()).to.be.false;
  });
  it('should not allow the previous month when cannot change months', () => {
    const wrapper = shallow(<DayPicker canChangeMonth={ false } />);
    expect(wrapper.instance().allowPreviousMonth()).to.be.false;
  });
  it('should not allow the next month when the last month is the last allowed one', () => {
    const wrapper = shallow(
      <DayPicker initialMonth={ new Date(2015, 7) } toMonth={ new Date(2015, 9) } numberOfMonths={ 3 } />, // eslint-disable-line max-len
    );
    expect(wrapper.instance().allowNextMonth()).to.be.false;
  });
  it('should not allow the next month when cannot change months', () => {
    const wrapper = shallow(<DayPicker canChangeMonth={ false } />);
    expect(wrapper.instance().allowNextMonth()).to.be.false;
  });
  it('should show the next month when clicking the next button', () => {
    const wrapper = mount(<DayPicker initialMonth={ new Date(2015, 7) } />);
    wrapper.find('.DayPicker-NavButton--next').simulate('click');
    const instance = wrapper.instance();
    expect(instance.state.currentMonth.getFullYear()).to.equal(2015);
    expect(instance.state.currentMonth.getMonth()).to.equal(8);
    expect(instance.state.currentMonth.getDate()).to.equal(1);
  });
  it('should show the next month when clicking outside days', () => {
    const wrapper = mount(
      <DayPicker initialMonth={ new Date(2015, 7) } enableOutsideDays onDayClick={ () => {} } />,
    );
    wrapper.find('.DayPicker-Day--outside').last().simulate('click');
    const instance = wrapper.instance();
    expect(instance.state.currentMonth.getFullYear()).to.equal(2015);
    expect(instance.state.currentMonth.getMonth()).to.equal(8);
  });
  it('should show the previous month when clicking the previous button', () => {
    const wrapper = mount(<DayPicker initialMonth={ new Date(2015, 7) } />);
    wrapper.find('.DayPicker-NavButton--prev').simulate('click');
    const instance = wrapper.instance();
    expect(instance.state.currentMonth.getFullYear()).to.equal(2015);
    expect(instance.state.currentMonth.getMonth()).to.equal(6);
  });
  it('should show the previous month when clicking outside days', () => {
    const wrapper = mount(
      <DayPicker initialMonth={ new Date(2015, 7) } enableOutsideDays onDayClick={ () => {} } />,
    );
    wrapper.find('.DayPicker-Day--outside').first().simulate('click');
    const instance = wrapper.instance();
    expect(instance.state.currentMonth.getFullYear()).to.equal(2015);
    expect(instance.state.currentMonth.getMonth()).to.equal(6);
  });
  it('should not show the previous month when clicking outside days from the first month out of 2', () => {
    const wrapper = mount(
      <DayPicker
        initialMonth={ new Date(2015, 3) }
        numberOfMonths={ 2 }
        enableOutsideDays
        onDayClick={ () => {} }
      />,
    );
    wrapper.find('.DayPicker-Day--outside').at(6).simulate('click');
    const instance = wrapper.instance();
    expect(instance.state.currentMonth.getFullYear()).to.equal(2015);
    expect(instance.state.currentMonth.getMonth()).to.equal(3);
  });
  it('should not allow changing to the year when cannot change months', () => {
    const wrapper = shallow(<DayPicker canChangeMonth={ false } />);
    expect(wrapper.instance().allowYearChange()).to.be.false;
  });
  it('should call `showNextMonth()` when the RIGHT key is pressed', () => {
    const wrapper = mount(<DayPicker />);
    const showNextMonth = spy(wrapper.instance(), 'showNextMonth');
    wrapper.simulate('keyDown', { keyCode: keys.RIGHT });
    expect(showNextMonth).to.have.been.calledOnce;
    showNextMonth.restore();
  });
  it('should call `showPreviousMonth()` when the LEFT key is pressed', () => {
    const wrapper = mount(<DayPicker />);
    const showPreviousMonth = spy(wrapper.instance(), 'showPreviousMonth');
    wrapper.simulate('keyDown', { keyCode: keys.LEFT });
    expect(showPreviousMonth).to.have.been.calledOnce;
    showPreviousMonth.restore();
  });
  it('should call `showPreviousYear()` when the UP key is pressed', () => {
    const wrapper = mount(<DayPicker />);
    const showPreviousYear = spy(wrapper.instance(), 'showPreviousYear');
    wrapper.simulate('keyDown', { keyCode: keys.UP });
    expect(showPreviousYear).to.have.been.calledOnce;
    showPreviousYear.restore();
  });
  it('should call `showNextYear()` when the DOWN key is pressed', () => {
    const wrapper = mount(<DayPicker />);
    const showNextYear = spy(wrapper.instance(), 'showNextYear');
    wrapper.simulate('keyDown', { keyCode: keys.DOWN });
    expect(showNextYear).to.have.been.calledOnce;
    showNextYear.restore();
  });
  it('should call `focusNextDay()` when the RIGHT key is pressed on a day', () => {
    const wrapper = mount(<DayPicker />);
    const focusNextDay = spy(wrapper.instance(), 'focusNextDay');
    wrapper
      .find('.DayPicker-Day')
      .filterWhere(node => !node.hasClass('DayPicker-Day--outside'))
      .first()
      .simulate('keyDown', { keyCode: keys.RIGHT });
    expect(focusNextDay).to.have.been.calledOnce;
    focusNextDay.restore();
  });
  it('should call `focusPreviousDay()` when the LEFT key is pressed on a day', () => {
    const wrapper = mount(<DayPicker />);
    const focusPreviousDay = spy(wrapper.instance(), 'focusPreviousDay');
    wrapper
      .find('.DayPicker-Day')
      .filterWhere(node => !node.hasClass('DayPicker-Day--outside'))
      .first()
      .simulate('keyDown', { keyCode: keys.LEFT });
    expect(focusPreviousDay).to.have.been.calledOnce;
    focusPreviousDay.restore();
  });
  it('should call `focusNextWeek()` when the DOWN key is pressed on a day', () => {
    const wrapper = mount(<DayPicker />);
    const focusNextWeek = spy(wrapper.instance(), 'focusNextWeek');
    wrapper
      .find('.DayPicker-Day')
      .filterWhere(node => !node.hasClass('DayPicker-Day--outside'))
      .first()
      .simulate('keyDown', { keyCode: keys.DOWN });
    expect(focusNextWeek).to.have.been.calledOnce;
    focusNextWeek.restore();
  });
  it('should call `focusPreviousWeek()` when the UP key is pressed on a day', () => {
    const wrapper = mount(<DayPicker />);
    const focusPreviousWeek = spy(wrapper.instance(), 'focusPreviousWeek');
    wrapper
      .find('.DayPicker-Day')
      .filterWhere(node => !node.hasClass('DayPicker-Day--outside'))
      .last()
      .simulate('keyDown', { keyCode: keys.UP });
    expect(focusPreviousWeek).to.have.been.calledOnce;
    focusPreviousWeek.restore();
  });
  it('should set the current month to the first month in its page if fromMonth is set', () => {
    const instance = shallow(
      <DayPicker
        initialMonth={ new Date(2015, 7) }
        fromMonth={ new Date(2015, 1) }
        numberOfMonths={ 4 }
        pagedNavigation
      />,
    ).instance();
    expect(instance.state.currentMonth.getFullYear()).to.equal(2015);
    expect(instance.state.currentMonth.getMonth()).to.equal(5);
    expect(instance.state.currentMonth.getDate()).to.equal(1);
  });

  describe('with custom classNames', () => {
    const getDaysInMonth = wrapper =>
      wrapper
        .find('.day.another-day-class')
        .filterWhere(
          node => !node.hasClass('othermonth') && !node.hasClass('another-othermonth-class'),
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
      const wrapper = mount(<DayPicker classNames={ classes } />);
      const focusNextDay = spy(wrapper.instance(), 'focusNextDay');
      getDaysInMonth(wrapper).first().simulate('keyDown', { keyCode: keys.RIGHT });
      expect(focusNextDay).to.have.been.calledOnce;
      focusNextDay.restore();
    });
    it('should call `focusPreviousDay()` when the LEFT key is pressed on a day', () => {
      const wrapper = mount(<DayPicker classNames={ classes } />);
      const focusPreviousDay = spy(wrapper.instance(), 'focusPreviousDay');
      getDaysInMonth(wrapper).first().simulate('keyDown', { keyCode: keys.LEFT });
      expect(focusPreviousDay).to.have.been.calledOnce;
      focusPreviousDay.restore();
    });
    it('should call `focusNextWeek()` when the DOWN key is pressed on a day', () => {
      const wrapper = mount(<DayPicker classNames={ classes } />);
      const focusNextWeek = spy(wrapper.instance(), 'focusNextWeek');
      getDaysInMonth(wrapper).first().simulate('keyDown', { keyCode: keys.DOWN });
      expect(focusNextWeek).to.have.been.calledOnce;
      focusNextWeek.restore();
    });
    it('should call `focusPreviousWeek()` when the UP key is pressed on a day', () => {
      const wrapper = mount(<DayPicker classNames={ classes } />);
      const focusPreviousWeek = spy(wrapper.instance(), 'focusPreviousWeek');
      getDaysInMonth(wrapper).last().simulate('keyDown', { keyCode: keys.UP });
      expect(focusPreviousWeek).to.have.been.calledOnce;
      focusPreviousWeek.restore();
    });
  });
});

import React from 'react';
import SyntheticEvent from 'react-dom/lib/SyntheticEvent';

import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon, { spy } from 'sinon';

import DayPicker from '../../src/DayPicker';
import keys from '../../src/keys';

describe('DayPicker’s events handlers', () => {
  it('should call the `onCaptionClick` handler', () => {
    const handleCaptionClick = spy();
    const wrapper = mount(<DayPicker onCaptionClick={ handleCaptionClick } />);
    wrapper.find('.DayPicker-Caption').simulate('click');
    expect(handleCaptionClick).to.have.been.calledWith(
      sinon.match(date =>
        date.getFullYear() === (new Date()).getFullYear() &&
        date.getMonth() === (new Date()).getMonth(),
        'currentMonth',
      ),
      sinon.match(e => e instanceof SyntheticEvent && e.target !== null, 'e'),
    );
  });
  it('should call the day\'s cell event handlers', () => {
    const handleDayClick = spy();
    const handleDayMouseEnter = spy();
    const handleDayKeyDown = spy();
    const handleDayMouseLeave = spy();
    const handleDayTouchStart = spy();
    const handleDayTouchEnd = spy();

    const modifiers = { foo: d => d.getDate() === 15 };
    const wrapper = mount(
      <DayPicker
        modifiers={ modifiers }
        onDayClick={ handleDayClick }
        onDayMouseEnter={ handleDayMouseEnter }
        onDayMouseLeave={ handleDayMouseLeave }
        onDayKeyDown={ handleDayKeyDown }
        onDayTouchStart={ handleDayTouchStart }
        onDayTouchEnd={ handleDayTouchEnd }
      />,
    );

    const eventArgs = [
      sinon.match(date => date.getFullYear() === (new Date()).getFullYear() && date.getMonth() === (new Date()).getMonth(), 'currentMonth'),
      sinon.match(mods => mods.foo, 'modifiers'),
      sinon.match(e => e instanceof SyntheticEvent && e.target !== null, 'e'),
    ];

    wrapper.find('.DayPicker-Day--foo').simulate('click');
    expect(handleDayClick).to.have.been.calledWith(...eventArgs);

    wrapper.find('.DayPicker-Day--foo').simulate('mouseEnter');
    expect(handleDayMouseEnter).to.have.been.calledWith(...eventArgs);

    wrapper.find('.DayPicker-Day--foo').simulate('mouseLeave');
    expect(handleDayMouseLeave).to.have.been.calledWith(...eventArgs);

    wrapper.find('.DayPicker-Day--foo').simulate('keyDown');
    expect(handleDayKeyDown).to.have.been.calledWith(...eventArgs);

    wrapper.find('.DayPicker-Day--foo').simulate('touchStart');
    expect(handleDayTouchStart).to.have.been.calledWith(...eventArgs);

    wrapper.find('.DayPicker-Day--foo').simulate('touchEnd');
    expect(handleDayTouchEnd).to.have.been.calledWith(...eventArgs);
  });
  it('should not call the day\'s cell event handlers for outside days', () => {
    const handleDayClick = spy();
    const handleDayMouseEnter = spy();
    const handleDayMouseLeave = spy();
    const wrapper = mount(
      <DayPicker
        initialMonth={ new Date(2015, 11, 5) }
        onDayClick={ handleDayClick }
        onDayMouseEnter={ handleDayMouseEnter }
        onDayMouseLeave={ handleDayMouseLeave }
      />,
    );

    wrapper.find('.DayPicker-Day--outside').at(0).simulate('click');
    expect(handleDayClick).to.not.have.been.called;

    wrapper.find('.DayPicker-Day--outside').at(0).simulate('mouseEnter');
    expect(handleDayMouseEnter).to.not.have.been.called;

    wrapper.find('.DayPicker-Day--outside').at(0).simulate('mouseLeave');
    expect(handleDayMouseLeave).to.not.have.been.called;
  });
  it('should call `onDayClick` event handler when pressing the ENTER key', () => {
    const handleDayClick = spy();
    const modifiers = { foo: d => d.getDate() === 15, bar: () => false };
    const wrapper = mount(
      <DayPicker
        modifiers={ modifiers }
        onDayClick={ handleDayClick }
      />,
    );
    const eventArgs = [
      sinon.match(date => date.getFullYear() === (new Date()).getFullYear() && date.getMonth() === (new Date()).getMonth(), 'currentMonth'),
      sinon.match(mods => mods.foo && !mods.bar, 'modifiers'),
      sinon.match(e => e instanceof SyntheticEvent && e.target !== null, 'e'),
    ];
    wrapper.find('.DayPicker-Day--foo').simulate('keyDown', { keyCode: keys.ENTER });
    expect(handleDayClick).to.have.been.calledWith(...eventArgs);
  });
  it('should call `onDayClick` event handler when pressing the SPACE key', () => {
    const handleDayClick = spy();
    const modifiers = { foo: d => d.getDate() === 15 };
    const wrapper = mount(
      <DayPicker
        modifiers={ modifiers }
        onDayClick={ handleDayClick }
      />,
    );
    const eventArgs = [
      sinon.match(date => date.getFullYear() === (new Date()).getFullYear() && date.getMonth() === (new Date()).getMonth(), 'currentMonth'),
      sinon.match(mods => mods.foo, 'modifiers'),
      sinon.match(e => e instanceof SyntheticEvent && e.target !== null, 'e'),
    ];
    wrapper.find('.DayPicker-Day--foo').simulate('keyDown', { keyCode: keys.SPACE });
    expect(handleDayClick).to.have.been.calledWith(...eventArgs);
  });
  it('should call `onKeyDown` event handler', () => {
    const handleKeyDown = spy();
    const wrapper = mount(<DayPicker onKeyDown={ handleKeyDown } />);
    wrapper.simulate('keyDown');
    expect(handleKeyDown).to.have.been.calledWith(
      sinon.match(e => e instanceof SyntheticEvent && e.target !== null, 'e'),
    );
  });
  it('should call `onKeyDown` also when changing month is disabled', () => {
    const handleKeyDown = spy();
    const wrapper = mount(<DayPicker onKeyDown={ handleKeyDown } canChangeMonth={ false } />);
    wrapper.simulate('keyDown');
    expect(handleKeyDown).to.have.been.calledWith(
      sinon.match(e => e instanceof SyntheticEvent && e.target !== null, 'e'),
    );
  });
});

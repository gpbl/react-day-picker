/* eslint-disable global-require, max-len */
import React from 'react';
import SyntheticEvent from 'react/lib/SyntheticEvent';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon, { spy } from 'sinon';
import DayPicker from '../src/DayPicker';
import keys from '../src/keys';

describe('<DayPicker />', () => {
  it('should work with commonjs require', () => {
    const commonJsDayPicker = require('../DayPicker');
    expect(commonJsDayPicker).to.have.property('name', 'DayPicker');
  });

  describe('rendering', () => {
    it('should have default props', () => {
      const dayPicker = <DayPicker />;
      const now = new Date();
      expect(dayPicker.props.initialMonth.getMonth()).to.equal(now.getMonth());
      expect(dayPicker.props.initialMonth.getYear()).to.equal(now.getYear());
      expect(dayPicker.props.numberOfMonths).to.equal(1);
      expect(dayPicker.props.locale).to.equal('en');
      expect(dayPicker.props.enableOutsideDays).to.equal(false);
      expect(dayPicker.props.canChangeMonth).to.equal(true);
      expect(dayPicker.props.reverseMonths).to.equal(false);
      expect(dayPicker.props.renderDay).to.be.a('Function');
      expect(dayPicker.props.tabIndex).to.equal(0);
    });
    it('should have the DayPicker classes', () => {
      const wrapper = shallow(<DayPicker />);
      expect(wrapper).to.have.className('DayPicker');
      expect(wrapper).to.have.className('DayPicker--en');
      expect(wrapper).to.have.className('DayPicker--interactionDisabled');
    });
    it('should use initialMonth as the current month', () => {
      const wrapper = shallow(<DayPicker />);
      const instance = wrapper.instance();
      expect(instance.props.initialMonth.getFullYear()).to.equal(instance.state.currentMonth.getFullYear());
      expect(instance.props.initialMonth.getMonth()).to.equal(instance.state.currentMonth.getMonth());
      expect(instance.state.currentMonth.getDate()).to.equal(1);
    });
    it('should render multiple months', () => {
      const wrapper = shallow(<DayPicker numberOfMonths={12} />);
      expect(wrapper.find('.DayPicker-Month')).to.have.length(12);
    });
    it('should render multiple months, reversed', () => {
      const wrapper = mount(<DayPicker initialMonth={new Date(2015, 0)} numberOfMonths={2} reverseMonths />);
      expect(wrapper.find('.DayPicker-Caption').at(0)).to.have.text('February 2015');
      expect(wrapper.find('.DayPicker-Caption').at(1)).to.have.text('January 2015');
    });
    it('should update the current month when `initialMonth` is updated', () => {
      const wrapper = mount(<DayPicker />);
      wrapper.setProps({ initialMonth: new Date(2016, 1, 15) });
      const instance = wrapper.instance();
      expect(instance.state.currentMonth.getFullYear()).to.equal(2016);
      expect(instance.state.currentMonth.getMonth()).to.equal(1);
      expect(instance.state.currentMonth.getDate()).to.equal(1);
    });
    it('should not include the interactionDisabled CSS modifier', () => {
      const wrapper = shallow(<DayPicker onDayClick={() => {}} />);
      expect(wrapper).to.not.have.className('DayPicker--interactionDisabled');
    });
    it('should include the given className', () => {
      const wrapper = shallow(<DayPicker className="given" />);
      expect(wrapper).to.have.className('given');
    });
    it('should have the application role', () => {
      const wrapper = shallow(<DayPicker />);
      expect(wrapper).to.have.attr('role', 'application');
    });
    it('should use the given tabIndex', () => {
      const wrapper = shallow(<DayPicker tabIndex={10} />);
      expect(wrapper).to.have.attr('tabindex', '10');
    });
    it('should spread the rest of the props to the container', () => {
      const wrapper = shallow(<DayPicker data-foo="bar" />);
      expect(wrapper).to.have.attr('data-foo', 'bar');
    });
    it('should handle focus and blur events', () => {
      const handleBlur = spy();
      const handleFocus = spy();
      const wrapper = mount(<DayPicker onFocus={handleFocus} onBlur={handleBlur} />);
      wrapper.simulate('focus');
      wrapper.simulate('blur');
      expect(handleBlur).to.have.been.calledOnce;
      expect(handleFocus).to.have.been.calledOnce;
    });
    it('should include the navigation bar', () => {
      const wrapper = render(<DayPicker />);
      expect(wrapper.find('.DayPicker-NavBar')).to.exist;
    });
    it('should render the day cells', () => {
      const wrapper = render(<DayPicker initialMonth={new Date(2015, 6)} />);
      expect(wrapper.find('.DayPicker-Day')).to.have.length(35);
    });
    it('should skip the navigation bar if can\'t change month', () => {
      const wrapper = render(<DayPicker canChangeMonth={false} />);
      expect(wrapper.find('.DayPicker-NavBar')).to.not.exist;
    });
    it('should render a custom number of months', () => {
      const wrapper = render(<DayPicker numberOfMonths={3} />);
      expect(wrapper.find('.DayPicker-Month')).to.have.length(3);
    });
    it('should render a custom caption element', () => {
      const caption = <p>boo</p>;
      const wrapper = mount(<DayPicker captionElement={caption} />);
      expect(wrapper.containsMatchingElement(caption)).to.be.true;
    });
    it('should not render the outside days', () => {
      const wrapper = mount(<DayPicker initialMonth={new Date(2015, 6)} />);
      expect(wrapper.find('.DayPicker-Day').at(0)).to.have.text('');
      expect(wrapper.find('.DayPicker-Day').at(1)).to.have.text('');
      expect(wrapper.find('.DayPicker-Day').at(2)).to.have.text('');
    });
    it('should render the outside days', () => {
      const wrapper = mount(<DayPicker enableOutsideDays initialMonth={new Date(2015, 6)} />);
      expect(wrapper.find('.DayPicker-Day').at(0)).to.have.text('28');
      expect(wrapper.find('.DayPicker-Day').at(1)).to.have.text('29');
      expect(wrapper.find('.DayPicker-Day').at(2)).to.have.text('30');
    });
  });

  describe('day modifiers', () => {
    it('should use `selectedDays` prop as `selected` modifier', () => {
      const wrapper = mount(<DayPicker selectedDays={() => true} modifiers={{ foo: () => true }} />);
      expect(wrapper.find('.DayPicker-Day--selected')).to.have.length(35);
      expect(wrapper.find('.DayPicker-Day--foo')).to.have.length(35);
    });
    it('should add the `aria-selected` attribute for `selected` days', () => {
      const wrapper = mount(<DayPicker selectedDays={() => true} />);
      expect(wrapper.find('.DayPicker-Day--selected').first()).to.have.attr('aria-selected', 'true');
    });
    it('should use `disabledDays` prop as `selected` modifier', () => {
      const wrapper = mount(<DayPicker disabledDays={() => true} modifiers={{ foo: () => true }} />);
      expect(wrapper.find('.DayPicker-Day--disabled')).to.have.length(35);
      expect(wrapper.find('.DayPicker-Day--foo')).to.have.length(35);
    });
    it('should add the `aria-disabled` attribute for `disabled` days', () => {
      const wrapper = mount(<DayPicker disabledDays={() => true} />);
      expect(wrapper.find('.DayPicker-Day--disabled').first()).to.have.attr('aria-disabled', 'true');
    });
    it('should include "outside" for outside days', () => {
      const wrapper = mount(
        <DayPicker initialMonth={new Date(2015, 6)} enableOutsideDays />
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
          initialMonth={new Date(2015, 6)}
          modifiers={modifiers}
        />
      );
      expect(wrapper.find('.DayPicker-Day--firstDayOfMonth')).to.have.length(2);
      expect(wrapper.find('.DayPicker-Day--none')).to.have.length(0);
      expect(wrapper.find('.DayPicker-Day--all')).to.have.length(35);
    });
  });

  describe('showNextMonth()', () => {
    it('should show the next month', () => {
      const instance = shallow(
        <DayPicker
          initialMonth={new Date(2015, 7)}
          enableOutsideDays={false}
          numberOfMonths={2}
        />
      ).instance();
      instance.showNextMonth();
      expect(instance.state.currentMonth.getFullYear()).to.equal(2015);
      expect(instance.state.currentMonth.getMonth()).to.equal(8);
      expect(instance.state.currentMonth.getDate()).to.equal(1);
    });
    it('should call the `onMonthChange` handler', () => {
      const handleMonthChange = spy();
      const instance = mount(
        <DayPicker onMonthChange={handleMonthChange} />
      ).instance();
      instance.showNextMonth();
      expect(handleMonthChange).to.have.been.calledWith(instance.state.currentMonth);
    });
    it('should not show the next month if after `toMonth`', () => {
      const instance = shallow(
        <DayPicker initialMonth={new Date(2015, 7)} toMonth={new Date(2015, 7)} />
      ).instance();
      instance.showNextMonth();
      expect(instance.state.currentMonth.getMonth()).to.equal(7);
    });
  });

  describe('showPreviousMonth()', () => {
    it('should show the previous month', () => {
      const instance = shallow(
        <DayPicker initialMonth={new Date(2015, 7)} enableOutsideDays={false} />
      ).instance();
      instance.showPreviousMonth();
      expect(instance.state.currentMonth.getMonth()).to.equal(6);
      expect(instance.state.currentMonth.getDate()).to.equal(1);
      expect(instance.state.currentMonth.getFullYear()).to.equal(2015);
    });
    it('should call the `onMonthChange` handler', () => {
      const handleMonthChange = spy();
      const instance = mount(
        <DayPicker onMonthChange={handleMonthChange} />
      ).instance();
      instance.showPreviousMonth();
      expect(handleMonthChange).to.have.been.calledWith(instance.state.currentMonth);
    });
    it('should not show the previous month if before `fromMonth`', () => {
      const instance = shallow(
        <DayPicker initialMonth={new Date(2015, 7)} fromMonth={new Date(2015, 7)} />
      ).instance();
      instance.showPreviousMonth();
      expect(instance.state.currentMonth.getMonth()).to.equal(7);
    });
  });

  describe('showNextYear()', () => {
    it('should show the next year', () => {
      const instance = shallow(
        <DayPicker initialMonth={new Date(2015, 7, 1)} />
      ).instance();
      instance.showNextYear();
      expect(instance.state.currentMonth.getMonth()).to.equal(7);
      expect(instance.state.currentMonth.getDate()).to.equal(1);
      expect(instance.state.currentMonth.getFullYear()).to.equal(2016);
    });
    it('should call the `onMonthChange` handler', () => {
      const handleMonthChange = spy();
      const instance = mount(
        <DayPicker onMonthChange={handleMonthChange} />
      ).instance();
      instance.showNextYear();
      expect(handleMonthChange).to.have.been.calledWith(instance.state.currentMonth);
    });
    it('should not show the next year if after `toMonth`', () => {
      const instance = shallow(
        <DayPicker initialMonth={new Date(2015, 7)} toMonth={new Date(2015, 7)} />
      ).instance();
      instance.showNextYear();
      expect(instance.state.currentMonth.getFullYear()).to.equal(2015);
    });
  });

  describe('showPreviousYear()', () => {
    it('should show the previous year', () => {
      const instance = shallow(
        <DayPicker initialMonth={new Date(2015, 7, 1)} />
      ).instance();
      instance.showPreviousYear();
      expect(instance.state.currentMonth.getMonth()).to.equal(7);
      expect(instance.state.currentMonth.getDate()).to.equal(1);
      expect(instance.state.currentMonth.getFullYear()).to.equal(2014);
    });
    it('should call the `onMonthChange` handler', () => {
      const handleMonthChange = spy();
      const instance = mount(<DayPicker onMonthChange={handleMonthChange} />).instance();
      instance.showPreviousYear();
      expect(handleMonthChange).to.have.been.calledWith(instance.state.currentMonth);
    });
    it('should not show the previous year if before `fromMonth`', () => {
      const instance = shallow(
        <DayPicker initialMonth={new Date(2015, 7)} fromMonth={new Date(2015, 7)} />
      ).instance();
      instance.showPreviousYear();
      expect(instance.state.currentMonth.getFullYear()).to.equal(2015);
    });
  });

  describe('showMonth()', () => {
    it('should show the specified month', () => {
      const instance = shallow(<DayPicker initialMonth={new Date(2015, 5, 4)} />).instance();
      instance.showMonth(new Date(2016, 1, 15));
      expect(instance.state.currentMonth.getFullYear()).to.equal(2016);
      expect(instance.state.currentMonth.getMonth()).to.equal(1);
      expect(instance.state.currentMonth.getDate()).to.equal(1);
    });
    it('should not change month if after `toMonth`', () => {
      const instance = shallow(
        <DayPicker initialMonth={new Date(2015, 5)} toMonth={new Date(2015, 5)} />
      ).instance();
      instance.showMonth(new Date(2016, 1, 15));
      expect(instance.state.currentMonth.getFullYear()).to.equal(2015);
      expect(instance.state.currentMonth.getMonth()).to.equal(5);
      expect(instance.state.currentMonth.getDate()).to.equal(1);
    });
    it('should not change month if before `fromMonth`', () => {
      const instance = shallow(
        <DayPicker initialMonth={new Date(2015, 5)} fromMonth={new Date(2015, 5)} />
      ).instance();
      instance.showMonth(new Date(2015, 1));
      expect(instance.state.currentMonth.getFullYear()).to.equal(2015);
      expect(instance.state.currentMonth.getMonth()).to.equal(5);
      expect(instance.state.currentMonth.getDate()).to.equal(1);
    });
  });

  describe('focus methods', () => {
    let wrapper;
    let instance;
    let body;

    beforeEach(() => {
      wrapper = mount(<DayPicker initialMonth={new Date(2015, 5)} />);
      instance = wrapper.instance();
      body = wrapper.find('.DayPicker-Body').nodes[0];
    });

    function getDayNode(monthBody, weekIndex, dayIndex) {
      return monthBody.childNodes[weekIndex].childNodes[dayIndex];
    }

    describe('focusPreviousDay()', () => {
      it('should focus on the previous day of the current month', () => {
        const focusedNode = getDayNode(body, 0, 2);
        const previousNode = getDayNode(body, 0, 1);
        instance.focusPreviousDay(focusedNode);

        expect(focusedNode.innerHTML).to.equal('2');
        expect(previousNode.innerHTML).to.equal('1');
        expect(document.activeElement.innerHTML).to.equal('1');
        expect(instance.state.currentMonth.getMonth()).to.equal(5);
      });
      it('should focus on the last day of the previous week', () => {
        const focusedNode = getDayNode(body, 1, 0);
        const previousNode = getDayNode(body, 0, 6);
        instance.focusPreviousDay(focusedNode);

        expect(focusedNode.innerHTML).to.equal('7');
        expect(previousNode.innerHTML).to.equal('6');
        expect(document.activeElement.innerHTML).to.equal('6');
        expect(instance.state.currentMonth.getMonth()).to.equal(5);
      });
      it('should focus on the last day of the previous month', () => {
        const focusedNode = getDayNode(body, 0, 1);
        instance.focusPreviousDay(focusedNode);

        expect(focusedNode.innerHTML).to.equal('1');
        expect(document.activeElement.innerHTML).to.equal('31');
        expect(instance.state.currentMonth.getMonth()).to.equal(4);
      });
    });

    describe('focusNextDay()', () => {
      it('should focus on the next day of the current month', () => {
        const focusedNode = getDayNode(body, 0, 2);
        const nextNode = getDayNode(body, 0, 3);
        instance.focusNextDay(focusedNode);

        expect(focusedNode.innerHTML).to.equal('2');
        expect(nextNode.innerHTML).to.equal('3');
        expect(document.activeElement.innerHTML).to.equal('3');
        expect(instance.state.currentMonth.getMonth()).to.equal(5);
      });
      it('should focus on the first day of the next week', () => {
        const focusedNode = getDayNode(body, 0, 6);
        const nextNode = getDayNode(body, 1, 0);
        instance.focusNextDay(focusedNode);

        expect(focusedNode.innerHTML).to.equal('6');
        expect(nextNode.innerHTML).to.equal('7');
        expect(document.activeElement.innerHTML).to.equal('7');
        expect(instance.state.currentMonth.getMonth()).to.equal(5);
      });
      it('should focus on the first day of the next month', () => {
        const focusedNode = getDayNode(body, 4, 2);
        instance.focusNextDay(focusedNode);

        expect(focusedNode.innerHTML).to.equal('30');
        expect(document.activeElement.innerHTML).to.equal('1');
        expect(instance.state.currentMonth.getMonth()).to.equal(6);
      });
      it('should focus the first day of the next month after leapday', () => {
        wrapper = mount(<DayPicker initialMonth={new Date(2016, 1)} />);
        instance = wrapper.instance();
        body = wrapper.find('.DayPicker-Body').nodes[0];

        const focusedNode = getDayNode(body, 4, 1);
        instance.focusNextDay(focusedNode);

        expect(focusedNode.innerHTML).to.equal('29');
        expect(document.activeElement.innerHTML).to.equal('1');
        expect(instance.state.currentMonth.getMonth()).to.equal(2);
      });
    });

    describe('focusNextWeek()', () => {
      it('should focus on the same day of the next week', () => {
        const focusedNode = getDayNode(body, 2, 1);
        instance.focusNextWeek(focusedNode);

        expect(focusedNode.innerHTML).to.equal('15');
        expect(document.activeElement.innerHTML).to.equal('22');
        expect(instance.state.currentMonth.getMonth()).to.equal(5);
      });
      it('should focus on the same day of the next week in the next month', () => {
        const juneThirtieth = getDayNode(body, 4, 2);
        expect(juneThirtieth.innerHTML).to.equal('30');

        instance.focusNextWeek(juneThirtieth);
        expect(document.activeElement.innerHTML).to.equal('7');
        expect(instance.state.currentMonth.getMonth()).to.equal(6);

        const julyThirtyFirst = getDayNode(body, 4, 5);
        expect(julyThirtyFirst.innerHTML).to.equal('31');

        instance.focusNextWeek(julyThirtyFirst);
        expect(document.activeElement.innerHTML).to.equal('7');
        expect(instance.state.currentMonth.getMonth()).to.equal(7);
      });
    });

    describe('focusPreviousWeek()', () => {
      it('should focus on the same day of the previous week', () => {
        const focusedNode = getDayNode(body, 2, 1);
        expect(focusedNode.innerHTML).to.equal('15');

        instance.focusPreviousWeek(focusedNode);
        expect(document.activeElement.innerHTML).to.equal('8');
        expect(instance.state.currentMonth.getMonth()).to.equal(5);
      });
      it('should focus on the same day of the previous week in the previous month', () => {
        const juneFirst = getDayNode(body, 0, 1);
        expect(juneFirst.innerHTML).to.equal('1');

        instance.focusPreviousWeek(juneFirst);
        expect(document.activeElement.innerHTML).to.equal('25');
        expect(instance.state.currentMonth.getMonth()).to.equal(4);

        const maySecond = getDayNode(body, 1, 0);
        expect(maySecond.innerHTML).to.equal('3');

        instance.focusPreviousWeek(maySecond);
        expect(document.activeElement.innerHTML).to.equal('26');
        expect(instance.state.currentMonth.getMonth()).to.equal(3);
      });
    });
  });

  describe('events handlers', () => {
    it('should call the `onCaptionClick` handler', () => {
      const handleCaptionClick = spy();
      const wrapper = mount(<DayPicker onCaptionClick={handleCaptionClick} />);
      wrapper.find('.DayPicker-Caption').simulate('click');
      expect(handleCaptionClick).to.have.been.calledWith(
        sinon.match(e => e instanceof SyntheticEvent && e.target !== null, 'e'),
        sinon.match(date => date.getFullYear() === (new Date()).getFullYear() && date.getMonth() === (new Date()).getMonth(), 'currentMonth')
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
          modifiers={modifiers}
          onDayClick={handleDayClick}
          onDayMouseEnter={handleDayMouseEnter}
          onDayMouseLeave={handleDayMouseLeave}
          onDayKeyDown={handleDayKeyDown}
          onDayTouchStart={handleDayTouchStart}
          onDayTouchEnd={handleDayTouchEnd}
        />
      );

      const eventArgs = [
        sinon.match(e => e instanceof SyntheticEvent && e.target !== null, 'e'),
        sinon.match(date => date.getFullYear() === (new Date()).getFullYear() && date.getMonth() === (new Date()).getMonth(), 'currentMonth'),
        sinon.match(mods => mods.foo, 'modifiers'),
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
          initialMonth={new Date(2015, 11, 5)}
          onDayClick={handleDayClick}
          onDayMouseEnter={handleDayMouseEnter}
          onDayMouseLeave={handleDayMouseLeave}
        />
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
          modifiers={modifiers}
          onDayClick={handleDayClick}
        />
      );
      const eventArgs = [
        sinon.match(e => e instanceof SyntheticEvent && e.target !== null, 'e'),
        sinon.match(date => date.getFullYear() === (new Date()).getFullYear() && date.getMonth() === (new Date()).getMonth(), 'currentMonth'),
        sinon.match(mods => mods.foo && !mods.bar, 'modifiers'),
      ];
      wrapper.find('.DayPicker-Day--foo').simulate('keyDown', { keyCode: keys.ENTER });
      expect(handleDayClick).to.have.been.calledWith(...eventArgs);
    });
    it('should call `onDayClick` event handler when pressing the SPACE key', () => {
      const handleDayClick = spy();
      const modifiers = { foo: d => d.getDate() === 15 };
      const wrapper = mount(
        <DayPicker
          modifiers={modifiers}
          onDayClick={handleDayClick}
        />
      );
      const eventArgs = [
        sinon.match(e => e instanceof SyntheticEvent && e.target !== null, 'e'),
        sinon.match(date => date.getFullYear() === (new Date()).getFullYear() && date.getMonth() === (new Date()).getMonth(), 'currentMonth'),
        sinon.match(mods => mods.foo, 'modifiers'),
      ];
      wrapper.find('.DayPicker-Day--foo').simulate('keyDown', { keyCode: keys.SPACE });
      expect(handleDayClick).to.have.been.calledWith(...eventArgs);
    });
    it('should call `onKeyDown` event handler', () => {
      const handleKeyDown = spy();
      const wrapper = mount(<DayPicker onKeyDown={handleKeyDown} />);
      wrapper.simulate('keyDown');
      expect(handleKeyDown).to.have.been.calledWith(
        sinon.match(e => e instanceof SyntheticEvent && e.target !== null, 'e')
      );
    });
    it('should call `onKeyDown` also when changing month is disabled', () => {
      const handleKeyDown = spy();
      const wrapper = mount(<DayPicker onKeyDown={handleKeyDown} canChangeMonth={false} />);
      wrapper.simulate('keyDown');
      expect(handleKeyDown).to.have.been.calledWith(
        sinon.match(e => e instanceof SyntheticEvent && e.target !== null, 'e')
      );
    });
  });

  describe('navigation', () => {
    it('should not allow the previous month when the first month is the first allowed one', () => {
      const wrapper = shallow(
        <DayPicker initialMonth={new Date(2015, 9)} fromMonth={new Date(2015, 9)} numberOfMonths={3} />
        );
      expect(wrapper.instance().allowPreviousMonth()).to.be.false;
    });
    it('should not allow the next month when the last month is the last allowed one', () => {
      const wrapper = shallow(
        <DayPicker initialMonth={new Date(2015, 7)} toMonth={new Date(2015, 9)} numberOfMonths={3} />
      );
      expect(wrapper.instance().allowNextMonth()).to.be.false;
    });
    it('should show the next month when clicking the next button', () => {
      const wrapper = mount(<DayPicker initialMonth={new Date(2015, 7)} />);
      wrapper.find('.DayPicker-NavButton--next').simulate('click');
      const instance = wrapper.instance();
      expect(instance.state.currentMonth.getFullYear()).to.equal(2015);
      expect(instance.state.currentMonth.getMonth()).to.equal(8);
      expect(instance.state.currentMonth.getDate()).to.equal(1);
    });
    it('should show the next month when clicking outside days', () => {
      const wrapper = mount(<DayPicker initialMonth={new Date(2015, 7)} enableOutsideDays onDayClick={() => {}} />);
      wrapper.find('.DayPicker-Day--outside').last().simulate('click');
      const instance = wrapper.instance();
      expect(instance.state.currentMonth.getFullYear()).to.equal(2015);
      expect(instance.state.currentMonth.getMonth()).to.equal(8);
    });
    it('should show the previous month when clicking the previous button', () => {
      const wrapper = mount(<DayPicker initialMonth={new Date(2015, 7)} />);
      wrapper.find('.DayPicker-NavButton--prev').simulate('click');
      const instance = wrapper.instance();
      expect(instance.state.currentMonth.getFullYear()).to.equal(2015);
      expect(instance.state.currentMonth.getMonth()).to.equal(6);
    });
    it('should show the previous month when clicking outside days', () => {
      const wrapper = mount(<DayPicker initialMonth={new Date(2015, 7)} enableOutsideDays onDayClick={() => {}} />);
      wrapper.find('.DayPicker-Day--outside').first().simulate('click');
      const instance = wrapper.instance();
      expect(instance.state.currentMonth.getFullYear()).to.equal(2015);
      expect(instance.state.currentMonth.getMonth()).to.equal(6);
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
  });
});

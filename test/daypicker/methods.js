import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';

import DayPicker from '../../src/DayPicker';

describe('DayPicker’s methods', () => {
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
      expect(handleMonthChange).to.have.been.calledWith(
        instance.state.currentMonth
      );
    });
    it('should not show the next month if after `toMonth`', () => {
      const instance = shallow(
        <DayPicker
          initialMonth={new Date(2015, 7)}
          toMonth={new Date(2015, 7)}
        />
      ).instance();
      instance.showNextMonth();
      expect(instance.state.currentMonth.getMonth()).to.equal(7);
    });
    it('should skip `numberOfMonths` months when `pagedNavigation`', () => {
      const instance = shallow(
        <DayPicker
          initialMonth={new Date(2015, 7)}
          enableOutsideDays={false}
          numberOfMonths={2}
          pagedNavigation
        />
      ).instance();
      instance.showNextMonth();
      expect(instance.state.currentMonth.getFullYear()).to.equal(2015);
      expect(instance.state.currentMonth.getMonth()).to.equal(9);
      expect(instance.state.currentMonth.getDate()).to.equal(1);
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
      expect(handleMonthChange).to.have.been.calledWith(
        instance.state.currentMonth
      );
    });
    it('should not show the previous month if before `fromMonth`', () => {
      const instance = shallow(
        <DayPicker
          initialMonth={new Date(2015, 7)}
          fromMonth={new Date(2015, 7)}
        />
      ).instance();
      instance.showPreviousMonth();
      expect(instance.state.currentMonth.getMonth()).to.equal(7);
    });
    it('should skip `numberOfMonths` months when `pagedNavigation`', () => {
      const instance = shallow(
        <DayPicker
          initialMonth={new Date(2015, 7)}
          enableOutsideDays={false}
          numberOfMonths={2}
          pagedNavigation
        />
      ).instance();
      instance.showPreviousMonth();
      expect(instance.state.currentMonth.getFullYear()).to.equal(2015);
      expect(instance.state.currentMonth.getMonth()).to.equal(5);
      expect(instance.state.currentMonth.getDate()).to.equal(1);
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
      expect(handleMonthChange).to.have.been.calledWith(
        instance.state.currentMonth
      );
    });
    it('should not show the next year if after `toMonth`', () => {
      const instance = shallow(
        <DayPicker
          initialMonth={new Date(2015, 7)}
          toMonth={new Date(2015, 7)}
        />
      ).instance();
      instance.showNextYear();
      expect(instance.state.currentMonth.getFullYear()).to.equal(2015);
    });
    it('should not change the year if cannot change month', () => {
      const instance = shallow(
        <DayPicker initialMonth={new Date(2015, 7)} canChangeMonth={false} />
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
      const instance = mount(
        <DayPicker onMonthChange={handleMonthChange} />
      ).instance();
      instance.showPreviousYear();
      expect(handleMonthChange).to.have.been.calledWith(
        instance.state.currentMonth
      );
    });
    it('should not show the previous year if before `fromMonth`', () => {
      const instance = shallow(
        <DayPicker
          initialMonth={new Date(2015, 7)}
          fromMonth={new Date(2015, 7)}
        />
      ).instance();
      instance.showPreviousYear();
      expect(instance.state.currentMonth.getFullYear()).to.equal(2015);
    });
    it('should not change the year if cannot change month', () => {
      const instance = shallow(
        <DayPicker initialMonth={new Date(2015, 7)} canChangeMonth={false} />
      ).instance();
      instance.showPreviousYear();
      expect(instance.state.currentMonth.getFullYear()).to.equal(2015);
    });
  });

  describe('showMonth()', () => {
    it('should show the specified month', () => {
      const instance = shallow(
        <DayPicker initialMonth={new Date(2015, 5, 4)} />
      ).instance();
      instance.showMonth(new Date(2016, 1, 15));
      expect(instance.state.currentMonth.getFullYear()).to.equal(2016);
      expect(instance.state.currentMonth.getMonth()).to.equal(1);
      expect(instance.state.currentMonth.getDate()).to.equal(1);
    });
    it('should not change month if after `toMonth`', () => {
      const instance = shallow(
        <DayPicker
          initialMonth={new Date(2015, 5)}
          toMonth={new Date(2015, 5)}
        />
      ).instance();
      instance.showMonth(new Date(2016, 1, 15));
      expect(instance.state.currentMonth.getFullYear()).to.equal(2015);
      expect(instance.state.currentMonth.getMonth()).to.equal(5);
      expect(instance.state.currentMonth.getDate()).to.equal(1);
    });
    it('should not change month if before `fromMonth`', () => {
      const instance = shallow(
        <DayPicker
          initialMonth={new Date(2015, 5)}
          fromMonth={new Date(2015, 5)}
        />
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
});

import React from 'react';

import { mount } from 'enzyme';

import moment from 'moment';

import * as keys from '../../src/keys';

import DayPickerInput, { HIDE_TIMEOUT } from '../../src/DayPickerInput';
import DayPicker from '../../src/DayPicker';

describe('DayPickerInput', () => {
  describe('events', () => {
    describe('click', () => {
      it('should show the overlay when the input is clicked', () => {
        const wrapper = mount(<DayPickerInput />);
        wrapper.find('input').simulate('click');
        expect(wrapper.find('.DayPicker')).toBeDefined();
      });
      it('should not show the overlay when the input is disabled', () => {
        const wrapper = mount(
          <DayPickerInput inputProps={{ disabled: true }} />
        );
        wrapper.find('input').simulate('click');
        // The following won't work until https://github.com/airbnb/enzyme/issues/386 is fixed.
        // expect(wrapper.find('.DayPicker')).not.toBeDefined();
      });
      it('should call `onClick` event handler', () => {
        const onClick = jest.fn();
        const wrapper = mount(<DayPickerInput inputProps={{ onClick }} />);
        wrapper.find('input').simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
      });
      it('should call the onDayPickerShow callback', () => {
        const onDayPickerShow = jest.fn();
        const wrapper = mount(
          <DayPickerInput onDayPickerShow={onDayPickerShow} />
        );

        wrapper.find('input').simulate('click');

        expect(onDayPickerShow).toHaveBeenCalledTimes(1);
      });
    });

    describe('focus', () => {
      it('should show the overlay when the input is focused', () => {
        const wrapper = mount(<DayPickerInput />);
        wrapper.find('input').simulate('focus');
        expect(wrapper.find('.DayPicker')).toBeDefined();
      });
      it('should call `onFocus` event handler', () => {
        const onFocus = jest.fn();
        const wrapper = mount(<DayPickerInput inputProps={{ onFocus }} />);
        wrapper.find('input').simulate('focus');
        expect(onFocus).toHaveBeenCalledTimes(1);
      });
      it('should call the onDayPickerShow callback', () => {
        const onDayPickerShow = jest.fn();
        const wrapper = mount(
          <DayPickerInput onDayPickerShow={onDayPickerShow} />
        );

        wrapper.find('input').simulate('focus');

        expect(onDayPickerShow).toHaveBeenCalledTimes(1);
      });
    });

    describe('overlayfocus', () => {
      afterEach(() => {
        document.activeElement.blur();
      });
      it('should focus the input if keepFocus is true', () => {
        const wrapper = mount(<DayPickerInput showOverlay keepFocus />);
        wrapper.find('.DayPickerInput-Overlay').simulate('focus');
        const instance = wrapper.instance();
        expect(document.activeElement).toEqual(instance.input);
      });
      it('should not focus the input if keepFocus is false', () => {
        const wrapper = mount(<DayPickerInput showOverlay keepFocus={false} />);
        wrapper.find('.DayPickerInput-Overlay').simulate('focus');
        const instance = wrapper.instance();
        expect(document.activeElement).not.toEqual(instance.input);
      });
    });
    describe('overlayblur', () => {
      it('should set overlayHasFocus to false', done => {
        const wrapper = mount(<DayPickerInput showOverlay keepFocus />);
        wrapper.find('.DayPickerInput-Overlay').simulate('focus');
        wrapper.find('.DayPickerInput-Overlay').simulate('blur');
        setTimeout(() => {
          wrapper.update();
          expect(wrapper.instance().overlayHasFocus).toBe(false);
          done();
        }, 100);
      });
    });

    describe('blur', () => {
      it('should hide the overlay when the input is blurred', done => {
        const wrapper = mount(<DayPickerInput value="12/15/2017" />);
        wrapper.find('input').simulate('focus');
        wrapper.find('input').simulate('blur');
        setTimeout(() => {
          wrapper.update();
          expect(wrapper.find('.DayPicker')).toHaveLength(0);
          done();
        }, 100);
      });
      it('should call `onBlur` event handler', () => {
        const onBlur = jest.fn();
        const wrapper = mount(<DayPickerInput inputProps={{ onBlur }} />);
        wrapper.find('input').simulate('blur');
        expect(onBlur).toHaveBeenCalledTimes(1);
      });
    });
    describe('change', () => {
      it('should call `onChange` event handler', () => {
        const onChange = jest.fn();
        const wrapper = mount(<DayPickerInput inputProps={{ onChange }} />);
        wrapper.find('input').simulate('change');
        expect(onChange).toHaveBeenCalledTimes(1);
      });
      it('should update the input if its value is empty', () => {
        const wrapper = mount(<DayPickerInput />);
        wrapper.find('input').simulate('change', { target: { value: ' ' } });
        wrapper.update();
        expect(wrapper.find('input')).toHaveProp('value', ' ');
      });
      it("should call `onDayChange` if the input's value is empty", () => {
        const onDayChange = jest.fn();
        const wrapper = mount(<DayPickerInput onDayChange={onDayChange} />);
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: '' } });
        expect(onDayChange).toHaveBeenCalledWith(
          undefined,
          {},
          expect.anything()
        );
      });
      it("should update the input's value if the value is not a valid date", () => {
        const wrapper = mount(<DayPickerInput />);
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'foo' } });
        expect(wrapper.find('input')).toHaveProp('value', 'foo');
      });
      it('should call `onDayChange` with `undefined` if the value is not a valid date', () => {
        const onDayChange = jest.fn();
        const wrapper = mount(<DayPickerInput onDayChange={onDayChange} />);
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'foo' } });
        expect(onDayChange).toHaveBeenCalledWith(
          undefined,
          {},
          expect.anything()
        );
      });
      it("should update the input's value and the displayed month", () => {
        const wrapper = mount(<DayPickerInput />);
        const input = wrapper.find('input');
        wrapper.instance().showDayPicker();
        wrapper.update();
        input.simulate('change', { target: { value: '2013-12-16' } });
        expect(wrapper.find('.DayPicker-Caption').first()).toHaveText(
          'December 2013'
        );
        input.simulate('change', { target: { value: '2015-10-11' } });
        expect(wrapper.find('.DayPicker-Caption').first()).toHaveText(
          'October 2015'
        );
      });
      it('should call `onDayChange` with modifiers', () => {
        const onDayChange = jest.fn();
        const testDay = new Date(2015, 11, 20);
        const wrapper = mount(
          <DayPickerInput
            dayPickerProps={{
              modifiers: { foo: testDay },
              selectedDays: testDay,
              disabledDays: testDay,
            }}
            onDayChange={onDayChange}
          />
        );
        const input = wrapper.find('input');
        wrapper.instance().showDayPicker();
        wrapper.update();
        input.simulate('change', { target: { value: '2015-12-20' } });
        expect(onDayChange).toHaveBeenCalledTimes(1);
        expect(onDayChange.mock.calls[0][0]).toEqual(new Date(2015, 11, 20));
        expect(onDayChange.mock.calls[0][1]).toEqual({
          foo: true,
          selected: true,
          disabled: true,
        });
      });
    });
    describe('hide', () => {
      it('should call `onDayPickerHide` when overlay is being hid', () => {
        const onDayPickerHide = jest.fn();
        const wrapper = mount(
          <DayPickerInput showOverlay onDayPickerHide={onDayPickerHide} />
        );
        wrapper.instance().hideDayPicker();
        expect(onDayPickerHide).toHaveBeenCalledTimes(1);
      });
    });
    describe('keydown', () => {
      it('should hide the overlay on TAB', () => {
        const wrapper = mount(<DayPickerInput />);
        wrapper.instance().showDayPicker();
        wrapper.update();
        wrapper.find('input').simulate('keydown', { keyCode: keys.TAB });
        expect(wrapper.state('showOverlay')).toBe(false);
      });
      it('should show the overlay and call onDayPickerShow on any other key', () => {
        const onDayPickerShow = jest.fn();
        const wrapper = mount(
          <DayPickerInput onDayPickerShow={onDayPickerShow} />
        );

        expect(wrapper.state('showOverlay')).toBe(false);

        wrapper.find('input').simulate('keydown');

        expect(wrapper.state('showOverlay')).toBe(true);
        expect(onDayPickerShow).toHaveBeenCalledTimes(1);
      });
      it('should call `onKeyDown` event handler', () => {
        const onKeyDown = jest.fn();
        const wrapper = mount(<DayPickerInput inputProps={{ onKeyDown }} />);
        wrapper.find('input').simulate('keydown');
        expect(onKeyDown).toHaveBeenCalledTimes(1);
      });
    });
    describe('keyup', () => {
      it('should hide the overlay on ESC', () => {
        const wrapper = mount(<DayPickerInput />);
        wrapper.instance().showDayPicker();
        wrapper.update();
        wrapper.find('input').simulate('keyup', { keyCode: keys.ESC });
        expect(wrapper.state('showOverlay')).toBe(false);
      });
      it('should show the overlay and call onDayPickerShow on any other key', () => {
        const onDayPickerShow = jest.fn();
        const wrapper = mount(
          <DayPickerInput onDayPickerShow={onDayPickerShow} />
        );

        expect(wrapper.state('showOverlay')).toBe(false);

        wrapper.find('input').simulate('keyup');

        expect(wrapper.state('showOverlay')).toBe(true);
        expect(onDayPickerShow).toHaveBeenCalledTimes(1);
      });
      it('should call `onKeyUp` event handler', () => {
        const onKeyUp = jest.fn();
        const wrapper = mount(<DayPickerInput inputProps={{ onKeyUp }} />);
        wrapper.find('input').simulate('keyup');
        expect(onKeyUp).toHaveBeenCalledTimes(1);
      });
    });
    describe('dayclick', () => {
      it('should call `onDayClick` event handler', () => {
        const onDayClick = jest.fn();
        const wrapper = mount(
          <DayPickerInput dayPickerProps={{ onDayClick }} />
        );
        wrapper.instance().showDayPicker();
        wrapper.update();
        wrapper
          .find('.DayPicker-Day')
          .at(6)
          .simulate('click');
        expect(onDayClick).toHaveBeenCalledTimes(1);
      });
      it('should select and display the clicked day', () => {
        const wrapper = mount(
          <DayPickerInput dayPickerProps={{ month: new Date(2017, 1) }} />
        );
        wrapper.instance().showDayPicker();
        wrapper.update();
        wrapper
          .find('.DayPicker-Day')
          .at(10)
          .simulate('click');
        expect(wrapper.find('input')).toHaveProp('value', '2017-2-8');
        expect(wrapper.find('.DayPicker-Caption')).toHaveText('February 2017');
        expect(wrapper.find('.DayPicker-Day--selected')).toHaveText('8');
      });
      it('should call `onDayChange` when clicking on a day', () => {
        const onDayChange = jest.fn();
        const wrapper = mount(
          <DayPickerInput
            onDayChange={onDayChange}
            dayPickerProps={{
              month: new Date(2017, 1),
              modifiers: { foo: new Date(2017, 1, 8) },
            }}
          />
        );
        wrapper.instance().showDayPicker();
        wrapper.update();
        wrapper
          .find('.DayPicker-Day')
          .at(10)
          .simulate('click');
        expect(moment(onDayChange.mock.calls[0][0]).format('L')).toBe(
          '02/08/2017'
        );
        expect(onDayChange.mock.calls[0][1]).toEqual({ foo: true });
      });
      it('should hide the day picker when clicking on a day', done => {
        const wrapper = mount(<DayPickerInput />);
        wrapper.instance().showDayPicker();
        wrapper.update();
        wrapper
          .find('.DayPicker-Day')
          .at(10)
          .simulate('click');
        expect(wrapper.instance().hideTimeout).not.toBeNull();
        setTimeout(() => {
          wrapper.update();
          expect(wrapper.find(DayPicker)).toHaveLength(0);
          done();
        }, HIDE_TIMEOUT + 50);
      });
      it('should not hide the day picker if `hideOnDayClick` is false', () => {
        const wrapper = mount(<DayPickerInput hideOnDayClick={false} />);
        wrapper.instance().showDayPicker();
        wrapper.update();
        wrapper
          .find('.DayPicker-Day')
          .at(10)
          .simulate('click');
        expect(wrapper.instance().hideTimeout).toBeNull();
        expect(wrapper.find('.DayPicker')).toBeDefined();
      });
      it('should unselect the clicked day if already selected (clickUnselectsDay)', () => {
        const wrapper = mount(
          <DayPickerInput
            value="2017-11-8"
            clickUnselectsDay
            dayPickerProps={{
              month: new Date(2017, 10),
              selectedDays: new Date(2017, 10, 8),
            }}
          />
        );
        wrapper.instance().showDayPicker();
        wrapper.update();
        wrapper
          .find('.DayPicker-Day')
          .at(10)
          .simulate('click');
        expect(wrapper.find('input')).toHaveProp('value', '');
        expect(wrapper.find('.DayPicker-Day--selected')).toHaveLength(0);
      });
      it('should unselect the clicked day if already selected (clickUnselectsDay)', () => {
        const wrapper = mount(
          <DayPickerInput
            value="2017-11-8"
            clickUnselectsDay
            dayPickerProps={{
              month: new Date(2017, 10),
              selectedDays: [new Date(2017, 10, 8), new Date(2017, 10, 7)],
            }}
          />
        );
        wrapper.instance().showDayPicker();
        wrapper.update();
        wrapper
          .find('.DayPicker-Day')
          .at(10)
          .simulate('click');
        expect(wrapper.find('input')).toHaveProp('value', '');
        expect(wrapper.find('.DayPicker-Day--selected')).toHaveLength(1);
      });
      it('should call `onDayChange` when clicking a selected day and unselect the day', () => {
        const onDayChange = jest.fn();
        const wrapper = mount(
          <DayPickerInput
            value="2017-2-8"
            onDayChange={onDayChange}
            clickUnselectsDay
            dayPickerProps={{
              month: new Date(2017, 1),
              selectedDays: new Date(2017, 1, 8),
              modifiers: { foo: new Date(2017, 1, 8) },
            }}
          />
        );
        wrapper.instance().showDayPicker();
        wrapper.update();
        wrapper
          .find('.DayPicker-Day')
          .at(10)
          .simulate('click');
        expect(onDayChange).toHaveBeenCalledWith(
          undefined,
          {
            selected: true,
            foo: true,
          },
          expect.anything()
        );
      });
      it('should call `onDayChange` when typing an invalid day', () => {
        const onDayChange = jest.fn();
        const wrapper = mount(
          <DayPickerInput onDayChange={onDayChange} clickUnselectsDay />
        );
        wrapper.update();
        wrapper
          .find('input')
          .simulate('change', { target: { value: '02/07/x' } });
        wrapper.update();
        expect(onDayChange).toHaveBeenCalledWith(
          undefined,
          {},
          expect.anything()
        );
        wrapper.setState({ typedValue: '02/07/x', value: '' });
        expect(wrapper.state('typedValue')).toBe('02/07/x');
        expect(wrapper.find('input')).toHaveProp('value', '02/07/x');
      });
      it('should not call `onDayChange` if the day is disabled', () => {
        const onDayChange = jest.fn();
        const wrapper = mount(
          <DayPickerInput
            value="2017-2-8"
            onDayChange={onDayChange}
            dayPickerProps={{
              month: new Date(2017, 1),
              disabledDays: new Date(2017, 1, 8),
            }}
          />
        );
        wrapper.instance().showDayPicker();
        wrapper.update();
        wrapper
          .find('.DayPicker-Day')
          .at(10)
          .simulate('click');
        expect(onDayChange).not.toHaveBeenCalled();
      });
      it('should use `dayPickerProps.selectedDays` after clicking a day', () => {
        const wrapper = mount(
          <DayPickerInput
            dayPickerProps={{
              month: new Date(2017, 1),
              selectedDays: [new Date(2017, 1, 8), new Date(2017, 1, 9)],
            }}
          />
        );
        wrapper.instance().showDayPicker();
        wrapper.update();
        wrapper
          .find('.DayPicker-Day')
          .at(9)
          .simulate('click');
        const selectedDays = wrapper.find('.DayPicker-Day--selected');
        expect(selectedDays).toHaveLength(2);
        expect(selectedDays.at(0)).toHaveText('8');
        expect(selectedDays.at(1)).toHaveText('9');
      });
      it('should use `dayPickerProps.selectedDays` after typing a valid day', () => {
        const wrapper = mount(
          <DayPickerInput
            dayPickerProps={{
              month: new Date(2017, 1),
              selectedDays: [new Date(2017, 1, 8), new Date(2017, 1, 9)],
            }}
          />
        );
        wrapper.instance().showDayPicker();
        wrapper.update();
        wrapper
          .find('input')
          .simulate('change', { target: { value: '02/07/2017' } });
        const selectedDays = wrapper.find('.DayPicker-Day--selected');
        expect(selectedDays).toHaveLength(2);
        expect(selectedDays.at(0)).toHaveText('8');
        expect(selectedDays.at(1)).toHaveText('9');
      });
    });

    describe('onMonthChange', () => {
      it('should update state when month changes', () => {
        const wrapper = mount(
          <DayPickerInput
            dayPickerProps={{
              initialMonth: new Date(2015, 7),
            }}
          />
        );
        const instance = wrapper.instance();
        instance.showDayPicker();
        wrapper.update();
        instance.getDayPicker().showNextMonth();
        expect(instance.state.month.getMonth()).toEqual(8);
      });

      it('should call onMonthChange when month changes', () => {
        const handleMonthChange = jest.fn();
        const wrapper = mount(
          <DayPickerInput
            dayPickerProps={{
              onMonthChange: handleMonthChange,
              initialMonth: new Date(2015, 7),
            }}
          />
        );
        const instance = wrapper.instance();
        instance.showDayPicker();
        wrapper.update();
        instance.getDayPicker().showNextMonth();
        expect(handleMonthChange).toHaveBeenCalled();
        expect(handleMonthChange.mock.calls[0][0].getMonth()).toEqual(8);
      });
    });
  });
});

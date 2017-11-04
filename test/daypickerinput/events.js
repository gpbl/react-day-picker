import React from 'react';

import { mount } from 'enzyme';

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
      it('should call `onClick` event handler', () => {
        const onClick = jest.fn();
        const wrapper = mount(<DayPickerInput onClick={onClick} />);
        wrapper.find('input').simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
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
        const wrapper = mount(<DayPickerInput onFocus={onFocus} />);
        wrapper.find('input').simulate('focus');
        expect(onFocus).toHaveBeenCalledTimes(1);
      });
    });

    describe('blur', () => {
      it('should hide the overlay when the input is blurred', () => {
        const wrapper = mount(<DayPickerInput value="12/15/2017" />);
        wrapper.find('input').simulate('focus');
        wrapper.find('input').simulate('blur');
        expect(wrapper.find('.DayPicker')).toHaveLength(0);
      });
      it('should call `onBlur` event handler', () => {
        const onBlur = jest.fn();
        const wrapper = mount(<DayPickerInput onBlur={onBlur} />);
        wrapper.find('input').simulate('blur');
        expect(onBlur).toHaveBeenCalledTimes(1);
      });
      it('should focus the input if blur after clicking the overlay', done => {
        const wrapper = mount(<DayPickerInput />);
        wrapper.find('.DayPickerInput').simulate('mousedown');
        const instance = wrapper.instance();
        expect(instance.clickedInside).toBe(true);
        expect(instance.clickTimeout).not.toBeNull();
        wrapper.find('input').simulate('blur');
        setTimeout(() => {
          expect(document.activeElement).toEqual(instance.input);
          done();
        }, 1);
      });
    });

    describe('change', () => {
      it('should call `onChange` event handler', () => {
        const onChange = jest.fn();
        const wrapper = mount(<DayPickerInput onChange={onChange} />);
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
        expect(onDayChange).toHaveBeenCalledWith(undefined, {});
      });
      it("should update the input's value if the value is not a valid date", () => {
        const wrapper = mount(<DayPickerInput />);
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'foo' } });
        expect(wrapper.find('input')).toHaveProp('value', 'foo');
      });
      it('should not call `onDayChange` if the value is not a valid date', () => {
        const onDayChange = jest.fn();
        const wrapper = mount(<DayPickerInput onDayChange={onDayChange} />);
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'foo' } });
        expect(onDayChange).not.toHaveBeenCalled();
      });
      it("should update the input's value and the displayed month", () => {
        const wrapper = mount(<DayPickerInput />);
        const input = wrapper.find('input');
        wrapper.instance().showDayPicker();
        wrapper.update();
        input.simulate('change', { target: { value: '12/16/2013' } });
        expect(wrapper.find('.DayPicker-Caption').first()).toHaveText(
          'December 2013'
        );
        input.simulate('change', { target: { value: '11/10/2015' } });
        expect(wrapper.find('.DayPicker-Caption').first()).toHaveText(
          'November 2015'
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
        input.simulate('change', { target: { value: '12/20/2015' } });
        expect(onDayChange).toHaveBeenCalledTimes(1);
        expect(onDayChange.mock.calls[0][0].format('L')).toBe('12/20/2015');
        expect(onDayChange.mock.calls[0][1]).toEqual({
          foo: true,
          selected: true,
          disabled: true,
        });
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
      it('should call `onKeyUp` event handler', () => {
        const onKeyUp = jest.fn();
        const wrapper = mount(<DayPickerInput onKeyUp={onKeyUp} />);
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
        expect(wrapper.find('input')).toHaveProp('value', '02/08/2017');
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
        expect(onDayChange.mock.calls[0][0].format('L')).toBe('02/08/2017');
        expect(onDayChange.mock.calls[0][1]).toEqual({ foo: true });
      });
      it('should work also when `format` is an array', () => {
        const onDayChange = jest.fn();
        const wrapper = mount(
          <DayPickerInput
            onDayChange={onDayChange}
            format={['L', 'LL']}
            dayPickerProps={{
              month: new Date(2017, 1),
            }}
          />
        );
        wrapper.instance().showDayPicker();
        wrapper.update();
        wrapper
          .find('.DayPicker-Day')
          .at(10)
          .simulate('click');
        expect(onDayChange.mock.calls[0][0].format('L')).toBe('02/08/2017');
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
      it('should unselect the clicked day if already selected', () => {
        const wrapper = mount(
          <DayPickerInput
            value="02/08/2017"
            clickUnselectsDay
            dayPickerProps={{
              month: new Date(2017, 1),
              selectedDays: new Date(2017, 1, 8),
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
      it('should unselect the clicked day if already selected', () => {
        const wrapper = mount(
          <DayPickerInput
            value="02/08/2017"
            clickUnselectsDay
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
          .at(10)
          .simulate('click');
        expect(wrapper.find('input')).toHaveProp('value', '');
        expect(wrapper.find('.DayPicker-Day--selected')).toHaveLength(1);
      });
      it('should call `onDayChange` when clicking a selected day', () => {
        const onDayChange = jest.fn();
        const wrapper = mount(
          <DayPickerInput
            value="02/08/2017"
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
        expect(onDayChange).toHaveBeenCalledWith(undefined, {
          selected: true,
          foo: true,
        });
      });
      it('should not call `onDayChange` if the day is disabled', () => {
        const onDayChange = jest.fn();
        const wrapper = mount(
          <DayPickerInput
            value="02/08/2017"
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
  });
});

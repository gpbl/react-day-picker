import React from 'react';

import { expect } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';

import keys from '../../src/keys';

import DayInput, { HIDE_TIMEOUT } from '../../src/DayInput';
import DayPicker from '../../src/DayPicker';

describe('DayInput', () => {
  describe('events', () => {
    describe('click', () => {
      it('should show the overlay when the input is clicked', () => {
        const wrapper = mount(<DayInput />);
        wrapper.find('input').simulate('click');
        expect(wrapper.find('.DayPicker')).to.exist;
      });
      it('should call `onClick` event handler', () => {
        const onClick = spy();
        const wrapper = mount(<DayInput onClick={onClick} />);
        wrapper.find('input').simulate('click');
        expect(onClick).to.have.been.calledOnce;
      });
    });

    describe('focus', () => {
      it('should show the overlay when the input is focused', () => {
        const wrapper = mount(<DayInput />);
        wrapper.find('input').simulate('focus');
        expect(wrapper.find('.DayPicker')).to.exist;
      });
      it('should call `onFocus` event handler', () => {
        const onFocus = spy();
        const wrapper = mount(<DayInput onFocus={onFocus} />);
        wrapper.find('input').simulate('focus');
        expect(onFocus).to.have.been.calledOnce;
      });
    });

    describe('blur', () => {
      it('should hide the overlay when the input is blurred', () => {
        const wrapper = mount(<DayInput value="12/15/2017" />);
        wrapper.find('input').simulate('focus');
        wrapper.find('input').simulate('blur');
        expect(wrapper.find('.DayPicker')).to.not.exist;
      });
      it('should call `onBlur` event handler', () => {
        const onBlur = spy();
        const wrapper = mount(<DayInput onBlur={onBlur} />);
        wrapper.find('input').simulate('blur');
        expect(onBlur).to.have.been.calledOnce;
      });
      it('should focus the input if blur after clicking the overlay', () => {
        const wrapper = mount(<DayInput />);
        wrapper.find('.DayPickerInput').simulate('mousedown');
        const instance = wrapper.instance();
        expect(instance.clickedInside).to.be.true;
        expect(instance.clickTimeout).to.not.be.null;
        wrapper.find('input').simulate('blur');
        expect(document.activeElement).to.eql(instance.input);
      });
    });

    describe('change', () => {
      it('should call `onChange` event handler', () => {
        const onChange = spy();
        const wrapper = mount(<DayInput onChange={onChange} />);
        wrapper.find('input').simulate('change');
        expect(onChange).to.have.been.calledOnce;
      });
      it("should update the input's value if the value is not a valid date", () => {
        const wrapper = mount(<DayInput />);
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'foo' } });
        expect(wrapper.find('input')).to.have.attr('value', 'foo');
      });
      it('should call `onDayChange` with empty values if the value is not a valid date', () => {
        const onDayChange = spy();
        const wrapper = mount(<DayInput onDayChange={onDayChange} />);
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'foo' } });
        expect(onDayChange).to.have.been.calledWith(undefined, {});
      });
      it("should update the input's value and the displayed month", () => {
        const wrapper = mount(<DayInput />);
        const input = wrapper.find('input');
        wrapper.instance().showDayPicker();
        input.simulate('change', { target: { value: '12/16/2013' } });
        expect(wrapper.find('.DayPicker-Caption').first()).to.have.text(
          'December 2013'
        );
        input.simulate('change', { target: { value: '11/10/2015' } });
        expect(wrapper.find('.DayPicker-Caption').first()).to.have.text(
          'November 2015'
        );
      });
      it('should call `onDayChange` with modifiers', () => {
        const onDayChange = spy();
        const testDay = new Date(2015, 11, 20);
        const wrapper = mount(
          <DayInput
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
        input.simulate('change', { target: { value: '12/20/2015' } });
        expect(onDayChange).to.have.been.calledOnce;
        expect(onDayChange.getCall(0).args[0].format('L')).to.equal(
          '12/20/2015'
        );
        expect(onDayChange.getCall(0).args[1]).to.eql({
          foo: true,
          selected: true,
          disabled: true,
        });
      });
    });
    describe('keyup', () => {
      it('should hide the overlay on ESC', () => {
        const wrapper = mount(<DayInput />);
        wrapper.instance().showDayPicker();
        wrapper.find('input').simulate('keyup', { keyCode: keys.ESC });
        expect(wrapper.state('showOverlay')).to.be.false;
      });
      it('should call `onKeyUp` event handler', () => {
        const onKeyUp = spy();
        const wrapper = mount(<DayInput onKeyUp={onKeyUp} />);
        wrapper.find('input').simulate('keyup');
        expect(onKeyUp).to.have.been.calledOnce;
      });
    });
    describe('dayclick', () => {
      it('should call `onDayClick` event handler', () => {
        const onDayClick = spy();
        const wrapper = mount(
          <DayInput
            dayPickerProps={{
              onDayClick,
            }}
          />
        );
        wrapper.instance().showDayPicker();
        wrapper.find('.DayPicker-Day').at(6).simulate('click');
        expect(onDayClick).to.have.been.calledOnce;
      });
      it('should select and display the clicked day', () => {
        const wrapper = mount(
          <DayInput
            dayPickerProps={{
              month: new Date(2017, 1),
            }}
          />
        );
        wrapper.instance().showDayPicker();
        wrapper.find('.DayPicker-Day').at(10).simulate('click');
        expect(wrapper.find('input')).to.have.attr('value', '02/08/2017');
        expect(wrapper.find('.DayPicker-Caption')).to.have.text(
          'February 2017'
        );
        expect(wrapper.find('.DayPicker-Day--selected')).to.have.text('8');
      });
      it('should call `onDayChange` when clicking on a day', () => {
        const onDayChange = spy();
        const wrapper = mount(
          <DayInput
            onDayChange={onDayChange}
            dayPickerProps={{
              month: new Date(2017, 1),
              modifiers: {
                foo: new Date(2017, 1, 8),
              },
            }}
          />
        );
        wrapper.instance().showDayPicker();
        wrapper.find('.DayPicker-Day').at(10).simulate('click');
        expect(onDayChange.getCall(0).args[0].format('L')).to.equal(
          '02/08/2017'
        );
        expect(onDayChange.getCall(0).args[1]).to.eql({
          foo: true,
        });
      });
      it('should hide the day picker when clicking on a day', done => {
        const wrapper = mount(<DayInput />);
        wrapper.instance().showDayPicker();
        wrapper.find('.DayPicker-Day').at(10).simulate('click');
        expect(wrapper.instance().hideTimeout).to.not.be.null;
        setTimeout(() => {
          expect(wrapper.find(DayPicker)).to.not.exist;
          done();
        }, HIDE_TIMEOUT + 10);
      });
      it('should not hide the day picker if `hideOnDayClick` is false', () => {
        const wrapper = mount(<DayInput hideOnDayClick={false} />);
        wrapper.instance().showDayPicker();
        wrapper.find('.DayPicker-Day').at(10).simulate('click');
        expect(wrapper.instance().hideTimeout).to.be.null;
        expect(wrapper.find('.DayPicker')).to.exist;
      });
      it('should unselect the clicked day if already selected', () => {
        const wrapper = mount(
          <DayInput
            value="02/08/2017"
            dayPickerProps={{
              month: new Date(2017, 1),
              selectedDays: new Date(2017, 1, 8),
            }}
          />
        );
        wrapper.instance().showDayPicker();
        wrapper.find('.DayPicker-Day').at(10).simulate('click');
        expect(wrapper.find('input')).to.have.attr('value', '');
        expect(wrapper.find('.DayPicker-Day--selected')).to.have.length(0);
      });
      it('should call `onDayChange` when clicking a selected day', () => {
        const onDayChange = spy();
        const wrapper = mount(
          <DayInput
            value="02/08/2017"
            onDayChange={onDayChange}
            dayPickerProps={{
              month: new Date(2017, 1),
              selectedDays: new Date(2017, 1, 8),
              modifiers: {
                foo: new Date(2017, 1, 8),
              },
            }}
          />
        );
        wrapper.instance().showDayPicker();
        wrapper.find('.DayPicker-Day').at(10).simulate('click');
        expect(onDayChange).to.have.been.calledWith(undefined, {
          selected: true,
          foo: true,
        });
      });
      it('should not call `onDayChange` if the day is disabled', () => {
        const onDayChange = spy();
        const wrapper = mount(
          <DayInput
            value="02/08/2017"
            onDayChange={onDayChange}
            dayPickerProps={{
              month: new Date(2017, 1),
              disabledDays: new Date(2017, 1, 8),
            }}
          />
        );
        wrapper.instance().showDayPicker();
        wrapper.find('.DayPicker-Day').at(10).simulate('click');
        expect(onDayChange).to.not.have.been.called;
      });
    });
  });
});

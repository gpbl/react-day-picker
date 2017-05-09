import React from 'react';
import PropTypes from 'prop-types';

import { isElement } from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { spy } from 'sinon';

import DayInput from '../../src/DayInput';
import DayPicker from '../../src/DayPicker';

describe('DayInput', () => {
  describe('events', () => {
    describe('focus', () => {
      it('should show the overlay when the input is focused', () => {
        const wrapper = mount(<DayInput />);
        wrapper.find('input').simulate('focus');
        expect(wrapper.find('.DayPicker')).to.exist;
      });
      it('should call the onFocus event handler', () => {
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
      it('should call the onBlur event handler', () => {
        const onBlur = spy();
        const wrapper = mount(<DayInput onBlur={onBlur} />);
        wrapper.find('input').simulate('blur');
        expect(onBlur).to.have.been.calledOnce;
      });
    });

    describe('change', () => {
      it('should call the onChange event handler', () => {
        const onChange = spy();
        const wrapper = mount(<DayInput onChange={onChange} />);
        wrapper.find('input').simulate('change');
        expect(onChange).to.have.been.calledOnce;
      });
      it("should update the input's value if the value is not a valid date", () => {
        const onChange = spy();
        const wrapper = mount(<DayInput onChange={onChange} />);
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
    });
  });
});

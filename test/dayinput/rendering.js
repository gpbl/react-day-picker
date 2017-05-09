import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import DayInput from '../../src/DayInput';
import DayPicker from '../../src/DayPicker';

describe('DayInput', () => {
  describe('rendering', () => {
    it('should have default props', () => {
      const dayPicker = <DayInput />;
      expect(dayPicker.props.dayPickerProps).to.eql({});
      expect(dayPicker.props.value).to.equal('');
      expect(dayPicker.props.format).to.equal('L');
      expect(dayPicker.props.hideOnDayClick).to.equal(true);
      expect(dayPicker.props.component).to.equal('input');
    });
    it('should have the right CSS classes', () => {
      const wrapper = shallow(<DayInput />);
      expect(wrapper).to.have.className('DayPickerInput');
    });
    it('should render an input field with the passed attributes', () => {
      const wrapper = shallow(
        <DayInput value="12/14/2017" placeholder="bar" />
      );
      const input = wrapper.find('input');
      expect(input).to.exist;
      expect(input).to.have.attr('value', '12/14/2017');
      expect(input).to.have.attr('placeholder', 'bar');
    });
    it('should work with not value dates', () => {
      const wrapper = shallow(
        <DayInput value="very wrong" placeholder="bar" />
      );
      const input = wrapper.find('input');
      expect(input).to.have.attr('value', 'very wrong');
      wrapper.instance().showDayPicker();
      expect(wrapper.find(DayPicker)).to.exist;
    });
    it('should show the DayPicker', () => {
      const wrapper = shallow(<DayInput />);
      wrapper.instance().showDayPicker();
      expect(wrapper.find('.DayPickerInput-OverlayWrapper')).to.exist;
      expect(wrapper.find('.DayPickerInput-Overlay')).to.exist;
      expect(wrapper.find(DayPicker)).to.exist;
    });
    it('should hide the DayPicker', () => {
      const wrapper = shallow(<DayInput />);
      wrapper.instance().showDayPicker();
      wrapper.instance().hideDayPicker();

      const dayPicker = wrapper.find(DayPicker);
      expect(dayPicker).to.not.exist;
    });
    it('should pass props to the DayPicker', () => {
      const instance = mount(
        <DayInput
          dayPickerProps={{
            enableOutsideDays: true,
            numberOfMonths: 12,
            fixedWeeks: false,
          }}
        />
      ).instance();
      instance.showDayPicker();
      expect(instance.daypicker.props.fixedWeeks).to.be.false;
      expect(instance.daypicker.props.enableOutsideDays).to.be.true;
      // number of months should be overridden by implementation
      expect(instance.daypicker.props.numberOfMonths).to.equal(1);
    });
    it('should open the daypicker to the month of the selected day', () => {
      const wrapper = mount(<DayInput value="12/15/2017" />);
      wrapper.instance().showDayPicker();
      expect(wrapper.find('.DayPicker-Caption').first()).to.have.text(
        'December 2017'
      );
    });
    it('should display the current value as a selected day', () => {
      const wrapper = mount(<DayInput value="12/15/2017" />);
      wrapper.instance().showDayPicker();
      expect(wrapper.find('.DayPicker-Day--selected')).to.have.length(1);
      expect(wrapper.find('.DayPicker-Day--selected').first()).to.have.text(
        '15'
      );
    });
  });
});

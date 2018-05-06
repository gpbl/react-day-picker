import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import DayPickerInput from '../../src/DayPickerInput';
import DayPicker from '../../src/DayPicker';

describe('DayPickerInput', () => {
  describe('rendering', () => {
    it('should have default props', () => {
      const dayPicker = <DayPickerInput />;
      expect(dayPicker.props.dayPickerProps).toEqual({});
      expect(dayPicker.props.value).toBe('');
      expect(typeof dayPicker.props.formatDate).toBe('function');
      expect(typeof dayPicker.props.parseDate).toBe('function');
      expect(dayPicker.props.hideOnDayClick).toBe(true);
      expect(dayPicker.props.component).toBe('input');
    });
    it('should have the right CSS classes', () => {
      const wrapper = shallow(<DayPickerInput />);
      expect(wrapper).toHaveClassName('DayPickerInput');
    });
    it('should render an input field with the passed attributes', () => {
      const wrapper = shallow(
        <DayPickerInput value="12/14/2017" placeholder="bar" />
      );
      const input = wrapper.find('input');
      expect(input).toBeDefined();
      expect(input).toHaveProp('value', '12/14/2017');
      expect(input).toHaveProp('placeholder', 'bar');
    });
    it('should work with not valid date as value', () => {
      const wrapper = shallow(
        <DayPickerInput value="very wrong" placeholder="bar" />
      );
      const input = wrapper.find('input');
      expect(input).toHaveProp('value', 'very wrong');
      wrapper.instance().showDayPicker();
      wrapper.update();
      expect(wrapper.find(DayPicker)).toBeDefined();
    });
    it('should work with a date object as value', () => {
      const wrapper = shallow(
        <DayPickerInput value={new Date(2018, 4, 12)} placeholder="bar" />
      );
      const input = wrapper.find('input');
      expect(input).toHaveProp('value', '2018-5-12');
    });
    it('should show the DayPicker', () => {
      const wrapper = shallow(<DayPickerInput />);
      wrapper.instance().showDayPicker();
      wrapper.update();
      expect(wrapper.find('.DayPickerInput-OverlayWrapper')).toBeDefined();
      expect(wrapper.find('.DayPickerInput-Overlay')).toBeDefined();
      expect(wrapper.find(DayPicker)).toBeDefined();
    });
    it('should work with custom class names', () => {
      const wrapper = shallow(
        <DayPickerInput
          classNames={{
            container: 'foo-container',
            overlayWrapper: 'foo-overlay-wrapper',
            overlay: 'foo-overlay',
          }}
        />
      );
      wrapper.instance().showDayPicker();
      wrapper.update();
      expect(wrapper.find('.foo-container')).toBeDefined();
      expect(wrapper.find('.foo-overlay-wrapper')).toBeDefined();
      expect(wrapper.find('.foo-overlay')).toBeDefined();
    });
    it('should hide the DayPicker', () => {
      const wrapper = shallow(<DayPickerInput />);
      wrapper.setState({ showOverlay: false });
      wrapper.instance().showDayPicker();
      wrapper.update();
      expect(wrapper.find(DayPicker)).toHaveLength(1);
      wrapper.update();
      wrapper.instance().hideDayPicker();
      expect(wrapper.find('.DayPicker')).toHaveLength(0);
    });
    it('should hide the DayPicker', () => {
      const wrapper = shallow(<DayPickerInput />);
      wrapper.setState({ showOverlay: true });
      wrapper.instance().showDayPicker();
      wrapper.update();
      expect(wrapper.find(DayPicker)).toHaveLength(1);
      wrapper.update();
      wrapper.setState({ showOverlay: false });
      wrapper.instance().hideDayPicker();
      expect(wrapper.find('.DayPicker')).toHaveLength(0);
    });
    it('should pass props to the DayPicker', () => {
      const instance = mount(
        <DayPickerInput
          dayPickerProps={{
            showOutsideDays: true,
            numberOfMonths: 12,
            fixedWeeks: false,
          }}
        />
      ).instance();
      instance.showDayPicker();
      expect(instance.daypicker.props.fixedWeeks).toBe(false);
      expect(instance.daypicker.props.showOutsideDays).toBe(true);
      expect(instance.daypicker.props.numberOfMonths).toBe(12);
    });
    it('should open the daypicker to the month of the selected day', () => {
      const wrapper = mount(<DayPickerInput value="2017-12-15" />);
      wrapper.instance().showDayPicker();
      wrapper.update();
      expect(wrapper.find('.DayPicker-Caption div').first()).toHaveText(
        'December 2017'
      );
    });
    it('should display the current value as a selected day', () => {
      const wrapper = mount(<DayPickerInput value="2017-12-15" />);
      wrapper.instance().showDayPicker();
      wrapper.update();
      expect(wrapper.find('.DayPicker-Day--selected')).toHaveLength(1);
      expect(wrapper.find('.DayPicker-Day--selected')).toHaveText('15');
    });
    it('should clear timeouts when component unmounts', () => {
      const container = document.createElement('div');
      mount(<DayPickerInput />, { attachTo: container });
      const spy = jest.spyOn(window, 'clearTimeout');
      ReactDOM.unmountComponentAtNode(container);
      expect(spy).toHaveBeenCalledTimes(5);
      spy.mockRestore();
    });
    it('should set today when clicking on today button', () => {
      const wrapper = mount(
        <DayPickerInput dayPickerProps={{ todayButton: 'Today' }} />
      );
      wrapper.instance().showDayPicker();
      wrapper.update();
      wrapper.find('.DayPicker-TodayButton').simulate('click');
      const today = new Date();
      expect(wrapper.find('input')).toHaveProp(
        'value',
        `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
      );
    });
  });
  describe('updating props', () => {
    it('should update the current value when `value` prop is updated', () => {
      const wrapper = mount(<DayPickerInput value="2017-12-15" />);
      wrapper.setProps({ value: '01/10/2018' });
      expect(wrapper.instance().state.value).toBe('01/10/2018');
    });
    it('should not update the current value when other props are updated', () => {
      const wrapper = mount(<DayPickerInput value="2017-12-15" />);
      wrapper.setProps({ dayPickerProps: {} });
      expect(wrapper.instance().state.value).toBe('2017-12-15');
    });
    it("should update the displayed month when `dayPickerProps.month`'s month is updated", () => {
      const wrapper = mount(
        <DayPickerInput
          dayPickerProps={{ month: new Date(2017, 11) }}
          value="2017-12-15"
        />
      );
      wrapper.instance().showDayPicker();
      wrapper.update();
      expect(wrapper.find('.DayPicker-Caption').first()).toHaveText(
        'December 2017'
      );
      wrapper.setProps({ dayPickerProps: { month: new Date(2017, 10) } });
      expect(wrapper.instance().state.value).toBe('2017-12-15');
      expect(wrapper.find('.DayPicker-Caption').first()).toHaveText(
        'November 2017'
      );
    });
    it("should update the displayed month when `dayPickerProps.month`'s year is updated", () => {
      const wrapper = mount(
        <DayPickerInput
          dayPickerProps={{ month: new Date(2017, 11) }}
          value="2017-12-15"
        />
      );
      wrapper.instance().showDayPicker();
      wrapper.update();
      expect(wrapper.find('.DayPicker-Caption').first()).toHaveText(
        'December 2017'
      );
      wrapper.setProps({ dayPickerProps: { month: new Date(2016, 10) } });
      expect(wrapper.instance().state.value).toBe('2017-12-15');
      expect(wrapper.find('.DayPicker-Caption').first()).toHaveText(
        'November 2016'
      );
    });
    it('should not change state if month did not change', () => {
      const wrapper = mount(<DayPickerInput value="2017-12-15" />);
      wrapper.instance().showDayPicker();
      wrapper.update();
      expect(wrapper.find('.DayPicker-Caption').first()).toHaveText(
        'December 2017'
      );
      wrapper.setProps({ dayPickerProps: { month: new Date(2017, 11) } });
      expect(wrapper.instance().state.value).toBe('2017-12-15');
      expect(wrapper.find('.DayPicker-Caption').first()).toHaveText(
        'December 2017'
      );
    });
    it('should not update the current value when other props are updated', () => {
      const wrapper = mount(<DayPickerInput value="2017-12-15" />);
      wrapper.setProps({ dayPickerProps: {}, value: '2017-12-15' });
      expect(wrapper.instance().state.value).toBe('2017-12-15');
    });
    it('should update the value when it is passed as Date', () => {
      const wrapper = mount(<DayPickerInput value="2017-12-15" />);
      wrapper.setProps({ dayPickerProps: {}, value: new Date(2017, 11, 16) });
      expect(wrapper.instance().state.value).toBe('2017-12-16');
    });
    it('should update the selected days from prop', () => {
      const wrapper = mount(
        <DayPickerInput
          dayPickerProps={{ selectedDays: new Date(2020, 2, 20) }}
        />
      );
      wrapper.setProps({
        dayPickerProps: { selectedDays: new Date(2020, 2, 10) },
      });
      wrapper.update();
      expect(wrapper.instance().state.selectedDays).toEqual(
        new Date(2020, 2, 10)
      );
    });
  });
});

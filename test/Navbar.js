import React from 'react';
import { shallow } from 'enzyme';

import Navbar from '../src/Navbar';
import { SPACE, ENTER } from '../src/keys';

describe('<Navbar />', () => {
  it('should have default props', () => {
    const navbar = <Navbar />;
    expect(navbar.props.dir).toBe('ltr');
    expect(navbar.props.showPreviousButton).toBe(true);
    expect(navbar.props.showNextButton).toBe(true);
  });
  it('should have the right class name', () => {
    const wrapper = shallow(<Navbar className="DayPicker-NavBar" />);
    expect(wrapper).toHaveClassName('DayPicker-NavBar');
  });
  it('should render the aria labels for buttons', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('.DayPicker-NavButton--prev')).toHaveProp(
      'aria-label',
      'Previous Month'
    );
    expect(wrapper.find('.DayPicker-NavButton--next')).toHaveProp(
      'aria-label',
      'Next Month'
    );
  });
  it('should render custom aria labels', () => {
    const wrapper = shallow(
      <Navbar
        labels={{ nextMonth: 'Successivo', previousMonth: 'Precedente' }}
      />
    );
    expect(wrapper.find('.DayPicker-NavButton--prev')).toHaveProp(
      'aria-label',
      'Precedente'
    );
    expect(wrapper.find('.DayPicker-NavButton--next')).toHaveProp(
      'aria-label',
      'Successivo'
    );
  });
  it('should have the navigation buttons classes', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('.DayPicker-NavButton').at(0)).toHaveClassName(
      'DayPicker-NavButton--prev'
    );
    expect(wrapper.find('.DayPicker-NavButton').at(1)).toHaveClassName(
      'DayPicker-NavButton--next'
    );
  });
  it('should invert buttons position for RTL', () => {
    const wrapper = shallow(<Navbar dir="rtl" />);
    expect(wrapper.find('.DayPicker-NavButton').at(0)).toHaveClassName(
      'DayPicker-NavButton--next'
    );
    expect(wrapper.find('.DayPicker-NavButton').at(1)).toHaveClassName(
      'DayPicker-NavButton--prev'
    );
  });
  it('should disable interaction with the previous button', () => {
    const wrapper = shallow(<Navbar showPreviousButton={false} />);
    expect(wrapper.find('.DayPicker-NavButton--prev')).toHaveClassName(
      '.DayPicker-NavButton--interactionDisabled'
    );
  });
  it('should disable interaction with the next button', () => {
    const wrapper = shallow(<Navbar showNextButton={false} />);
    expect(wrapper.find('.DayPicker-NavButton--next')).toHaveClassName(
      '.DayPicker-NavButton--interactionDisabled'
    );
  });
  it('should disable interaction with the previous button for RTL', () => {
    const wrapper = shallow(<Navbar dir="rtl" showNextButton={false} />);
    expect(wrapper.find('.DayPicker-NavButton--prev')).toHaveClassName(
      '.DayPicker-NavButton--interactionDisabled'
    );
  });
  it('should disable interaction with the next button for RTL', () => {
    const wrapper = shallow(<Navbar dir="rtl" showPreviousButton={false} />);
    expect(wrapper.find('.DayPicker-NavButton--next')).toHaveClassName(
      '.DayPicker-NavButton--interactionDisabled'
    );
  });
  it('should call `onNextClick` when clicking the next button', () => {
    const handleNextClick = jest.fn();
    const wrapper = shallow(<Navbar onNextClick={handleNextClick} />);
    wrapper.find('.DayPicker-NavButton--next').simulate('click');
    expect(handleNextClick).toHaveBeenCalledTimes(1);
  });
  it('should work without `onNextClick`', () => {
    const wrapper = shallow(<Navbar />);
    expect(() =>
      wrapper.find('.DayPicker-NavButton--next').simulate('click')
    ).not.toThrow();
  });
  it('should call `onNextClick` when pressing ENTER or SPACE on the next button', () => {
    const handleNextClick = jest.fn();
    const preventDefault = jest.fn();
    const wrapper = shallow(<Navbar onNextClick={handleNextClick} />);
    const next = wrapper.find('.DayPicker-NavButton--next');
    next.simulate('keydown', { keyCode: ENTER, preventDefault });
    next.simulate('keydown', { keyCode: SPACE, preventDefault });
    expect(handleNextClick).toHaveBeenCalledTimes(2);
    expect(preventDefault).toHaveBeenCalledTimes(2);
  });
  it('should not call `onNextClick` when pressing a key different than ENTER or SPACE on the next button', () => {
    const handleNextClick = jest.fn();
    const wrapper = shallow(<Navbar onNextClick={handleNextClick} />);
    wrapper
      .find('.DayPicker-NavButton--next')
      .simulate('keydown', { keyCode: 1 });
    expect(handleNextClick).not.toHaveBeenCalled();
  });
  it('should call `onPreviousClick` when clicking the prev button', () => {
    const handlePreviousClick = jest.fn();
    const wrapper = shallow(<Navbar onPreviousClick={handlePreviousClick} />);
    wrapper.find('.DayPicker-NavButton--prev').simulate('click');
    expect(handlePreviousClick).toHaveBeenCalledTimes(1);
  });
  it('should work without `onPreviousClick`', () => {
    const wrapper = shallow(<Navbar />);
    expect(() =>
      wrapper.find('.DayPicker-NavButton--prev').simulate('click')
    ).not.toThrow();
  });
  it('should call `onPreviousClick` when pressing ENTER or SPACE on the prev button', () => {
    const handlePreviousClick = jest.fn();
    const preventDefault = jest.fn();
    const wrapper = shallow(<Navbar onPreviousClick={handlePreviousClick} />);
    const prev = wrapper.find('.DayPicker-NavButton--prev');
    prev.simulate('keydown', { keyCode: ENTER, preventDefault });
    prev.simulate('keydown', { keyCode: SPACE, preventDefault });
    expect(handlePreviousClick).toHaveBeenCalledTimes(2);
    expect(preventDefault).toHaveBeenCalledTimes(2);
  });
  it('should not call `onPreviousClick` when pressing a key different than ENTER or SPACE on the prev button', () => {
    const handlePreviousClick = jest.fn();
    const wrapper = shallow(<Navbar onPreviousClick={handlePreviousClick} />);
    wrapper
      .find('.DayPicker-NavButton--prev')
      .simulate('keydown', { keyCode: 1 });
    expect(handlePreviousClick).not.toHaveBeenCalled();
  });
  it('should call `onNextClick` when clicking the prev button for RTL', () => {
    const handleNextClick = jest.fn();
    const wrapper = shallow(<Navbar dir="rtl" onNextClick={handleNextClick} />);
    wrapper.find('.DayPicker-NavButton--prev').simulate('click');
    expect(handleNextClick).toHaveBeenCalledTimes(1);
  });
  it('should call `onPreviousClick` when clicking the next button for RTL', () => {
    const handlePreviousClick = jest.fn();
    const wrapper = shallow(
      <Navbar dir="rtl" onPreviousClick={handlePreviousClick} />
    );
    wrapper.find('.DayPicker-NavButton--next').simulate('click');
    expect(handlePreviousClick).toHaveBeenCalledTimes(1);
  });
});

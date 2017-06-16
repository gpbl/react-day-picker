import React from 'react';
import { shallow } from 'enzyme';

import Navbar from '../src/Navbar';

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
        labels={{
          nextMonth: 'Successivo',
          previousMonth: 'Precedente',
        }}
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
  it('should call `onNextClick` when clicking the next button', () => {
    const handleNextClick = jest.fn();
    const wrapper = shallow(<Navbar onNextClick={handleNextClick} />);
    wrapper.find('.DayPicker-NavButton--next').simulate('click');
    expect(handleNextClick).toHaveBeenCalledTimes(1);
  });
  it('should call `onPreviousClick` when clicking the prev button', () => {
    const handlePreviousClick = jest.fn();
    const wrapper = shallow(<Navbar onPreviousClick={handlePreviousClick} />);
    wrapper.find('.DayPicker-NavButton--prev').simulate('click');
    expect(handlePreviousClick).toHaveBeenCalledTimes(1);
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

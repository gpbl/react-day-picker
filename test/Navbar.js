import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow } from 'enzyme';

import Navbar from '../src/Navbar';

describe('<Navbar />', () => {
  it('should have default props', () => {
    const navbar = <Navbar />;
    expect(navbar.props.dir).to.equal('ltr');
    expect(navbar.props.showPreviousButton).to.be.true;
    expect(navbar.props.showNextButton).to.be.true;
  });
  it('should have the right class name', () => {
    const wrapper = shallow(<Navbar className="DayPicker-NavBar" />);
    expect(wrapper).to.have.className('DayPicker-NavBar');
  });
  it('should have the navigation buttons classes', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('.DayPicker-NavButton').at(0))
      .to.have.className('DayPicker-NavButton--prev');
    expect(wrapper.find('.DayPicker-NavButton').at(1))
        .to.have.className('DayPicker-NavButton--next');
  });
  it('should invert buttons position for RTL', () => {
    const wrapper = shallow(<Navbar dir="rtl" />);
    expect(wrapper.find('.DayPicker-NavButton').at(0))
      .to.have.className('DayPicker-NavButton--next');
    expect(wrapper.find('.DayPicker-NavButton').at(1))
        .to.have.className('DayPicker-NavButton--prev');
  });
  it('should not render the previous button', () => {
    const wrapper = shallow(<Navbar showPreviousButton={ false } />);
    expect(wrapper.find('.DayPicker-NavButton--prev')).to.have.length(0);
  });
  it('should not render the next button', () => {
    const wrapper = shallow(<Navbar showNextButton={ false } />);
    expect(wrapper.find('.DayPicker-NavButton--next')).to.have.length(0);
  });
  it('should call `onNextClick` when clicking the next button', () => {
    const handleNextClick = spy();
    const wrapper = shallow(<Navbar onNextClick={ handleNextClick } />);
    wrapper.find('.DayPicker-NavButton--next').simulate('click');
    expect(handleNextClick).to.have.been.calledOnce;
  });
  it('should call `onPreviousClick` when clicking the prev button', () => {
    const handlePreviousClick = spy();
    const wrapper = shallow(<Navbar onPreviousClick={ handlePreviousClick } />);
    wrapper.find('.DayPicker-NavButton--prev').simulate('click');
    expect(handlePreviousClick).to.have.been.calledOnce;
  });
  it('should call `onNextClick` when clicking the prev button for RTL', () => {
    const handleNextClick = spy();
    const wrapper = shallow(<Navbar dir="rtl" onNextClick={ handleNextClick } />);
    wrapper.find('.DayPicker-NavButton--prev').simulate('click');
    expect(handleNextClick).to.have.been.calledOnce;
  });
  it('should call `onPreviousClick` when clicking the next button for RTL', () => {
    const handlePreviousClick = spy();
    const wrapper = shallow(<Navbar dir="rtl" onPreviousClick={ handlePreviousClick } />);
    wrapper.find('.DayPicker-NavButton--next').simulate('click');
    expect(handlePreviousClick).to.have.been.calledOnce;
  });
});

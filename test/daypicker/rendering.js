import React, { PropTypes } from 'react';

import { isElement } from 'react-addons-test-utils';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { spy } from 'sinon';

import DayPicker from '../../src/DayPicker';

describe('DayPicker’s rendering', () => {
  it('should have default props', () => {
    const dayPicker = <DayPicker />;
    const now = new Date();
    expect(dayPicker.props.initialMonth.getMonth()).to.equal(now.getMonth());
    expect(dayPicker.props.initialMonth.getYear()).to.equal(now.getYear());
    expect(dayPicker.props.numberOfMonths).to.equal(1);
    expect(dayPicker.props.locale).to.equal('en');
    expect(dayPicker.props.enableOutsideDays).to.equal(false);
    expect(dayPicker.props.fixedWeeks).to.equal(false);
    expect(dayPicker.props.canChangeMonth).to.equal(true);
    expect(dayPicker.props.reverseMonths).to.equal(false);
    expect(dayPicker.props.pagedNavigation).to.equal(false);
    expect(dayPicker.props.renderDay).to.be.a('Function');
    expect(dayPicker.props.weekdayElement).to.be.a('object');
    expect(dayPicker.props.navbarElement).to.be.a('object');
    expect(dayPicker.props.tabIndex).to.equal(0);
  });
  it('should have the right CSS classes and attributes', () => {
    const wrapper = shallow(<DayPicker />);
    expect(wrapper).to.have.className('DayPicker');
    expect(wrapper).to.have.attr('lang', 'en');
    expect(wrapper).to.have.className('DayPicker--interactionDisabled');
  });
  it('should use initialMonth as the current month', () => {
    const wrapper = shallow(<DayPicker />);
    const instance = wrapper.instance();
    expect(instance.props.initialMonth.getFullYear())
      .to.equal(instance.state.currentMonth.getFullYear());
    expect(instance.props.initialMonth.getMonth())
      .to.equal(instance.state.currentMonth.getMonth());
    expect(instance.state.currentMonth.getDate())
      .to.equal(1);
  });
  it('should render multiple months', () => {
    const wrapper = shallow(<DayPicker numberOfMonths={ 12 } />);
    expect(wrapper.find('.DayPicker-Month')).to.have.length(12);
  });
  it('should render multiple months, reversed', () => {
    const wrapper = mount(
      <DayPicker initialMonth={ new Date(2015, 0) } numberOfMonths={ 2 } reverseMonths />,
    );
    expect(wrapper.find('.DayPicker-Caption').at(0)).to.have.text('February 2015');
    expect(wrapper.find('.DayPicker-Caption').at(1)).to.have.text('January 2015');
  });
  it('should not include the interactionDisabled CSS modifier', () => {
    const wrapper = shallow(<DayPicker onDayClick={ () => {} } />);
    expect(wrapper).to.not.have.className('DayPicker--interactionDisabled');
  });
  it('should include the given className', () => {
    const wrapper = shallow(<DayPicker className="given" />);
    expect(wrapper).to.have.className('given');
  });
  it('should have the application role', () => {
    const wrapper = shallow(<DayPicker />);
    expect(wrapper).to.have.attr('role', 'application');
  });
  it('should use the given tabIndex', () => {
    const wrapper = shallow(<DayPicker tabIndex={ 10 } />);
    expect(wrapper).to.have.attr('tabindex', '10');
  });
  it('should spread props to the container', () => {
    const wrapper = shallow(<DayPicker containerProps={ { 'data-foo': 'bar' } } />);
    expect(wrapper).to.have.attr('data-foo', 'bar');
  });
  it('should handle focus and blur events', () => {
    const handleBlur = spy();
    const handleFocus = spy();
    const wrapper = mount(<DayPicker onFocus={ handleFocus } onBlur={ handleBlur } />);
    wrapper.simulate('focus');
    wrapper.simulate('blur');
    expect(handleBlur).to.have.been.calledOnce;
    expect(handleFocus).to.have.been.calledOnce;
  });
  it('should include the navigation bar', () => {
    const wrapper = render(<DayPicker />);
    expect(wrapper.find('.DayPicker-NavBar')).to.exist;
  });
  it('should render the day cells', () => {
    const wrapper = render(<DayPicker initialMonth={ new Date(2015, 6) } />);
    expect(wrapper.find('.DayPicker-Day')).to.have.length(35);
  });
  it('should skip the navigation bar if can\'t change month', () => {
    const wrapper = render(<DayPicker canChangeMonth={ false } />);
    expect(wrapper.find('.DayPicker-NavBar')).to.not.exist;
  });
  it('should render a custom content for the cell', () => {
    const renderDay = (day, modifiers) => {
      if (modifiers.foo) {
        return 'bar';
      }
      return 'foo';
    };
    const wrapper = render(
      <DayPicker
        enableOutsideDays
        modifiers={ { foo: () => true } }
        renderDay={ renderDay }
      />);
    expect(wrapper.find('.DayPicker-Day').first()).to.have.text('bar');
  });
  it('should render a custom number of months', () => {
    const wrapper = render(<DayPicker numberOfMonths={ 3 } />);
    expect(wrapper.find('.DayPicker-Month')).to.have.length(3);
  });
  it('should render a custom caption element', () => {
    const Caption = () => <p>boo</p>;
    const wrapper = mount(<DayPicker captionElement={ <Caption /> } />);
    expect(wrapper.containsMatchingElement(<Caption />)).to.be.true;
  });
  it('should render a custom navbar element', () => {
    const CustomNavbar = ({ className }) => <div className={ className }>Navbar</div>;
    CustomNavbar.propTypes = { className: PropTypes.string };
    const navbar = <CustomNavbar />;
    const dayPicker = <DayPicker navbarElement={ navbar } />;
    const wrapper = mount(dayPicker);

    expect(isElement(dayPicker.props.navbarElement)).to.be.true;
    expect(wrapper.containsMatchingElement(navbar)).to.be.true;
    expect(wrapper.find('.DayPicker-NavBar')).to.exist;
    expect(wrapper.find('.DayPicker-NavBar').at(0)).to.have.text('Navbar');
  });
  it('should render a custom weekday element', () => {
    const CustomWeekday = ({ className, weekday }) =>
      <div className={ className }>{weekday}</div>;
    CustomWeekday.propTypes = { className: PropTypes.string, weekday: PropTypes.number };
    const weekday = <CustomWeekday />;
    const dayPicker = <DayPicker weekdayElement={ weekday } />;
    const wrapper = mount(dayPicker);

    expect(isElement(dayPicker.props.weekdayElement)).to.be.true;
    expect(wrapper.containsMatchingElement(weekday)).to.be.true;
    expect(wrapper.find('.DayPicker-Weekday')).to.have.length(7);
    const weekdayDoms = wrapper.find('.DayPicker-Weekday');
    weekdayDoms.forEach((_, i) => {
      expect(weekdayDoms.at(i)).to.have.text(i);
    });
  });
  it('should not render the outside days', () => {
    const wrapper = mount(<DayPicker initialMonth={ new Date(2015, 6) } />);
    expect(wrapper.find('.DayPicker-Day').at(0)).to.have.text('');
    expect(wrapper.find('.DayPicker-Day').at(1)).to.have.text('');
    expect(wrapper.find('.DayPicker-Day').at(2)).to.have.text('');
  });
  it('should render the outside days', () => {
    const wrapper = mount(<DayPicker enableOutsideDays initialMonth={ new Date(2015, 6) } />);
    expect(wrapper.find('.DayPicker-Day').at(0)).to.have.text('28');
    expect(wrapper.find('.DayPicker-Day').at(1)).to.have.text('29');
    expect(wrapper.find('.DayPicker-Day').at(2)).to.have.text('30');
  });
  it('should render the fixed amount of weeks', () => {
    const wrapper = mount(
      <DayPicker enableOutsideDays fixedWeeks initialMonth={ new Date(2015, 1) } />,
    );
    expect(wrapper.find('.DayPicker-Day')).to.have.length(42);
  });
});

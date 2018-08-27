import React from 'react';
import PropTypes from 'prop-types';

import { isElement } from 'react-dom/test-utils';
import { shallow, mount, render } from 'enzyme';

import DayPicker from '../../src/DayPicker';
import Day from '../../src/Day';
import classNames from '../../src/classNames';

describe('DayPicker’s rendering', () => {
  it('should have default props', () => {
    const dayPicker = <DayPicker />;
    const now = new Date();
    expect(dayPicker.props.initialMonth.getMonth()).toBe(now.getMonth());
    expect(dayPicker.props.initialMonth.getYear()).toBe(now.getYear());
    expect(dayPicker.props.numberOfMonths).toBe(1);
    expect(dayPicker.props.locale).toBe('en');
    expect(dayPicker.props.showOutsideDays).toBe(false);
    expect(dayPicker.props.fixedWeeks).toBe(false);
    expect(dayPicker.props.canChangeMonth).toBe(true);
    expect(dayPicker.props.reverseMonths).toBe(false);
    expect(dayPicker.props.pagedNavigation).toBe(false);
    expect(typeof dayPicker.props.renderDay).toBe('function');
    expect(typeof dayPicker.props.weekdayElement).toBe('object');
    expect(typeof dayPicker.props.navbarElement).toBe('object');
    expect(dayPicker.props.tabIndex).toBe(0);
  });
  it('should have the right CSS classes and attributes', () => {
    const wrapper = shallow(<DayPicker />);
    expect(wrapper).toHaveClassName('DayPicker');
    expect(wrapper).toHaveProp('lang', 'en');
    expect(wrapper).toHaveClassName('DayPicker--interactionDisabled');
  });
  it('should use `initialMonth` as the current month', () => {
    const wrapper = shallow(<DayPicker />);
    const instance = wrapper.instance();
    expect(instance.props.initialMonth.getFullYear()).toBe(
      instance.state.currentMonth.getFullYear()
    );
    expect(instance.props.initialMonth.getMonth()).toBe(
      instance.state.currentMonth.getMonth()
    );
    expect(instance.state.currentMonth.getDate()).toBe(1);
  });
  it('should use `month` as the current month instead of `initialMonth`', () => {
    const wrapper = shallow(
      <DayPicker
        month={new Date(2018, 10, 11)}
        initialMonth={new Date(2018, 1, 11)}
      />
    );
    const instance = wrapper.instance();
    expect(instance.props.month.getFullYear()).toBe(
      instance.state.currentMonth.getFullYear()
    );
    expect(instance.props.month.getMonth()).toBe(
      instance.state.currentMonth.getMonth()
    );
    expect(instance.state.currentMonth.getDate()).toBe(1);
  });
  it('should update the current month when `month` is updated', () => {
    const wrapper = mount(<DayPicker month={new Date(2018, 10, 11)} />);
    wrapper.setProps({ month: new Date(2016, 1, 15) });
    const instance = wrapper.instance();
    expect(instance.state.currentMonth.getFullYear()).toBe(2016);
    expect(instance.state.currentMonth.getMonth()).toBe(1);
    expect(instance.state.currentMonth.getDate()).toBe(1);
  });
  it('should not do anything when other props are updated', () => {
    const wrapper = mount(<DayPicker month={new Date(2018, 10, 11)} />);
    wrapper.setProps({ initialMonth: new Date(2014, 10, 11) });
    const instance = wrapper.instance();
    expect(instance.state.currentMonth.getFullYear()).toBe(2018);
    expect(instance.state.currentMonth.getMonth()).toBe(10);
    expect(instance.state.currentMonth.getDate()).toBe(1);
  });
  it('should render multiple months', () => {
    const wrapper = mount(<DayPicker numberOfMonths={12} />);
    expect(wrapper.find('.DayPicker-Month')).toHaveLength(12);
  });
  it('should render multiple months, reversed', () => {
    const wrapper = mount(
      <DayPicker
        initialMonth={new Date(2015, 0)}
        numberOfMonths={2}
        reverseMonths
      />
    );
    expect(wrapper.find('.DayPicker-Caption').at(0)).toHaveText(
      'February 2015'
    );
    expect(wrapper.find('.DayPicker-Caption').at(1)).toHaveText('January 2015');
  });
  it('should not include the interactionDisabled CSS modifier', () => {
    const wrapper = shallow(<DayPicker onDayClick={() => {}} />);
    expect(wrapper).not.toHaveClassName('DayPicker--interactionDisabled');
  });
  it('should include the given className', () => {
    const wrapper = shallow(<DayPicker className="given" />);
    expect(wrapper).toHaveClassName('given');
  });
  it('should use the given tabIndex', () => {
    const wrapper = shallow(<DayPicker tabIndex={-1} />);
    expect(wrapper.find('.DayPicker-wrapper')).toHaveProp('tabIndex', -1);
  });
  it('should spread props to the container', () => {
    const wrapper = shallow(
      <DayPicker containerProps={{ 'data-foo': 'bar' }} />
    );
    expect(wrapper).toHaveProp('data-foo', 'bar');
  });
  it('should handle focus and blur events', () => {
    const handleBlur = jest.fn();
    const handleFocus = jest.fn();
    const wrapper = mount(
      <DayPicker onFocus={handleFocus} onBlur={handleBlur} />
    );
    wrapper.find('.DayPicker-wrapper').simulate('focus');
    wrapper.find('.DayPicker-wrapper').simulate('blur');
    expect(handleBlur).toHaveBeenCalledTimes(1);
    expect(handleFocus).toHaveBeenCalledTimes(1);
  });
  it('should include the navigation bar', () => {
    const wrapper = render(<DayPicker />);
    expect(wrapper.find('.DayPicker-NavBar')).toBeDefined();
  });
  it('should pass corrent month into the navigation bar component', () => {
    const NavBar = () => <div />;
    const dayPicker = <DayPicker navbarElement={NavBar} />;
    const wrapper = shallow(dayPicker);
    expect(wrapper.find(NavBar).props().month).toBeDefined();
  });
  it('should render the aria labels', () => {
    const wrapper = mount(<DayPicker />);
    expect(wrapper.find('.DayPicker-NavButton--prev')).toHaveProp(
      'aria-label',
      'Previous Month'
    );
    expect(wrapper.find('.DayPicker-NavButton--next')).toHaveProp(
      'aria-label',
      'Next Month'
    );
  });
  it('should render the day cells', () => {
    const wrapper = mount(<DayPicker initialMonth={new Date(2015, 6)} />);
    expect(wrapper.find('.DayPicker-Day')).toHaveLength(35);
  });
  it("should skip the navigation bar if can't change month", () => {
    const wrapper = render(<DayPicker canChangeMonth={false} />);
    expect(wrapper.find('.DayPicker-NavBar')).toHaveLength(0);
  });
  it('should render a custom content for the cell', () => {
    const renderDay = (day, modifiers) => {
      if (modifiers.foo) {
        return 'bar';
      }
      return 'foo';
    };
    const wrapper = mount(
      <DayPicker
        showOutsideDays
        modifiers={{ foo: () => true }}
        renderDay={renderDay}
      />
    );
    expect(wrapper.find('.DayPicker-Day').first()).toHaveText('bar');
  });
  it('should render a custom number of months', () => {
    const wrapper = render(<DayPicker numberOfMonths={3} />);
    expect(wrapper.find('.DayPicker-Month')).toHaveLength(3);
  });
  it('should render a custom caption element', () => {
    const Caption = () => <p>boo</p>;
    const wrapper = mount(<DayPicker captionElement={<Caption />} />);
    expect(wrapper.containsMatchingElement(<Caption />)).toBe(true);
  });
  it('should render a custom caption element as a function', () => {
    const Caption = () => <p>boo</p>;
    const wrapper = mount(<DayPicker captionElement={Caption} />);
    expect(wrapper.containsMatchingElement(<Caption />)).toBe(true);
  });
  it('should render a custom caption element as a class', () => {
    /* eslint-disable react/prefer-stateless-function */
    /* eslint-disable react/no-multi-comp */
    class Caption extends React.Component {
      render() {
        return <p>boo</p>;
      }
    }
    const wrapper = mount(<DayPicker captionElement={Caption} />);
    expect(wrapper.containsMatchingElement(<Caption />)).toBe(true);
    /* eslint-enable react/no-multi-comp */
    /* eslint-enable react/prefer-stateless-function */
  });
  it('should render a custom navbar element', () => {
    const CustomNavbar = ({ className }) => (
      <div className={className}>Navbar</div>
    );
    CustomNavbar.propTypes = { className: PropTypes.string };
    const navbar = <CustomNavbar />;
    const dayPicker = <DayPicker navbarElement={navbar} />;
    const wrapper = mount(dayPicker);

    expect(isElement(dayPicker.props.navbarElement)).toBe(true);
    expect(wrapper.containsMatchingElement(navbar)).toBe(true);
    expect(wrapper.find('.DayPicker-NavBar')).toBeDefined();
    expect(wrapper.find('.DayPicker-NavBar').at(0)).toHaveText('Navbar');
  });
  it('should render a custom navbar element as a function', () => {
    const CustomNavbar = ({ className }) => (
      <div className={className}>Navbar</div>
    );
    CustomNavbar.propTypes = { className: PropTypes.string };
    const wrapper = mount(<DayPicker navbarElement={CustomNavbar} />);

    expect(wrapper.containsMatchingElement(<CustomNavbar />)).toBe(true);
    expect(wrapper.find('.DayPicker-NavBar')).toBeDefined();
    expect(wrapper.find('.DayPicker-NavBar').at(0)).toHaveText('Navbar');
  });
  it('should render a custom navbar element as a class', () => {
    /* eslint-disable react/prefer-stateless-function */
    /* eslint-disable react/no-multi-comp */
    class CustomNavbar extends React.Component {
      static propTypes = { className: PropTypes.string };

      render() {
        return <div className={this.props.className}>Navbar</div>;
      }
    }
    const wrapper = mount(<DayPicker navbarElement={CustomNavbar} />);

    expect(wrapper.containsMatchingElement(<CustomNavbar />)).toBe(true);
    expect(wrapper.find('.DayPicker-NavBar')).toBeDefined();
    expect(wrapper.find('.DayPicker-NavBar').at(0)).toHaveText('Navbar');
    /* eslint-enable react/prefer-stateless-function */
    /* eslint-enable react/no-multi-comp */
  });
  it('should render a custom weekday element', () => {
    const CustomWeekday = ({ className, weekday }) => (
      <div className={className}>{weekday}</div>
    );
    CustomWeekday.propTypes = {
      className: PropTypes.string,
      weekday: PropTypes.number,
    };
    const weekday = <CustomWeekday />;
    const dayPicker = <DayPicker weekdayElement={weekday} />;
    const wrapper = mount(dayPicker);

    expect(isElement(dayPicker.props.weekdayElement)).toBe(true);
    expect(wrapper.containsMatchingElement(weekday)).toBe(true);
    expect(wrapper.find('div.DayPicker-Weekday')).toHaveLength(7);
    const weekdayDoms = wrapper.find('div.DayPicker-Weekday');
    weekdayDoms.forEach((_, i) => {
      expect(weekdayDoms.at(i)).toHaveText(i.toString());
    });
  });
  it('should render a custom weekday element as a function', () => {
    const CustomWeekday = ({ className, weekday }) => (
      <div className={className}>{weekday}</div>
    );
    CustomWeekday.propTypes = {
      className: PropTypes.string,
      weekday: PropTypes.number,
    };
    const dayPicker = <DayPicker weekdayElement={CustomWeekday} />;
    const wrapper = mount(dayPicker);

    expect(wrapper.containsMatchingElement(<CustomWeekday />)).toBe(true);
    expect(wrapper.find('div.DayPicker-Weekday')).toHaveLength(7);
    const weekdayDoms = wrapper.find('div.DayPicker-Weekday');
    weekdayDoms.forEach((_, i) => {
      expect(weekdayDoms.at(i)).toHaveText(i.toString());
    });
  });
  it('should render a custom weekday element as a class', () => {
    /* eslint-disable react/prefer-stateless-function */
    /* eslint-disable react/no-multi-comp */
    class CustomWeekday extends React.Component {
      static propTypes = {
        className: PropTypes.string,
        weekday: PropTypes.number,
      };

      render() {
        return <div className={this.props.className}>{this.props.weekday}</div>;
      }
    }
    const dayPicker = <DayPicker weekdayElement={CustomWeekday} />;
    const wrapper = mount(dayPicker);

    expect(wrapper.containsMatchingElement(<CustomWeekday />)).toBe(true);
    expect(wrapper.find('div.DayPicker-Weekday')).toHaveLength(7);
    const weekdayDoms = wrapper.find('div.DayPicker-Weekday');
    weekdayDoms.forEach((_, i) => {
      expect(weekdayDoms.at(i)).toHaveText(i.toString());
    });
    /* eslint-enable react/prefer-stateless-function */
    /* eslint-enable react/no-multi-comp */
  });
  it('should not render the outside days', () => {
    const wrapper = mount(<DayPicker initialMonth={new Date(2015, 6)} />);
    expect(wrapper.find('.DayPicker-Day').at(0)).toHaveText('');
    expect(wrapper.find('.DayPicker-Day').at(1)).toHaveText('');
    expect(wrapper.find('.DayPicker-Day').at(2)).toHaveText('');
  });
  it('should render the outside days', () => {
    const wrapper = mount(
      <DayPicker showOutsideDays initialMonth={new Date(2015, 6)} />
    );
    expect(wrapper.find('.DayPicker-Day').at(0)).toHaveText('28');
    expect(wrapper.find('.DayPicker-Day').at(1)).toHaveText('29');
    expect(wrapper.find('.DayPicker-Day').at(2)).toHaveText('30');
  });
  it('should not allow tabbing to outside days', () => {
    const wrapper = mount(
      <DayPicker showOutsideDays initialMonth={new Date(2015, 6)} />
    );
    expect(
      wrapper
        .find('.DayPicker-Day')
        .at(0)
        .prop('tabIndex')
    ).toBe(-1);
    expect(
      wrapper
        .find('.DayPicker-Day')
        .at(1)
        .prop('tabIndex')
    ).toBe(-1);
    expect(
      wrapper
        .find('.DayPicker-Day')
        .at(2)
        .prop('tabIndex')
    ).toBe(-1);
  });
  it('should render the fixed amount of weeks', () => {
    const wrapper = mount(
      <DayPicker showOutsideDays fixedWeeks initialMonth={new Date(2015, 1)} />
    );
    expect(wrapper.find('.DayPicker-Day')).toHaveLength(42);
  });
  it('should render the today button', () => {
    const wrapper = mount(
      <DayPicker todayButton="foo" initialMonth={new Date(2015, 1)} />
    );
    expect(wrapper.find('.DayPicker-Footer')).toBeDefined();
    expect(wrapper.find('button.DayPicker-TodayButton')).toHaveText('foo');
  });
  it('should render the week numbers', () => {
    const wrapper = mount(
      <DayPicker showWeekNumbers initialMonth={new Date(2015, 1)} />
    );
    expect(wrapper.find('.DayPicker-WeekNumber')).toHaveLength(4);
    expect(wrapper.find('.DayPicker-WeekNumber').at(1)).toHaveText('7');
  });
  it('should use the specified class names', () => {
    const wrapper = mount(
      <DayPicker
        showOutsideDays
        initialMonth={new Date(2015, 1)}
        classNames={{ ...classNames, day: 'foo' }}
        modifiers={{ bar: new Date(2015, 1, 10) }}
      />
    );
    expect(wrapper.find('.foo')).toHaveLength(28);
    expect(wrapper.find('.bar')).toHaveLength(1);
  });
});

describe('Day.shouldComponentUpdate', () => {
  it('should return false if the modifiers object passes a shallow compare', () => {
    const initial = { a: true, b: true };
    const updated = { b: true, a: true };
    const day = shallow(
      <Day day={new Date()} classNames={{ day: 'day' }} modifiers={initial}>
        2
      </Day>
    ).instance();
    const newProps = Object.assign({}, day.props, { modifiers: updated });
    expect(day.shouldComponentUpdate(newProps)).toBeFalsy();
  });

  it('should return false if a new day date is passed that is in the same day', () => {
    const day = shallow(
      <Day day={new Date()} classNames={{ day: 'day' }}>
        2
      </Day>
    ).instance();
    const newProps = Object.assign({}, day.props, { day: new Date() });
    expect(day.shouldComponentUpdate(newProps)).toBeFalsy();
  });

  it('should return false if the modifiersStyles object passes a shallow compare', () => {
    const initial = { a: {}, b: {} };
    const updated = { b: initial.b, a: initial.a };
    const day = shallow(
      <Day
        day={new Date()}
        classNames={{ day: 'day' }}
        modifiersStyles={initial}
      >
        2
      </Day>
    ).instance();
    const newProps = Object.assign({}, day.props, { modifiersStyles: updated });
    expect(day.shouldComponentUpdate(newProps)).toBeFalsy();
  });

  it('should return false when empty does not change', () => {
    const day = shallow(
      <Day day={new Date()} classNames={{ day: 'day' }} empty>
        2
      </Day>
    ).instance();
    const newProps = Object.assign({}, day.props, { empty: true });
    expect(day.shouldComponentUpdate(newProps)).toBeFalsy();
  });

  it('should return true when modifiers change', () => {
    const initial = { a: true, b: true };
    const updated = { c: true, a: true };
    const day = shallow(
      <Day day={new Date()} classNames={{ day: 'day' }} modifiers={initial}>
        2
      </Day>
    ).instance();
    const newProps = Object.assign({}, day.props, { modifiers: updated });
    expect(day.shouldComponentUpdate(newProps)).toBeTruthy();
  });

  it('should return true when the day changes', () => {
    const day = shallow(
      <Day day={new Date()} classNames={{ day: 'day' }}>
        2
      </Day>
    ).instance();
    const newProps = Object.assign({}, day.props, {
      day: new Date(2015, 1, 1),
    });
    expect(day.shouldComponentUpdate(newProps)).toBeTruthy();
  });

  it('should return true when empty changes', () => {
    const day = shallow(
      <Day day={new Date()} classNames={{ day: 'day' }} empty>
        2
      </Day>
    ).instance();
    const newProps = Object.assign({}, day.props, { empty: false });
    expect(day.shouldComponentUpdate(newProps)).toBeTruthy();
  });

  it('should return true when adding a prop', () => {
    const day = shallow(
      <Day day={new Date()} classNames={{ day: 'day' }} empty>
        2
      </Day>
    ).instance();
    const newProps = Object.assign({}, day.props, { onKeyDown: () => {} });
    expect(day.shouldComponentUpdate(newProps)).toBeTruthy();
  });
});

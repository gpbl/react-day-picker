/* eslint-disable react/no-danger, max-len, global-require, import/no-dynamic-require */
/* eslint-env browser */
import React, { Component } from 'react';

import createHistory from 'history/createBrowserHistory';

import './vendors/prism.css';

import AdvancedModifiers from './examples/AdvancedModifiers';
import Birthdays from './examples/Birthdays';
import DisabledDays from './examples/DisabledDays';
import BlockedNavigation from './examples/BlockedNavigation';
import CustomElements from './examples/CustomElements';
import CSSModules from './examples/CSSModules';
import FixedWeeks from './examples/FixedWeeks';
import InputField from './examples/InputField';
import InputFieldOverlay from './examples/InputFieldOverlay';
import Localized from './examples/Localized';
import LocalizedMoment from './examples/LocalizedMoment';
import LocalizedCustom from './examples/LocalizedCustom';
import Modifiers from './examples/Modifiers';
import MultipleDays from './examples/MultipleDays';
import Range from './examples/Range';
import RangeAdvanced from './examples/RangeAdvanced';
import Restricted from './examples/Restricted';
import SelectableDay from './examples/SelectableDay';
import SimpleCalendar from './examples/SimpleCalendar';
import YearCalendar from './examples/YearCalendar';
import YearNavigation from './examples/YearNavigation';

const Prism = require('./vendors/prism');

const history = createHistory();

function getFunctionName(fun) {
  return (fun.toString().match(/function (.+?)\(/) || [''])[1];
}

function getExampleName(location) {
  return location.search.split('?').slice(-1)[0] || 'simple';
}

const EXAMPLES = {
  simple: {
    title: 'Simple Calendar',
    description: 'Display the clicked day in the console.',
    Component: SimpleCalendar,
  },
  modifiers: {
    title: 'Simple modifiers',
    description: 'Use the <code>selectedDays</code> and <code>disabledDays</code> props to style a day as selected or disabled.',
    Component: Modifiers,
  },
  selectable: {
    title: 'Selectable Day',
    description: 'Use the <code>onDayClick</code> event to mark or unmark a day as selected when the user clicks a day cell. Note how the selected day is stored in the parent component’s state, not in the react-day-picker.',
    Component: SelectableDay,
  },
  multipleselect: {
    title: 'Selecting Multiple Days',
    description: 'Pass an array of days to <code>selectDays</code> to select multiple days.',
    Component: MultipleDays,
  },
  disabled: {
    title: 'Disabled Days',
    description: 'Use the <code>disabledDays</code> prop to prevent the selection of a day. Here we are passing a function to disable all the weekend days. <ul><li>Note how the <code>handleDayClick</code> handler is set to not select days marked as <code>disabled</code>.</li></ul>',
    Component: DisabledDays,
  },
  input: {
    title: 'Input Field',
    description: 'Connect the day picker with an input field. Libraries like moment.js can help to parse/validate the input date.',
    Component: InputField,
  },
  fixedWeeks: {
    title: 'Fixed number of weeks',
    description: 'Use <code>fixedWeeks</code> to always display 6 weeks per month.',
    Component: FixedWeeks,
  },
  range: {
    title: 'Range of Days - click',
    description: 'To select a range of days, pass to <code>selectedDays</code> an object with the following shape <code>{ from: &lt;Date&gt;, to: &lt;Date&gt; }</code>.',
    Component: Range,
  },
  rangeAdvanced: {
    title: 'Range of Days – mouse enter',
    description: 'Select a range of days when the mouse enters in a day cell. Some things to note: <ul><li><code>disabledDays</code> can accept an object with a <code>before</code> key to match days before the given one</li><li>the <code>modifiers</code> prop can be used to set custom CSS modifiers, such as <code>--start</code> or <code>--end</code>.</li></ul>',
    Component: RangeAdvanced,
  },
  blocked: {
    title: 'Block Navigation',
    description: 'Set <code>canChangeMonth</code> to <code>false</code> to block the navigation between months and years.',
    Component: BlockedNavigation,
  },
  restricted: {
    title: 'Restrict Months',
    description: 'Use the <code>fromMonth</code> and <code>toMonth</code> props to restrict the navigation between months.',
    Component: Restricted,
  },
  cssModules: {
    title: 'Styling with CSS Modules',
    description: 'Use the <code>classNames</code> prop to pass to the component the styles imported with <a href="https://github.com/css-modules/css-modules">CSS Modules</a>. <ul><li>The imported CSS (to use as template) can be <a href="https://github.com/gpbl/react-day-picker/blob/master/examples/src/styles/cssmodules.css">seen here</a>.</li></ul>',
    Component: CSSModules,
  },
  localized: {
    title: 'Localization',
    description: 'This example shows how to localize the calendar in Italian. Note the use of <code>firstDayOfWeek</code> to set Monday as first day of the week.',
    Component: Localized,
  },
  localizedMoment: {
    title: 'Localization with moment.js',
    description: "This day picker is localized using moment.js. Note the use of the <a href='https://www.w3.org/TR/html/dom.html#the-dir-attribute'>dir attribute</a> to support <abbr title='Right to left'>RTL</abbr> languages. <a href='http://react-day-picker.js.org/Localization.html'>Read more about localization</a>.",
    Component: LocalizedMoment,
  },
  localizedCustom: {
    title: 'Localization (advanced)',
    description: "You can provide your own <code>localeUtils</code>. The following example provides Russian and English localizations.  <a href='http://react-day-picker.js.org/Localization.html'>Read more about localization</a>.",
    Component: LocalizedCustom,
  },
  advancedModifiers: {
    title: 'Advanced Modifiers',
    description: 'Use the <code>modifiers</code> prop to fully customize the aspect and have full control of the calendar behavior. <ul><li>Note how the <code>onDay*</code> props receive the modifiers as third argument.</li></ul>',
    Component: AdvancedModifiers,
  },
  yearNavigation: {
    title: 'Year Navigation',
    description: 'Use the <code>captionElement</code> prop to render your custom element as caption. This example is showing a form to navigate up to the next 10 years.',
    Component: YearNavigation,
  },
  birthdays: {
    title: 'Birthdays',
    description: 'Use the <code>renderDay</code> prop to add custom content to day cells.',
    Component: Birthdays,
  },
  customElements: {
    title: 'Custom Elements',
    description: 'Use <code>weekdayElement</code> or <code>navbarElement</code> to customize with your own React element the weekday or the navigation bar.',
    Component: CustomElements,
  },
  overlay: {
    title: 'Input Field with Overlay',
    description: "A more complex example showing the day picker on input's focus and hiding it on input's blur.",
    Component: InputFieldOverlay,
  },
  year: {
    title: 'Year Calendar',
    description: 'Use <code>numberOfMonths</code> to display a custom number of calendars.',
    Component: YearCalendar,
  },
};

export default class Examples extends Component {
  constructor(props) {
    super(props);
    this.handleHistoryChange = this.handleHistoryChange.bind(this);
  }

  state = {
    currentExample: getExampleName(history.location),
    showNavBar: false,
  };

  componentDidMount() {
    this.unlistenHistory = history.listen(this.handleHistoryChange);
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  componentWillUnmount() {
    this.unlistenHistory();
  }

  handleHistoryChange(location) {
    const currentExample = getExampleName(location);
    if (currentExample in EXAMPLES) {
      this.setState({ currentExample, showNavBar: false }, () =>
        window.scrollTo(0, 0)
      );
    }
  }

  renderNavBarExamples() {
    const links = Object.keys(EXAMPLES).map(name => (
      <a
        href={`.?${name}`}
        onClick={e => {
          e.preventDefault();
          history.push({
            pathname: history.location.pathname,
            search: `?${name}`,
          });
        }}
        key={name}
        className={this.state.currentExample === name ? 'selected' : ''}
      >
        {EXAMPLES[name].title}
      </a>
    ));
    return <div className="NavBar-links">{links}</div>;
  }

  render() {
    const { currentExample, showNavBar } = this.state;

    const ExampleComponent = EXAMPLES[currentExample].Component;
    const componentName =
      ExampleComponent.name || getFunctionName(ExampleComponent);
    let source = require(`!raw-loader!./examples/${componentName}.js`);
    source = source.replace('../../../src', 'react-day-picker');
    source = source.replace(
      '../../../src/addons/MomentLocaleUtils',
      'react-day-picker/moment'
    );
    source = source.replace(
      '../../../src/style.css',
      'react-day-picker/lib/style.css'
    );
    return (
      <div>
        <div
          className="NavBar-toggle"
          onClick={() => {
            this.setState({ showNavBar: !showNavBar });
          }}
        />
        <div className="Header">
          <a href="http://react-day-picker.js.org/">
            <img
              src="https://cloud.githubusercontent.com/assets/120693/17276843/94ad5b62-5734-11e6-9f25-454f50f81122.png"
              style={{ maxWidth: '230px' }}
              alt="react-day-picker"
            />
          </a>
        </div>
        <div className={`Content${showNavBar ? ' navbar-is-visible' : ''}`}>

          <div className="NavBar">
            <div className="NavBar-wrapper">
              <h3>Examples</h3>
              {this.renderNavBarExamples()}

              <h3 style={{ paddingTop: '1rem' }}>About</h3>
              <a href="http://react-day-picker.js.org">
                Documentation
              </a>
              <a href="https://github.com/gpbl/react-day-picker">
                Github
              </a>
              <iframe
                style={{ marginLeft: '1rem', marginTop: '0.5rem' }}
                src="https://ghbtns.com/github-btn.html?user=gpbl&amp;repo=react-day-picker&amp;type=star&amp;count=true"
                frameBorder={0}
                scrolling={0}
                width="110px"
                height="20px"
              />
            </div>
          </div>

          <div className="Examples">
            <h2>
              {EXAMPLES[currentExample].title}
            </h2>
            <p
              dangerouslySetInnerHTML={{
                __html: EXAMPLES[currentExample].description,
              }}
            />
            <div className="Example">

              <div className="Example-Result">
                <ExampleComponent />
              </div>
              <div className="Example-Code">
                <pre>
                  <code className="language-jsx">
                    {source}
                  </code>
                </pre>
              </div>
            </div>

            <p style={{ fontSize: '0.75em' }}>
              <a
                href={`https://github.com/gpbl/react-day-picker/blob/master/examples/src/examples/${ExampleComponent.name}.js`}
              >
                See source on Github
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

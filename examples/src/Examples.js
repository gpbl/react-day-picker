/* eslint-disable react/no-danger, max-len, global-require */
/* eslint-env browser */
import React, { Component } from 'react';

import { createHistory } from 'history';

import './vendors/prism.css';

import Birthdays from './examples/Birthdays';
import DisabledDays from './examples/DisabledDays';
import BlockedNavigation from './examples/BlockedNavigation';
import CustomElements from './examples/CustomElements';
import FixedWeeks from './examples/FixedWeeks';
import InputField from './examples/InputField';
import Localized from './examples/Localized';
import LocalizedCustom from './examples/LocalizedCustom';
import Modifiers from './examples/Modifiers';
import Range from './examples/Range';
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
    description: 'Log the clicked day in the JavaScript Console.',
    Component: SimpleCalendar,
  },
  selectable: {
    title: 'Selectable Day',
    description: "Use the <code>selectedDays</code> prop and <a href='http://www.gpbl.org/react-day-picker/docs/DateUtils.html'>DateUtils</a> to select a day. Note how the selected day is stored in the parent component’s state.",
    Component: SelectableDay,
  },
  disabled: {
    title: 'Disabled Days',
    description: 'Use the <code>disabledDays</code> prop to prevent the selection of days: the <code>handleDayClick</code> handler doesn\'t update the state if the day has been marked as <code>disabled</code>.',
    Component: DisabledDays,
  },
  input: {
    title: 'Input Field',
    description: 'How to connect the day picker with an input field.',
    Component: InputField,
  },
  fixedWeeks: {
    title: 'Fixed number of weeks',
    description: 'Use <code>fixedWeeks</code> to always display 6 weeks per month.',
    Component: FixedWeeks,
  },
  range: {
    title: 'Range of Days',
    description: "Select a range of days using the range functions available in <a href='http://www.gpbl.org/react-day-picker/docs/DateUtils.html'>DateUtils</a>.",
    Component: Range,
  },
  modifiers: {
    title: 'Advanced Modifiers',
    description: 'Use the <code>modifiers</code> prop to customize the aspect and the behaviour for each day. Note how the <code>onDay*</code> props receive the modifiers as third argument.',
    Component: Modifiers,
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
  localized: {
    title: 'Localization (moment.js)',
    description: "This day picker is localized using moment.js. Note the use of the <a href='https://www.w3.org/TR/html/dom.html#the-dir-attribute'>dir attribute</a> to support <abbr title='Right to left'>RTL</abbr> languages. <a href='http://www.gpbl.org/react-day-picker/docs/Localization.html'>Read more about localization</a>.",
    Component: Localized,
  },
  localizedCustom: {
    title: 'Localization (custom)',
    description: "If you prefer to not include external libraries to localize the calendar, you can provide your own <code>localeUtils</code> which is basically a rewrite of the <a href='https://github.com/gpbl/react-day-picker/blob/master/src/LocaleUtils.js'>original one</a>. The following example provides Russian and English localizations.  <a href='http://www.gpbl.org/react-day-picker/docs/Localization.html'>Read more about localization</a>.",
    Component: LocalizedCustom,
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
  year: {
    title: 'Year Calendar',
    description: 'Use <code>numberOfMonths</code> to display a custom number of calendars.',
    Component: YearCalendar,
  },
};

export default class Examples extends Component {

  state = {
    currentExample: getExampleName(history.getCurrentLocation()),
    showNavBar: false,
  };

  componentDidMount() {
    this.unlistenHistory = history.listen(::this.handleHistoryChange);
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
      this.setState({ currentExample, showNavBar: false }, () => window.scrollTo(0, 0));
    }
  }

  renderNavBarExamples() {
    const links = Object.keys(EXAMPLES).map(name =>
      <a
        href={ `.?${name}` }
        onClick={ e => {
          e.preventDefault();
          history.push({ pathname: history.getCurrentLocation().pathname, search: `?${name}` });
        } }
        key={ name }
        className={ this.state.currentExample === name ? 'selected' : '' }
      >
        { EXAMPLES[name].title }
      </a>
    );
    return <div className="NavBar-links">{ links }</div>;
  }

  render() {
    const { currentExample, showNavBar } = this.state;

    const ExampleComponent = EXAMPLES[currentExample].Component;
    const componentName = ExampleComponent.name || getFunctionName(ExampleComponent);
    let source = require(`!raw!./examples/${componentName}.js`);
    source = source.replace('../../../src', 'react-day-picker');
    source = source.replace('../../../src/style.css', 'react-day-picker/lib/style.css');
    return (
      <div>
        <div className="NavBar-toggle" onClick={ () => { this.setState({ showNavBar: !showNavBar }); } } />
        <div className="Header">
          <a href="http://www.gpbl.org/react-day-picker/">
            <img src="https://cloud.githubusercontent.com/assets/120693/17276843/94ad5b62-5734-11e6-9f25-454f50f81122.png" style={ { maxWidth: '230px' } } alt="react-day-picker" />
          </a>
        </div>
        <div className={ `Content${showNavBar ? ' navbar-is-visible' : ''}` }>

          <div className="NavBar">
            <div className="NavBar-wrapper">
              <h3>Examples</h3>
              { this.renderNavBarExamples() }

              <h3 style={ { paddingTop: '1rem' } }>About</h3>
              <a href="http://www.gpbl.org/react-day-picker">
                Documentation
              </a>
              <a href="https://github.com/gpbl/react-day-picker">
                Github
              </a>
              <iframe
                style={ { marginLeft: '1rem', marginTop: '0.5rem' } }
                src="https://ghbtns.com/github-btn.html?user=gpbl&amp;repo=react-day-picker&amp;type=star&amp;count=true"
                frameBorder={ 0 } scrolling={ 0 } width="110px" height="20px"
              ></iframe>
            </div>
          </div>

          <div className="Examples">
            <h2>
                { EXAMPLES[currentExample].title }
            </h2>
            <p dangerouslySetInnerHTML={ { __html: EXAMPLES[currentExample].description } } />
            <div className="Example">

              <div className="Example-Result">
                <ExampleComponent />
              </div>
              <div className="Example-Code">
                <pre>
                  <code className="language-jsx">
                    { source }
                  </code>
                </pre>
              </div>
            </div>

            <p style={ { fontSize: '0.75em' } }>
              <a href={ `https://github.com/gpbl/react-day-picker/blob/master/examples/src/examples/${ExampleComponent.name}.js` }>See source on Github</a>
            </p>
          </div>
        </div>
      </div>

    );
  }

}

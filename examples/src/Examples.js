import React, { Component } from "react";

import { createHistory } from "history";

import Prism from "./vendors/prism";
import "./vendors/prism.css";

import Birthdays from "./examples/Birthdays";
import DisabledDays from "./examples/DisabledDays";
import InputField from "./examples/InputField";
import Localized from "./examples/Localized";
import Range from "./examples/Range";
import Restricted from "./examples/Restricted";
import SelectableDay from "./examples/SelectableDay";
import SimpleCalendar from "./examples/SimpleCalendar";
import TouchEvents from "./examples/TouchEvents";
import YearCalendar from "./examples/YearCalendar";
import YearNavigation from "./examples/YearNavigation";

const history = createHistory();

const EXAMPLES = {
  simple: {
    title: "Simple Calendar",
    description: "This calendar shows the clicked day in an alert dialog.",
    Component: SimpleCalendar
  },
  selectable: {
    title: "Selectable Day",
    description: "This example uses the <code>modifiers</code> prop and <a href='http://www.gpbl.org/react-day-picker/docs/DateUtils.html'>DateUtils</a> to select a day. Note how the selected day is stored in the parent component's state.",
    Component: SelectableDay
  },
  disabled: {
    title: "Disabled Days",
    description: "This example extends the <a href='#selectable'>previous one</a> with a <code>disabled</code> modifier which avoid the user selecting a day in the past. Note that the <code>handleDayClick</code> method does not set the component’s state when a day has been marked as disabled.<br>It also uses the <code>enableOutsideDays</code> prop to display the days outside the current month.",
    Component: DisabledDays
  },
  input: {
    title: "Input Field",
    description: "Binding the calendar with an input field: the user can both change the field’s value or interact with the calendar.",
    Component: InputField
  },
  range: {
    title: "Range of Days",
    description: "Allow the user to select a range of days. This example uses the range functions available in <a href='http://www.gpbl.org/react-day-picker/docs/DateUtils.html'>DateUtils</a>.",
    Component: Range
  },
  restricted: {
    title: "Restrict Months",
    description: "The <code>fromMonth</code> and <code>toMonth</code> props allow to restrict the navigation between months. The following day picker is enabled from April to November 2015. A <code>disabled</code> modifier displays the other days as grayed out.",
    Component: Restricted
  },
  localized: {
    title: "Localized Calendar",
    description: "This calendar is localized using moment.js. <a href='http://www.gpbl.org/react-day-picker/docs/LocalizationMoment.html'>Read more about localization</a>.",
    Component: Localized
  },
  yearNavigation: {
    title: "Year Navigation",
    description: "With the <code>captionElement</code> prop, you can use your own element as month caption. In this example, the caption element is a form to navigate between years and months.",
    Component: YearNavigation
  },
  touch: {
    title: "Touch Events",
    description: "Make a better interaction on touch devices with the included touch event handlers (as <code>onDayTouchTap</code>) and enabling <a href='https://github.com/zilverline/react-tap-event-plugin'>react-touch-tap-event-plugin</a>.",
    Component: TouchEvents
  },
  birthdays: {
    title: "Birthdays",
    description: "Add custom content to days cells using the <code>renderDay</code> prop.",
    Component: Birthdays
  },
  year: {
    title: "Year Calendar",
    description: "Use <code>numberOfMonths</code> to display a custom number of calendars.",
    Component: YearCalendar
  }
};


export default class Examples extends Component {

  state = {
    currentExample: "simple",
    showNavBar: false
  }

  componentDidMount() {
    this.unlistenHistory = history.listen(::this.handleHistoryChange);
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  componentWillUnmount() {
    this.unlistenHistory();
  }

  handleHistoryChange({ hash }) {
    const currentExample = hash.replace("#", "");
    if (currentExample in EXAMPLES) {
      this.setState({ currentExample, showNavBar: false });
    }
  }

  renderNavBarExamples() {
    const links = [];
    const { currentExample } = this.state;
    for (const exampleName in EXAMPLES) {
      links.push(
        <a
          href={`#${exampleName}`}
          key={ exampleName }
          className={currentExample === exampleName ? "selected" : ""}>
          { EXAMPLES[exampleName].title }
        </a>
      );
    }

    return <div className="NavBar-links">{ links }</div>;
  }

  render() {
    const { currentExample, showNavBar } = this.state;

    const ExampleComponent = EXAMPLES[currentExample].Component;

    return (
      <div>
        <div className="NavBar-toggle" onTouchTap={ () => { this.setState({ showNavBar: !showNavBar })}} />
        <div className="Header">
          <h1><a href="http://www.gpbl.org/react-day-picker/">react-day-picker</a></h1>
        </div>
        <div className={ `Content${showNavBar ? " navbar-is-visible" : ""}` }>

          <div className="NavBar">
            <div className="NavBar-wrapper">
              <h3>Examples</h3>
              { this.renderNavBarExamples() }

              <h3 style={{paddingTop: "1rem"}}>About</h3>
              <a href="http://www.gpbl.org/react-day-picker">
                Documentation
              </a>
              <a href="https://github.com/gpbl/react-day-picker">
                Github
              </a>
              <iframe style={{marginLeft: "1rem", marginTop: "0.5rem"}} src="https://ghbtns.com/github-btn.html?user=gpbl&amp;repo=react-day-picker&amp;type=star&amp;count=true"
                frameBorder={0} scrolling={0} width="110px" height="20px"></iframe>
            </div>
          </div>

          <div className="Examples">
            <h2>
                { EXAMPLES[currentExample].title }
            </h2>
            <p dangerouslySetInnerHTML={{ __html: EXAMPLES[currentExample].description }} />
            <div className="Example">

              <div className="Example-Result">
                <ExampleComponent />
              </div>
              <div className="Example-Code">
                <pre>
                  <code className="language-jsx">
                    { require("!raw!./examples/" + ExampleComponent.name + ".js")}
                  </code>
                </pre>
              </div>
            </div>

            <p style={{fontSize: "0.75em"}}>
              <a href={`https://github.com/gpbl/react-day-picker/blob/master/examples/src/examples/${ExampleComponent.name}.js`}>See source on Github</a>
            </p>
          </div>
        </div>
      </div>

    );
  }

}

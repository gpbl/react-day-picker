import React, { Component } from "react";

import { createHistory } from "history";

import Prism from "./vendors/prism";
import "./vendors/prism.css";

import SimpleCalendar from "./examples/SimpleCalendar";
import SelectableDay from "./examples/SelectableDay";
import InputField from "./examples/InputField";
import Range from "./examples/Range";
import Localized from "./examples/Localized";
import TouchEvents from "./examples/TouchEvents";
import Birthdays from "./examples/Birthdays";
import YearCalendar from "./examples/YearCalendar";

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
  input: {
    title: "Input Field",
    description: "Binding the calendar with an input field: users can change the field’s value or interact with the calendar, while both stay in sync.<br>In this example, past days are disabled with a <code>disabled</code> modifier. Setting <code>showOutsideDays</code>, it displays days not belonging to the month.",
    Component: InputField
  },
  range: {
    title: "Range of Days",
    description: "Allow the user to select a range of days. This example uses the range functions available in <a href='http://www.gpbl.org/react-day-picker/docs/DateUtils.html'>DateUtils</a>.",
    Component: Range
  },
  localized: {
    title: "Localized Calendar",
    description: "This calendar is localized using moment.js. <a href='http://www.gpbl.org/react-day-picker/docs/LocalizationMoment.html'>Read more</a>",
    Component: Localized
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
      this.setState({ currentExample });
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
    const { currentExample } = this.state;

    const ExampleComponent = EXAMPLES[currentExample].Component;

    return (
      <div>
        <div className="Header">
          <h1><a href="http://www.gpbl.org/react-day-picker/">react-day-picker</a></h1>
        </div>
        <div className="Content">

          <div className="NavBar">
            <div className="NavBar-sticky">
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
          </div>
        </div>
      </div>

    );
  }

}

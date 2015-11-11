import React, { Component } from "react";

import { createHistory } from "history";

import Prism from "./vendors/prism";
import "./vendors/prism.css";

import SimpleCalendar from "./examples/SimpleCalendar";
import SelectableDay from "./examples/SelectableDay";
import InputField from "./examples/InputField";
import Range from "./examples/Range";
import Localized from "./examples/Localized";
import Birthdays from "./examples/Birthdays";
import YearCalendar from "./examples/YearCalendar";

const history = createHistory();

const EXAMPLES = {
  simple: {
    title: "Simple Calendar",
    Component: SimpleCalendar
  },
  selectable: {
    title: "Selectable Day",
    Component: SelectableDay
  },
  input: {
    title: "Input Field",
    Component: InputField
  },
  range: {
    title: "Range of Days",
    Component: Range
  },
  localized: {
    title: "Localized Calendar",
    Component: Localized
  },
  birthdays: {
    title: "Birthdays",
    Component: Birthdays
  },
  year: {
    title: "Year Calendar",
    Component: YearCalendar
  }
};


export default class Examples extends Component {

  state = {
    currentExample: "simple"
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

  renderNavBar() {
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
          <h1>react-day-picker examples</h1>
        </div>
        <div className="Content">

          <div className="NavBar">
            { this.renderNavBar() }
          </div>

          <div className="Examples">
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

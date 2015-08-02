import React, { Component } from "react";
import Prism from "./vendors/prism";
import SimpleCalendarExample from "./examples/SimpleCalendarExample";
import SelectableDayExample from "./examples/SelectableDayExample";
import InputFieldExample from "./examples/InputFieldExample";
import RangeExample from "./examples/RangeExample";
import LocalizedExample from "./examples/LocalizedExample";
import BirthdaysExample from "./examples/BirthdaysExample";
import YearCalendarExample from "./examples/YearCalendarExample";

const EXAMPLES = {
  simple: {
    title: "Simple Calendar",
    Component: SimpleCalendarExample
  },
  selectable: {
    title: "Selectable Day",
    Component: SelectableDayExample
  },
  input: {
    title: "Input Field",
    Component: InputFieldExample
  },
  range: {
    title: "Range of Days",
    Component: RangeExample
  },
  localized: {
    title: "Localized Calendar",
    Component: LocalizedExample
  },
  birthdays: {
    title: "Birthdays",
    Component: BirthdaysExample
  },
  year: {
    title: "Year Calendar",
    Component: YearCalendarExample
  }
};

class ExamplesPage extends Component {

  static defaultProps = {
    showExample: "simple"
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {
    const { showExample } = this.props;
    const exampleMenu = [];

    for (let exampleName in EXAMPLES) {
      exampleMenu.push(
        <a href={`#examples/${exampleName}`}
          key={ exampleName }
          className={showExample === exampleName ? "selected" : ""}>
          { EXAMPLES[exampleName].title }
        </a>
      );
    }

    const ExampleComponent = EXAMPLES[showExample].Component;

    return (
      <div className="Page-Content Page-Content--max">
        <p className="Menu">
          { exampleMenu }
        </p>
        <div className="Examples" ref="examples">
          <div className="Example">
            <a name={`examples/${showExample}`} />
            <div className="Example-Result">
              <ExampleComponent />
            </div>
            <div className="Example-Code">
              <pre>
                <code className="language-jsx">
                  { require("!raw!./examples/" + ExampleComponent.displayName + ".js")}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default ExamplesPage;

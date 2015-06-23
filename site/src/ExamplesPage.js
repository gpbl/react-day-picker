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
  "Basic calendar": SimpleCalendarExample,
  "Selectable day": SelectableDayExample,
  "Input field": InputFieldExample,
  "Range of days": RangeExample,
  "Localized calendar": LocalizedExample,
  "Birthdays": BirthdaysExample,
  "Year calendar": YearCalendarExample
};

class ExamplesPage extends Component {

  static defaultProps = {
    showExample: "Basic calendar"
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {
    const { showExample } = this.props;
    const exampleMenu = [];

    for (let example in EXAMPLES) {
      exampleMenu.push(
        <a href={`#examples/${example}`}
          key={ example }
          className={showExample === example ? "selected" : ""}>
          { example }
        </a>
      );
    }

    const ExampleComponent = EXAMPLES[showExample];

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

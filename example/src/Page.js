import React, { Component } from "react";

import SimpleCalendarExample from "./SimpleCalendarExample";
import SelectableDayExample from "./SelectableDayExample";
import InputFieldExample from "./InputFieldExample";
import RangeExample from "./RangeExample";
import LocalizedExample from "./LocalizedExample";
import YearCalendarExample from "./YearCalendarExample";

import Prism from "./vendors/prism";
import "./vendors/prism.css";

import "./style/Page.scss";

const EXAMPLES = {
  "Basic calendar": SimpleCalendarExample,
  "Selectable day": SelectableDayExample,
  "Input field": InputFieldExample,
  "Range of days": RangeExample,
  "Localized calendar": LocalizedExample,
  "Year calendar": YearCalendarExample
};

class Page extends Component {

  constructor() {
    super();
    this.state = { currentExample: "Basic calendar" };
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {

    const { currentExample } = this.state;

    const exampleMenu = [];

    for (let example in EXAMPLES) {
      exampleMenu.push(
        <a href="#examples"
          key={ example }
          className={currentExample === example ? "selected" : ""}
          onClick={ this.showExample.bind(this, example) } >
          { example }
        </a>
      );
    }

    const ExampleComponent = EXAMPLES[currentExample];

    return (
      <div className="Page">
        <div className="Page-Header">
          <h1>react-day-picker</h1>
          <h3>
            Modifier-based date picker for React and moment.js.
          </h3>
        </div>
        <div className='Page-Content'>
          <p>
            <b>react-day-picker</b> works with modifiers, as in <a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">BEM-like syntax</a>.
            You set the modifiers as functions returning <code>true</code> or <code>false</code> to change the aspect for each day.
            This gives you more control over the calendar behaviour.
          </p>
          <h3>Features</h3>
          <ul>
            <li>Multilanguage support</li>
            <li>Display multiple months</li>
            <li>Keyboard support</li>
          </ul>
          <pre>
            <code className="language-jsx">
              npm install react-day-picker --save
            </code>
          </pre>
          <p>
            See this project on <a href="https://github.com/gpbl/react-day-picker">github</a>.
          </p>
        </div>
        <div className="Page-Content Page-Content--max">

          <a name="examples" />

          <h2>Examples</h2>

          <p className="Menu">
            { exampleMenu }
          </p>

          <div className="Examples" ref="examples">
            <div className="Example">
              <div className="Example-Result">
                <ExampleComponent />
              </div>
              <div className="Example-Code">
                <pre>
                  <code className="language-jsx">
                    { require("!raw!./" + ExampleComponent.displayName + ".js")}
                  </code>
                </pre>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  showExample(example) {
    this.setState({
      currentExample: example
    });
  }

}

export default Page;

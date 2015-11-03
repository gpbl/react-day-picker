import React, { Component } from "react";

class TipsPage extends Component {

  render() {
    return (
      <div className="Page-Content">
        <h3>
          Localization with moment.js
        </h3>
        <p>
          The package includes a <code>localeUtils</code> library for localizing the calendar using <a href="http://momentjs.com">moment.js</a>
        </p>
        <ul>
          <li>Import it from
            <code>react-day-picker/moment</code>, then use the <code>localeUtils</code> and <code>locale</code> props (see below).
          </li>
          <li>
            Moment.js must be included in your project's dependencies.
          </li>
        </ul>

<pre>
    <code className="language-jsx">
{`import React from "react";

import DayPicker from "react-day-picker";
import { localeUtils } from "react-day-picker/moment";

var MyLocalizedComponent = function() {
  // render the day picker using Italian as locale
  return <DayPicker locale="it" localeUtils={ localeUtils } />
}
`}
</code>
</pre>
        <h3>
          Localization with another library
        </h3>
        <p>
          To localize the day picker with your favorite i18n library, pass to
          the <code>localeUtils</code> prop an object of functions telling the component
          how to localize the content. The object should conform to this protocol:
        </p>
        <pre>
          <code className="language-jsx">
{`{
  formatMonthTitle(d: Date, locale: string): string
  formatWeekdayShort(dayIndex: Number, locale: string): string
  formatWeekdayLong(dayIndex: Number, locale: string): string
  getFirstDayOfWeek(locale: string): string
}
`}
          </code>
        </pre>
        <h3>
          Memoize the modifiers functions for better performance
        </h3>
        <p>
          Functions passed to <code>modifiers</code> prop are called for each day cell when rendering
          the component.  If you are doing heavy calculations in those functions, you may want
          to memoize them to improve performance while the user navigate the calendar.
        </p>
        <p>
          For example, with <a href="https://lodash.com/docs#memoize">lodash/memoize</a>:
        </p>

          <pre>
            <code className="language-jsx">
{`import React from "react";
import { memoize } from "lodash";

function doHeavyThingWithDay (day) {
  // do complex things...
  return true;
}
const modifiers = {
  aModifier: memoize(doHeavyThingWithDay)
};

function myComponent() {
  return <DayPicker modifiers={modifiers} />;
}
`}
            </code>
          </pre>
      </div>
    );
  }


}

export default TipsPage;

import React, { Component } from "react";

class TipsPage extends Component {

  render() {
    return (
      <div className="Page-Content">
        <h4>
          Localization with moment.js
        </h4>
        <p>
          The package includes an addon to localize the calendar with <a href="http://momentjs.com">moment.js</a>. Import it from
          <code>react-day-picker/lib/addons</code> and use the <code>localeUtils</code> and <code>locale</code> props.
          Moment.js must be included in your project's dependencies.
        </p>

<pre>
    <code className="language-jsx">
{`import React from "react";
import { LocaleUtils } from "react-day-picker/lib/addons";

class MyLocalizedCalendar extends React.Component {
  render() {
    // render the day picker using Italian as locale
    return <DayPicker locale="it" localeUtils={ LocaleUtils } />
  }
}
`}
</code>
</pre>
        <h4>
          Localization with another library
        </h4>
        <p>
          To localize the date picker with your favorite i18n library, pass to
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
        <h4>
          Memoize the modifiers functions for better performance
        </h4>
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

class MyComponent extend React.Component {
  render() {
    return <DayPicker modifiers={modifiers} />;
  }
}`}
            </code>
          </pre>
      </div>
    );
  }


}

export default TipsPage;

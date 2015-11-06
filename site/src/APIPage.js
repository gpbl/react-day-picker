import React, { Component } from "react";

class APIPage extends Component {

  render() {
    return (
      <div className="Page-Content">
        <h3>Install via npm</h3>
        <pre className="language-js">
          <code>npm install react-day-picker --save</code>
        </pre>

        <h3>Use as React component</h3>
<pre>
  <code className="language-jsx">
{`import React from "react";
import DayPicker from "react-day-picker";

const modifiers = {
  isFirstOfMonth(day) {
    return day.getDate() === 1
  },
  isDisabled(day) {
    return day.getDay() === 0
  }
}

function MyComponent() {
  return <DayPicker modifiers={modifiers} />;
}
`}


  </code>
</pre>

        <p>
          See <a href="#examples">all the examples</a>.
        </p>

        <h3>Styling</h3>
        <p>
          You should provide your own CSS to style the component. Styling the component is very simple since it follows a BEM-like syntax:
          use <a href="https://github.com/gpbl/react-day-picker/blob/master/src/style.css">this CSS file</a> as
          starting point.
        </p>
        <p>
          You can also import it from <code>react-day-picker/lib/style.css</code>, but keep in mind the style may change within minor releases.
        </p>

        <h3>Props</h3>

        <table className="Api">
          <thead>
            <tr>
              <td>
                Prop
              </td>
              <td>
                Type
              </td>
              <td>Description</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <pre className="language-js">
                  <code>modifiers</code>
                </pre>
              </th>
              <td>
                <p>Object</p>
              </td>
              <td>
                <p>
                  An object of named functions returning a boolean: <code>modifier(day: Date) -> Bool</code>
                </p>
                <p>
                  When a function of this object evaluates <code>true</code>, its name is used as CSS modifier for the day's cell.
                  In your CSS, you define how the cell should looks like with that modifier.
                </p>
                <p>
                  For example, the following modifiers will add a <code>DayPicker-Day--isFirstOfMonth</code> CSS class
                  to the cells of the months' first days, and <code>DayPicker-Day--isDisabled</code> to each Sunday.
                </p>
                <pre>
                  <code className="language-jsx">
{`
function isFirstOfMonth(day) {
  return day.getDate() === 1;
}
function isDisabled(day) {
  return day.getDay() === 0;
}
<DayPicker modifiers={ { isDisabled, isFirstOfMonth } } />
`}

                  </code>
                </pre>
                <p></p>

                <p>
                  By default, the calendar will use <code>--today</code> and <code>--outside</code> modifiers.
                </p>

              </td>
            </tr>
            <tr>
              <th>
                <pre className="language-js">
                  <code>initialMonth</code>
                </pre>
              </th>
              <td>
                <p>Date</p>
              </td>
              <td>
                <p>The month to display in the calendar. Default is the current month.</p>
              </td>
            </tr>
            <tr>
              <th>
                <pre className="language-js">
                  <code>numberOfMonths</code>
                </pre>
              </th>
              <td>
                <p>Number</p>
              </td>
              <td>
                <p>The number of months to render, where <code>initialMonth</code> is the first month.
                Default is <code>1</code>.</p>
              </td>
            </tr>
            <tr>
              <th>
                <pre className="language-js">
                  <code>renderDay</code>
                </pre>
              </th>
              <td>
                <p>Function</p>
              </td>
              <td>
                <p>
                  Returns the content of a day cell. By default, it renders the day's date:
                  <code>(day) => day.getDate()</code>.
                </p>
                <p>
                  It can return React elements. For example, the following code will display the day and the name of the people
                  celebrating a birthday that day.
                </p>
                <pre>
                  <code className="language-jsx">
{`render() {
  function renderDay(day) {
    var birthdays = getBirthdaysForDay(day)
    return (
      <div>
        <div className="day">
          { day.getDate() }
        </div>
        {
          birthdays.map((birthday) =>
            <div className="birthday">
              { birthday.name }
            </div>
        }
      </div>
    )
  }
  return <DayPicker renderDay={renderDay} />;
}`}
                  </code>
                </pre>

              </td>
            </tr>
            <tr>
              <th>
                <pre className="language-js">
                  <code>enableOutsideDays</code>
                </pre>
              </th>
              <td>
                <p>Boolean</p>
              </td>
              <td>
                <p>
                  Display the days outside the current month. Default is <code>false</code>.
                </p>
              </td>
            </tr>
            <tr>
              <th>
                <pre className="language-js">
                  <code>canChangeMonth</code>
                </pre>
              </th>
              <td>
                <p>Boolean</p>
              </td>
              <td>
                <p>
                  Enable the navigation between months. Default is <code>true</code>.
                </p>
              </td>
            </tr>
            <tr>
              <th>
                <pre className="language-js">
                  <code>fromMonth</code>
                </pre>
              </th>
              <td>
                <p>Date</p>
              </td>
              <td>
                <p>
                  The first allowed month. Users won't be able to navigate or interact with the days before it.
                </p>
              </td>
            </tr>
            <tr>
              <th>
                <pre className="language-js">
                  <code>toMonth</code>
                </pre>
              </th>
              <td>
                <p>Date</p>
              </td>
              <td>
                <p>
                  The last allowed month. Users won't be able to navigate or interact with the days after it.
                </p>
              </td>
            </tr>
            <tr>
              <th>
                <pre className="language-js">
                  <code>localeUtils</code>
                </pre>
              </th>
              <td>
                <p>Object</p>
              </td>
              <td>
                <p>
                  Object of functions to format dates and to get the first
                  day of the week. Pass your own utils to support localization.
                </p>
                <p>
                  Must conform to the following protocol:
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
                <p>
                  By default the used locale is English (US). See also <a href="#tips">Localization with moment.js</a>
                </p>
              </td>
            </tr>
            <tr>
              <th>
                <pre className="language-js">
                  <code>locale</code>
                </pre>
              </th>
              <td>
                <p>String</p>
              </td>
              <td>
                <p>
                  The locale used by the <code>localeUtils</code> functions.
                  Default is <code>en</code>.
                </p>
              </td>
            </tr>
            <tr>
              <th>
                <pre className="language-js">
                  <code>onDayClick</code>
                </pre>
              </th>
              <td>
                <p>Function</p>
              </td>
              <td>
                <p>
                  Event handler when the user clicks on a day cell. Example:
                </p>
                <pre>
                  <code className="language-jsx">
{`function onDayClick(e, day, modifiers) {
  console.log("Day %s has been clicked", day.toString());
}`}
                  </code>
                </pre>
              </td>
            </tr>
             <tr>
              <th>
                <pre className="language-js">
                  <code>onDayTouchTap</code>
                </pre>
              </th>
              <td>
                <p>Function</p>
              </td>
              <td>
                <p>
                  Event handler when the user taps (or click) on a day cell. Requires <a
                  href="https://github.com/zilverline/react-tap-event-plugin">react-tap-event-plugin</a>. Example:
                </p>
                <pre>
                  <code className="language-jsx">
{`
import reactTapEvent from "react-tap-event-plugin";
reactTapEvent()

function onDayTouchTap(e, day, modifiers) {
  console.log("Day %s has been tapped", day.toString());
}`}
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <th>
                <pre className="language-js">
                  <code>onDayMouseEnter</code>
                </pre>
              </th>
              <td>
                <p>Function</p>
              </td>
              <td>
                <p>
                  Event handler when the mouse enters a day cell. Example:
                </p>
                <pre>
                  <code className="language-jsx">
{`function onDayMouseEnter(e, day, modifiers) {
    // do stuff, e.g. show a tooltip
}`}
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <th>
                <pre className="language-js">
                  <code>onDayMouseLeave</code>
                </pre>
              </th>
              <td>
                <p>Function</p>
              </td>
              <td>
                <p>
                  Event handler when the mouse leave a day cell. Example:
                </p>
                <pre>
                  <code className="language-jsx">
{`function onDayMouseLeave(e, day, modifiers) {
   // do things, e.g. hide a tooltip
}`}
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <th>
                <pre className="language-js">
                  <code>onMonthChange</code>
                </pre>
              </th>
              <td>
                <p>Function</p>
              </td>
              <td>
                <p>
                  Event handler when the month is changed, i.e. clicking the
                  navigation buttons or using the keyboard. Example:
                </p>
                <pre>
                  <code className="language-jsx">
{`function onMonthChange(month) {
   // do magic, e.g. request a server for days availability
}`}
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <th>
                <pre className="language-js">
                  <code>onCaptionClick</code>
                </pre>
              </th>
              <td>
                <p>Function</p>
              </td>
              <td>
                <p>
                  Event handler when the user clicks on the caption in the header displaying the month. Example:
                </p>
                <pre>
                  <code className="language-jsx">
{`function onCaptionClick(e, currentMonth) {
  // Set daypicker to initial month
  var daypicker = this.refs.daypicker;
  daypicker.showMonth(daypicker.props.initialMonth);
}`}
                  </code>
                </pre>
              </td>
            </tr>
            <tr>
              <th>
                <pre className="language-js">
                  <code>className</code>
                </pre>
              </th>
              <td>
                <p>String</p>
              </td>
              <td>
                <p>
                  Class names to add to the root node.
                </p>
              </td>
            </tr>
            <tr>
              <th>
                <pre className="language-js">
                  <code>style</code>
                </pre>
              </th>
              <td>
                <p>Object</p>
              </td>
              <td>
                <p>
                  A custom style object to add to the root node.
                </p>
              </td>
            </tr>
            <tr>
              <th>
                <pre className="language-js">
                  <code>tabIndex</code>
                </pre>
              </th>
              <td>
                <p>Number</p>
              </td>
              <td>
                <p>
                  The tab index for keyboard navigation. Default is <code>0</code>.
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Methods</h3>
        <table className="Api">
          <thead>
            <tr>
              <td>
                Name
              </td>
              <td>Description</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <pre className="language-js">
                  <code>showMonth(d: Date)</code>
                </pre>
              </th>
              <td>
                <p>Shows the specified month.</p>
              </td>
            </tr>
            <tr>
              <th>
                <pre className="language-js">
                  <code>showPreviousMonth()</code>
                </pre>
              </th>
              <td>
                <p>Shows the previous month(s).</p>
              </td>
            </tr>
            <tr>
              <th>
                <pre className="language-js">
                  <code>showNextMonth()</code>
                </pre>
              </th>
              <td>
                <p>Shows the next month(s).</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }


}

export default APIPage;

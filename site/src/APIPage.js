import React, { Component } from "react";

class APIPage extends Component {

  render() {
    return (
      <div className="Page-Content">
        <h4>Install via npm</h4>
        <pre className="language-js">
          <code>npm install react-day-picker --save</code>
        </pre>

        <h4>Use as React component</h4>
<pre>
  <code className="language-jsx">
{`var React = require("react");
var DayPicker = require("react-day-picker");

var modifiers = {
  "firstOfMonth": (day) => day.getDate() === 1,
  "disabled": (day) => day.getDay() === 0
}

var MyComponent = React.createComponent({
  render() {
    return <DayPicker modifiers={modifiers} />;
  }
})
`}


  </code>
</pre>

        <p>
          See <a href="#examples">all the examples</a>.
        </p>


        <h4>Styling</h4>
        <p>
          You need to provide your own CSS to style the component. You can
          use <a href="https://github.com/gpbl/react-day-picker/blob/master/site/src/style/DayPicker.scss">this
          file</a> as starting point.
        </p>

        <h4>Props</h4>

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
                <p>The number of months, starting from <code>initialMonth</code>.
                Default is <code>1</code>.</p>
              </td>
            </tr>
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
                  An object of functions returning a boolean.<br/>The key of the object is
                  the CSS modifier that will be added to the CSS class of the day's cell if the function returns <code>true</code>.
                  The first argument of the function is the day (type <code>Date</code>) represented in the cell.
                </p>
                <p>
                  By default, the calendar will use <code>today</code> and <code>outside</code> modifiers.
                </p>
                <p>
                  For example, the following object will add <code>DayPicker-Day--firstOfMonth</code> class
                  to the cells corresponding to the first day of the month,
                  and <code>DayPicker-Day--disabled</code> to each sunday.
                </p>
                <pre>
                  <code className="language-jsx">
{`var modifiers = {
  "firstOfMonth": (day) => day.getDate() === 1,
  "disabled": (day) => day.getDay() === 0
}`}
                  </code>
                </pre>

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
                  The locale passed to <code>localeUtils</code> functions.
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
var reactTapEvent = require("react-tap-event-plugin");
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
{`function onMonthChange(e, day, modifiers) {
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

        <h4>Methods</h4>
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

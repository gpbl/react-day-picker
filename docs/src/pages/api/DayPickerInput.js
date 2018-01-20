import React from 'react';

import Link from 'gatsby-link';

import Anchor from '../../ui/Anchor';
import CodeBlock from '../../ui/CodeBlock';
import DocPage from '../../containers/DocPage';
import ApiDocs from '../../containers/ApiDocs';

export default () => (
  <DocPage title="DayPickerInput API">
    <CodeBlock
    >{`import DayPickerInput from 'react-day-picker/DayPickerInput'`}</CodeBlock>
    <h2>API summary</h2>
    <h4>Component’s Props</h4>
    <p>
      <a href="#classNames">classNames</a>,{' '}
      <a href="#clickUnselectsDay">clickUnselectsDay</a>,{' '}
      <a href="#component">component</a>,{' '}
      <a href="#dayPickerProps">dayPickerProps</a>, <a href="#format">format</a>,{' '}
      <a href="#formatDate">formatDate</a>,{' '}
      <a href="#hideOnDayClick">hideOnDayClick</a>,{' '}
      <a href="#inputProps">inputProps</a>,{' '}
      <a href="#overlayComponent">overlayComponent</a>,{' '}
      <a href="#parseDate">parseDate</a>, <a href="#placeholder">placeholder</a>,{' '}
      <a href="#showOverlay">showOverlay</a>, <a href="#value">value</a>,{' '}
      <a href="#keepFocus">keepFocus</a>
    </p>
    <h4>Event handlers</h4>
    <p>
      <a href="#onDayChange">onDayChange</a>
    </p>
    <h4>Public methods</h4>
    <p>
      <a href="#getDayPicker">getDayPicker</a>, <a href="#getInput">getInput</a>,{' '}
      <a href="#hideDayPicker">hideDayPicker</a>,{' '}
      <a href="#showDayPicker">showDayPicker</a>
    </p>
    <hr />

    <ApiDocs>
      <h2>DayPickerInput Props</h2>
      <h3>
        <Anchor id="classNames" />
        classNames <code>Object</code>
      </h3>
      <p>Customize the CSS class names used when rendering the component.</p>
      <p>The object expects the following keys:</p>
      <CodeBlock>{`{
  container,            // The container element
  overlayWrapper,       // The overlay's wrapper
  overlay,              // The overlay's container
}`}</CodeBlock>

      <h3>
        <Anchor id="clickUnselectsDay" />
        clickUnselectsDay <code>boolean = false</code>
      </h3>
      <p>
        Unselect and clear the input when clicking on a previously selected day.
      </p>

      <h3>
        <Anchor id="component" />
        component <code>string | React.Component = &quot;input&quot;</code>
      </h3>
      <p>The component class to render the input field.</p>
      <p>
        The component must be compatible with the standard HTML{' '}
        <code>input</code>: i.e. it should support the
        <code>onChange</code>, <code>onFocus</code>, <code>onKeyUp</code>,{' '}
        <code>onClick</code> and <code>onBlur</code> and the <code>focus</code>{' '}
        props.
      </p>
      <p>
        If your custom component doesn’t support such props, wrap it in a
        component contaning them. For example:
      </p>
      <CodeBlock>{`import React from 'react';
import { DayPickerInput } from 'react-day-picker';
import MyInputWithoutFocus from './MyInputWithoutFocus';

class MyInputWithFocus extends React.Component {
  focus = () => {
    this.input.focus();
  }
  render() {
    return (
      <MyInputWithoutFocus 
        ref={el => (this.input = el)} 
        {...this.props} 
      />
    );
  }
}

function MyDayPickerInput(props) {
  return <DayPickerInput component={MyInputWithFocus} />
} 
`}</CodeBlock>

      <h3>
        <Anchor id="dayPickerProps" />
        dayPickerProps <code>Object</code>
      </h3>
      <p>
        The <Link to="/api/DayPicker">DayPicker props</Link> to customize the
        calendar rendered in the overlay.
      </p>

      <h3>
        <Anchor id="format" />
        format <code>string | string[]</code>
      </h3>
      <p>
        The format string(s) used for formatting and parsing dates. It works
        with{' '}
        <a href="#parseDate">
          <code>parseDate</code>
        </a>{' '}
        and{' '}
        <a href="#formatDate">
          <code>formatDate</code>
        </a>
      </p>

      <h3>
        <Anchor id="formatDate" />
        formatDate{' '}
        <code>
          (date: Date?, format: string? | string[]?, locale: string?) ⇒ string
        </code>
      </h3>
      <p>
        Date formatter used for displaying the selected date as value of the
        input field. As default, it returns dates formatted as{' '}
        <code>YYYY-M-D</code>.<br />
        Arguments: <code>format</code> is the value coming from the{' '}
        <a href="#format">
          <code>format</code>
        </a>{' '}
        prop, while <code>locale</code> is from{' '}
        <a href="#dayPickerProps">
          <code>dayPickerProps</code>
        </a>.<br />
        See also{' '}
        <a href="#parseDate">
          <code>parseDate</code>
        </a>.
      </p>
      <p>
        If you are using <a href="http://momentjs.com/">moment.js</a> in your
        app, we already provide this function as addon: see{' '}
        <Link to="/examples/input-moment">this example</Link>.
      </p>

      <h3>
        <Anchor id="hideOnDayClick" />
        hideOnDayClick <code>boolean = true</code>
      </h3>
      <p>Hide the overlay when the user clicks on a day cell.</p>
      <h3>
        <Anchor id="inputProps" />
        inputProps <code>Object</code>
      </h3>
      <p>
        Additional props to add to the <code>input</code> component. The{' '}
        <code>value</code> key is ignored: use the{' '}
        <a href="#value">
          <code>value</code>
        </a>{' '}
        prop instead.
      </p>

      <h3>
        <Anchor id="overlayComponent" />
        overlayComponent <code>React.Component</code>
      </h3>
      <p>
        A React element or constructor to use as overlay. The element will
        receive the following props:
      </p>
      <ul>
        <li>
          <code>selectedDay: ?Date</code> The currently selected day
        </li>
        <li>
          <code>month: Date</code> The month displayed in the calendar
        </li>
        <li>
          <code>input: DOM Element</code> The input field
        </li>
      </ul>
      <p>
        See also <Link to="/examples/input-custom-overlay">this example</Link>.
      </p>

      <h3>
        <Anchor id="parseDate" />
        parseDate{' '}
        <code>
          (str: string?, format: string? | string[]?, locale: string?) ⇒ Date |
          void
        </code>
      </h3>
      <p>
        Date parser used for parsing the string typed in the input field. As
        default, it parses only dates formatted as <code>YYYY-M-D</code>.
        <br />
        Arguments: <code>format</code> is the value coming from the{' '}
        <a href="#format">
          <code>format</code>
        </a>{' '}
        prop, while <code>locale</code> is from{' '}
        <a href="#dayPickerProps">
          <code>dayPickerProps</code>
        </a>.<br />See also{' '}
        <a href="#formatDate">
          <code>formatDate</code>
        </a>.
      </p>
      <p>
        If you are using <a href="http://momentjs.com/">moment.js</a> in your
        app, we already provide this function as addon: see{' '}
        <Link to="/examples/input-moment">this example</Link>.
      </p>

      <h3>
        <Anchor id="placeholder" />
        placeholder <code>string</code>
      </h3>
      <p>
        The placeholder to use for the <code>input</code> field.
      </p>
      <h3>
        <Anchor id="showOverlay" />
        showOverlay <code>boolean = false</code>
      </h3>
      <p>
        Show the overlay during the initial rendering of the component. This is
        useful if you want to keep the overlay visibile while styling it.
      </p>
      <h3>
        <Anchor id="value" />
        value <code>string | Date</code>
      </h3>
      <p>
        The value of the <code>input</code> field.
      </p>
      <h3>
        <Anchor id="keepFocus" />
        keeFocus <code>boolean = true</code>
      </h3>
      <p>
        Keep focus on the input when switching focus to something inside the
        dayPickerOverlay. You should disable this if you have custom inputs in
        something like an
        <a href="#overlayComponent">overlayComponent</a>.
      </p>

      <hr />
      <h2>Event handlers</h2>

      <h3>
        <Anchor id="onDayChange" />
        onDayChange <code>(day: Date, modifiers: Object) ⇒ void</code>
      </h3>
      <p>
        Handler function called when the user types a valid day (according to
        the <code>format</code> prop) or when a day is clicked on the calendar.
        If the day is not valid, day and modifiers arguments will be{' '}
        <code>undefined</code> (useful to display validation warnings).
      </p>

      <hr />
      <h2>Public methods</h2>

      <h3>
        <Anchor id="getDayPicker" />
        getDayPicker <code>() ⇒ DayPicker</code>
      </h3>
      <p>Return the DayPicker instance.</p>

      <h3>
        <Anchor id="getInput" />
        getInput <code>() ⇒ DOMNode | ReactNode</code>
      </h3>
      <p>Return the input element instance.</p>

      <h3>
        <Anchor id="showDayPicker" />
        showDayPicker <code>() ⇒ void</code>
      </h3>
      <p>Show the Day Picker overlay.</p>

      <h3>
        <Anchor id="hideDayPicker" />
        hideDayPicker <code>() ⇒ void</code>
      </h3>
      <p>Hide the Day Picker overlay.</p>
    </ApiDocs>
  </DocPage>
);

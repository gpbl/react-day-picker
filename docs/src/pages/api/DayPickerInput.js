import React from 'react';

import Link from 'gatsby-link';

import Anchor from '../../ui/Anchor';
import CodeBlock from '../../ui/CodeBlock';
import DocPage from '../../containers/DocPage';
import ApiDocs from '../../containers/ApiDocs';

export default () => (
  <DocPage title="DayPickerInput API">
    <CodeBlock>{`import DayPickerInput from 'react-day-picker/DayPickerInput'`}</CodeBlock>
    <h2>API summary</h2>
    <h4>Component’s Props</h4>
    <p>
      <a href="#classNames">classNames</a>,{' '}
      <a href="#clickUnselectsDay">clickUnselectsDay</a>,{' '}
      <a href="#component">component</a>,{' '}
      <a href="#dayPickerProps">dayPickerProps</a>, <a href="#format">format</a>
      , <a href="#formatDate">formatDate</a>, <a href="#keepFocus">keepFocus</a>
      , <a href="#hideOnDayClick">hideOnDayClick</a>,{' '}
      <a href="#inputProps">inputProps</a>,{' '}
      <a href="#overlayComponent">overlayComponent</a>,{' '}
      <a href="#parseDate">parseDate</a>, <a href="#placeholder">placeholder</a>
      , <a href="#showOverlay">showOverlay</a>, <a href="#style">style</a>,{' '}
      <a href="#value">value</a>
    </p>
    <h4>Event handlers</h4>
    <p>
      <a href="#onDayChange">onDayChange</a>,{' '}
      <a href="#onDayPickerHide">onDayPickerHide</a>{' '}
      <a href="#onDayPickerShow">onDayPickerShow</a>
    </p>
    <h4>Public methods</h4>
    <p>
      <a href="#getDayPicker">getDayPicker</a>, <a href="#getInput">getInput</a>
      , <a href="#hideDayPicker">hideDayPicker</a>,{' '}
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
      <CodeBlock>{`<DayPickerInput component={props => <input {...props} />} />`}</CodeBlock>

      <p>
        The component must support the
        <code>onChange</code>, <code>onFocus</code>, <code>onKeyUp</code>,{' '}
        <code>onClick</code> and <code>onBlur</code> props. If you want to keep
        the focus when the user picks a day, the component class must have a{' '}
        <code>focus</code> method.
      </p>
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
        </a>
        .<br />
        See also{' '}
        <a href="#parseDate">
          <code>parseDate</code>
        </a>
        .
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
        <Anchor id="keepFocus" />
        keepFocus <code>boolean = true</code>
      </h3>
      <p>
        Keep focus on the input field after switching the focus into the
        overlay. You may want to disable the focus on the input field when using
        an <a href="#overlayComponent">overlayComponent</a>.
      </p>

      <h3>
        <Anchor id="overlayComponent" />
        overlayComponent <code>React.Component</code>
      </h3>
      <p>
        A custom React Element or Component to use for the overlay. The element
        will receive the following props:
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
        <li>
          <code>classNames: Object</code> The input field
        </li>
        <li>
          <code>...props: Object</code> Other props to pass to the HTML element
          to handle interaction with the calendar
        </li>
      </ul>
      <CodeBlock>
        {`import React from 'react';
import { DayPickerInput } from 'react-day-picker';

function OverlayComponent({ children, ...props }) {
  return (
    <div {...props}>
      <p>My custom things</p>
      /* include the calendar */
      { children }
      <p>Some content below the calendar</p>
    </div>
  );
}

function MyDayPickerInput() {
  return <DayPickerInput overlayComponent={OverlayComponent} />;
}`}
      </CodeBlock>
      <p>
        As default, the input field keep always the focus when interacting with
        the calendar. However this may cause problems if the custom overlay has
        an input field, so you may need to set{' '}
        <code>{`keepFocus={false}`}</code>. See{' '}
        <Link to="/examples/input-custom-overlay">this example</Link>.
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
        default, it parses only dates formatted as <code>YYYY-M-D</code>.<br />
        Arguments: <code>format</code> is the value coming from the{' '}
        <a href="#format">
          <code>format</code>
        </a>{' '}
        prop, while <code>locale</code> is from{' '}
        <a href="#dayPickerProps">
          <code>dayPickerProps</code>
        </a>
        .<br />
        See also{' '}
        <a href="#formatDate">
          <code>formatDate</code>
        </a>
        .
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
        <Anchor id="style" />
        style <code>object</code>
      </h3>
      <p>The style attribute applied to the container.</p>
      <h3>
        <Anchor id="value" />
        value <code>string | Date</code>
      </h3>
      <p>
        The value of the <code>input</code> field.
      </p>

      <hr />
      <h2>Event handlers</h2>

      <h3>
        <Anchor id="onDayChange" />
        onDayChange{' '}
        <code>
          (day: ?Date, modifiers: Object, dayPickerInput: DayPickerInput) ⇒ void
        </code>
      </h3>
      <p>
        Handler function called when the user types into the input field or when
        a day is clicked on the calendar.
      </p>
      <p>
        <strong>Implementation Notes</strong>
      </p>
      <ul>
        <li>
          If the typed value is empty or not valid, <code>day</code> is{' '}
          <code>undefined</code> and <code>modifiers</code> is an empty object.
        </li>
        <li>
          The third argument is the DayPickerInput instance. You can use it to
          access to the instance props or public methods
        </li>
      </ul>
      <CodeBlock>{`handleDayChange(selectedDay, modifiers, dayPickerInput) {
  const input = dayPickerInput.getInput();
  this.setState({
    selectedDay,
    isEmpty: !input.value.trim(),
    isValidDay: typeof selectedDay !== 'undefined',
    isDisabled: modifiers.disabled === true,
  });
}

<DayPickerInput
  onDayChange={handleDayChange}
  selectedDay={this.state.selectedDay}
/>`}</CodeBlock>

      <h3>
        <Anchor id="onDayPickerHide" />
        onDayPickerHide <code>() ⇒ void</code>
      </h3>
      <p>Handler function called when the overlay is hidden.</p>
      <h3>
        <Anchor id="onDayPickerShow" />
        onDayPickerShow <code>() ⇒ void</code>
      </h3>
      <p>Handler function called when the overlay is shown.</p>

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

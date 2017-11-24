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
      <code>{`<DayPickerInput />`}</code> accepts all the props accepted by a
      standard <code>{`<input/>`}</code>, plus the followings:
    </p>
    <p>
      <a href="#classNames">classNames</a>,{' '}
      <a href="#clickUnselectsDay">clickUnselectsDay</a>,{' '}
      <a href="#component">component</a>,{' '}
      <a href="#dayPickerProps">dayPickerProps</a>, <a href="#format">format</a>,{' '}
      <a href="#hideOnDayClick">hideOnDayClick</a>,{' '}
      <a href="#overlayComponent">overlayComponent</a>
    </p>
    <h4>Event handlers</h4>
    <p>
      <a href="#onDayChange">onDayChange</a>
    </p>
    <h4>Public methods</h4>
    <p>
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
        clickUnselectsDay <code>Boolean = false</code>
      </h3>
      <p>
        Unselect and clear the input when clicking on a previously selected day.
      </p>

      <h3>
        <Anchor id="component" />
        component <code>String | React.Component = &quot;input&quot;</code>
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
        format <code>String | Array&lt;String&gt;</code>
      </h3>
      <p>
        The format strings used for parsing the date entered in the input field.
        It accepts all the{' '}
        <a href="https://momentjs.com/docs/#/displaying/format/">
          format strings
        </a>{' '}
        used by moment.js.
      </p>

      <h3>
        <Anchor id="hideOnDayClick" />
        hideOnDayClick <code>Boolean = true</code>
      </h3>
      <p>Hide the overlay when the user clicks on a day cell.</p>

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

      <hr />
      <h2>Event handlers</h2>

      <h3>
        <Anchor id="onDayChange" />
        onDayChange <code>(day: Date, modifiers: Object) ⇒ undefined</code>
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
        <Anchor id="showDayPicker" />
        showDayPicker <code>() ⇒ undefined</code>
      </h3>
      <p>Show the Day Picker overlay.</p>

      <h3>
        <Anchor id="hideDayPicker" />
        hideDayPicker <code>() ⇒ undefined</code>
      </h3>
      <p>Hide the Day Picker overlay.</p>
    </ApiDocs>
  </DocPage>
);

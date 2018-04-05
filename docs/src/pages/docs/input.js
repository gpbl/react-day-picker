import React from 'react';
import Link from 'gatsby-link';

import DocPage from '../../containers/DocPage';
import CodeBlock from '../../ui/CodeBlock';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <DocPage title="Using DayPickerInput">
    <p>
      The package includes{' '}
      <Link to="/api/DayPickerInput">
        <code>{`<DayPickerInput />`}</code>
      </Link>, a component rendering an input field and displaying
      react-day-picker in an overlay.
    </p>
    <CodeBlock
    >{`import DayPickerInput from 'react-day-picker/DayPickerInput';`}</CodeBlock>
    <p>
      <small>
        If you are using <a href="https://unpkg.com/">unpkg</a>, the component
        is available as <code>DayPicker.Input</code> global variable.
      </small>
    </p>

    <h3>Example</h3>
    <p>
      In its simple form, you use <code>DayPickerInput</code> to get the day
      typed in the input field, or the day picked in the calendar:
    </p>
    <CodeSample name="input-01" />

    <h2>Customizing the DayPicker</h2>
    <p>
      To change how the DayPicker appears in the overlay, use the{' '}
      <code>dayPickerProps</code>
      which accepts all the <Link to="/api/DayPicker">DayPicker props</Link>:
    </p>
    <CodeSample name="input-02" />

    <h2>Changing the date format</h2>

    <p>
      As default, the date format is the ”ugly” <code>YYYY-M-D</code>. This is
      because parsing JavaScript dates from strings is not an easy task, and we
      don’t want to depend on an external library for doing this.
    </p>

    <p>
      To customize the way dates are parsed and formatted, for example using
      your date library of choice, use the{' '}
      <Link to="/api/DayPickerInput#parsedate">
        <code>parseDate</code>
      </Link>{' '}
      and the{' '}
      <Link to="/api/DayPickerInput#formatDate">
        <code>formatDate</code>
      </Link>{' '}
      props. See below for examples using{' '}
      <a href="http://date-fns.org">date-fns</a> or{' '}
      <a href="http://momentjs.com">moment.js</a>.
    </p>

    <h3>
      Example using <code>date-fns</code>
    </h3>
    <CodeSample name="examples/input-date-fns" />

    <h3>Example using moment.js</h3>
    <p>
      If you use <a href="http://momentjs.com">moment.js</a>, we provide an
      utility for using its parser and formatter functions. See{' '}
      <Link to="/examples/input-moment">this example</Link>.
    </p>

    <CodeSample name="examples/input-moment" />
  </DocPage>
);

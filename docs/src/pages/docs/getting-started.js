import React from 'react';
import Link from 'gatsby-link';

import DocPage from '../../containers/DocPage';
import CodeSample from '../../ui/CodeSample';
import CodeBlock from '../../ui/CodeBlock';
import NextButton from '../../ui/NextButton';

export default () => (
  <DocPage title="Get started">
    <p>
      react-day-picker is designed to cover the most common needs for a date
      picker in web applications. This package includes:
    </p>
    <ul>
      <li>
        the <code>DayPicker</code> component to render the calendar (see:{' '}
        <Link to="/docs/basic-concepts">basic concepts</Link>,{' '}
        <Link to="/api/DayPicker">API</Link>)
      </li>
      <li>
        the{' '}
        <Link to="/docs/input">
          <code>DayPickerInput</code>
        </Link>{' '}
        component to render an input field opening the DayPicker in an overlay
      </li>
    </ul>
    <h2>Setup</h2>

    <h3>As dependency</h3>

    <p>Install as dependency to use it in your project:</p>

    <CodeBlock language="bash">
      {`$ npm install react-day-picker --save 
# or with yarn 
$ yarn add react-day-picker`}
    </CodeBlock>

    <p>Then import the component and its style into your component:</p>

    <CodeBlock>
      {`import DayPicker from 'react-day-picker';

// Or import the input component
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';`}
    </CodeBlock>

    <h3>Use from unpkg</h3>

    <p>Include the component without installing:</p>

    <CodeBlock language="html">
      {`<script src="https://unpkg.com/react-day-picker/lib/daypicker.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/react-day-picker/lib/style.css">`}
    </CodeBlock>

    <p>
      The components will be available as <code>window.DayPicker</code> and{' '}
      <code>window.DayPicker.Input</code>.
    </p>

    <h3>Usage example</h3>
    <CodeSample name="getting-started" />

    <NextButton to="/docs/basic-concepts" label="Basic concepts" />
  </DocPage>
);

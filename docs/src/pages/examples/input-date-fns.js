import React from 'react';
import Link from 'gatsby-link';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Using date-fns to parse and format dates">
    <p>
      Use the{' '}
      <Link to="/api/DayPickerInput#parseDate">
        <code>parseDate</code>
      </Link>{' '}
      prop to parse the input typed by the user, and the{' '}
      <Link to="/api/DayPickerInput#formatDate">
        <code>formatDate</code>
      </Link>{' '}
      prop to format them.
    </p>
    <p>
      In the following example, we are importing{' '}
      <a href="https://date-fns.org/v1.29.0/docs/parse">parse</a> and{' '}
      <a href="https://date-fns.org/v1.29.0/docs/format">format</a> from
      date-fns.
    </p>
    <CodeSample name="examples/input-date-fns" />
  </ExamplePage>
);

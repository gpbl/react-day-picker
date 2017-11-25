import React from 'react';
import Link from 'gatsby-link';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Using moment.js to parse and format dates">
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
      In the following example, we are importing the functions included in the
      <code>react-day-picker/moment</code> package, that use moment.js.
    </p>
    <CodeSample name="examples/input-moment" />
  </ExamplePage>
);

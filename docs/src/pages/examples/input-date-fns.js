import React from 'react';
import Link from 'gatsby-link';

import ExamplePage from '../../containers/ExamplePage';
import CodeBlock from '../../ui/CodeBlock';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Using date-fns to parse and format dates">
    <blockquote>
      <p>
        date-fns v1 can’t parse date using a custom formats (see{' '}
        <a href="https://github.com/date-fns/date-fns/issues/219">this issue</a>),
        however it will be supported from v2, which is published with the{' '}
        <code>next</code> tag:
      </p>
      <CodeBlock>{`yarn add date-fns@next`}</CodeBlock>
    </blockquote>
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

import React from 'react';
import Link from 'gatsby-link';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Display days as selected">
    <p>
      Use the <code>selectedDays</code> prop to display days with a ”selected”
      style. You can match a wide range of days by passing one or more{' '}
      <Link to="/docs/matching-days">different modifiers</Link> to{' '}
      <code>selectedDays</code>.
    </p>
    <p>
      Selected days are styled using the{' '}
      <code>.DayPicker-Day .DayPicker-Day--selected</code> CSS selector.
    </p>
    <CodeSample name="examples/selected" />
  </ExamplePage>
);

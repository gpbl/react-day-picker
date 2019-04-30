import React from 'react';
import Link from 'gatsby-link';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Display days as disabled">
    <p>
      Use the <code>disabledDays</code> prop to display days with a ”disabled”
      style. You can match a wide range of days by passing one or more{' '}
      <Link to="/docs/matching-days">different modifiers</Link> to{' '}
      <code>disabledDays</code>.
    </p>
    <p>
      Disabled days are styled using the{' '}
      <code>.DayPicker-Day .DayPicker-Day--disabled</code> CSS selector.
    </p>
    <CodeSample name="examples/disabled" />
  </ExamplePage>
);

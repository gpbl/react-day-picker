import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Save selected days in state">
    <p>
      This example shows how to use the component’s state and{' '}
      <code>selectedDays</code> to select days when the user interacts with the
      calendar.
    </p>
    <CodeSample name="examples/selected-state" />
  </ExamplePage>
);

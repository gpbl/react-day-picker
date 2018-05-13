import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Selecting a week">
    <p>
      This example shows how to use the component’s state and{' '}
      <code>selectedDays</code> to allow the selection amd hihlighting of a
      week.
    </p>
    <CodeSample name="examples/selected-week" />
  </ExamplePage>
);

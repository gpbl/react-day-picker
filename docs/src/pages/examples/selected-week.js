import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Selecting an entire week">
    <p>
      This example use the component’s state and <code>selectedDays</code> to
      highlight and select an entire week.
    </p>
    <CodeSample name="examples/selected-week" />
  </ExamplePage>
);

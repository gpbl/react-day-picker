import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Selecting multiple days">
    <p>
      This example shows how to use the component’s state and{' '}
      <code>selectedDays</code> to allow the selection of multiple days.
    </p>
    <CodeSample name="examples/selected-multiple" />
  </ExamplePage>
);

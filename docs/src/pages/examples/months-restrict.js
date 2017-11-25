import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Restrict months navigation">
    <p>
      Use the <code>fromMonth</code> and <code>toMonth</code> props to restrict
      the navigation between months.
    </p>
    <CodeSample name="examples/months-restrict" />
  </ExamplePage>
);

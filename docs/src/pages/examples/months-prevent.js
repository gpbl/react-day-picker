import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Prevent months navigation">
    <p>
      Set <code>canChangeMonth</code> to <code>false</code> to prevent the
      navigation between months.
    </p>
    <CodeSample name="examples/months-prevent" />
  </ExamplePage>
);

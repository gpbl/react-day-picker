import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Change the initial month">
    <p>
      With the <code>month</code> prop you can change the month being visualized
      in the calendar.
    </p>
    <CodeSample name="examples/months-initial" />
  </ExamplePage>
);

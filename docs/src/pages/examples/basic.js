import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Simple calendar">
    <p>
      In its simples form, <code>DayPicker</code> displays the current month.
    </p>
    <CodeSample name="examples/basic" />
  </ExamplePage>
);

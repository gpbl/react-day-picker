import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Today button">
    <p>
      The <code>todayButton</code> prop will display a button that will navigate
      the calendar to the current month when it is clicked.
    </p>
    <CodeSample name="examples/customization-today-button" />
  </ExamplePage>
);

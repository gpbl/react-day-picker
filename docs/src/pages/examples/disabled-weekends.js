import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Disable weekends">
    <p>
      Pass <code>daysOfWeek</code> to <code>disabledDays</code> to disable days
      based on their week number. This example disables Sundays (<code>0</code>)
      and Saturdays (<code>6</code>).
    </p>
    <CodeSample name="examples/disabled-weekends" />
  </ExamplePage>
);

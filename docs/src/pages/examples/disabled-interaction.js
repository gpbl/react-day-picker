import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Interaction with disabled days">
    <p>
      As disabled days won’t stop the <code>onDayClick</code> event to be fired.
      here we check if the clicked day has a <code>disabled</code> modifier to
      prevent the day to be added to the selected days.
    </p>
    <CodeSample name="examples/disabled-interaction" />
  </ExamplePage>
);

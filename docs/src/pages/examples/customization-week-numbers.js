import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Week numbers">
    <p>
      Use the <code>showWeekNumbers</code> prop to display a column with the
      weeks numbers.
    </p>
    <CodeSample name="examples/customization-week-numbers" />
  </ExamplePage>
);

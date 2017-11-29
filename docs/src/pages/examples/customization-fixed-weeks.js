import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Fixed weeks">
    <p>
      Use the <code>fixedWeeks</code> prop to display 6 weeks per month.
    </p>
    <CodeSample name="examples/customization-fixed-weeks" />
  </ExamplePage>
);

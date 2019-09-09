import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Reverse months navigation">
    <p>
      Combined with <code>numberOfMonths</code>, <code>reverseMonths</code> will
      display the closest month first.
    </p>
    <CodeSample vertical name="examples/months-reverse" />
  </ExamplePage>
);

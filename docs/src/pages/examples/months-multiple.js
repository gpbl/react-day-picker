import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Multiple months">
    <p>
      Using the <code>numberOfMonths</code> prop you can change the number of
      displayed months.
    </p>
    <CodeSample vertical name="examples/months-multiple" />
  </ExamplePage>
);

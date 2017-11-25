import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Outside days">
    <p>
      Use the <code>showOutsideDays</code> prop to display the days outside the
      currently displayed month.
    </p>
    <CodeSample name="examples/customization-outside" />
  </ExamplePage>
);

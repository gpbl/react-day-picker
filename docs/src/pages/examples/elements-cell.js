import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Add content to day cells">
    <p>
      Use the <code>renderDay</code> prop to customize the content of the day
      cell.
    </p>
    <CodeSample vertical name="examples/elements-cell" />
  </ExamplePage>
);

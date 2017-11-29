import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Paged months navigation">
    <p>
      Combined with <code>numberOfMonths</code>, <code>pagedNavigation</code>{' '}
      will navigate the specified number of months at time.
    </p>
    <CodeSample vertical name="examples/months-paged" />
  </ExamplePage>
);

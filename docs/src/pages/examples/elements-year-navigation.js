import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Switch between years and months">
    <p>
      This example shows how to use the <code>captionElement</code> prop to
      change the calendar’s caption. For example, we can use this prop to add a
      form to switch between months and years.
    </p>
    <CodeSample name="examples/elements-year-navigation" />
  </ExamplePage>
);

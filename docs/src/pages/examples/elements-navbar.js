import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Customize navbar and weekdays">
    <p>
      Using the <code>weekdayElement</code> and <code>navbarElement</code> props
      you can change the weekdays and the navigation bar.
    </p>
    <CodeSample name="examples/elements-navbar" />
  </ExamplePage>
);

import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Select days on mouse enter">
    <p>
      A more complex example for selecting range of days using the mouse enter
      events.
    </p>
    <CodeSample vertical name="examples/selected-range-enter" />
  </ExamplePage>
);

import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Range with two inputs">
    <p>
      This example shows how tow <code>DayPickerInput</code> fields can work
      together for selecting a range of days.
    </p>
    <CodeSample name="examples/input-from-to" vertical />
  </ExamplePage>
);

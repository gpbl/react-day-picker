import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Using input field with state">
    <p>
      This example shows how to handle the state in the parent component. Note
      that disabled days cannot be picked from the overlay, but they may be set
      in the input field.
    </p>
    <CodeSample name="examples/input-state" />
  </ExamplePage>
);

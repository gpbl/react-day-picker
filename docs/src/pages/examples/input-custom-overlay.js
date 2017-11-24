import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Customize the DayPickerInput overlay">
    <p>
      Use the <code>overlayComponent</code> prop to use another component for
      rendering the overlay.
    </p>
    <CodeSample name="examples/input-custom-overlay" />
  </ExamplePage>
);

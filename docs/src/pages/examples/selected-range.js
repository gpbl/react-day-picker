import React from 'react';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Select a range of days">
    <p>
      This example shows a possible implementation for a component selecting a
      range of days.
    </p>
    <ul>
      <li>
        Use <code>selectedDays={`{{ from, to }}`}</code> to display a range of
        days as selected
      </li>
      <li>
        Use the provided <code>addDayToRange</code> utility to add or remove
        days to the range when the user clicks/taps on them
      </li>
      <li>
        Add <code>start</code> and <code>end</code> modifiers to style the first
        and last day in a different way.
      </li>
    </ul>
    <CodeSample vertical name="examples/selected-range" />
  </ExamplePage>
);

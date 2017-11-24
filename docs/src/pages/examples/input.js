import React from 'react';
import Link from 'gatsby-link';
import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Input field">
    <p>
      <Link to="/api/DayPickerInput">DayPickerInput</Link> binds the DayPicker
      with an input field. See also how to{' '}
      <Link to="/examples/input-state">use it with state</Link> and how to{' '}
      <Link to="/examples/input-custom-overlay">customize the overlay</Link>.
    </p>
    <CodeSample name="examples/input" />
  </ExamplePage>
);

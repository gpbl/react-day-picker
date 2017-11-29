import React from 'react';
import Link from 'gatsby-link';
import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Input field">
    <p>
      <Link to="/api/DayPickerInput">DayPickerInput</Link> binds the DayPicker
      with an input field, displaying the calendar in an overlay.
    </p>
    <p>
      <small>
        See also how to{' '}
        <Link to="/examples/input-state">use it with state</Link>, how to{' '}
        <Link to="/examples/input-custom-overlay">customize the overlay</Link>{' '}
        and how to{' '}
        <Link to="/examples/input-moment">change the date format</Link>.
      </small>
    </p>
    <CodeSample name="examples/input" />
  </ExamplePage>
);

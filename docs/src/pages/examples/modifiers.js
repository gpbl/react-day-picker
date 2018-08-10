import React from 'react';
import Link from 'gatsby-link';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Add CSS modifiers to day cells">
    <p>
      You can add custom CSS classes to day cells using modifiers. The following
      example add a custom <code>birthday</code> CSS modifier for a specific day
      and a <code>monday</code> modifiers to match all the Mondays.
    </p>
    <p>
      Day cells can also formatted{' '}
      <Link to="/examples/modifiers-styles">using inline styles</Link>.
    </p>
    <CodeSample name="examples/modifiers" />
  </ExamplePage>
);

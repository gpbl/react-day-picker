import React from 'react';
import Link from 'gatsby-link';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Inline-style days cells">
    <p>
      You can apply a custom inline style to day cells using modifiers. The
      following example add a custom <code>birthday</code> modifier for a
      specific day and a <code>monday</code> modifiers to match all the Mondays.
    </p>
    <p>
      Day cells can also formatted{' '}
      <Link to="/examples/modifiers">using CSS classes</Link>.
    </p>
    <CodeSample name="examples/modifiers-styles" />
  </ExamplePage>
);

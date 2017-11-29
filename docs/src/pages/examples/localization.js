import React from 'react';

import Link from 'gatsby-link';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Localization">
    <p>
      Use the localization props to pass translations strings to the calendar.
      See also <Link to="/docs/localization">Localization</Link>.
    </p>
    <CodeSample vertical name="examples/localization" />
  </ExamplePage>
);

import React from 'react';

import Link from 'gatsby-link';

import ExamplePage from '../../containers/ExamplePage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <ExamplePage title="Localization with moment.js">
    <p>
      The following example shows how to localize the calendar in English,
      Japanese, Arabic and Italian using{' '}
      <a href="http://momentjs.com">moment.js</a> localization strings. See also{' '}
      <Link to="/docs/localization">Localization</Link>.
    </p>
    <CodeSample vertical name="examples/localization-moment" />
  </ExamplePage>
);

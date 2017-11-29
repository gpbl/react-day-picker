import React from 'react';

import Anchor from '../../ui/Anchor';
import CodeBlock from '../../ui/CodeBlock';
import DocPage from '../../containers/DocPage';
import ApiDocs from '../../containers/ApiDocs';

export default () => (
  <DocPage title="ModifiersUtils API">
    <p>Set of functions used internally to work with modifiers.</p>
    <CodeBlock
    >{`import { ModifiersUtils } from "react-day-picker";`}</CodeBlock>
    <hr />
    <ApiDocs>
      <h2>Functions</h2>
      <h3>
        <Anchor id="dayMatchesModifier" />
        dayMatchesModifier <code>(day: Date, modifier: Any) ⇒ boolean</code>
      </h3>
      <p>
        Return <code>true</code> if <code>day</code> date matches{' '}
        <code>modifier</code>.
      </p>
      <h3>
        <Anchor id="getModifiersForDay" />
        getModifiersForDay <code>(day: Date, modifiers: Object) ⇒ Array</code>
      </h3>
      <p>
        Return the modifiers matching <code>day</code> for the given{' '}
        <code>modifiers</code>.
      </p>
    </ApiDocs>
  </DocPage>
);

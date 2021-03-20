import React from 'react';
import Link from 'gatsby-link';

import DocPage from '../../containers/DocPage';

import Anchor from '../../ui/Anchor';
import CodeSample from '../../ui/CodeSample';
import CodeBlock from '../../ui/CodeBlock';
import NextButton from '../../ui/NextButton';

export default () => (
  <DocPage title="Styling">
    <p>
      To style the component, use{' '}
      <a href="https://github.com/gpbl/react-day-picker/blob/v7/src/style.css">
        src/style.css
      </a>{' '}
      as template and update it to fit the desired style. Then, just include it
      with your CSS files.
    </p>

    <blockquote>
      <p>
        The CSS classes follow a{' '}
        <a href="https://css-tricks.com/bem-101/">BEM-like syntax</a>. If you
        need to customize the CSS class names, use the{' '}
        <a href="/api/DayPicker#classnames">
          <code>classNames</code>
        </a>{' '}
        prop. Using this prop you can import a{' '}
        <a href="#css-modules">CSS Module</a>.
      </p>
    </blockquote>

    <h3>Importing the style template</h3>

    <p>
      Import and extend the CSS template in your Sass files, for example from{' '}
      <code>node_modules</code>:
    </p>

    <CodeBlock language="css">
      {`@import "../node_modules/react-day-picker/lib/style"`}
    </CodeBlock>

    <p>
      or in your JS files (e.g. when using{' '}
      <a href="https://github.com/webpack/css-loader">webpack-css-loader</a>):
    </p>

    <CodeBlock>{`import "react-day-picker/lib/style.css";`}</CodeBlock>

    <p>The stylesheet is also available from unpkg:</p>

    <CodeBlock language="html">{`<link rel="stylesheet" href="https://unpkg.com/react-day-picker/lib/style.css">`}</CodeBlock>

    <h2>Styling modifiers</h2>
    <p>
      <Link to="/docs/matching-days">Modifiers</Link> added to react-day-picker
      via the{' '}
      <a href="/api/DayPicker#modifiers">
        <code>modifiers</code>
      </a>{' '}
      prop becomes CSS modifiers for the <code>DayPicker-day</code> class. For
      example, if you use a <code>firstOfMonth</code> modifier, the CSS class
      for the matched day cells will be <code>DayPicker-day--firstOfMonth</code>
      .
    </p>

    <h3>Inline styles with modifiers</h3>

    <p>
      Using the{' '}
      <Link to="/api/DayPicker#modifiersstyles">
        <code>modifiersStyles</code>
      </Link>{' '}
      prop, you can inline-style the cells for the specified modifiers:
    </p>

    <CodeSample name="styling-inline" />

    <h2 id="css-modules">Styling with CSS Modules</h2>
    <p>
      Once you have setup your build system to import{' '}
      <a href="https://github.com/css-modules/css-modules">CSS Modules</a>, use
      the{' '}
      <a href="/api/DayPicker#classnames">
        <code>classNames</code>
      </a>{' '}
      prop to use the imported styles:
    </p>
    <CodeBlock>
      {`import React from 'react';
import DayPicker from 'react-day-picker';

import styles from '../styles/cssmodules.css';

export default function CSSModules() {
  return <DayPicker classNames={ styles } />
}`}
    </CodeBlock>

    <Anchor id="styling-css-modules" />
    <h3>Styling modifiers with CSS Modules</h3>

    <p>
      Since you can’t use the default’s BEM-like modifiers CSS classes, you need
      to specify modifiers using the class names from the imported module:
    </p>

    <CodeBlock>
      {`import React from 'react';
import DayPicker from 'react-day-picker';
import styles from '../styles/cssmodules.css';

export default function CSSModules() {
  return (
    <DayPicker 
      classNames={ styles } 
      modifiers={{
        [styles.birthday]: new Date(2018, 8, 19)
      }}
    />
  );
}`}
    </CodeBlock>

    <NextButton to="/docs/localization" label="Localization" />
  </DocPage>
);

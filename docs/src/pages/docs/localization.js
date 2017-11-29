import React from 'react';
import Link from 'gatsby-link';

import DocPage from '../../containers/DocPage';
import Anchor from '../../ui/Anchor';
import CodeSample from '../../ui/CodeSample';
import NextButton from '../../ui/NextButton';

export default () => (
  <DocPage title="Localization">
    <p>
      react-day-picker can be localized into any language (English being the
      default). You can either:
    </p>
    <ul>
      <li>
        use the localization props – see the{' '}
        <a href="#localization-props">example below</a>
      </li>
      <li>
        <a href="#moment">use moment.js</a> translations strings, in case you
        are already including it in your project
      </li>
    </ul>
    <p>
      For more advanced options, such as changing how days and captions are
      displayed, see <a href="#advanced">advanced localization</a>.
    </p>

    <h2>Localization props</h2>

    <p>
      Use <code>locale</code>, <code>weekdaysLong</code> and
      <code>weekdaysShort</code> props with your own translation strings. Use{' '}
      <code>firstDayOfWeek</code> to set the first day of the week.
    </p>

    <h3>Example</h3>

    <p>The following example translates the calendar in Italian:</p>

    <CodeSample name="localization-01" />

    <h2>
      <Anchor id="localization-moment" />Localization with moment.js
    </h2>
    <p>
      If you already include <a href="http://www.momentjs.com">moment.js</a> in
      your dependencies, you may find convenient to use moment’s translation
      strings.
    </p>

    <h3>How to use moment.js to localize the calendar</h3>

    <ol>
      <li>
        make sure <code>moment</code> is included in your dependencies
      </li>
      <li>
        make sure the required moment’s locale data is available when rendering
        react-day-picker
      </li>
      <li>
        import <code>MomentLocaleUtils</code> from{' '}
        <code>react-day-picker/moment</code> and pass it to the{' '}
        <code>localeUtils</code> props
      </li>
      <li>
        use the <code>locale</code> prop to set the locale in react-day-picker
      </li>
    </ol>

    <h3>Example</h3>

    <p>
      The following example shows how to localize the calendar in English,
      Japanese, Arabic and Italian:
    </p>

    <CodeSample name="examples/localization-moment" />

    <h2>Advanced localization</h2>

    <p>
      Internally, react-day-picker uses{' '}
      <Link to="/api/LocaleUtils">LocaleUtils</Link>, a set of formatting
      functions. You can overwrite its behavior by passing your own custom
      functions to the <code>localeUtils</code> props.
    </p>

    <CodeSample name="localization-03" />

    <NextButton to="/docs/input" label="Using DayPickerInput" />
  </DocPage>
);

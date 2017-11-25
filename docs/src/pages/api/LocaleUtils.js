import React from 'react';

import Link from 'gatsby-link';

import Anchor from '../../ui/Anchor';
import CodeBlock from '../../ui/CodeBlock';
import DocPage from '../../containers/DocPage';
import ApiDocs from '../../containers/ApiDocs';

export default () => (
  <DocPage title="LocaleUtils API">
    <p>Set of functions used internally to localize the component.</p>
    <p>
      {' '}
      In some cases, you may want to implement your own <code>
        LocaleUtils
      </code>, or override some of its functions (see:{' '}
      <Link to="/docs/localization">Localization</Link>). For example, this code
      renders the month’s title as <code>M/YYYY</code> instead of the default:
    </p>
    <CodeBlock>{`import DayPicker, { LocaleUtils } from "react-day-picker";

function formatMonthTitle(d, locale) {
 return \`\${d.getMonth() + 1}/\${d.getFullYear()}\`
}

<DayPicker localeUtils={ { ...LocaleUtils, formatMonthTitle } } />
`}</CodeBlock>

    <hr />

    <ApiDocs>
      <h2>Functions</h2>
      <h3>
        <Anchor id="formatDay" />
        formatDay <code>(day: Date, locale: string) ⇒ string</code>
      </h3>
      <p>
        Format the string used as aria-label for the given <code>day</code>.
      </p>

      <h3>
        <Anchor id="formatMonthTitle" />
        formatMonthTitle <code>(month: Date, locale: string) ⇒ string</code>
      </h3>
      <p>
        Return the string used to format the month’s title for the given{' '}
        <code>month</code>.
      </p>

      <h3>
        <Anchor id="formatWeekdayLong" />
        formatWeekdayLong <code>(i: number, locale: string) ⇒ string</code>
      </h3>
      <p>
        Return the string used to render the weekday’s long name (starting from
        <code>0</code> as Sunday).
      </p>

      <h3>
        <Anchor id="formatWeekdayShort" />
        formatWeekdayShort <code>(i: number, locale: string) ⇒ string</code>
      </h3>
      <p>
        Return the string used to render the weekday’s short name, e.g.{' '}
        <code>Mo</code> for
        <i>Monday</i>.
      </p>

      <h3>
        <Anchor id="getFirstDayOfWeek" />
        getFirstDayOfWeek <code>(locale: string) ⇒ number</code>
      </h3>
      <p>
        Return the first day of the week for the given locale (where{' '}
        <code>0</code>
        is Sunday).
      </p>

      <h3>
        <Anchor id="getMonths" />
        getMonths <code>(locale: string) ⇒ number</code>
      </h3>
      <p>
        Return the twelve months for the given locale (full name, e.g.{' '}
        <code>January</code>).
      </p>
    </ApiDocs>
  </DocPage>
);

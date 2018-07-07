import React from 'react';

import CodeBlock from '../../ui/CodeBlock';
import Anchor from '../../ui/Anchor';
import DocPage from '../../containers/DocPage';
import ApiDocs from '../../containers/ApiDocs';

export default () => (
  <DocPage title="DateUtils API">
    <p>Set of functions useful to work with dates and modifiers.</p>
    <CodeBlock>{`import { DateUtils } from "react-day-picker";`}</CodeBlock>
    <hr />

    <ApiDocs>
      <h2>Functions</h2>
      <h3>
        <Anchor id="addDayToRange" />
        addDayToRange{' '}
        <code>
          (day: Date, range: ?Object&lt;from: ?Date, to: ?Date&gt;) ⇒
          Object&lt;from: ?Date, to: ?Date&gt;
        </code>
      </h3>
      <p>
        Add <code>day</code> to a range of days, returning a new range including
        that day. A range is an object with <code>from</code> and{' '}
        <code>to</code> keys. See the range example for an example using this
        function.
      </p>
      <CodeBlock>{`import { DateUtils } from "react-day-picker";

const range = {
  from: new Date(2015, 5, 14),
  to: new Date(2015, 5, 18)
}
const newRange = DateUtils.addDayToRange(new Date(2015, 5, 24), range);

console.log(newRange.to) // 2015-05-24`}</CodeBlock>

      <h3>
        <Anchor id="addMonths" />
        addMonths <code>(date: Date, n: number) ⇒ Date</code>
      </h3>
      <p>
        Return <code>date</code> as a new Date with <code>n</code> months added.
        Missing days will be added to the final date, e.g.{' '}
        <code>2016-03-31 + 1 month = 2016-05-01</code> (since the 31th of April
        is missing).
      </p>

      <h3>
        <Anchor id="clone" />
        clone <code>(date: date) ⇒ Date</code>
      </h3>
      <p>
        Clone <code>date</code> returning a new Date with the same time.
      </p>
      <h3>
        <Anchor id="isDate" />
        isDate <code>(value) ⇒ Boolean</code>
      </h3>
      <p>
        Returns <code>true</code> if <code>value</code> is a valid Javascript
        Date.
      </p>
      <h3>
        <Anchor id="isDayAfter" />
        isDayAfter <code>(day1: Date, day2: Date) ⇒ boolean</code>
      </h3>
      <p>
        Return <code>true</code> if <code>day1</code> is after <code>day2</code>.
      </p>

      <h3>
        <Anchor id="isDayBefore" />
        isDayBefore <code>(day1: Date, day2: Date) ⇒ boolean</code>
      </h3>
      <p>
        Return <code>true</code> if <code>day1</code> is before{' '}
        <code>day2</code>.
      </p>

      <h3>
        <Anchor id="isDayBetween" />
        isDayBetween <code>(day: Date, day1: Date, day2: Date) ⇒ boolean</code>
      </h3>
      <p>
        Returns <code>true</code> if <code>day</code> is between{' '}
        <code>day1</code> and <code>day2</code>, without including those days.
      </p>

      <h3>
        <Anchor id="isDayInRange" />
        isDayInRange{' '}
        <code>
          (day: Date, range: Object&lt;from: ?Date, to: ?Date&gt;) ⇒ boolean
        </code>
      </h3>
      <p>
        Returns <code>true</code> if <code>day</code> is included in the
        specified range of days.
      </p>

      <h3>
        <Anchor id="isFutureDay" />
        isFutureDay <code>(day: Date) ⇒ boolean</code>
      </h3>
      <p>
        Return <code>true</code> if <code>day</code> is in the future, i.e. is
        tomorrow or any day after tomorrow.
      </p>

      <h3>
        <Anchor id="isPastDay" />
        isPastDay <code>(day: Date) ⇒ boolean</code>
      </h3>
      <p>
        Return <code>true</code> if <code>day</code> is in the past, i.e. is
        yesterday or any day before yesterday.
      </p>

      <h3>
        <Anchor id="isSameDay" />
        isSameDay <code>(day1: ?Date, day2: ?Date) ⇒ boolean</code>
      </h3>
      <p>
        Return <code>true</code> if <code>day1</code> and
        <code>day2</code> are the same day.
      </p>
      <h3>
        <Anchor id="isSameMonth" />
        isSameMonth <code>(day1: ?Date, day2: ?Date) ⇒ boolean</code>
      </h3>
      <p>
        Return <code>true</code> if <code>day1</code> and
        <code>day2</code> fall in the same month.
      </p>
    </ApiDocs>
  </DocPage>
);

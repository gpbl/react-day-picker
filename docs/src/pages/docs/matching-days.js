import React from 'react';
import Link from 'gatsby-link';

import DocPage from '../../containers/DocPage';
import CodeBlock from '../../ui/CodeBlock';
import CodeSample from '../../ui/CodeSample';

import NextButton from '../../ui/NextButton';

export default () => (
  <DocPage title="Matching days with modifiers">
    <p>
      With <em>modifiers</em> you change the aspect of the day cells and
      customize the interaction with the calendar. When a modifier matches a
      specific day, its day cells receives the modifier’s name as CSS class.
    </p>
    <p>
      In the following example, the <code>highlighted</code> modifier is used to
      paint the 19th of September with an orange background. Using the browser’s
      developer tools, note how that day receives a{' '}
      <code>DayPicker-Day--highlighted</code> CSS class.
    </p>

    <CodeSample name="modifiers-01" />

    <blockquote>
      <p>
        Modifers CSS classes are generated automatically to follow a{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://css-tricks.com/bem-101/"
        >
          BEM-like syntax
        </a>. You can change the name of the classes using the{' '}
        <Link to="/api/DayPicker#classnames">
          <code>classNames</code>
        </Link>{' '}
        prop, or even use{' '}
        <Link to="/docs/styling#styling-css-modules">
          modifiers with CSS modules
        </Link>.
      </p>
    </blockquote>

    <h2>Type of modifiers</h2>

    <p>A modifier can be either:</p>

    <ul>
      <li>
        <p>
          <strong>
            a <code>Date</code> object
          </strong>
          <br />to match a specific day, as the example above
        </p>
      </li>
      <li>
        <p>
          <strong>a range object</strong> with <code>from</code> and{' '}
          <code>to</code> keys<br />to match a range of days:
          <CodeBlock>
            {`const highlighted = { 
  from: new Date(2018, 0, 12), 
  to: new Date(2018, 0, 16) 
}
<DayPicker modifiers={ highlighted } />
// .DayPicker-Day--highlighted
`}
          </CodeBlock>
        </p>
        <p>will match the days between the 12th and the 16th of January.</p>
      </li>
      <li>
        <p>
          <strong>
            an object with a <code>before</code> and/or <code>after</code> key
          </strong>
          <br />to match the days before and/or after the given date:
        </p>
        <CodeBlock>
          {`const past = { 
  before: new Date(),
}
<DayPicker modifiers={ past } />
// .DayPicker-Day--past`}
        </CodeBlock>
        <p>
          The code above will match all the past the days (i.e. the days before
          today).
        </p>
        <CodeBlock>
          {`const future = { 
  after: new Date(2018, 0, 1), 
}
<DayPicker modifiers={ future } />
// .DayPicker-Day--future`}
        </CodeBlock>
        <p>
          The code above will match all the days after the January, 1st 2018.
        </p>
        <CodeBlock>
          {`const range = { 
  after: new Date(2020, 5, 20), 
  before: new Date(2020, 5, 30), 
}
<DayPicker modifiers={ range } />
// .DayPicker-Day--range`}
        </CodeBlock>
        <p>
          The code above will match all the days between the 30th and the 20th
          of April 2018.
        </p>
      </li>
      <li>
        <p>
          <strong>
            an object with a <code>daysOfWeek</code> array
          </strong>
          <br />to match specific days of week:
        </p>
        <CodeBlock>
          {`const weekends = { 
  daysOfWeek: [0, 6],
}
<DayPicker modifiers={ weekends } />
// .DayPicker-Day--weekends`}
        </CodeBlock>
        <p>
          will match all the Sundays (<code>0</code>) and Saturdays (<code>
            6
          </code>)
        </p>
      </li>
      <li>
        <p>
          <strong>a function</strong> taking the day as first argument and
          returning a boolean value:
        </p>
        <CodeBlock>
          {`function sunday(day) {
  return day.getDay() === 0;
}
function firstOfMonth(day) {
  return day.getDate() === 1;
}
<DayPicker modifiers={ {sunday, firstOfMonth} } />
// .DayPicker-Day--sunday, .DayPicker-Day--firstOfMonth`}
        </CodeBlock>
      </li>
      <li>
        <p>
          <strong>an array of the above</strong>:
        </p>
        <CodeBlock>{`
<DayPicker modifiers={ [weekends, sunday, firstOfMonth] } />
// .DayPicker-Day--weekends, .DayPicker-Day--sunday, .DayPicker-Day--firstOfMonth`}</CodeBlock>
      </li>
    </ul>

    <h3>Default modifiers</h3>

    <ul>
      <li>
        <p>
          <code>--today</code> is added to the today cell
        </p>
      </li>
      <li>
        <p>
          <code>--outside</code> is added for the day outside the month
        </p>
      </li>
    </ul>

    <h3>
      Shortcuts for <code>selected</code> and <code>disabled</code> modifiers
    </h3>

    <p>
      Under the hood, the <code>selectedDays</code> and{' '}
      <code>disabledDays</code> props act as shortcut for the{' '}
      <code>selected</code> and a <code>disabled</code> modifiers. The following
      renders the same calendar:
    </p>
    <CodeBlock>{`function isFirstOfMonth(day) {
  return day.getDate() === 1;
}

<DayPicker disabledDays={ sundays } selectedDays={ isFirstOfMonth } />

<DayPicker 
  modifiers={ { 
    disabled: { daysOfWeek: [0] }, 
    selected: isFirstOfMonth 
  }} 
/>`}</CodeBlock>

    <h2>Accessing modifiers from event handlers</h2>
    <p>Modifiers are passed as argument to the event handlers.</p>
    <CodeSample name="modifiers-02" />

    <NextButton to="/docs/styling" label="Styling" />
  </DocPage>
);

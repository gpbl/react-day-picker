import React from 'react';

import Link from 'gatsby-link';

import NextButton from '../../ui/NextButton';
import DocPage from '../../containers/DocPage';
import CodeSample from '../../ui/CodeSample';

export default () => (
  <DocPage title="Basic concepts">
    <p>
      This guide illustrates the react-day-picker’s basic concepts by
      implementing a date picker to select, clear and disable days from the
      calendar.
    </p>

    <blockquote>
      <p>
        You don’t need to read this guide to start using react-day-picker: see
        the <Link to="/examples">examples</Link> if you prefer to directly copy
        & paste code in your application :-)
      </p>
    </blockquote>

    <p>
      As default, react-day-picker just displays the calendar of the current
      month.
    </p>

    <CodeSample name="basic-concepts-01" />

    <h2>Selecting a day</h2>
    <p>
      Since react-day-picker doesn’t hold the selected day in its state, you
      have to hold it in <i>your component’s state</i> as the user interacts
      with the calendar.
    </p>
    <p>
      The following component uses the <code>onDayClick</code> prop to hold the
      selected day in its own state. Try to click or tap on a day cell!
    </p>

    <CodeSample lines="7-16,20-26" name="basic-concepts-02" />

    <p>
      Now, we want to highlight the day cell to show in the calendar which day
      has been selected. This is done using the <code>selectedDays</code> prop.
    </p>

    <CodeSample lines="22" name="basic-concepts-03" />

    <p>Click or tap a day to highlight its cell.</p>

    <blockquote>
      <p>
        Using the the browser’s developer tools, note how the selected day cell
        receive a{' '}
        <code>
          DayPicker-Day<strong>--selected</strong>
        </code>{' '}
        CSS modifier. Custom modifiers can be added to day cells using the{' '}
        <code>modifiers</code> prop. Read more about them in the{' '}
        <Link to="/docs/matching-days">Matching days</Link> guide.
      </p>
    </blockquote>

    <h3>Clearing the selected day</h3>

    <p>
      When a selected day is clicked again, we want to clear it. This can be
      made setting the component’s <code>selectedDay</code> to{' '}
      <code>undefined</code>.
    </p>
    <p>
      The <code>onDayClick</code> handler receives as second argument an object
      that can be inspected to check if the clicked day has been selected or
      not.
    </p>

    <CodeSample lines="15-19" name="basic-concepts-04" />

    <p>Click or tap a day to see how it’s cleared when selected again.</p>

    <h2>Marking days as disabled</h2>

    <p>
      Disabled days should not respond to the user’s interaction and should
      appear as “disabled” (e.g. grayed out) on the calendar. Here we are
      displaying all the Sundays as disabled, using the{' '}
      <code>disabledDays</code> prop.
    </p>

    <CodeSample name="basic-concepts-05" />

    <blockquote>
      <p>
        Using the the browser’s developer tools, note how the disabled day cell
        receive a{' '}
        <code>
          DayPicker-Day<strong>--disabled</strong>
        </code>{' '}
        CSS modifier.
      </p>
    </blockquote>

    <p>
      In our selectable calendar, we can prevent the user selecting a disabled
      day inspecting the <code>disabled</code> modifier in the{' '}
      <code>handleDayClick</code> handler:
    </p>

    <CodeSample lines="15-18,31" name="basic-concepts-06" />

    <p>
      That’s it. You know now the basic concepts of react-day-picker: how to
      select and disable days and how to use the <code>onDayClick</code> event
      handler.
    </p>

    <p>
      react-day-picker is very flexible: using <em>modifiers</em>{' '}
      <Link to="/docs/matching-days">you can match days</Link> to change the
      aspect of the day cells, according to your app’s needs. You can use{' '}
      <Link to="/api/DayPicker">its extensive API</Link> to further customize
      the react-day-picker’s behavior and layout.
    </p>

    <p>
      A very common implementation of react-day-picker is to bind it with an{' '}
      <code>input</code> form field. This is why we included in the package the{' '}
      <Link to="/docs/input">DayPickerInput</Link> component.
    </p>

    <NextButton to="/docs/matching-days" label="Matching days" />
  </DocPage>
);

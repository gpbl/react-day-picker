import React from 'react';
import Link from 'gatsby-link';

import DocPage from '../../containers/DocPage';
import ApiDocs from '../../containers/ApiDocs';

import Anchor from '../../ui/Anchor';
import CodeBlock from '../../ui/CodeBlock';

export default () => (
  <DocPage title="DayPicker API">
    <CodeBlock>{`import DayPicker from 'react-day-picker'`}</CodeBlock>

    <h2>API summary</h2>

    <h4>Rendering months</h4>
    <p>
      <a href="#initialMonth">initialMonth</a>, <a href="#month">month</a>,{' '}
      <a href="#fromMonth">fromMonth</a>, <a href="#toMonth">toMonth</a>,{' '}
      <a href="#numberOfMonths">numberOfMonths</a>,{' '}
      <a href="#pagedNavigation">pagedNavigation</a>,{' '}
      <a href="#canChangeMonth">canChangeMonth</a>,{' '}
      <a href="#reverseMonths">reverseMonths</a>
    </p>

    <h4>Day Modifiers</h4>
    <p>
      <a href="#selectedDays">selectedDays</a>,{' '}
      <a href="#disabledDays">disabledDays</a>,{' '}
      <a href="#modifiers">modifiers</a>,{' '}
      <a href="#modifiersStyles">modifiersStyles</a>
    </p>

    <h4>Customization</h4>
    <p>
      <a href="#fixedWeeks">fixedWeeks</a>,{' '}
      <a href="#showOutsideDays">showOutsideDays</a>,{' '}
      <a href="#enableOutsideDaysClick">enableOutsideDaysClick</a>,{' '}
      <a href="#showWeekDays">showWeekDays</a>,{' '}
      <a href="#showWeekNumbers">showWeekNumbers</a>,{' '}
      <a href="#todayButton">todayButton</a>
    </p>

    <h4>Localization</h4>
    <p>
      <a href="#dir">dir</a>, <a href="#firstDayOfWeek">firstDayOfWeek</a>,{' '}
      <a href="#labels">labels</a>, <a href="#locale">locale</a>,{' '}
      <a href="#localeUtils">localeUtils</a>, <a href="#months">months</a>,{' '}
      <a href="#weekdaysLong">weekdaysLong</a>,{' '}
      <a href="#weekdaysShort">weekdaysShort</a>
    </p>

    <h4>CSS and HTML</h4>
    <p>
      <a href="#className">className</a>, <a href="#classNames">classNames</a>,{' '}
      <a href="#containerProps">containerProps</a>,{' '}
      <a href="#tabIndex">tabIndex</a>
    </p>

    <h4>Elements</h4>
    <p>
      <a href="#renderDay">renderDay</a>, <a href="#renderWeek">renderWeek</a>,{' '}
      <a href="#weekdayElement">weekdayElement</a>,{' '}
      <a href="#navbarElement">navbarElement</a>,{' '}
      <a href="#captionElement">captionElement</a>
    </p>

    <h4>Event handlers</h4>
    <p>
      <a href="#onBlur">onBlur</a>, <a href="#onCaptionClick">onCaptionClick</a>
      , <a href="#onDayClick">onDayClick</a>,{' '}
      <a href="#onDayFocus">onDayFocus</a>,{' '}
      <a href="#onDayKeyDown">onDayKeyDown</a>,{' '}
      <a href="#onDayMouseDown">onDayMouseDown</a>,{' '}
      <a href="#onDayMouseEnter">onDayMouseEnter</a>,{' '}
      <a href="#onDayMouseLeave">onDayMouseLeave</a>,{' '}
      <a href="#onDayMouseUp">onDayMouseUp</a>,{' '}
      <a href="#onDayTouchEnd">onDayTouchEnd</a>,{' '}
      <a href="#onDayTouchStart">onDayTouchStart</a>,{' '}
      <a href="#onFocus">onFocus</a>, <a href="#onKeyDown">onKeyDown</a>,{' '}
      <a href="#onMonthChange">onMonthChange</a>,{' '}
      <a href="#onTodayButtonClick">onTodayButtonClick</a>,{' '}
      <a href="#onWeekClick">onWeekClick</a>
      <a href="#onWeekMouseEnter">onWeekMouseEnter</a>
      <a href="#onWeekMouseLeave">onWeekMouseLeave</a>
    </p>

    <h4>Public Methods</h4>
    <p>
      <a href="#showMonth">showMonth</a>,{' '}
      <a href="#showPreviousMonth">showPreviousMonth</a>,{' '}
      <a href="#showNextMonth">showNextMonth</a>,{' '}
      <a href="#showPreviousYear">showPreviousYear</a>,{' '}
      <a href="#showNextYear">showNextYear</a>
    </p>

    <hr />

    <ApiDocs>
      <h2 id="components-prop">DayPicker Props</h2>

      <h3>
        <Anchor id="canChangeMonth" />
        canChangeMonth <code>boolean = true</code>
      </h3>
      <p>Enable the navigation between months.</p>
      <h3>
        <Anchor id="captionElement" />
        captionElement{' '}
        <code>React.Element | React.Component | (props) ⇒ Element</code>
      </h3>
      <p>
        A React element or constructor to use as caption. This element will
        receive the following props:
      </p>
      <ul>
        <li>
          <code>date: Date</code> The currently displayed month.
        </li>
        <li>
          <code>localeUtils: Object</code> The{' '}
          <a href="#localeUtils">localeUtils</a> object passed to the component.
        </li>
        <li>
          <code>locale: string</code> The current <a href="#locale">locale</a>{' '}
          passed to the component.
        </li>
        <li>
          <code>onClick</code> The <a href="#onCaptionClick">onCaptionClick</a>{' '}
          function, if specified.
        </li>
      </ul>
      <p>
        The default caption is a <code>div</code> with class{' '}
        <code>DayPicker-Caption</code>, showing a “month year”.
      </p>
      <p>
        {' '}
        See also{' '}
        <Link to="/examples/elements-year-navigation">this example</Link> using
        this props to display an element to switch between months and years.
      </p>
      <h3>
        <Anchor id="className" />
        className <code>string</code>
      </h3>
      <p>Additional CSS class names to add to the container.</p>
      <h3>
        <Anchor id="classNames" />
        classNames <code>Object</code>
      </h3>
      <p>
        The CSS class names used when rendering the component.{' '}
        <a href="https://github.com/gpbl/react-day-picker/blob/master/src/classNames.js">
          See defaults
        </a>{' '}
        on GitHub.
      </p>
      <p>
        You can use this prop to adopt the custom styles imported via CSS
        Modules. See <Link to="/docs/styling">Styling</Link>.
      </p>
      <p>The object expects the following keys:</p>
      <CodeBlock>{`{
  container,            // The container element
  wrapper,              // The wrapper element, used for keyboard interaction
  interactionDisabled,  // Added to the container when there's no interaction with the calendar

  navBar,         // The navigation bar with the arrows to switch between months
  navButtonPrev,  // Button to switch to the previous month
  navButtonNext,  // Button to switch to the next month
  navButtonInteractionDisabled,  // Added to the navbuttons when disabled with fromMonth/toMonth props

  months,         // Container of the months table
  month,          // The month's main table
  caption,        // The caption element, containing the current month's name and year
  weekdays,       // Table header displaying the weekdays names
  weekdaysRow,    // Table row displaying the weekdays names
  weekday,        // Cell displaying the weekday name
  body,           // Table's body with the weeks
  week,           // Table's row for each week
  day,            // The single day cell

  footer,         // The calendar footer (only with todayButton prop)
  todayButton,    // The today button (only with todayButton prop)

  /* default modifiers */
  today,          // Added to the day's cell for the current day
  selected,       // Added to the day's cell specified in the "selectedDays" prop
  disabled,       // Added to the day's cell specified in the "disabledDays" prop
  outside,        // Added to the day's cell outside the current month
}`}</CodeBlock>
      <h3>
        <Anchor id="containerProps" />
        containerProps <code>Object</code>
      </h3>
      <p>
        Props to pass to the container <code>div</code> HTML element.
      </p>
      <p>
        <code>className</code>, <code>role</code>, <code>tabIndex</code>,{' '}
        <code>onKeyDown</code>, <code>onFocus</code> and <code>onBlur</code>{' '}
        must be passed directly to the component. E.g.:
      </p>
      <CodeBlock>{`<DayPicker
  containerProps={ { className: 'will_be_ignored' } }
  className="will_work"
/> `}</CodeBlock>
      <h3>
        <Anchor id="disabledDays" />
        disabledDays <code>Date | Object | Date[] | (day: Date) ⇒ boolean</code>
      </h3>
      <p>
        Day(s) that should appear as disabled. Set a <code>disabled</code>{' '}
        modifier. See <Link to="/docs/matching-days">Matching days</Link> for a
        reference of the accepted value types.
      </p>
      <h3>
        <Anchor id="enableOutsideDaysClick" />
        enableOutsideDaysClick <code>boolean = true</code>
      </h3>
      <p>
        When{' '}
        <a href="#showOutsideDays">
          <code>showOutsideDays</code>
        </a>{' '}
        is enabled, enable click events for outside days.{' '}
      </p>
      <h3>
        <Anchor id="firstDayOfWeek" />
        firstDayOfWeek <code>number = 0 (Sunday)</code>
      </h3>
      <p>
        The day to use as first day of the week, starting from <code>0</code>{' '}
        (Sunday) to <code>6</code> (Saturday).
      </p>
      <h3>
        <Anchor id="fixedWeeks" />
        fixedWeeks <code>boolean = false</code>
      </h3>
      <p>
        Display 6 weeks per months, regardless the month’s number of weeks.
        Outside days will be always shown if setting this to <code>true</code>.
      </p>
      <h3>
        <Anchor id="fromMonth" />
        fromMonth <code>Date</code>
      </h3>
      <p>
        The first allowed month. Users won’t be able to navigate or interact
        with the days before it. See also{' '}
        <a href="#toMonth">
          <code>toMonth</code>
        </a>
        .
      </p>
      <h3>
        <Anchor id="initialMonth" />
        initialMonth <code>Date = new Date() (current month)</code>
      </h3>
      <p>
        The month to display in the calendar at first render. This differs from
        the{' '}
        <a href="#month">
          <code>month</code>
        </a>{' '}
        prop, as it won’t re-render the calendar if its value changes.
      </p>
      <h3>
        <Anchor id="labels" />
        labels{' '}
        <code>
          Object ={' '}
          {`{ nextMonth: "Next Month", previousMonth: "Previous Month" }`}
        </code>
      </h3>
      <p>
        Labels to use as <code>aria-label</code> HTML attributes.
      </p>
      <p>The object expects the following keys (as strings):</p>
      <CodeBlock>{`{
  previousMonth,  // Used for the button to navigate the previous month
  nextMonth,      // Used for the button to navigate the next month
}`}</CodeBlock>
      <h3>
        <Anchor id="locale" />
        locale <code>string = &quot;en&quot;</code>
      </h3>
      <p>
        The calendar’s locale. See{' '}
        <Link to="/docs/localization">Localization</Link>.
      </p>
      <h3>
        <Anchor id="localeUtils" />
        localeUtils{' '}
        <code>
          Object = <Link to="/api/LocaleUtils">LocaleUtils</Link>
        </code>
      </h3>
      <p>
        Object of functions to format dates and to get the first day of the
        week. You can pass your own object for advanced localization. See{' '}
        <Link to="/docs/localization">Localization</Link>.
      </p>
      <h3>
        <Anchor id="modifiers" />
        modifiers <code>Object</code>
      </h3>
      <p>
        An object of <i>day modifiers</i>. See{' '}
        <Link to="/docs/matching-days">matching days</Link>.
      </p>
      <h3>
        <Anchor id="modifiersStyles" />
        modifiersStyles <code>Object</code>
      </h3>
      <p>
        An object of inline styles added to the day cells when a{' '}
        <a href="#modifiers">modifier</a> is matched. Use this prop to style day
        cells inline instead of using CSS classes. See{' '}
        <Link to="/docs/styling">Styling</Link>.
      </p>

      <h3>
        <Anchor id="month" />
        month <code>Date</code>
      </h3>
      <p>
        The month to display in the calendar. This differs from the{' '}
        <a href="#initialMonth">
          <code>initialMonth</code>
        </a>{' '}
        prop, as it causes the calendar to re-render when its value changes.
      </p>
      <h3>
        <Anchor id="months" />
        months <code>string[]</code>
      </h3>
      <p>
        An array containing the long month names to use in the month’s header.
        Default to the English months names.
      </p>
      <h3>
        <Anchor id="navbarElement" />
        navbarElement{' '}
        <code>React.Element | React.Component | (props) ⇒ React.Element</code>
      </h3>
      <p>
        A React Element or React Component to render the navigation bar. It will
        receive the following props:
      </p>
      <ul>
        <li>
          <code>month: Date</code> The currently displayed month
        </li>
        <li>
          <code>previousMonth: Date</code>
        </li>
        <li>
          <code>nextMonth: Date</code>
        </li>
        <li>
          <code>onPreviousClick: () ⇒ void</code>
        </li>
        <li>
          <code>onNextClick: () ⇒ void</code>
        </li>
      </ul>
      <h3>
        <Anchor id="numberOfMonths" />
        numberOfMonths <code>number = 1</code>
      </h3>
      <p>The number of months to render.</p>
      <h3>
        <Anchor id="pagedNavigation" />
        pagedNavigation <code>boolean = false</code>
      </h3>
      <p>
        When displaying multiple months, navigation will be paginated displaying
        the{' '}
        <a href="#numberOfMonths">
          <code>numberOfMonths</code>
        </a>{' '}
        at time instead of one.
      </p>
      <h3>
        <Anchor id="renderDay" />
        renderDay <code>(day: Date, modifiers: Object) ⇒ React.Element</code>
      </h3>
      <p>
        Returns the content of a day cell. As default it returns{' '}
        <code>day</code>’s current date.
      </p>
      <h3>
        <Anchor id="renderWeek" />
        renderWeek{' '}
        <code>(weekNumber: number, week: Array) ⇒ React.Element</code>
      </h3>
      <p>
        Returns the content of the week element when{' '}
        <a href="#showWeekNumbers">
          <code>showWeekNumbers</code>
        </a>{' '}
        is set. As default it returns the week number.
      </p>
      <h3>
        <Anchor id="reverseMonths" />
        reverseMonths <code>boolean = false</code>
      </h3>
      <p>
        Render the months in reversed order. Useful when{' '}
        <a href="#numberOfMonths">
          <code>numberOfMonths</code>
        </a>{' '}
        is greater than <code>1</code>, to display the most recent month first.
      </p>
      <h3>
        <Anchor id="selectedDays" />
        selectedDays <code>Date | Object | Date[] | (day: Date) ⇒ boolean</code>
      </h3>
      <p>
        Day(s) that should appear as selected. Set a <code>selected</code>{' '}
        modifier. See <Link to="/docs/matching-days">Matching days</Link> for a
        reference of the accepted value types.
      </p>
      <h3>
        <Anchor id="showOutsideDays" />
        showOutsideDays <code>boolean = false</code>
      </h3>
      <p>Display the days falling outside the current month.</p>
      <h3>
        <Anchor id="showWeekDays" />
        showWeekDays <code>boolean = true</code>
      </h3>
      <p>Display the weekday names in the calendar header.</p>
      <h3>
        <Anchor id="showWeekNumbers" />
        showWeekNumbers <code>boolean = false</code>
      </h3>
      <p>
        Display the year’s week number next to each week (
        <Link to="/examples/customization-week-numbers">example</Link>).
      </p>
      <h3>
        <Anchor id="todayButton" />
        todayButton <code>string</code>
      </h3>
      <p>
        Display a button to switch to the current month using the provided
        string as label.
      </p>
      <h3>
        <Anchor id="toMonth" />
        toMonth <code>Date</code>
      </h3>
      <p>
        The last allowed month. Users won’t be able to navigate or interact with
        the days after it. See also{' '}
        <a href="#fromMonth">
          <code>fromMonth</code>
        </a>
        .
      </p>

      <h3>
        <Anchor id="weekdayElement" />
        weekdayElement{' '}
        <code>React.Element | React.Component | (props) ⇒ React.Element</code>
      </h3>
      <p>
        A React Element or React Component to render the weekday cells in the
        header. It will receive the following props:
      </p>
      <ul>
        <li>
          weekday <code>number</code>
        </li>
        <li>
          className <code>string</code>
        </li>
        <li>
          localeUtils <code>Object</code>
        </li>
        <li>
          locale <code>string</code>
        </li>
      </ul>

      <h3>
        <Anchor id="weekdaysLong" />
        weekdaysLong <code>string[]</code>
      </h3>
      <p>
        An array containing the long weekdays names to use in the month’s
        header. Defaults to the English weekdays names. Must start from Sunday.
      </p>

      <h3>
        <Anchor id="weekdaysShort" />
        weekdaysShort <code>string[]</code>
      </h3>
      <p>
        An array containing the short weekdays names to use in the month’s
        header. Defaults to the English weekdays names. Must start from Sunday.
      </p>

      <hr />
      <h2 id="event-handlers">Event handlers</h2>

      <h3>
        <Anchor id="onCaptionClick" />
        onCaptionClick{' '}
        <code>(currentMonth: date, e: SyntheticEvent) ⇒ void</code>
      </h3>
      <p>
        Event handler when the user clicks on the caption in the header
        displaying the month.
      </p>

      <h3>
        <Anchor id="onDayClick" />
        onDayClick{' '}
        <code>(day: date, modifiers: Object, e: SyntheticEvent) ⇒ void</code>
      </h3>
      <p>Event handler when the user clicks on a day cell.</p>

      <h3>
        <Anchor id="onBlur" />
        onBlur <code>(e: SyntheticEvent) ⇒ void</code>
      </h3>
      <p>
        Event handler when the calendar get the <code>blur</code> event.
      </p>

      <h3>
        <Anchor id="onDayFocus" />
        onDayFocus{' '}
        <code>(day: date, modifiers: Object, e: SyntheticEvent) ⇒ void</code>
      </h3>
      <p>
        Event handler when the day cell gets the <code>focus</code> event.
      </p>

      <h3>
        <Anchor id="onDayKeyDown" />
        onDayKeyDown{' '}
        <code>(day: date, modifiers: Object, e: SyntheticEvent) ⇒ void</code>
      </h3>
      <p>
        Event handler when the day cell gets the <code>keydown</code> event.
      </p>

      <h3>
        <Anchor id="onDayMouseDown" />
        onDayMouseDown{' '}
        <code>(day: date, modifiers: Object, e: SyntheticEvent) ⇒ void</code>
      </h3>
      <p>Event handler when the mouse button is pressed on a day cell.</p>

      <h3>
        <Anchor id="onDayMouseEnter" />
        onDayMouseEnter{' '}
        <code>(day: date, modifiers: Object, e: SyntheticEvent) ⇒ void</code>
      </h3>
      <p>Event handler when the mouse enters a day cell.</p>

      <h3>
        <Anchor id="onDayMouseLeave" />
        onDayMouseLeave{' '}
        <code>(day: date, modifiers: Object, e: SyntheticEvent) ⇒ void</code>
      </h3>
      <p>Event handler when the mouse leave a day cell.</p>

      <h3>
        <Anchor id="onDayMouseUp" />
        onDayMouseUp{' '}
        <code>(day: date, modifiers: Object, e: SyntheticEvent) ⇒ void</code>
      </h3>
      <p>Event handler when the mouse button is released on a day cell.</p>

      <h3>
        <Anchor id="onDayTouchStart" />
        onDayTouchStart{' '}
        <code>(day: date, modifiers: Object, e: SyntheticEvent) ⇒ void</code>
      </h3>
      <p>
        Event handler when the day cell gets the <code>touchStart</code> event.
      </p>

      <h3>
        <Anchor id="onDayTouchEnd" />
        onDayTouchEnd{' '}
        <code>(day: date, modifiers: Object, e: SyntheticEvent) ⇒ void</code>
      </h3>
      <p>
        Event handler when the day cell gets the <code>touchEnd</code> event.
      </p>

      <h3>
        <Anchor id="onFocus" />
        onFocus <code>(e: SyntheticEvent) ⇒ void</code>
      </h3>
      <p>
        Event handler when the calendar get the <code>focus</code> event
      </p>

      <h3>
        <Anchor id="onKeyDown" />
        onKeyDown <code>(e: SyntheticEvent) ⇒ void</code>
      </h3>
      <p>
        Event handler when the calendar get the <code>keydown</code> event
      </p>

      <h3>
        <Anchor id="onMonthChange" />
        onMonthChange <code>(month: date) ⇒ void</code>
      </h3>
      <p>
        Event handler when the month is changed, i.e. clicking the navigation
        buttons or using the keyboard.
      </p>

      <h3>
        <Anchor id="onWeekClick" />
        onWeekClick{' '}
        <code>
          (weekNumber: number, days: date[], e: SyntheticEvent) ⇒ void
        </code>
      </h3>
      <p>
        Event handler when the user clicks on a week number (when{' '}
        <a href="#showWeekNumbers">showWeekNumbers</a> is set to{' '}
        <code>true</code>).
      </p>

      <h3>
        <Anchor id="onWeekMouseEnter" />
        onWeekMouseEnter{' '}
        <code>
          (weekNumber: number, days: date[], e: SyntheticEvent) ⇒ void
        </code>
      </h3>
      <p>
        Event handler when the mouse hovers a week number (when{' '}
        <a href="#showWeekNumbers">showWeekNumbers</a> is set to{' '}
        <code>true</code>).
      </p>

      <h3>
        <Anchor id="onWeekMouseLeave" />
        onWeekMouseLeave{' '}
        <code>
          (weekNumber: number, days: date[], e: SyntheticEvent) ⇒ void
        </code>
      </h3>
      <p>
        Event handler when the mouse stops hovering a week number (when{' '}
        <a href="#showWeekNumbers">showWeekNumbers</a> is set to{' '}
        <code>true</code>).
      </p>

      <h3>
        <Anchor id="onTodayButtonClick" />
        onTodayButtonClick{' '}
        <code>
          (day: Date, modifiers: string[], e: SyntheticEvent) ⇒ undefined
        </code>
      </h3>
      <p>
        Event handler when the user clicks on the today button (when{' '}
        <a href="#todayButton">todayButton</a> is set).
      </p>
      <hr />
      <h2 id="components-methods">Public Methods</h2>
      <h3>
        <Anchor id="showMonth" />
        showMonth <code>(month: date) ⇒ void</code>
      </h3>
      <p>
        Show the given <code>month</code> in the calendar.
      </p>

      <h3>
        <Anchor id="showPreviousMonth" />
        showPreviousMonth <code>() ⇒ void</code>
      </h3>
      <p>Show the previous month in the calendar.</p>

      <h3>
        <Anchor id="showNextMonth" />
        showNextMonth <code>() ⇒ void</code>
      </h3>
      <p>Show the next month in the calendar.</p>

      <h3>
        <Anchor id="showPreviousYear" />
        showPreviousYear <code>() ⇒ void</code>
      </h3>
      <p>Show the previous year in the calendar.</p>

      <h3>
        <Anchor id="showNextYear" />
        showNextYear <code>() ⇒ void</code>
      </h3>
      <p>Show the next year in the calendar.</p>
    </ApiDocs>
  </DocPage>
);

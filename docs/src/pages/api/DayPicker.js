import React from 'react';
import Link from 'gatsby-link';

import DocPage from '../../containers/DocPage';
import ApiDocs from '../../containers/ApiDocs';

import CodeBlock from '../../ui/CodeBlock';

export default () => (
  <DocPage title="DayPicker API">
    <CodeBlock>{`import DayPicker from 'react-day-picker'`}</CodeBlock>
    <h2>API summary</h2>

    <h4>Rendering months</h4>
    <p>
      <a href="#initialmonth">initialMonth</a>, <a href="#month">month</a>,{' '}
      <a href="#frommonth">fromMonth</a>, <a href="#tomonth">toMonth</a>,{' '}
      <a href="#numberofmonths">numberOfMonths</a>,{' '}
      <a href="#pagednavigation">pagedNavigation</a>,{' '}
      <a href="#canchangemonth">canChangeMonth</a>,{' '}
      <a href="#reversemonths">reverseMonths</a>
    </p>

    <h4>Day Modifiers</h4>
    <p>
      <a href="#selecteddays">selectedDays</a>,{' '}
      <a href="#disableddays">disabledDays</a>,{' '}
      <a href="#modifiers">modifiers</a>,{' '}
      <a href="#modifiersstyles">modifiersStyles</a>
    </p>

    <h4>Customization</h4>
    <p>
      <a href="#enableoutsidedays">enableOutsideDays</a>,{' '}
      <a href="#fixedweeks">fixedWeeks</a>,{' '}
      <a href="#showweeknumbers">showWeekNumbers</a>,{' '}
      <a href="#todaybutton">todayButton</a>
    </p>

    <h4>Localization</h4>
    <p>
      <a href="#dir">dir</a>, <a href="#firstdayofweek">firstDayOfWeek</a>,{' '}
      <a href="#labels">labels</a>, <a href="#locale">locale</a>,{' '}
      <a href="#localeUtils">localeUtils</a>, <a href="#months">months</a>,{' '}
      <a href="#weekdayslong">weekdaysLong</a>,{' '}
      <a href="#weekdaysshort">weekdaysShort</a>
    </p>

    <h4>CSS and HTML</h4>
    <p>
      <a href="#classname">className</a>, <a href="#classnames">classNames</a>,{' '}
      <a href="#containerprops">containerProps</a>,{' '}
      <a href="#tabindex">tabIndex</a>
    </p>

    <h4>Elements</h4>
    <p>
      <a href="#renderday">renderDay</a>,{' '}
      <a href="#weekdayelement">weekdayElement</a>,{' '}
      <a href="#navbarelement">navbarElement</a>,{' '}
      <a href="#captionelement">captionElement</a>
    </p>

    <h4>Event handlers</h4>
    <p>
      <a href="#onblur">onBlur</a>, <a href="#oncaptionclick">
        onCaptionClick
      </a>, <a href="#ondayclick">onDayClick</a>,{' '}
      <a href="#ondayfocus">onDayFocus</a>,{' '}
      <a href="#ondaykeydown">onDayKeyDown</a>,{' '}
      <a href="#ondaymousedown">onDayMouseDown</a>,{' '}
      <a href="#ondaymouseenter">onDayMouseEnter</a>,{' '}
      <a href="#ondaymouseleave">onDayMouseLeave</a>,{' '}
      <a href="#ondaymouseup">onDayMouseUp</a>,{' '}
      <a href="#ondaytouchend">onDayTouchEnd</a>,{' '}
      <a href="#ondaytouchstart">onDayTouchStart</a>,{' '}
      <a href="#onfocus">onFocus</a>, <a href="#onkeydown">onKeyDown</a>,{' '}
      <a href="#onmonthchange">onMonthChange</a>
    </p>

    <h4>Public Methods</h4>
    <p>
      <a href="#showmonth">showMonth</a>,{' '}
      <a href="#showpreviousmonth">showPreviousMonth</a>,{' '}
      <a href="#shownextmonth">showNextMonth</a>,{' '}
      <a href="#showpreviousyear">showPreviousYear</a>,{' '}
      <a href="#shownextyear">showNextYear</a>
    </p>

    <hr />

    <ApiDocs>
      <h2 id="components-prop">DayPicker Props</h2>

      <h3 id="canchangemonth">
        canChangeMonth <code>Boolean = true</code>
      </h3>
      <p>Enable the navigation between months.</p>
      <h3 id="captionelement">
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
          <a href="#localeutils-object">localeUtils</a> object passed to the
          component.
        </li>
        <li>
          <code>locale: String</code> The current{' '}
          <a href="#locale-string">locale</a> passed to the component.
        </li>
        <li>
          <code>onClick</code> The{' '}
          <a href="#oncaptionclick-function">onCaptionClick</a> function, if
          specified.
        </li>
      </ul>
      <p>
        The default caption is a <code>div</code> with class{' '}
        <code>DayPicker-Caption</code>, showing a “month year” text.
      </p>
      <p>
        See also{' '}
        <a href="/examples/advanced-year-navigation.html">
          this advanced example
        </a>, showing a year navigation element using this prop.
      </p>
      <h3 id="classname">
        className <code>String</code>
      </h3>
      <p>Additional CSS class names to add to the default.</p>
      <h3 id="classnames">
        classNames <code>Object</code>
      </h3>
      <p>
        Customize the CSS class names used when rendering the component. Use
        this prop to use your custom styles imported via CSS Modules. See{' '}
        <Link to="/docs/styling">Styling</Link>.
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

  month,          // The month's main tables
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
      <h3 id="containerprops">
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
      <h3 id="disableddays">
        disabledDays{' '}
        <code>Date | Object | Array&lt;Date&gt; | (day: Date) ⇒ Boolean</code>
      </h3>
      <p>
        Indicate which day should appear as disabled. Set a{' '}
        <code>disabled</code> modifier. See{' '}
        <Link to="/docs/matching-days">Matching days</Link> for a reference of
        the accepted values.
      </p>
      <h3 id="enableoutsidedays">
        enableOutsideDays <code>Boolean = false</code>
      </h3>
      <p>Display the days outside the current month.</p>
      <h3 id="firstdayofweek">
        firstDayOfWeek <code>Number = 0 (Sunday)</code>
      </h3>
      <p>
        The day to use as first day of the week, starting from <code>0</code>{' '}
        (Sunday) to <code>6</code> (Saturday).
      </p>
      <h3 id="fixedweeks">
        fixedWeeks <code>Boolean = false</code>
      </h3>
      <p>
        Display 6 weeks per months, regardless the month’s number of weeks.
        Outside days will be always shown if setting this to <code>true</code>.
      </p>
      <h3 id="frommonth">
        fromMonth <code>Date</code>
      </h3>
      <p>
        The first allowed month. Users won’t be able to navigate or interact
        with the days before it. See also{' '}
        <a href="#tomonth">
          <code>toMonth</code>
        </a>.
      </p>
      <h3 id="initialmonth">
        initialMonth <code>Date = new Date() (current month)</code>
      </h3>
      <p>
        The month to display in the calendar at first render. See also{' '}
        <a href="#month">
          <code>month</code>
        </a>.
      </p>
      <h3 id="labels">
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
      <h3 id="locale">
        locale <code>String = &quot;en&quot;</code>
      </h3>
      <p>
        The calendar’s locale. See {' '}
        <Link to="/docs/localization">Localization</Link>.
      </p>
      <h3 id="localeutils">
        localeUtils <code>Object</code>
      </h3>
      <p>
        Object of functions to format dates and to get the first day of the
        week. Pass your own utils to support localization. By default the used
        locale is English (US). See {' '}
        <Link to="/docs/localization">Localization</Link>.
      </p>
      <h3 id="modifiers">
        modifiers <code>Object</code>
      </h3>
      <p>
        An object of <i>day modifiers</i>. See{' '}
        <Link to="/docs/matching-days">matching days</Link>.
      </p>
      <h3 id="modifiersstyles">
        modifiersStyles <code>Object</code>
      </h3>
      <p>
        An object of inline styles added to the day cells when a{' '}
        <a href="#modifiers">modifier</a> is matched. Use this prop to style day
        cells inline instead of using CSS classes. See{' '}
        <Link to="/docs/styling">Styling</Link>.
      </p>

      <h3 id="month">
        month <code>Date</code>
      </h3>
      <p>
        The month to display in the calendar. This differs from the{' '}
        <a href="#initialmonth">
          <code>initialMonth</code>
        </a>{' '}
        prop, as it causes the calendar to re-render when its value changes.
      </p>
      <h3 id="months">
        months <code>Array&lt;String&gt;</code>
      </h3>
      <p>
        An array containing the long month names to use in the month’s header.
      </p>
      <h3 id="navbarelement">
        navbarElement{' '}
        <code>React.Element | React.Component | (props) ⇒ React.Element</code>
      </h3>
      <p>
        A React Element or React Component to render the navigation bar. It will
        receive the following props:
      </p>
      <ul>
        <li>
          className <code>String</code>
        </li>
        <li>
          previousMonth <code>Date</code>
        </li>
        <li>
          nextMonth <code>Date</code>
        </li>
        <li>
          showPreviousButton <code>Boolean</code>
        </li>
        <li>
          showNextButton <code>Boolean</code>
        </li>
        <li>
          onPreviousClick <code>() ⇒ undefined</code>
        </li>
        <li>
          onNextClick <code>() ⇒ undefined</code>
        </li>
        <li>
          dir <code>String</code>
        </li>
        <li>
          localeUtils <code>Object</code>
        </li>
        <li>
          locale <code>String</code>
        </li>
      </ul>
      <h3 id="numberofmonths">
        numberOfMonths <code>Number = 1</code>
      </h3>
      <p>The number of months to render.</p>
      <h3 id="pagednavigation">
        pagedNavigation <code>Boolean = false</code>
      </h3>
      <p>
        When displaying multiple months, navigation will be paginated displaying
        the{' '}
        <a href="#numberofmonths">
          <code>numberOfMonths</code>
        </a>{' '}
        at time instead of one.
      </p>
      <h3 id="renderday">
        renderDay <code>(day: Date, modifiers: Object) ⇒ React.Element</code>
      </h3>
      <p>
        Returns the content of a day cell. As default it returns{' '}
        <code>day</code>’s current date.
      </p>
      <h3 id="reversemonths">
        reverseMonths <code>Boolean = false</code>
      </h3>
      <p>
        Render the months in reversed order. Useful when{' '}
        <a href="#numberofmonths">
          <code>numberOfMonths</code>
        </a>{' '}
        is greater than 1, to display the most recent month first.
      </p>
      <h3 id="selecteddays">
        selectedDays{' '}
        <code>Date | Object | Array&lt;Date&gt; | (day: Date) ⇒ Boolean</code>
      </h3>
      <p>
        Indicate which day should appear as selected. Set a{' '}
        <code>selected</code> modifier. See{' '}
        <Link to="/docs/matching-days">Matching days</Link> for a reference of
        the accepted values.
      </p>
      <h3 id="showweeknumbers">
        showWeekNumbers <code>Boolean</code>
      </h3>
      <p>
        Display the year’s week number next to each week (<a href="../examples/?weekNumbers">example</a>).
      </p>
      <h3 id="todaybutton">
        todayButton <code>String</code>
      </h3>
      <p>
        Display a button to switch to the current month using the provided
        string as label.
      </p>
      <h3 id="tomonth">
        toMonth <code>Date</code>
      </h3>
      <p>
        The last allowed month. Users won’t be able to navigate or interact with
        the days after it. See also{' '}
        <a href="#frommonth">
          <code>fromMonth</code>
        </a>.
      </p>

      <h3 id="weekdayelement">
        weekdayElement{' '}
        <code>React.Element | React.Component | (props) ⇒ React.Element</code>
      </h3>
      <p>
        A React Element or React Component to render the weekday cells in the
        header. It will receive the following props:
      </p>
      <ul>
        <li>
          weekday <code>Number</code>
        </li>
        <li>
          className <code>String</code>
        </li>
        <li>
          localeUtils <code>Object</code>
        </li>
        <li>
          locale <code>String</code>
        </li>
      </ul>

      <h3 id="weekdayslong">
        weekdaysLong <code>Array&lt;String&gt;</code>
      </h3>
      <p>
        An array containing the long weekdays names to use in the month’s
        header. Must start from Sunday.
      </p>

      <h3 id="weekdaysshort">
        weekdaysShort <code>Array&lt;String&gt;</code>
      </h3>
      <p>
        An array containing the short weekdays names to use in the month’s
        header. Must start from Sunday.
      </p>

      <hr />
      <h2 id="event-handlers">Event handlers</h2>

      <h3 id="oncaptionclick">
        onCaptionClick{' '}
        <code>(currentMonth: date, e: SyntheticEvent) ⇒ undefined</code>
      </h3>
      <p>
        Event handler when the user clicks on the caption in the header
        displaying the month.
      </p>

      <h3 id="ondayclick">
        onDayClick{' '}
        <code>
          (day: date, modifiers: Object, e: SyntheticEvent) ⇒ undefined
        </code>
      </h3>
      <p>Event handler when the user clicks on a day cell.</p>

      <h3 id="onblur">
        onBlur <code>(e: SyntheticEvent) ⇒ undefined</code>
      </h3>
      <p>
        Event handler when the calendar get the <code>blur</code> event.
      </p>

      <h3 id="ondayfocus">
        onDayFocus{' '}
        <code>
          (day: date, modifiers: Object, e: SyntheticEvent) ⇒ undefined
        </code>
      </h3>
      <p>
        Event handler when the day cell gets the <code>focus</code> event.
      </p>

      <h3 id="ondaykeydown">
        onDayKeyDown{' '}
        <code>
          (day: date, modifiers: Object, e: SyntheticEvent) ⇒ undefined
        </code>
      </h3>
      <p>
        Event handler when the day cell gets the <code>keydown</code> event.
      </p>

      <h3 id="ondaymousedown">
        onDayMouseDown{' '}
        <code>
          (day: date, modifiers: Object, e: SyntheticEvent) ⇒ undefined
        </code>
      </h3>
      <p>Event handler when the mouse button is pressed on a day cell.</p>

      <h3 id="ondaymouseenter">
        onDayMouseEnter{' '}
        <code>
          (day: date, modifiers: Object, e: SyntheticEvent) ⇒ undefined
        </code>
      </h3>
      <p>Event handler when the mouse enters a day cell.</p>

      <h3 id="ondaymouseleave">
        onDayMouseLeave{' '}
        <code>
          (day: date, modifiers: Object, e: SyntheticEvent) ⇒ undefined
        </code>
      </h3>
      <p>Event handler when the mouse leave a day cell.</p>

      <h3 id="ondaymouseup">
        onDayMouseUp{' '}
        <code>
          (day: date, modifiers: Object, e: SyntheticEvent) ⇒ undefined
        </code>
      </h3>
      <p>Event handler when the mouse button is released on a day cell.</p>

      <h3 id="ondaytouchstart">
        onDayTouchStart{' '}
        <code>
          (day: date, modifiers: Object, e: SyntheticEvent) ⇒ undefined
        </code>
      </h3>
      <p>
        Event handler when the day cell gets the <code>touchStart</code> event.
      </p>

      <h3 id="ondaytouchend">
        onDayTouchEnd{' '}
        <code>
          (day: date, modifiers: Object, e: SyntheticEvent) ⇒ undefined
        </code>
      </h3>
      <p>
        Event handler when the day cell gets the <code>touchEnd</code> event.
      </p>

      <h3 id="onfocus">
        onFocus <code>(e: SyntheticEvent) ⇒ undefined</code>
      </h3>
      <p>
        Event handler when the calendar get the <code>focus</code> event
      </p>

      <h3 id="onkeydown">
        onKeyDown <code>(e: SyntheticEvent) ⇒ undefined</code>
      </h3>
      <p>
        Event handler when the calendar get the <code>keydown</code> event
      </p>

      <h3 id="onmonthchange">
        onMonthChange <code>(month: date) ⇒ undefined</code>
      </h3>
      <p>
        Event handler when the month is changed, i.e. clicking the navigation
        buttons or using the keyboard.
      </p>

      <h3 id="onweekclick">
        onWeekClick{' '}
        <code>
          (weekNumber: number, days: date[], e: SyntheticEvent) ⇒ undefined
        </code>
      </h3>
      <p>
        Event hander when the user clicks on a week number (when{' '}
        <a href="#showweeknumbers">showWeekNumbers</a> is set to{' '}
        <code>true</code>).
      </p>
      <hr />
      <h2 id="components-methods">Public Methods</h2>
      <h3 id="showmonth">
        showMonth <code>(month: date) ⇒ undefined</code>
      </h3>
      <p>
        Show the given <code>month</code> in the calendar.
      </p>

      <h3 id="showpreviousmonth">
        showPreviousMonth <code>() ⇒ undefined</code>
      </h3>
      <p>Show the previous month in the calendar.</p>

      <h3 id="shownextmonth">
        showNextMonth <code>() ⇒ undefined</code>
      </h3>
      <p>Show the next month in the calendar.</p>

      <h3 id="showpreviousyear">
        showPreviousYear <code>() ⇒ undefined</code>
      </h3>
      <p>Show the previous year in the calendar.</p>

      <h3 id="shownextyear">
        showNextYear <code>() ⇒ undefined</code>
      </h3>
      <p>Show the next year in the calendar.</p>
    </ApiDocs>
  </DocPage>
);

/* eslint-disable global-require, import/no-unresolved, import/no-webpack-loader-syntax */
// import React from 'react';

export default [
  {
    title: 'Basic examples',
    examples: [
      {
        name: 'Render a simple calendar',
        source: require('!raw-loader!../examples/Hello.js'),
        url: 'simple',
      },
      {
        name: 'Render with an input field',
        source: require('!raw-loader!../examples/InputField.js'),
        url: 'input',
      },
    ],
  },
  {
    title: 'Customization',
    examples: [
      {
        name: 'Display the outside days',
        source: require('!raw-loader!../examples/OutsideDays.js'),
        url: 'customization-outside-days',
      },
      {
        name: 'Show the week numbers',
        source: require('!raw-loader!../examples/ShowWeekNumbers.js'),
        url: 'customization-week-numbers',
      },
      {
        name: 'Display a fixed number of weeks',
        source: require('!raw-loader!../examples/FixedWeeks.js'),
        url: 'customization-fixed-weeks',
      },
      {
        name: 'Add a today button',
        source: require('!raw-loader!../examples/TodayButton.js'),
        url: 'customization-today-button',
      },
      {
        name: 'Localization',
        source: require('!raw-loader!../examples/Localization.js'),
        url: 'localization',
      },
    ],
  },
  {
    title: 'Rendering Months',
    examples: [
      {
        name: 'Change the initial month',
        source: require('!raw-loader!../examples/ChangeInitialMonth.js'),
        url: 'months-initial',
      },
      {
        name: 'Prevent navigation between months',
        source: require('!raw-loader!../examples/PreventMonthsNavigation.js'),
        url: 'months-prevent-navigation',
      },
      {
        name: 'Restrict months navigation',
        source: require('!raw-loader!../examples/RestrictMonthsNavigation.js'),
        url: 'months-restrict-navigation',
      },
      {
        name: 'Display multiple months',
        source: require('!raw-loader!../examples/MultipleMonths.js'),
        url: 'months-multiple',
      },
      {
        name: 'Paged months navigation',
        source: require('!raw-loader!../examples/PagedMonthsNavigation.js'),
        url: 'months-paged-navigation',
      },
      {
        name: 'Reverse months order',
        source: require('!raw-loader!../examples/ReverseMonthsOrder.js'),
        url: 'months-reverse',
      },
    ],
  },
  {
    title: 'Selected Days',
    examples: [
      {
        name: 'Display days as selected',
        source: require('!raw-loader!../examples/SelectedDays.js'),
        url: 'selecting',
      },
      {
        name: 'Save clicked day in state',
        source: require('!raw-loader!../examples/SaveClickedDayInState.js'),
        url: 'selecting-click',
      },
      {
        name: 'Select multiple days',
        source: require('!raw-loader!../examples/SelectMultipleDays.js'),
        url: 'selecting-multiple',
      },
      {
        name: 'Select a range on click',
        source: require('!raw-loader!../examples/SelectRange.js'),
        url: 'selecting-range',
      },
      {
        name: 'Select a range on mouse enter',
        source: require('!raw-loader!../examples/SelectRangeMouseEnter.js'),
        url: 'selecting-range-mouse-enter',
      },
    ],
  },
  {
    title: 'Disabled Days',
    examples: [
      {
        name: 'Display days as disabled',
        source: require('!raw-loader!../examples/DisabledDays.js'),
        url: 'disabling',
      },
      {
        name: 'Display weekends as disabled',
        source: require('!raw-loader!../examples/DisabledWeekends.js'),
        url: 'disabling-weekends',
      },

      {
        name: 'Interaction with disabled days',
        source: require('!raw-loader!../examples/DisabledDaysInteraction.js'),
        url: 'disabling-interaction',
      },
    ],
  },
  {
    title: 'Input field',
    examples: [
      {
        name: 'Interaction with the input field',
        source: require('!raw-loader!../examples/InputFieldAdvanced.js'),
        url: 'input-advanced',
      },
    ],
  },
  {
    title: 'Modifiers',
    examples: [
      {
        name: 'Add CSS modifiers to days',
        source: require('!raw-loader!../examples/Modifiers.js'),
        url: 'modifiers',
      },
      {
        name: 'Add inline-style modifiers',
        source: require('!raw-loader!../examples/ModifiersStyles.js'),
        url: 'modifiers-styles',
      },
    ],
  },
  {
    title: 'Customizing elements',
    examples: [
      {
        name: 'Switch between years and months',
        source: require('!raw-loader!../examples/AdvancedYearNavigation.js'),
        url: 'advanced-year-navigation',
      },
      {
        name: 'Add custom content to a day cell',
        source: require('!raw-loader!../examples/CustomDayCell.js'),
        url: 'advanced-day',
      },
      {
        name: 'Add custom content to a day cell',
        source: require('!raw-loader!../examples/CustomDayCell.js'),
        url: 'advanced-day',
      },
      {
        name: 'Customize navbar and weekdays',
        source: require('!raw-loader!../examples/AdvancedElements.js'),
        url: 'advanced-elements',
      },
    ],
  },
];

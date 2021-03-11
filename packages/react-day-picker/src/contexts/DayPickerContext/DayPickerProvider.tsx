import * as React from 'react';

import enUS from 'date-fns/locale/en-US';

import * as Components from 'components';
import { DayPickerBase } from 'types';
import { DayPickerContextValue } from './types';

import { DayPickerContext } from './DayPickerContext';
import { defaultClassNames } from './defaultClassNames';
import * as formatters from './formatters';
import * as labels from './labels';
import { convertModifierMatchersToArray } from './utils/convertModifierMatchersToArray';
import { getWeekdays } from './utils/getWeekdays';
import { parseFromToProps } from './utils/parseFromToProps';
import { parseModifierShortcuts } from './utils/parseModifierShortcuts';
import { parseToday } from './utils/parseToday';

/** Represent the props for the [[DayPickerProvider]]. */
export interface DayPickerProviderProps {
  /** The props passed to the DayPicker component. */
  baseProps: DayPickerBase;
  children?: React.ReactNode;
}
/**
 * The provider for the [[DayPickerContext]]. Must wrap the DayPicker root.
 */
export function DayPickerProvider(props: DayPickerProviderProps): JSX.Element {
  const { children, baseProps } = props;
  const { fromDate, toDate } = parseFromToProps(baseProps);
  const locale = baseProps.locale || enUS;
  const numberOfMonths = baseProps.numberOfMonths ?? 1;
  const today = parseToday(baseProps);
  const month = baseProps.month;
  const weekdays = getWeekdays(locale);

  // Default caption layout. If calendar navigation is unlimited, it must be
  // always `buttons` – as we cannot display infinite options in the dropdown.
  let captionLayout = baseProps.captionLayout ?? 'buttons';
  if (!fromDate && !toDate) captionLayout = 'buttons';

  const modifiers = parseModifierShortcuts(baseProps);
  const modifiersAsArray = convertModifierMatchersToArray(modifiers);
  // Disable days before/after from/toDate
  if (fromDate) {
    modifiersAsArray.disabled.push({ before: fromDate });
  }
  if (toDate) {
    modifiersAsArray.disabled.push({ after: toDate });
  }

  const {
    dir,
    defaultMonth,
    disableNavigation,
    fixedWeeks,
    hideHead,
    mode,
    modifierStyles,
    onDayClick,
    onDayFocus,
    onDayBlur,
    onDayKeyDown,
    onDayKeyUp,
    onDayMouseEnter,
    onDayMouseLeave,
    onDayTouchCancel,
    onDayTouchStart,
    onMonthChange,
    onWeekNumberClick,
    showOutsideDays,
    showWeekNumber,
    footer
  } = baseProps;

  const context: DayPickerContextValue = {
    dir,
    disableNavigation,
    defaultMonth,
    fixedWeeks,
    hideHead,
    mode,
    modifierStyles,
    onDayClick,
    onDayFocus,
    onDayBlur,
    onDayKeyDown,
    onDayKeyUp,
    onDayMouseEnter,
    onDayMouseLeave,
    onDayTouchCancel,
    onDayTouchStart,
    onMonthChange,
    onWeekNumberClick,
    showOutsideDays,
    showWeekNumber,
    footer,

    captionLayout,
    fromDate,
    hideToday: baseProps.today === 'off',
    locale,
    modifierClassNames: baseProps.modifierClassNames ?? {},
    modifierPrefix: 'rdp-day_',
    modifiers: modifiersAsArray,
    month,
    numberOfMonths,
    styles: baseProps.styles ?? {},
    toDate,
    today,
    weekdays,
    classNames: {
      ...defaultClassNames,
      ...baseProps.classNames
    },
    formatters: {
      ...formatters,
      ...baseProps.formatters
    },
    labels: {
      ...labels,
      ...baseProps.labels
    },
    components: {
      Caption: Components.Caption,
      CaptionLabel: Components.CaptionLabel,
      Day: Components.Day,
      DayContent: Components.DayContent,
      Dropdown: Components.Dropdown,
      Footer: Components.Footer,
      Head: Components.Head,
      IconDropdown: Components.IconDropdown,
      IconNext: Components.IconNext,
      IconPrevious: Components.IconPrevious,
      Row: Components.Row,
      WeekNumber: Components.WeekNumber,
      ...baseProps.components
    }
  };

  return (
    <DayPickerContext.Provider value={context}>
      {children}
    </DayPickerContext.Provider>
  );
}

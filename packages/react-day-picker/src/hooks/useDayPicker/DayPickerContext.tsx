import * as React from 'react';

import {
  Caption,
  CaptionLabel,
  Day,
  DayContent,
  Dropdown,
  Footer,
  Head,
  IconDropdown,
  IconNext,
  IconPrevious,
  Row,
  WeekNumber
} from 'components';
import enUS from 'date-fns/locale/en-US';
import { DayPickerContextValue, DayPickerProps } from 'types';

import { defaultClassNames } from './defaultClassNames';
import * as formatters from './formatters';
import * as labels from './labels';
import { convertModifierMatchersToArray } from './utils/convertModifierMatchersToArray';
import { getWeekdays } from './utils/getWeekdays';
import { parseFromToProps } from './utils/parseFromToProps';
import { parseModifierShortcuts } from './utils/parseModifierShortcuts';
import { parseToday } from './utils/parseToday';

/**
 * This context shares props and settings within the internal components. It set
 * the defaults values, parses some props, and perform one-time calculation
 * required to render the days.
 */
export const DayPickerContext = React.createContext<
  DayPickerContextValue | undefined
>(undefined);

/**
 * The provider for the [[DayPickerContext]]. Must wrap the DayPicker’s root.
 */
export const DayPickerProvider = (props: {
  initialProps: Omit<DayPickerProps, 'onSelect' | 'defaultSelected'>;
  children?: React.ReactNode;
}): JSX.Element => {
  const { children, initialProps } = props;
  const { fromDate, toDate } = parseFromToProps(initialProps);
  const locale = initialProps.locale || enUS;
  const numberOfMonths = initialProps.numberOfMonths ?? 1;
  const today = parseToday(initialProps);
  const month = initialProps.month;
  const weekdays = getWeekdays(locale);

  // Default caption layout. If calendar navigation is unlimited, it must be
  // always `buttons` – as we cannot display infinite options in the dropdown.
  let captionLayout = initialProps.captionLayout ?? 'buttons';
  if (!fromDate && !toDate) captionLayout = 'buttons';

  const modifiers = parseModifierShortcuts(initialProps);
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
  } = initialProps;

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
    hideToday: initialProps.today === 'off',
    locale,
    modifierClassNames: initialProps.modifierClassNames ?? {},
    modifierPrefix: 'rdp-day_',
    modifiers: modifiersAsArray,
    month,
    numberOfMonths,
    styles: initialProps.styles ?? {},
    toDate,
    today,
    weekdays,
    classNames: {
      ...defaultClassNames,
      ...initialProps.classNames
    },
    formatters: {
      ...formatters,
      ...initialProps.formatters
    },
    labels: {
      ...labels,
      ...initialProps.labels
    },
    components: {
      Caption: Caption,
      CaptionLabel: CaptionLabel,
      Day: Day,
      DayContent: DayContent,
      Dropdown: Dropdown,
      Footer: Footer,
      Head: Head,
      IconDropdown: IconDropdown,
      IconNext: IconNext,
      IconPrevious: IconPrevious,
      Row: Row,
      WeekNumber: WeekNumber,
      ...initialProps.components
    }
  };

  return (
    <DayPickerContext.Provider value={context}>
      {children}
    </DayPickerContext.Provider>
  );
};

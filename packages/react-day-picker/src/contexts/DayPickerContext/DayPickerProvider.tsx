import * as React from 'react';

import enUS from 'date-fns/locale/en-US';

import * as Components from 'components';
import { DayPickerProps } from 'types';
import { DayPickerContext } from './DayPickerContext';
import { defaultClassNames } from './defaultClassNames';
import * as formatters from './formatters';
import * as labels from './labels';
import { DayPickerContextValue } from './types';
import { convertModifierMatchersToArray } from './utils/convertModifierMatchersToArray';
import { parseFromToProps } from './utils/parseFromToProps';
import { parseModifierShortcuts } from './utils/parseModifierShortcuts';
import { parseToday } from './utils/parseToday';

/** Represent the props for the [[DayPickerProvider]]. */
export interface DayPickerProviderProps {
  /** The props passed to the DayPicker component. */
  initialProps: DayPickerProps | undefined;
  children?: React.ReactNode;
}
/**
 * The provider for the [[DayPickerContext]].
 */
export function DayPickerProvider(props: DayPickerProviderProps): JSX.Element {
  const { children, initialProps = {} } = props;
  const { fromDate, toDate } = parseFromToProps(initialProps);
  const locale = initialProps.locale || enUS;
  const numberOfMonths = initialProps.numberOfMonths ?? 1;
  const today = parseToday(initialProps);
  const month = initialProps.month;

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
    className: initialProps.className,
    dir,
    disableNavigation,
    defaultMonth,
    fixedWeeks,
    hideHead,
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
    style: initialProps.style,
    styles: initialProps.styles ?? {},
    toDate,
    today,
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
      ...initialProps.components
    }
  };

  return (
    <DayPickerContext.Provider value={context}>
      {children}
    </DayPickerContext.Provider>
  );
}

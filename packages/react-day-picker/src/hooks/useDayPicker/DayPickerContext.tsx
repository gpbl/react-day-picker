import * as React from 'react';

import english from 'date-fns/locale/en-US';

import { Day, Dropdown, Head, Row, WeekNumber } from '../../components';
import {
  Components,
  DayPickerProps,
  Formatters,
  Labels,
  ModifierClassNames,
  Styles
} from '../../types';
import { defaultClassNames } from './defaultClassNames';
import * as formatters from './formatters';
import * as labels from './labels';
import { getWeekdays } from './utils/getWeekdays';
import { parseFromToProps } from './utils/parseFromToProps';

/**
 * The props that have always a default value in the context.
 */
type RequiredPropName =
  | 'classNames'
  | 'modifierPrefix'
  | 'numberOfMonths'
  | 'captionLayout'
  | 'modifiers'
  | 'mode'
  | 'today'
  | 'locale';

/**
 * These props can be removed from context as they are used only to calculate
 * the defaults
 */
type OmittedPropName =
  | 'fromDay'
  | 'toDay'
  | 'fromMonth'
  | 'toMonth'
  | 'selected'
  | 'disabled'
  | 'hidden';

export type DayPickerContext = Omit<DayPickerProps, OmittedPropName> &
  Required<Pick<DayPickerProps, RequiredPropName>> & {
    formatters: Formatters;
    labels: Labels;
    components: Components;
    modifierClassNames: ModifierClassNames;
    styles: Styles;
    weekdays: Date[];
  };

/**
 * The DayPickerContext is a React context to share proprieties and settings
 * within the internal components. Use [[useDayPickerContext]] to get the
 * context from the internal components.
 */
export const DayPickerContext = React.createContext<
  DayPickerContext | undefined
>(undefined);

/**
 * The provider for the [[DayPickerContext]]. Must wrap the DayPicker’s root.
 */
export const DayPickerProvider = ({
  initialProps,
  children
}: {
  initialProps: DayPickerProps;
  children: React.ReactNode;
}): JSX.Element => {
  const { fromDate, toDate } = parseFromToProps(initialProps);
  const locale = initialProps.locale || english;
  const numberOfMonths = initialProps.numberOfMonths ?? 1;
  const today = initialProps.today ?? new Date();
  const month = initialProps.month;
  const weekdays = getWeekdays(locale);

  // Default selection mode. If using `selected` prop, it is uncontrolled
  let mode = initialProps.mode ?? 'single';
  if (initialProps.selected) mode = 'uncontrolled';

  // Default caption layout. If calendar navigation is unlimited it must be
  // always `buttons` as we cannot display infinite options in the dropdown.
  let captionLayout = initialProps.captionLayout ?? 'buttons';
  if (!fromDate && !toDate) captionLayout = 'buttons';

  // Set defaults from modifiers shortcuts props
  const modifiers = initialProps.modifiers || {};
  if (initialProps.selected) modifiers.selected = initialProps.selected;
  if (initialProps.hidden) modifiers.hidden = initialProps.hidden;

  modifiers.disabled = [];
  if (initialProps.disabled) {
    if (Array.isArray(initialProps.disabled))
      modifiers.disabled = [...initialProps.disabled];
    else modifiers.disabled = [initialProps.disabled];
  }
  // Disable days before/after from/toDate
  if (fromDate) modifiers.disabled.push({ before: fromDate });
  if (toDate) modifiers.disabled.push({ after: toDate });

  const context: DayPickerContext = {
    ...initialProps,
    modifierPrefix: 'rdp-day_',
    numberOfMonths,
    fromDate,
    toDate,
    captionLayout,
    mode,
    month,
    today,
    locale,
    weekdays,
    modifierClassNames: initialProps.modifierClassNames ?? {},
    styles: initialProps.styles ?? {},
    modifiers,
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
      Day: Day,
      Dropdown: Dropdown,
      Head: Head,
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

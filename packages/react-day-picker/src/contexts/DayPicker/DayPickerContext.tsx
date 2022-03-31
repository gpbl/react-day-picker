import React, { createContext, ReactNode } from 'react';

import { DayPickerProps } from 'DayPicker';

import { CaptionLayout } from 'components/Caption';
import { DayPickerBase, DaySelectionMode } from 'types/DayPickerBase';
import { DayPickerMultipleProps } from 'types/DayPickerMultiple';
import { DayPickerRangeProps } from 'types/DayPickerRange';
import { DayPickerSingleProps } from 'types/DayPickerSingle';
import { Formatters } from 'types/Formatters';
import { Labels } from 'types/Labels';
import { Matcher } from 'types/Matchers';
import { DayModifiers, ModifiersClassNames } from 'types/Modifiers';
import { ClassNames, Styles } from 'types/Styles';

import { getDefaultContextValue } from './defaultContextValue';
import { parseFromToProps } from './utils';

/** The value of the [[DayPickerContext]]. */
export interface DayPickerContextValue extends DayPickerBase {
  mode: DaySelectionMode;
  onSelect?:
    | DayPickerSingleProps['onSelect']
    | DayPickerMultipleProps['onSelect']
    | DayPickerRangeProps['onSelect'];
  required?: boolean;
  min?: number;
  max?: number;
  selected?: Matcher | Matcher[];

  captionLayout: CaptionLayout;
  classNames: Required<ClassNames>;
  formatters: Formatters;
  labels: Labels;
  locale: Locale;
  modifiersClassNames: ModifiersClassNames;
  modifiers: DayModifiers;
  numberOfMonths: number;
  styles: Styles;
  today: Date;
}

/**
 * The DayPicker Context shares the props passed to DayPicker within internal
 * and custom components. It is used to set the default values and perform
 * one-time calculations required to render the days.
 *
 * Developers may access this context from the [[useDayPicker]] hook when
 * using custom components.
 */
export const DayPickerContext = createContext<
  DayPickerContextValue | undefined
>(undefined);

/** The props for the [[DayPickerProvider]]. */
export interface DayPickerProviderProps {
  /** The initial props from the DayPicker component. */
  initialProps: DayPickerProps;
  children?: ReactNode;
}
/**
 * The provider for the [[DayPickerContext]], assigning the defaults from the
 * initial DayPicker props.
 */
export function DayPickerProvider(props: DayPickerProviderProps): JSX.Element {
  const { initialProps } = props;

  const defaults = getDefaultContextValue();

  const { fromDate, toDate } = parseFromToProps(initialProps);

  let captionLayout = initialProps.captionLayout ?? defaults.captionLayout;

  if (captionLayout !== 'buttons' && (!fromDate || !toDate)) {
    captionLayout = 'buttons';
  }

  const value: DayPickerContextValue = {
    captionLayout,
    className: initialProps.className,
    classNames: {
      ...defaults.classNames,
      ...initialProps.classNames
    },
    components: {
      ...defaults.components,
      ...initialProps.components
    },
    defaultMonth: initialProps.defaultMonth,
    dir: initialProps.dir,
    disabled: initialProps.disabled,
    disableNavigation: initialProps.disableNavigation,
    fixedWeeks: initialProps.fixedWeeks,
    footer: initialProps.footer,
    formatters: {
      ...defaults.formatters,
      ...initialProps.formatters
    },
    fromDate,
    hidden: initialProps.hidden,
    hideHead: initialProps.hideHead,
    initialFocus: initialProps.initialFocus,
    labels: {
      ...defaults.labels,
      ...initialProps.labels
    },
    locale: initialProps.locale ?? defaults.locale,
    mode: initialProps.mode || 'default',
    modifiers: {
      ...defaults.modifiers,
      ...initialProps.modifiers
    },
    modifiersClassNames: {
      ...defaults.modifiersClassNames,
      ...initialProps.modifiersClassNames
    },
    modifiersStyles: initialProps.modifiersStyles,
    month: initialProps.month,
    numberOfMonths: initialProps.numberOfMonths ?? defaults.numberOfMonths,
    onDayBlur: initialProps.onDayBlur,
    onDayClick: initialProps.onDayClick,
    onDayFocus: initialProps.onDayFocus,
    onDayKeyDown: initialProps.onDayKeyDown,
    onDayKeyPress: initialProps.onDayKeyPress,
    onDayKeyUp: initialProps.onDayKeyUp,
    onDayMouseEnter: initialProps.onDayMouseEnter,
    onDayMouseLeave: initialProps.onDayMouseLeave,
    onDayTouchCancel: initialProps.onDayTouchCancel,
    onDayTouchEnd: initialProps.onDayTouchEnd,
    onDayTouchMove: initialProps.onDayTouchMove,
    onDayTouchStart: initialProps.onDayTouchStart,
    onMonthChange: initialProps.onMonthChange,
    onNextClick: initialProps.onNextClick,
    onPrevClick: initialProps.onPrevClick,
    onWeekNumberClick: initialProps.onWeekNumberClick,
    pagedNavigation: initialProps.pagedNavigation,
    reverseMonths: initialProps.reverseMonths,
    selected: initialProps.selected,
    showOutsideDays: initialProps.showOutsideDays,
    showWeekNumber: initialProps.showWeekNumber,
    style: initialProps.style,
    styles: {
      ...defaults.styles,
      ...initialProps.styles
    },
    toDate,
    today: initialProps.today ?? defaults.today,
    weekStartsOn: initialProps.weekStartsOn ?? defaults.weekStartsOn
  };

  return (
    <DayPickerContext.Provider value={value}>
      {props.children}
    </DayPickerContext.Provider>
  );
}

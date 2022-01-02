import React, { createContext, ReactNode } from 'react';

import { CaptionLayout } from 'components/Caption';
import { Components, DayPickerProps } from 'types/DayPicker';
import { Formatters } from 'types/Formatters';
import { Labels } from 'types/Labels';
import { DayModifiers, ModifiersClassNames } from 'types/Modifiers';
import { ClassNames, Styles } from 'types/Styles';

import { getDefaultContextValue } from './defaultContextValue';
import { parseFromToProps } from './utils';

/** The value of the [[DayPickerContext]] */
export interface DayPickerContextValue extends DayPickerProps {
  captionLayout: CaptionLayout;
  classNames: Required<ClassNames>;
  components: Components;
  formatters: Formatters;
  labels: Labels;
  locale: Locale;
  modifiersClassNames: ModifiersClassNames;
  modifierPrefix: string;
  modifiers: DayModifiers;
  numberOfMonths: number;
  styles: Styles;
  today: Date;

  // Internally we handle only fromDate/toDate
  toYear?: never;
  fromYear?: never;
  toMonth?: never;
  fromMonth?: never;
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
 * The provider for the [[DayPickerContext]].
 *
 * The context value is set by assigning defaults from the initial DayPicker
 * props.
 */
export function DayPickerProvider(props: DayPickerProviderProps): JSX.Element {
  const { children, initialProps } = props;
  const defaults = getDefaultContextValue();
  const locale = initialProps.locale ?? defaults.locale;
  const numberOfMonths = initialProps.numberOfMonths ?? defaults.numberOfMonths;
  const today = initialProps.today ?? defaults.today;

  const { fromDate, toDate } = parseFromToProps(initialProps);

  let captionLayout = initialProps.captionLayout ?? defaults.captionLayout;

  if (captionLayout !== 'buttons' && !fromDate && !toDate) {
    captionLayout = 'buttons';
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { toYear, fromYear, toMonth, fromMonth, ...contextProps } =
    initialProps;

  const context: DayPickerContextValue = {
    ...contextProps,

    captionLayout,

    fromDate,
    toDate,
    today,

    locale,

    modifiersClassNames:
      initialProps.modifiersClassNames ?? defaults.modifiersClassNames,
    modifierPrefix: initialProps.modifierPrefix ?? defaults.modifierPrefix,
    modifiers: initialProps.modifiers ?? defaults.modifiers,
    numberOfMonths,

    styles: initialProps.styles ?? defaults.styles,
    classNames: {
      ...defaults.classNames,
      ...initialProps.classNames
    },
    formatters: {
      ...defaults.formatters,
      ...initialProps.formatters
    },
    labels: {
      ...defaults.labels,
      ...initialProps.labels
    },
    components: {
      ...defaults.components,
      ...initialProps.components
    }
  };

  return (
    <DayPickerContext.Provider value={context}>
      {children}
    </DayPickerContext.Provider>
  );
}

import React, { createContext, ReactNode } from 'react';

import { DayPickerProps } from 'DayPicker';

import { CaptionLayout } from 'components/Caption';
import { Formatters } from 'types/Formatters';
import { Labels } from 'types/Labels';
import { DayModifiers, ModifiersClassNames } from 'types/Modifiers';
import { ClassNames, Styles } from 'types/Styles';

import { getDefaultContextValue } from './defaultContextValue';
import { parseFromToProps } from './utils';

/** The value of the [[DayPickerContext]] */
export type DayPickerContextValue = DayPickerProps & {
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

  // Internally we handle only fromDate/toDate
  toYear?: never;
  fromYear?: never;
  toMonth?: never;
  fromMonth?: never;
};

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
  const locale = initialProps.locale ?? defaults.locale;
  const numberOfMonths = initialProps.numberOfMonths ?? defaults.numberOfMonths;
  const today = initialProps.today ?? defaults.today;

  const { fromDate, toDate } = parseFromToProps(initialProps);

  let captionLayout = initialProps.captionLayout ?? defaults.captionLayout;

  if (captionLayout !== 'buttons' && (!fromDate || !toDate)) {
    captionLayout = 'buttons';
  }

  // TODO: remove eslint disable, move to external utils
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { toYear, fromYear, toMonth, fromMonth, ...contextProps } =
    initialProps;

  const modifiers = {
    ...defaults.modifiers,
    ...initialProps.modifiers
  };

  const modifiersClassNames = {
    ...defaults.modifiersClassNames,
    ...initialProps.modifiersClassNames
  };

  const styles = {
    ...defaults.styles,
    ...initialProps.styles
  };

  const classNames = {
    ...defaults.classNames,
    ...initialProps.classNames
  };

  const formatters = {
    ...defaults.formatters,
    ...initialProps.formatters
  };

  const labels = {
    ...defaults.labels,
    ...initialProps.labels
  };

  const components = {
    ...defaults.components,
    ...initialProps.components
  };

  const context: DayPickerContextValue = {
    ...contextProps,
    captionLayout,

    fromDate,
    toDate,
    today,

    locale,

    modifiersClassNames,
    modifiers,
    numberOfMonths,

    styles,
    classNames,
    formatters,
    labels,
    components
  };

  return (
    <DayPickerContext.Provider value={context}>
      {props.children}
    </DayPickerContext.Provider>
  );
}

import React from 'react';

import { CaptionLayout } from '../../components';
import {
  ClassNames,
  Components,
  DayPickerProps,
  Formatters,
  Labels,
  ModifierClassNames,
  Modifiers,
  Styles
} from '../../types';

/** The value of the [[DayPickerContext]] */
export interface DayPickerContextValue extends DayPickerProps {
  captionLayout: CaptionLayout;
  classNames: Required<ClassNames>;
  components: Components;
  formatters: Formatters;
  labels: Labels;
  locale: Locale;
  modifierClassNames: ModifierClassNames;
  modifierPrefix: string;
  modifiers: Modifiers;
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
 * The DayPicker Context shares the props passed to DayPicker within the
 * internal components. It is used to set the default values and perform
 * one-time calculations required to render the days.
 *
 * Access this context from the [[useDayPicker]] hook when using custom
 * components.
 */
export const DayPickerContext = React.createContext<
  DayPickerContextValue | undefined
>(undefined);

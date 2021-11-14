import {
  CaptionLayout,
  ClassNames,
  Components,
  DayPickerProps,
  Formatters,
  Labels,
  ModifierClassNames,
  Modifiers,
  Styles
} from '../../types';

/** Represent the value of the [[DayPickerContext]]. */
export type DayPickerContextValue = DayPickerProps & {
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

  // Internally we handle only fromDate/Todate
  toYear?: never;
  fromYear?: never;
  toMonth?: never;
  fromMonth?: never;
};

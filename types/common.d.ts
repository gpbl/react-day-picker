// TypeScript Version: 2.2

export interface ClassNames {
  container: string;
  wrapper: string;
  interactionDisabled: string;
  navBar: string;
  navButtonPrev: string;
  navButtonNext: string;
  navButtonInteractionDisabled: string;

  months: string;
  month: string;
  caption: string;
  weekdays: string;
  weekdaysRow: string;
  weekday: string;
  weekNumber: string;
  body: string;
  week: string;
  day: string;
  footer: string;
  todayButton: string;

  today: string;
  selected: string;
  disabled: string;
  outside: string;
}

export interface InputClassNames {
  container: string;
  overlayWrapper: string;
  overlay: string;
}

export interface RangeModifier {
  from: Date;
  to: Date;
}
export interface BeforeModifier {
  before: Date;
}
export interface AfterModifier {
  after: Date;
}
export interface BeforeAfterModifier {
  after: Date;
  before: Date;
}
export interface DaysOfWeekModifier {
  daysOfWeek: number[];
}
export type FunctionModifier = (date: Date) => boolean;
export type Modifier =
  | Date
  | RangeModifier
  | BeforeModifier
  | AfterModifier
  | BeforeAfterModifier
  | DaysOfWeekModifier
  | FunctionModifier
  | undefined
  | null;

export interface Modifiers {
  today: Modifier | Modifier[];
  outside: Modifier | Modifier[];
  [other: string]: Modifier | Modifier[] | undefined;
}

export interface DayModifiers {
  today: boolean | undefined;
  outside: boolean | undefined;
  [other: string]: boolean | undefined;
}

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
  | undefined;

export interface Modifiers {
  disabled?: Modifier | Modifier[];
  hidden?: Modifier | Modifier[];
  outside?: Modifier | Modifier[];
  selected?: Modifier | Modifier[];
  start?: Modifier | Modifier[];
  today?: Modifier | Modifier[];
  [other?: string]: Modifier | Modifier[] | undefined;
}

export interface ModifiersClassNames {
  [other: string]: string;
}

export interface ModifiersStyles {
  [other: string]: React.CSSProperties;
}

export interface Components {
  Caption: React.ComponentElement;
  Day: React.ComponentElement;
  Head: React.ComponentElement;
  Month: React.ComponentElement;
  Navigation: React.ComponentElement;
  Week: React.ComponentElement;
}

export interface Styles {
  /* Container element */
  container?: React.CSSProperties;
  caption?: React.CSSProperties;

  // Day Component
  day?: React.CSSProperties;
  dayWrapper?: React.CSSProperties;

  // Month Component
  month?: React.CSSProperties;
  monthTable?: React.CSSProperties;
  monthTbody?: React.CSSProperties;
  months?: React.CSSProperties;

  // Head Components
  head?: React.CSSProperties;
  headRow?: React.CSSProperties;
  headWeekNumber?: React.CSSProperties;
  headWeekName?: React.CSSProperties;

  // Navigation Component
  nav?: React.CSSProperties;
  navStart?: React.CSSProperties;
  navPrev?: React.CSSProperties;
  navNext?: React.CSSProperties;

  // Week Component
  week?: React.CSSProperties;
  weekNumber?: React.CSSProperties;
  weekDay?: React.CSSProperties;

  // Modifiers
  modifiers?: ModifiersStyles;
}

export interface ClassNames {
  /* Container element */
  container?: string;
  caption?: string;
  // Day Component
  day?: string;
  dayWrapper?: string;
  // Month Component
  month?: string;
  monthTable?: string;
  monthTbody?: string;
  months?: string;
  // Head Components
  head?: string;
  headRow?: string;
  headWeekNumber?: string;
  headWeekName?: string;
  // Navigation Component
  nav?: string;
  navStart?: string;
  navPrev?: string;
  navNext?: string;
  // Week Component
  week?: string;
  weekNumber?: string;
  weekDay?: string;
  // Modifiers
  modifiers?: ModifiersClassNames;
}

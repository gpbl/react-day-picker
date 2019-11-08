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
  disabled: Modifier | Modifier[];
  hidden: Modifier | Modifier[];
  outside: Modifier | Modifier[];
  selected?: Modifier | Modifier[];
  today: Modifier | Modifier[];
  [other: string]: Modifier | Modifier[] | undefined;
}

export interface ModifiersClassNames {
  [other: string]: string;
}

export interface ModifiersStyles {
  [other: string]: React.CSSProperties;
}

export type ModifierValueType = string | boolean | undefined;

export interface MatchingModifiers {
  disabled: boolean;
  hidden: boolean;
  outside: string;
  selected: boolean | undefined;
  today: boolean;
  interactive: boolean;
  [key: string]: ModifierValueType;
}

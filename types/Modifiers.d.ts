export interface RangeModifier {
  from: Date | undefined;
  to: Date | undefined;
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
  today: Modifier | Modifier[];
  outside: Modifier | Modifier[];
  [other: string]: Modifier | Modifier[] | undefined;
}

export interface DayModifiers {
  today: boolean | undefined;
  outside: boolean | undefined;
  [other: string]: boolean | undefined;
}

export const ModifiersUtils: {
  dayMatchesModifier(day: Date, modifier?: Modifier | Modifier[]): boolean;
  getModifiersForDay(
    day: Date,
    modifiers: Record<string, Modifier | Modifier[]>
  ): string[];
};
export type ModifiersUtils = typeof ModifiersUtils;

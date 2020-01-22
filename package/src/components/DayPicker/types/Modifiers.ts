export type RangeModifier = {
  from: Date;
  to: Date;
};

export type BeforeModifier = {
  before: Date;
};

export type AfterModifier = {
  after: Date;
};

export type BeforeAfterModifier = {
  after: Date;
  before: Date;
};

export type DaysOfWeekModifier = {
  daysOfWeek: number[];
};

export type FunctionModifier = (date: Date) => boolean;

export type ModifiersClassNames = {
  [other: string]: string;
};

export type ModifiersStyles = {
  [other: string]: React.CSSProperties;
};

export type ModifierValueType = string | boolean | undefined;

/**
 * An object containing modifiers matching a specific day. Some defaults
 * modifiers are used in DayPicker. They can be extended using the
 * {@link DayPickerProps.modifiers} prop.
 */
export type MatchingModifiers = {
  disabled: boolean;
  hidden: boolean;
  outside: string;
  selected: boolean | undefined;
  today: boolean;
  interactive: boolean;
  [key: string]: ModifierValueType | undefined;
};

export type DayModifier =
  | Date
  | RangeModifier
  | BeforeModifier
  | AfterModifier
  | BeforeAfterModifier
  | DaysOfWeekModifier
  | FunctionModifier
  | DayModifier[];

export type Modifiers = {
  disabled: DayModifier | DayModifier[];
  hidden: DayModifier | DayModifier[];
  outside: DayModifier | DayModifier[];
  selected: DayModifier | DayModifier[];
  today: DayModifier | DayModifier[];
  [other: string]: DayModifier | DayModifier[];
};

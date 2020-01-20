/**
 * @category Modifiers
 */
export interface RangeModifier {
  from: Date;
  to: Date;
}

/**
 * @category Modifiers
 */
export interface BeforeModifier {
  before: Date;
}

/**
 * @category Modifiers
 */
export interface AfterModifier {
  after: Date;
}

/**
 * @category Modifiers
 */
export interface BeforeAfterModifier {
  after: Date;
  before: Date;
}

/**
 * @category Modifiers
 */
export interface DaysOfWeekModifier {
  daysOfWeek: number[];
}

/**
 * @category Modifiers
 */
export type FunctionModifier = (date: Date) => boolean;

/**
 * @category Modifiers
 */
export interface ModifiersClassNames {
  [other: string]: string;
}

/**
 * @category Modifiers
 */
export interface ModifiersStyles {
  [other: string]: React.CSSProperties;
}

/**
 * @category Modifiers
 */
export type ModifierValueType = string | boolean | undefined;

/**
 * An object containing modifiers matching a specific day. Some defaults
 * modifiers are used in DayPicker. They can be extended using the
 * {@link DayPickerProps.modifiers} prop.
 */
/**
 * @category Modifiers
 */
export interface MatchingModifiers {
  disabled: boolean;
  hidden: boolean;
  outside: string;
  selected: boolean | undefined;
  today: boolean;
  interactive: boolean;
  [key: string]: ModifierValueType | undefined;
}

/**
 * @category Modifiers
 */
export type Modifier =
  | Date
  | RangeModifier
  | BeforeModifier
  | AfterModifier
  | BeforeAfterModifier
  | DaysOfWeekModifier
  | FunctionModifier
  | Modifier[];

/**
 * @category Modifiers
 */
export interface Modifiers {
  disabled: Modifier | Modifier[];
  hidden: Modifier | Modifier[];
  outside: Modifier | Modifier[];
  selected: Modifier | Modifier[];
  today: Modifier | Modifier[];
  [other: string]: Modifier | Modifier[];
}

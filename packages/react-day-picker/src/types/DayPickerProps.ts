import { CustomizableComponents } from './CustomizableComponents';
import { DayPickerComponentProps } from './DayPickerComponentProps';
import { LabelsFormatters } from './LabelsFormatters';
import { ModifiersMatchers } from './ModifiersMatchers';

/** Represent a required prop name */
export type RequiredDayPickerPropsName =
  | 'enableOutsideDaysClick'
  | 'classNames'
  | 'fixedWeeks'
  | 'formatCaption'
  | 'formatDay'
  | 'formatWeekdayName'
  | 'formatWeekNumber'
  | 'locale'
  | 'month'
  | 'numberOfMonths'
  | 'pagedNavigation'
  | 'reverseMonths'
  | 'showCaption'
  | 'showHead'
  | 'showNavigation'
  | 'showOutsideDays'
  | 'showWeekNumber'
  | 'today';

export type DayPickerRequiredProps = Required<
  Pick<DayPickerComponentProps, RequiredDayPickerPropsName>
>;

export type DayPickerOptionalProps = Omit<
  DayPickerComponentProps,
  RequiredDayPickerPropsName
>;

/**
 * Represent the DayPicker props used by the DayPicker components, with the
 * required values from the default.
 */
export interface DayPickerProps
  extends DayPickerOptionalProps,
    DayPickerRequiredProps {
  components: Required<CustomizableComponents>;
  /** The currently focused day. Used for ARIA. */
  focusedDay?: Date;
  labelsFormatters: Required<LabelsFormatters>;
  modifiers: Required<ModifiersMatchers>;
}

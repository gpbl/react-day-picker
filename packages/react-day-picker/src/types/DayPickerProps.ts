import { DayPickerComponentProps } from './DayPickerComponentProps';

type RequiredPropsNames =
  | 'labelsFormatters'
  | 'enableOutsideDaysClick'
  | 'classNames'
  | 'components'
  | 'fixedWeeks'
  | 'formatCaption'
  | 'formatDay'
  | 'formatWeekdayName'
  | 'formatWeekNumber'
  | 'locale'
  | 'modifiersClassNames'
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

type RequiredProps = Required<
  Pick<DayPickerComponentProps, RequiredPropsNames>
>;
type OptionalProps = Omit<DayPickerComponentProps, RequiredPropsNames>;

export interface DayPickerProps extends OptionalProps, RequiredProps {
  /** The currently focused day. Used for ARIA. */
  focusedDay?: Date;
}

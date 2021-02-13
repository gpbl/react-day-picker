import { Caption, Day, Navigation, NextIcon, PrevIcon, Row } from 'components';

import { DayPickerComponentProps } from './DayPickerComponentProps';

/**
 * Represent the props used by DayPicker’s internal components. Extends
 * [[DayPickerComponentProps]] with the default props.
 */
export interface DayPickerProps extends DayPickerComponentProps {
  labelsFormatters: NonNullable<DayPickerComponentProps['labelsFormatters']>;
  enableOutsideDaysClick: NonNullable<
    DayPickerComponentProps['enableOutsideDaysClick']
  >;
  classNames: NonNullable<DayPickerComponentProps['classNames']>;
  className: NonNullable<DayPickerComponentProps['className']>;
  components: {
    Caption: typeof Caption;
    Day: typeof Day;
    Navigation: typeof Navigation;
    Week: typeof Row;
    NextIcon: typeof NextIcon;
    PrevIcon: typeof PrevIcon;
  };
  fixedWeeks: NonNullable<DayPickerComponentProps['fixedWeeks']>;
  /** The day that has the focus. If set, an effect will focus the day cell. */
  focusedDay?: Date;
  formatCaption: NonNullable<DayPickerComponentProps['formatCaption']>;
  formatDay: NonNullable<DayPickerComponentProps['formatDay']>;
  formatWeekdayName: NonNullable<DayPickerComponentProps['formatWeekdayName']>;
  formatWeekNumber: NonNullable<DayPickerComponentProps['formatWeekNumber']>;
  initialMonth: DayPickerComponentProps['initialMonth'];
  locale: NonNullable<DayPickerComponentProps['locale']>;
  modifiersClassNames: NonNullable<
    DayPickerComponentProps['modifiersClassNames']
  >;
  month: NonNullable<DayPickerComponentProps['month']>;
  numberOfMonths: NonNullable<DayPickerComponentProps['numberOfMonths']>;
  onDayFocus?: NonNullable<DayPickerComponentProps['onDayFocus']>;
  onDayBlur?: NonNullable<DayPickerComponentProps['onDayBlur']>;
  pagedNavigation: NonNullable<DayPickerComponentProps['pagedNavigation']>;
  reverseMonths: NonNullable<DayPickerComponentProps['reverseMonths']>;
  showCaption: NonNullable<DayPickerComponentProps['showCaption']>;
  showHead: NonNullable<DayPickerComponentProps['showHead']>;
  showNavigation: NonNullable<DayPickerComponentProps['showNavigation']>;
  showOutsideDays: NonNullable<DayPickerComponentProps['showOutsideDays']>;
  showWeekNumber: NonNullable<DayPickerComponentProps['showWeekNumber']>;
  today: NonNullable<DayPickerComponentProps['today']>;
}

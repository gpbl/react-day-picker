import {
  Caption,
  Day,
  Navigation,
  WeekNumber,
  NextIcon,
  PrevIcon
} from 'components';
import { DayPickerComponentProps } from './DayPickerComponentProps';

/**
 * Represent the props used by DayPicker’s internal components. Extends
 * [[DayPickerComponentProps]] with the default props.
 */
export interface DayPickerProps extends DayPickerComponentProps {
  enableOutsideDaysClick: NonNullable<
    DayPickerComponentProps['enableOutsideDaysClick']
  >;
  classNames: NonNullable<DayPickerComponentProps['classNames']>;
  className: NonNullable<DayPickerComponentProps['className']>;
  components: {
    Caption: typeof Caption;
    Day: typeof Day;
    Navigation: typeof Navigation;
    WeekNumber: typeof WeekNumber;
    NextIcon: typeof NextIcon;
    PrevIcon: typeof PrevIcon;
  };
  fixedWeeks: NonNullable<DayPickerComponentProps['fixedWeeks']>;
  formatCaption: NonNullable<DayPickerComponentProps['formatCaption']>;
  formatDay: NonNullable<DayPickerComponentProps['formatDay']>;
  formatWeekdayName: NonNullable<DayPickerComponentProps['formatWeekdayName']>;
  formatWeekNumber: NonNullable<DayPickerComponentProps['formatWeekNumber']>;
  initialMonth: NonNullable<DayPickerComponentProps['initialMonth']>;
  locale: NonNullable<DayPickerComponentProps['locale']>;
  modifiersClassNames: NonNullable<
    DayPickerComponentProps['modifiersClassNames']
  >;
  month: NonNullable<DayPickerComponentProps['month']>;
  numberOfMonths: NonNullable<DayPickerComponentProps['numberOfMonths']>;
  pagedNavigation: NonNullable<DayPickerComponentProps['pagedNavigation']>;
  reverseMonths: NonNullable<DayPickerComponentProps['reverseMonths']>;
  showCaption: NonNullable<DayPickerComponentProps['showCaption']>;
  showHead: NonNullable<DayPickerComponentProps['showHead']>;
  showNavigation: NonNullable<DayPickerComponentProps['showNavigation']>;
  showOutsideDays: NonNullable<DayPickerComponentProps['showOutsideDays']>;
  showWeekNumber: NonNullable<DayPickerComponentProps['showWeekNumber']>;
  today: NonNullable<DayPickerComponentProps['today']>;
}

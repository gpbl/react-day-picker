import {
  CaptionLayout,
  ClassNames,
  Components,
  DayClickEventHandler,
  DayFocusEventHandler,
  DayKeyboardEventHandler,
  Formatters,
  Labels,
  ModifierClassNames,
  ModifierMatchers,
  MonthChangeEventHandler
} from './';
import { DayPickerProps } from './DayPickerProps';

/**
 * Represent the value of a DayPicker context.
 */
export interface DayPickerContextValue
  extends Omit<
    // No need of these props or they may be confusing as they are not useful in
    // the context of DayPicker.
    DayPickerProps,
    | 'className'
    | 'style'
    | 'month'
    | 'fromMonth'
    | 'toMonth'
    | 'fromYear'
    | 'toYear'
  > {
  captionLayout: CaptionLayout;
  classNames: ClassNames;
  components: Required<Components>;
  formatters: Required<Formatters>;
  labels: Required<Labels>;
  locale: Locale;
  modifierPrefix: string;
  modifiers: ModifierMatchers;
  modifierClassNames?: ModifierClassNames;
  numberOfMonths: number;
  /**
   * Will set the current month if DayPicker is in controlled mode. Calls the
   * original `onMonthChange`.
   *
   * This event handler will do nothing if the passed month is outside the
   * allowed months.
   */
  onMonthChange: MonthChangeEventHandler;
  /**
   * Handle focus behavior. Calls the original `onDayBlur` passed from props.
   */
  onDayBlur: DayFocusEventHandler;
  /**
   * Handle click behavior. Calls the original `onDayClick` passed from props.
   */
  onDayClick: DayClickEventHandler;
  /**
   * Handle focus behavior. Calls the original `onDayFocus` passed from props.
   */
  onDayFocus: DayFocusEventHandler;
  /**
   * Handle keyboard navigation. Calls the original `onDayKeyDown` passed from props.
   */
  onDayKeyDown: DayKeyboardEventHandler;
  /**
   * A reference to the original props passed to the component. Useful for
   * inspecting in internal components.
   */
  originalProps: DayPickerProps;
  /**
   * The today’s date used in the calendar. If not overridden from props, is the
   * current date.
   */
  today: Date;
}

import { useCalendar } from '../../contexts/CalendarContext';
import { useDayPicker } from '../../contexts/DayPickerContext';
import { Chevron as DefaultChevron } from '../Chevron/Chevron';

export type CaptionLayout = 'dropdown' | 'buttons' | 'dropdown-buttons';

export function Nav() {
  const {
    classNames,
    styles,
    labels: { labelNext, labelPrevious },
    locale,
    components
  } = useDayPicker();

  const calendar = useCalendar();
  const Chevron = components?.Chevron ?? DefaultChevron;

  return (
    <nav className={classNames.nav} style={styles?.nav}>
      <button
        name="previous-month"
        className={classNames.button_previous}
        disabled={!calendar.previousMonth}
        aria-label={labelPrevious(calendar.previousMonth, { locale })}
        onClick={calendar.goToPreviousMonth}
      >
        <Chevron />
      </button>
      <button
        name="next-month"
        className={classNames.button_next}
        disabled={!calendar.nextMonth}
        aria-label={labelNext(calendar.nextMonth, { locale })}
        onClick={calendar.goToNextMonth}
      >
        <Chevron orientation="right" />
      </button>
    </nav>
  );
}

import { useCalendar } from '../../contexts/CalendarContext';
import { useDayPicker } from '../../contexts/DayPickerContext';
import { Button as DefaultButton } from '../Button';
import { Chevron as DefaultChevron } from '../Chevron';

export function Nav() {
  const {
    classNames,
    styles,
    labels: { labelNext, labelPrevious },
    locale,
    components
  } = useDayPicker();

  const calendar = useCalendar();

  const Button = components?.Button ?? DefaultButton;
  const Chevron = components?.Chevron ?? DefaultChevron;

  return (
    <div className={classNames.nav} style={styles?.nav}>
      <Button
        name="previous-month"
        className={classNames.button_previous}
        tabIndex={calendar.previousMonth ? undefined : -1}
        aria-disabled={calendar.previousMonth ? undefined : true}
        aria-label={labelPrevious(calendar.previousMonth, { locale })}
        onClick={calendar.goToPreviousMonth}
      >
        <Chevron />
      </Button>
      <Button
        name="next-month"
        className={classNames.button_next}
        tabIndex={calendar.nextMonth ? undefined : -1}
        aria-disabled={calendar.nextMonth ? undefined : true}
        aria-label={labelNext(calendar.nextMonth, { locale })}
        onClick={calendar.goToNextMonth}
      >
        <Chevron orientation="right" />
      </Button>
    </div>
  );
}

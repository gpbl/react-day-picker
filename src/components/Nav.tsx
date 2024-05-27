import { UI } from "../UI";
import { useCalendar } from "../contexts/calendar";
import { useProps } from "../contexts/props";

import { Button as DefaultButton } from "./Button";
import { Chevron as DefaultChevron } from "./Chevron";

/**
 * Render the navigation buttons to change the month.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export function Nav() {
  const {
    classNames,
    styles,
    labels: { labelNext, labelPrevious },
    locale,
    components,
    id
  } = useProps();

  const calendar = useCalendar();

  const Button = components?.Button ?? DefaultButton;
  const Chevron = components?.Chevron ?? DefaultChevron;

  return (
    <div role="toolbar" className={classNames[UI.Nav]} style={styles?.[UI.Nav]}>
      <Button
        type="button"
        name="previous-month"
        className={classNames[UI.ButtonPrevious]}
        tabIndex={calendar.previousMonth ? undefined : -1}
        disabled={calendar.previousMonth ? undefined : true}
        aria-label={labelPrevious(calendar.previousMonth, { locale })}
        aria-controls={id}
        onClick={calendar.goToPreviousMonth}
      >
        <Chevron />
      </Button>
      <Button
        type="button"
        name="next-month"
        className={classNames[UI.ButtonNext]}
        tabIndex={calendar.nextMonth ? undefined : -1}
        disabled={calendar.nextMonth ? undefined : true}
        aria-label={labelNext(calendar.nextMonth, { locale })}
        aria-controls={id}
        onClick={calendar.goToNextMonth}
      >
        <Chevron orientation="right" />
      </Button>
    </div>
  );
}

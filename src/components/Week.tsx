import { getUnixTime } from "date-fns/getUnixTime";

import { UI } from "../UI";
import type { CalendarDay, CalendarWeek } from "../classes";
import { useProps } from "../contexts/props";

import { DayWrapper } from "./DayWrapper";
import { WeekNumber as DefaultWeekNumber } from "./WeekNumber";

/**
 * Render a row in the calendar, with the days and the week number.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export function Week(props: { ["aria-rowindex"]: number; week: CalendarWeek }) {
  const { styles, classNames, showWeekNumber, components } = useProps();

  const WeekNumber = components?.WeekNumber ?? DefaultWeekNumber;

  return (
    <div
      role="row"
      aria-rowindex={props["aria-rowindex"]}
      className={classNames[UI.Week]}
      style={styles?.[UI.Week]}
    >
      {showWeekNumber && <WeekNumber week={props.week} />}
      {props.week.days.map((day: CalendarDay, i: number) => (
        <DayWrapper
          day={day}
          aria-colindex={showWeekNumber ? i + 2 : i + 1}
          key={getUnixTime(day.date)}
        />
      ))}
    </div>
  );
}

export type WeekProps = Parameters<typeof Week>[0];

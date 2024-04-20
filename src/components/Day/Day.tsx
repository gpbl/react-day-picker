import { useDayRender } from "../../hooks/useDayRender";

/** Represent the props used by the {@link Day} component. */
export interface DayProps {
  /** The month where the date is displayed. */
  displayMonth: Date;
  /** The date to render. */
  date: Date;
}

/**
 * The content of a day cell – as a button or span element according to its
 * modifiers.
 */
export function Day(props: DayProps): JSX.Element {
  const dayRender = useDayRender(props.date, props.displayMonth);
  return <td {...dayRender.htmlAttributes} />;
}

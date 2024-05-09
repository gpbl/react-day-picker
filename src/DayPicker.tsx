import { Calendar } from "./components/Calendar";
import { ContextProviders } from "./contexts/ContextProviders";
import { PropsDefault } from "./types/PropsDefault";
import { PropsMulti } from "./types/PropsMulti";
import { PropsRange } from "./types/PropsRange";
import { PropsSingle } from "./types/PropsSingle";

export type DayPickerProps =
  | PropsDefault
  | PropsSingle
  | PropsMulti
  | PropsRange;

/**
 * DayPicker is a React component to create date pickers, calendars, and date
 * inputs for web applications.
 *
 * @see http://daypicker.dev
 */
export function DayPicker(
  props: PropsDefault | PropsSingle | PropsMulti | PropsRange
): JSX.Element {
  return (
    <ContextProviders {...props}>
      <Calendar initialProps={props} />
    </ContextProviders>
  );
}

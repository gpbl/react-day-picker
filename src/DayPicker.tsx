import { Calendar } from "./components/Calendar";
import { ContextProviders } from "./contexts/ContextProviders";
import type {
  Mode,
  PropsBase,
  PropsMulti,
  PropsRange,
  PropsSingle,
} from "./types/props";

/** Map of the props supported by selection modes. */
export interface ModePropsMap {
  single: PropsSingle;
  multi: PropsMulti;
  range: PropsRange;
  none: object;
}

export interface ModeProp<T> {
  mode?: T | undefined;
}

/**
 * Defines the props accepted by the DayPicker component.
 *
 * @see https://react-day-picker.dev/api/daypickerprops
 */
export type DayPickerProps<T extends Mode> = PropsBase &
  ModeProp<T> &
  ModePropsMap[T];

/**
 * Render the date picker component.
 *
 * @see https://react-day-picker.js.org
 */
export function DayPicker<T extends Mode = "none">(props: DayPickerProps<T>) {
  return (
    <ContextProviders {...props}>
      <Calendar />
    </ContextProviders>
  );
}

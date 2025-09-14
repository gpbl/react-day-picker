import type { DateLib } from "./classes/DateLib.js";
import { useMulti } from "./selection/useMulti.js";
import { useRange } from "./selection/useRange.js";
import { useSingle } from "./selection/useSingle.js";
import type { DayPickerProps } from "./types/index.js";
import type { Selection } from "./types/selection.js";

/**
 * Determines the appropriate selection hook to use based on the selection mode
 * and returns the corresponding selection object.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns The selection object for the specified mode, or `undefined` if no
 *   mode is set.
 */
export function useSelection<T extends DayPickerProps>(
  props: T,
  dateLib: DateLib,
): Selection<T> | undefined {
  const single = useSingle(props, dateLib);
  const multi = useMulti(props, dateLib);
  const range = useRange(props, dateLib);

  switch (props.mode) {
    case "single":
      return single;
    case "multiple":
      return multi;
    case "range":
      return range;
    default:
      return undefined;
  }
}

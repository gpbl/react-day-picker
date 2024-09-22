import { type DateLib } from "./lib/index.js";
import { useMulti } from "./selection/useMulti.js";
import { useRange } from "./selection/useRange.js";
import { useSingle } from "./selection/useSingle.js";
import type { DayPickerProps } from "./types/index.js";
import { Selection } from "./types/selection.js";

export function useSelection<T extends DayPickerProps>(
  props: T,
  dateLib: DateLib
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

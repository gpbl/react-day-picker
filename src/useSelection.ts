import { dateLib as defaultDateLib } from "./lib/dateLib.js";
import { type UseMulti, useMulti } from "./selection/useMulti.js";
import { type UseRange, useRange } from "./selection/useRange.js";
import { type UseSingle, useSingle } from "./selection/useSingle.js";
import type {
  DateLib,
  DayPickerProps,
  Mode,
  PropsMulti,
  PropsMultiRequired,
  PropsRange,
  PropsRangeRequired,
  PropsSingle,
  PropsSingleRequired
} from "./types/index.js";

export type { UseMulti, UseRange, UseSingle };

export function useSelection<T extends DayPickerProps>(
  props: T,
  dateLib?: DateLib
): UseSelection<T> {
  const lib = { ...defaultDateLib, ...dateLib };
  const single = useSingle<T>(props as PropsSingle | PropsSingleRequired, lib);
  const multi = useMulti<T>(props as PropsMulti | PropsMultiRequired, lib);
  const range = useRange<T>(props as PropsRange | PropsRangeRequired, lib);

  switch (props.mode) {
    case "single":
      // @ts-expect-error The type of `single` is `UseSingle<T>`.
      return single;
    case "multiple":
      // @ts-expect-error The type of `multi` is `UseMulti<T>`.
      return multi;
    case "range":
      // @ts-expect-error The type of `range` is `UseRange<T>`.
      return range;
    default:
      // @ts-expect-error The type of the return value correct
      return {
        handleSelect: () => undefined,
        isSelected: () => false,
        selected: undefined
      };
  }
}

export type UseSelection<T> = T extends { mode: Mode }
  ? {
      single: UseSingle<T>;
      multiple: UseMulti<T>;
      range: UseRange<T>;
    }[T["mode"]]
  : {
      handleSelect: () => undefined;
      isSelected: () => false;
      selected: undefined;
    };

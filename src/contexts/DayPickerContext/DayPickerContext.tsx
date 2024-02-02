import { createContext, PropsWithChildren, useContext, useId } from "react";

import type { DayPickerProps } from "../../DayPicker";
import type { Formatters } from "../../types/formatters";
import type { Labels } from "../../types/labels";
import type {
  Mode,
  PropsBase,
  Selected,
  SelectHandler,
} from "../../types/props";
import type { ClassNames } from "../../types/ui";
import type { DataAttributes } from "../ModifiersContext";
import { getClassNames } from "./utils/getClassNames";
import { getDataAttributes } from "./utils/getDataAttributes";
import { getFormatters } from "./utils/getFormatters";
import { getFromToDate } from "./utils/getFromToDate";
import { getLabels } from "./utils/getLabels";

/** @category Contexts */
export interface DayPickerContext<T extends Mode> extends PropsBase {
  classNames: ClassNames;
  /** The `data-*` attributes passed to `DayPicker`. */
  dataAttributes: DataAttributes;
  formatters: Formatters;
  fromDate: Date | undefined;
  id: string;
  labels: Labels;
  max: number | undefined;
  min: number | undefined;
  mode: T;
  numberOfMonths: number;
  required: boolean;
  toDate: Date | undefined;
  today: Date;
  /** The currently selected value. */
  selected: Selected<Mode> | undefined;
  /** The default selected value. */
  defaultSelected: Selected<Mode> | undefined;
  /** The function that handles the day selection. */
  onSelect: SelectHandler<Mode> | undefined;
}

const dayPickerContext = createContext<DayPickerContext<Mode> | null>(null);

/**
 * The provider for the `dayPickerContext`, storing the props and setting its
 * defaults. Must be the root of all the providers.
 *
 * @category Contexts
 */
export const DayPickerProvider = <T extends Mode>(
  props: PropsWithChildren<DayPickerProps<T>>,
) => {
  const reactId = useId();
  const { children, ...restProps } = props;

  const { fromDate, toDate } = getFromToDate(props);

  const context = {
    ...restProps,
    classNames: getClassNames(props.classNames),
    dataAttributes: getDataAttributes(props),
    formatters: getFormatters(props.formatters),
    fromDate,
    id: props.id ?? reactId,
    labels: getLabels(props.labels),
    required: "required" in props ? props.required ?? false : false,
    min: "min" in props ? props.min ?? undefined : undefined,
    max: "max" in props ? props.max ?? undefined : undefined,
    mode: props.mode ?? "none",
    numberOfMonths: props.numberOfMonths ?? 1,
    today: props.today ?? new Date(),
    toDate,
    selected: "selected" in props ? props.selected : undefined,
    defaultSelected:
      "defaultSelected" in props ? props.defaultSelected : undefined,
    onSelect: "onSelect" in props ? props.onSelect : undefined,
  };

  return (
    <dayPickerContext.Provider value={context}>
      {children}
    </dayPickerContext.Provider>
  );
};

/**
 * Use this hook to access to the DayPicker context within Custom Components.
 *
 * @category Contexts
 */
export function useDayPicker() {
  const context = useContext(dayPickerContext);
  if (!context)
    throw new Error(
      "useDayPicker must be used within a `<dayPickerContext.Provider/>`.",
    );

  return context;
}

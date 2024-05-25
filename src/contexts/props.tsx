import { createContext, PropsWithChildren, useContext, useId } from "react";

import { getClassNames } from "../helpers/getClassNames";
import { getDataAttributes } from "../helpers/getDataAttributes";
import { getFormatters } from "../helpers/getFormatters";
import { getFromToDate } from "../helpers/getFromToDate";
import { getLabels } from "../helpers/getLabels";
import type {
  ClassNames,
  DataAttributes,
  DayPickerProps,
  Formatters,
  Labels,
  Mode,
  PropsBase,
  Selected,
  SelectHandler
} from "../types";

/**
 * The props context holds the props passed to the DayPicker component, with
 * some optional props set to meaningful defaults.
 *
 * Access the Props context using the {@link useProps} hook.
 *
 * @group Contexts
 */
export interface PropsContext<T extends Mode> extends PropsBase {
  classNames: ClassNames;
  /** The `data-*` attributes passed to `<DayPicker />`. */
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

const propsContext = createContext<PropsContext<Mode> | null>(null);

/**
 * Provide the props to the DayPicker components. Must be used as root of the
 * other providers.
 *
 * @private
 */
export const PropsProvider = <T extends Mode>(
  props: PropsWithChildren<DayPickerProps<T>>
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
    mode: props.mode ?? ("default" as Mode),
    numberOfMonths: props.numberOfMonths ?? 1,
    today: props.today ?? new Date(),
    toDate,
    selected: "selected" in props ? props.selected : undefined,
    defaultSelected:
      "defaultSelected" in props ? props.defaultSelected : undefined,
    onSelect: "onSelect" in props ? props.onSelect : undefined
  };

  return (
    <propsContext.Provider value={context}>{children}</propsContext.Provider>
  );
};

/**
 * Return the props passed to DayPicker.
 *
 * @group Hooks
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export function useProps() {
  const context = useContext(propsContext);
  if (!context) {
    throw new Error(
      "useDayPicker() must be used within a `<dayPickerContext.Provider/>`."
    );
  }
  return context;
}

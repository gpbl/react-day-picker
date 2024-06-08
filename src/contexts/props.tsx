import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useId
} from "react";

import { getDataAttributes } from "../helpers/getDataAttributes";
import { getDefaultClassNames } from "../helpers/getDefaultClassNames";
import { getFormatters } from "../helpers/getFormatters";
import { getStartEndMonths } from "../helpers/getStartEndMonths";
import * as defaultLabels from "../labels";
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
 * Holds the props passed to the DayPicker component, with some optional props
 * set to meaningful defaults.
 *
 * Access this context using the {@link useProps} hook.
 *
 * @template T - The {@link Mode | selection mode}. Defaults to `"default"`.
 * @template R - Whether the selection is required. Defaults to `false`.
 * @group Contexts
 */
export interface PropsContext<
  T extends Mode = "default",
  R extends boolean = false
> extends PropsBase {
  classNames: ClassNames;
  /** The `data-*` attributes passed to `<DayPicker />`. */
  dataAttributes: DataAttributes;
  formatters: Formatters;
  fromMonth: Date | undefined;
  id: string;
  labels: Labels;
  max: number | undefined;
  min: number | undefined;
  mode: T;
  numberOfMonths: number;
  required: boolean;
  toMonth: Date | undefined;
  today: Date;
  /** The currently selected value. */
  selected: Selected<Mode, R> | undefined;
  /** The default selected value. */
  defaultSelected: Selected<Mode, R> | undefined;
  /** The function that handles the day selection. */
  onSelect: SelectHandler<Mode, R> | undefined;
}

const propsContext = createContext<PropsContext<Mode, boolean> | null>(null);

/**
 * Provide the props to the DayPicker components. Must be used as root of the
 * other providers.
 *
 * @private
 */
export const PropsProvider = <T extends Mode, R extends boolean>(
  props: PropsWithChildren<DayPickerProps<T, R>>
) => {
  const reactId = useId();
  const { children, ...restProps } = props;

  const { fromMonth, toMonth } = getStartEndMonths(props);

  const context = {
    ...restProps,
    classNames: { ...getDefaultClassNames(), ...restProps.classNames },
    dataAttributes: getDataAttributes(props),
    formatters: getFormatters(props.formatters),
    fromMonth,
    id: props.id ?? reactId,
    labels: { ...defaultLabels, ...restProps.labels },
    required: "required" in props ? props.required ?? false : false,
    min: "min" in props ? props.min ?? undefined : undefined,
    max: "max" in props ? props.max ?? undefined : undefined,
    mode: props.mode ?? ("default" as Mode),
    numberOfMonths: props.numberOfMonths ?? 1,
    today: props.today ?? new Date(),
    toMonth,
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
 * Access to the props passed to DayPicker.
 *
 * Use this hook from the custom components passed via the `components` prop.
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

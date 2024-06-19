import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useId
} from "react";

import * as customComponents from "../components/custom-components";
import { getDataAttributes } from "../helpers/getDataAttributes";
import { getDefaultClassNames } from "../helpers/getDefaultClassNames";
import { getFormatters } from "../helpers/getFormatters";
import { getStartEndMonths } from "../helpers/getStartEndMonths";
import * as defaultLabels from "../labels";
import type { DayPickerProps } from "../types/props";
import type {
  ClassNames,
  CustomComponents,
  DataAttributes,
  Formatters,
  Labels,
  Mode
} from "../types/shared";

const PropsContext = createContext<PropsContextValue | undefined>(undefined);

/**
 * Holds the props passed to the DayPicker component, with some optional props
 * set to meaningful defaults.
 *
 * Access this context using the {@link usePropsContext} hook.
 */
export type PropsContextValue = DayPickerProps & {
  /** The mode of the selectionx. */
  mode: Mode | undefined;
  /** The class names to add to the UI. */
  classNames: ClassNames;
  /** The unique ID of the DayPicker instance. */
  id: string;
  /** The data attributes to add to the calendar. */
  dataAttributes: DataAttributes;
  /** The components used in the UI. */
  components: CustomComponents;
  /** The formatters used in the UI. */
  formatters: Formatters;
  /** The labels used in the UI. */
  labels: Labels;
  /** The number of months displayed in the calendar. */
  numberOfMonths: number;
  /** The date of today. */
  today: Date;
  /** The month where the navigation starts. */
  startMonth: Date | undefined;
  /** The month where the navigation ends. */
  endMonth: Date | undefined;
};

function useProps(initialProps: DayPickerProps) {
  const reactId = useId();

  const { startMonth, endMonth } = getStartEndMonths(initialProps);

  const propsContext: PropsContextValue = {
    ...initialProps,
    startMonth,
    endMonth,
    classNames: {
      ...getDefaultClassNames(),
      ...initialProps.classNames
    },
    components: {
      ...customComponents,
      ...initialProps.components
    },
    dataAttributes: getDataAttributes(initialProps),
    formatters: getFormatters(initialProps.formatters),
    id: initialProps.id ?? reactId,
    labels: {
      ...defaultLabels,
      ...initialProps.labels
    },
    numberOfMonths: initialProps.numberOfMonths ?? 1,
    today: initialProps.today ?? new Date()
  };

  if (initialProps.mode === "single") {
    propsContext.mode = "single";
    propsContext.onDayClick = (day) => {};
  }

  return propsContext;
}

/**
 * Provide the shared props to the DayPicker components. Must be used as root of
 * the other providers.
 *
 * @private
 */
export function PropsContextProvider<
  ModeType extends Mode | undefined = undefined,
  IsRequired extends boolean = false
>({
  initialProps,
  children
}: PropsWithChildren<{
  initialProps: DayPickerProps;
}>) {
  const propsContextValue = useProps(initialProps);

  return (
    <PropsContext.Provider value={propsContextValue}>
      {children}
    </PropsContext.Provider>
  );
}

/**
 * Access to the props passed to `DayPicker`, with some meaningful defaults.
 *
 * Use this hook from the custom components passed via the `components` prop.
 *
 * @group Contexts
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export function usePropsContext() {
  const propsContext = useContext(PropsContext);
  if (!propsContext) {
    throw new Error(
      "usePropsContext() must be used within a PropsContextProvider"
    );
  }
  return propsContext;
}

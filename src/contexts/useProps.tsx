import React, { useMemo } from "react";

import * as customComponents from "../components/custom-components";
import { getDataAttributes } from "../helpers/getDataAttributes";
import { getDefaultClassNames } from "../helpers/getDefaultClassNames";
import { getFormatters } from "../helpers/getFormatters";
import { getStartEndMonths } from "../helpers/getStartEndMonths";
import * as defaultLabels from "../labels";
import { dateLib as defaultDateLib } from "../lib";
import type {
  ClassNames,
  CustomComponents,
  DataAttributes,
  Formatters,
  Labels,
  Mode,
  DateLib,
  PropsBase
} from "../types";

const PropsContext = React.createContext<PropsContextValue | undefined>(
  undefined
);

export type PropsContextValue = PropsBase & {
  /** The mode of the selection. */
  mode: Mode | undefined;
  /** The class names to add to the UI. */
  classNames: ClassNames;
  /** The unique ID of the DayPicker instance. */
  id: string;
  dateLib: DateLib;
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

/**
 * Provide the shared props to the DayPicker components. Must be used as root of
 * the other providers.
 *
 * @private
 */
export function PropsContextProvider<
  ModeType extends Mode | undefined = undefined,
  IsRequired extends boolean = false
>({ children, ...initialProps }: React.PropsWithChildren<PropsBase>) {
  const reactId = React.useId();

  const dateLib = React.useMemo(
    () => ({
      ...defaultDateLib,
      ...initialProps.dateLib
    }),
    [initialProps.dateLib]
  );

  const { captionLayout, fromYear, toYear, fromMonth, toMonth } = initialProps;

  const { startMonth, endMonth } = useMemo(
    () =>
      getStartEndMonths({
        startMonth: initialProps.startMonth,
        endMonth: initialProps.endMonth,
        today: initialProps.today,
        captionLayout,
        dateLib,
        fromYear,
        toYear,
        fromMonth,
        toMonth
      }),
    [
      captionLayout,
      dateLib,
      fromMonth,
      fromYear,
      initialProps.endMonth,
      initialProps.startMonth,
      toMonth,
      toYear,
      initialProps.today
    ]
  );

  const classNames = React.useMemo(
    () => ({
      ...getDefaultClassNames(),
      ...initialProps.classNames
    }),
    [initialProps.classNames]
  );

  const components = React.useMemo(
    () => ({
      ...customComponents,
      ...initialProps.components
    }),
    [initialProps.components]
  );

  const dataAttributes = React.useMemo(
    () => getDataAttributes(initialProps),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const formatters = React.useMemo(
    () => getFormatters(initialProps.formatters),
    [initialProps.formatters]
  );

  const labels = React.useMemo(
    () => ({
      ...defaultLabels,
      ...initialProps.labels
    }),
    [initialProps.labels]
  );

  const today = React.useMemo(() => {
    return dateLib.startOfDay(initialProps.today ?? new dateLib.Date());
  }, [dateLib, initialProps.today]);

  const propsContext: PropsContextValue = {
    ...initialProps,
    mode: initialProps.mode ?? undefined,
    startMonth,
    endMonth,
    classNames,
    components,
    dataAttributes,
    formatters,
    id: initialProps.id ?? reactId,
    labels,
    numberOfMonths: initialProps.numberOfMonths ?? 1,
    today,
    dateLib
  };

  // useWhatChanged(
  //   [...Object.values(propsContext)],
  //   Object.keys(propsContext).join(","),
  //   "PROPS CONTEXT"
  // );

  // useWhatChanged(
  //   [...Object.values(initialProps)],
  //   Object.keys(initialProps).join(","),
  //   "INITIAL PROPS"
  // );

  return (
    <PropsContext.Provider value={propsContext}>
      {children}
    </PropsContext.Provider>
  );
}

/**
 * Access to the props passed to `DayPicker`, with some meaningful defaults.
 *
 * Use this hook from the custom components passed via the `components` prop.
 *
 * @group Hooks
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function useProps() {
  const propsContext = React.useContext(PropsContext);
  if (!propsContext) {
    throw new Error(
      "usePropsContext() must be used within a PropsContextProvider"
    );
  }
  return propsContext;
}

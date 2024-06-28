import React from "react";

import * as customComponents from "../components/custom-components.js";
import { getDataAttributes } from "../helpers/getDataAttributes.js";
import { getDefaultClassNames } from "../helpers/getDefaultClassNames.js";
import { getFormatters } from "../helpers/getFormatters.js";
import { getStartEndMonths } from "../helpers/getStartEndMonths.js";
import * as defaultLabels from "../labels/index.js";
import { dateLib as defaultDateLib } from "../lib/index.js";
import type {
  ClassNames,
  CustomComponents,
  DataAttributes,
  Formatters,
  Labels,
  Mode,
  DayPickerProps,
  DateLib
} from "../types/index.js";

export type UseProps = DayPickerProps & {
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
  components: Required<CustomComponents>;
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

export function useProps(initialProps: DayPickerProps) {
  const reactId = React.useId();

  const { startMonth, endMonth } = getStartEndMonths(initialProps);

  const dateLib = {
    ...defaultDateLib,
    ...initialProps.dateLib
  };

  const extendedProps: UseProps = {
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
    today: initialProps.today ?? new dateLib.Date(),
    dateLib
  };

  return extendedProps;
}

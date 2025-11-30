import type { DateLibOptions } from "../classes/DateLib.js";
import * as defaultLabels from "../labels/index.js";
import type { DayPickerProps, Labels } from "../types/index.js";

// Use a bivariant callable type to accept both the exact label signatures and
// compatible overrides. This matches how React types event handlers, allowing
// consumers to pass narrower or slightly different function shapes without
// losing type safety.
type BivariantLabel<Args extends unknown[]> = {
  bivarianceHack(...args: Args): string;
}["bivarianceHack"];

const resolveLabel = <Args extends unknown[], T extends BivariantLabel<Args>>(
  defaultLabel: T,
  customLabel: T | undefined,
  localeLabel: string | T | undefined,
): T => {
  if (customLabel) return customLabel;
  if (localeLabel) {
    return (
      typeof localeLabel === "function"
        ? localeLabel
        : (..._args: Args) => localeLabel
    ) as T;
  }
  return defaultLabel;
};

/**
 * Merges custom labels from the props with the default labels.
 *
 * When available, uses the locale-provided translation for `labelNext`.
 *
 * @param customLabels The custom labels provided in the DayPicker props.
 * @param options Options from the date library, used to resolve locale
 *   translations.
 * @returns The merged labels object with locale-aware defaults.
 */
export function getLabels(
  customLabels: DayPickerProps["labels"],
  options: DateLibOptions,
): Labels {
  const localeLabels = options.locale?.labels ?? {};

  return {
    ...defaultLabels,
    ...(customLabels ?? {}),
    labelDayButton: resolveLabel(
      defaultLabels.labelDayButton,
      customLabels?.labelDayButton,
      localeLabels.labelDayButton,
    ),
    labelMonthDropdown: resolveLabel(
      defaultLabels.labelMonthDropdown,
      customLabels?.labelMonthDropdown,
      localeLabels.labelMonthDropdown,
    ),
    labelNext: resolveLabel(
      defaultLabels.labelNext,
      customLabels?.labelNext,
      localeLabels.labelNext,
    ),
    labelPrevious: resolveLabel(
      defaultLabels.labelPrevious,
      customLabels?.labelPrevious,
      localeLabels.labelPrevious,
    ),
    labelWeekNumber: resolveLabel(
      defaultLabels.labelWeekNumber,
      customLabels?.labelWeekNumber,
      localeLabels.labelWeekNumber,
    ),
    labelYearDropdown: resolveLabel(
      defaultLabels.labelYearDropdown,
      customLabels?.labelYearDropdown,
      localeLabels.labelYearDropdown,
    ),
    labelGrid: resolveLabel(
      defaultLabels.labelGrid,
      customLabels?.labelGrid,
      localeLabels.labelGrid,
    ),
    labelGridcell: resolveLabel(
      defaultLabels.labelGridcell,
      customLabels?.labelGridcell,
      localeLabels.labelGridcell,
    ),
    labelNav: resolveLabel(
      defaultLabels.labelNav,
      customLabels?.labelNav,
      localeLabels.labelNav,
    ),
    labelWeekNumberHeader: resolveLabel(
      defaultLabels.labelWeekNumberHeader,
      customLabels?.labelWeekNumberHeader,
      localeLabels.labelWeekNumberHeader,
    ),
    labelWeekday: resolveLabel(
      defaultLabels.labelWeekday,
      customLabels?.labelWeekday,
      localeLabels.labelWeekday,
    ),
  };
}

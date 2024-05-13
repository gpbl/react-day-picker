import { Calendar, CalendarProps } from "../components/Calendar";
import { MonthCaption, MonthCaptionProps } from "../components/MonthCaption";
import { MonthGrid, MonthGridProps } from "../components/MonthGrid";
import {
  WeekNumberRowHeader,
  WeekNumberRowHeaderProps
} from "../components/WeekNumberRowHeader";
import { WeekRow, WeekRowProps } from "../components/WeekRow";
import { WeekdaysRow } from "../components/WeekdaysRow";
import {
  ContextProviders,
  type ContextProvidersProps
} from "../contexts/ContextProviders";

import { Mode } from "./PropsBase";
import { PropsMulti } from "./PropsMulti";
import { PropsRange } from "./PropsRange";
import { PropsSingle } from "./PropsSingle";

/**
 * @deprecated This type has been renamed. Use {@link ContextProviders} instead.
 *   (deprecated since v9.0.0)
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export const RootProvider = ContextProviders;

/**
 * @deprecated This type has been renamed. Use {@link ContextProvidersProps}
 *   instead. (deprecated since v9.0.0)
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export type RootProviderProps = ContextProvidersProps;

/**
 * @deprecated This type has been renamed. Use {@link Calendar} instead.
 *   (deprecated since v9.0.0)
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export const Root = Calendar;

/**
 * @deprecated This type has been renamed. Use {@link CalendarProps} instead.
 *   (deprecated since v9.0.0)
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export type RootProps = CalendarProps;

/**
 * @deprecated This type has been renamed. Use {@link MonthGrid} instead.
 *   (deprecated since v9.0.0)
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export const Month = MonthGrid;

/**
 * @deprecated This type has been renamed. Use {@link MonthGridProps} instead.
 *   (deprecated since v9.0.0)
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export type MonthProps = MonthGridProps;

/**
 * @deprecated This type has been renamed. Use {@link MonthCaption} instead.
 *   (deprecated since v9.0.0)
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export const Caption = MonthCaption;

/**
 * @deprecated This type has been renamed. Use {@link MonthCaptionProps} instead.
 *   (deprecated since v9.0.0)
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export type CaptionProps = MonthCaptionProps;

/**
 * @deprecated This type has been renamed. Use {@link WeekdaysRow} instead.
 *   (deprecated since v9.0.0)
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export const HeadRow = WeekdaysRow;

/**
 * @deprecated This type has been renamed. Use {@link WeekRow} instead. (This
 *   type has been deprecated sinc) v9
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export const Row = WeekRow;

/**
 * @deprecated This type has been renamed. Use {@link WeekRowProps} instead.
 *   (deprecated since v9.0.0)
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export type RowProps = WeekRowProps;

/**
 * @deprecated This type has been renamed. Use {@link WeekNumberRowHeader}
 *   instead. (deprecated since v9.0.0)
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export const WeekNumber = WeekNumberRowHeader;

/**
 * @deprecated This type has been renamed. Use {@link WeekNumberRowHeaderProps}
 *   instead. (deprecated since v9.0.0)
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export type WeekNumberProps = WeekNumberRowHeaderProps;

/**
 * @deprecated This type has been renamed. Use {@link PropsSingle} instead.
 *   (deprecated since v9.0.0)
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export type DayPickerSingleProps = PropsSingle;
/**
 * @deprecated This type has been renamed. Use {@link PropsMulti} instead.
 *   (deprecated since v9.0.0)
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export type DayPickerMultipleProps = PropsMulti;
/**
 * @deprecated This type has been renamed. Use {@link PropsRange} instead.
 *   (deprecated since v9.0.0)
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export type DayPickerRangeProps = PropsRange;

/**
 * @deprecated This type has been renamed. Use {@link Mode} instead. (deprecated
 *   since v9.0.0)
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export type DaySelectionMode = Mode;

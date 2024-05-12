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
 * @deprecated Use {@link ContextProviders} instead.
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export const RootProvider = ContextProviders;

/**
 * @deprecated Use {@link ContextProvidersProps} instead.
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export type RootProviderProps = ContextProvidersProps;

/**
 * @deprecated Use {@link Calendar} instead.
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export const Root = Calendar;

/**
 * @deprecated Use {@link CalendarProps} instead.
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export type RootProps = CalendarProps;

/**
 * @deprecated Use {@link MonthGrid} instead.
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export const Month = MonthGrid;

/**
 * @deprecated Use {@link MonthGridProps} instead.
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export type MonthProps = MonthGridProps;

/**
 * @deprecated Use {@link MonthCaption} instead.
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export const Caption = MonthCaption;

/**
 * @deprecated Use {@link MonthCaptionProps} instead.
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export type CaptionProps = MonthCaptionProps;

/**
 * @deprecated Use {@link WeekdaysRow} instead.
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export const HeadRow = WeekdaysRow;

/**
 * @deprecated Use {@link WeekRow} instead.
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export const Row = WeekRow;

/**
 * @deprecated Use {@link WeekRowProps} instead.
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export type RowProps = WeekRowProps;

/**
 * @deprecated Use {@link WeekNumberRowHeader} instead.
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export const WeekNumber = WeekNumberRowHeader;

/**
 * @deprecated Use {@link WeekNumberRowHeaderProps} instead.
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export type WeekNumberProps = WeekNumberRowHeaderProps;

/**
 * @deprecated Use {@link PropsSingle} instead.
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export type DayPickerSingleProps = PropsSingle;
/**
 * @deprecated Use {@link PropsMulti} instead.
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export type DayPickerMultipleProps = PropsMulti;
/**
 * @deprecated Use {@link PropsRange} instead.
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export type DayPickerRangeProps = PropsRange;

/**
 * @deprecated Use {@link Mode} instead.
 * @see https://react-day-picker.js.org/upgrading#v9
 */
export type DaySelectionMode = Mode;

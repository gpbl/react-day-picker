/* eslint-disable @typescript-eslint/no-explicit-any */
import { Calendar } from "../components/Calendar";
import {
  MonthCaption,
  type MonthCaptionProps
} from "../components/MonthCaption";
import { Week, type WeekProps } from "../components/Week";
import { useCalendar } from "../contexts";
import { useProps, type PropsContextValue } from "../contexts";
import { labelDay, labelNext, labelWeekday, labelWeekNumber } from "../labels";

import type { PropsMulti, PropsRange, PropsSingle } from "./props";
import type { Mode, DayEventHandler } from "./shared";

/**
 * @deprecated This type will be removed.
 * @protected
 */
export type RootProvider = any;

/**
 * @deprecated This type will be removed.
 * @protected
 */
export type RootProviderProps = any;

/**
 * @deprecated This type has been renamed. Use `Calendar` instead.
 * @protected
 * @group Components
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export const Root = Calendar;

/**
 * @deprecated This component has been renamed. Use `MonthCaption` instead.
 * @protected
 * @group Components
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export const Caption = MonthCaption;

/**
 * @deprecated This type has been renamed. Use `MonthCaptionProps` instead.
 * @protected
 */
export type CaptionProps = MonthCaptionProps;

/**
 * @deprecated This component has been removed.
 * @protected
 * @group Components
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export type HeadRow = any;

/**
 * @deprecated This component has been renamed. Use `Week` instead.
 * @protected
 * @group Components
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export const Row = Week;

/**
 * @deprecated This type has been removed. Use `WeekProps` instead.
 * @protected
 */
export type RowProps = WeekProps;

/**
 * @deprecated This type has been renamed. Use `PropsSingle` instead.
 * @protected
 */
export type DayPickerSingleProps = PropsSingle;

/**
 * @deprecated This type has been renamed. Use `PropsMulti` instead.
 * @protected
 */
export type DayPickerMultipleProps = PropsMulti;

/**
 * @deprecated This type has been renamed. Use `PropsRange` instead.
 * @protected
 */
export type DayPickerRangeProps = PropsRange;

/**
 * @deprecated This type will be removed. Use `NonNullable<unknown>` instead
 * @protected
 */
export type DayPickerDefaultProps = NonNullable<unknown>;

/**
 * @deprecated This type has been renamed. Use `Mode` instead.
 * @protected
 */
export type DaySelectionMode = Mode;

/**
 * @deprecated This type will be removed. Use `string` instead;
 * @protected
 */
export type Modifier = string;

/**
 * @deprecated This type will be removed. Use `SelectHandler<"single">` instead.
 * @protected
 */
export type SelectSingleEventHandler = PropsSingle["onSelect"];

/**
 * @deprecated This type will be removed. Use `SelectHandler<"multiple">`
 *   instead.
 * @protected
 */
export type SelectMultipleEventHandler = PropsMulti["onSelect"];

/**
 * @deprecated This type will be removed. Use `SelectHandler<"range">` instead.
 * @protected
 */
export type SelectRangeEventHandler = PropsRange["onSelect"];

/**
 * @deprecated This type is not used anymore.
 * @protected
 */
export type DayPickerProviderProps = any;

/**
 * @deprecated This type has been renamed to `useProps`.
 * @protected
 * @group Hooks
 */
export const useDayPicker = useProps;

/**
 * @deprecated This type has been renamed to `useCalendar`.
 * @protected
 * @group Hooks
 */
export const useNavigation = useCalendar;

/**
 * @deprecated This hook has been removed. Use a custom `Day` component instead.
 * @protected
 * @group Hooks
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export type useDayRender = any;

/**
 * @deprecated This type is not used anymore.
 * @protected
 */
export type ContextProvidersProps = any;

/**
 * @deprecated Use `typeof labelDay` instead.
 * @protected
 */
export type DayLabel = typeof labelDay;

/**
 * @deprecated Use `typeof labelNext` or `typeof labelPrevious` instead.
 * @protected
 */
export type NavButtonLabel = typeof labelNext;

/**
 * @deprecated Use `typeof labelWeekday` instead.
 * @protected
 */
export type WeekdayLabel = typeof labelWeekday;

/**
 * @deprecated Use `typeof labelWeekNumber` instead.
 * @protected
 */
export type WeekNumberLabel = typeof labelWeekNumber;

/**
 * @deprecated Use {@link DayMouseEventHandler} instead.
 * @protected
 */
export type DayClickEventHandler = DayEventHandler<React.MouseEvent>;

/**
 * @deprecated This type will be removed. Use `DayEventHandler<React.FocusEvent
 *   | React.KeyboardEvent>` instead.
 * @protected
 */
export type DayFocusEventHandler = DayEventHandler<
  React.FocusEvent | React.KeyboardEvent
>;

/**
 * @deprecated This type will be removed. Use
 *   `DayEventHandler<React.KeyboardEvent>` instead.
 * @protected
 */
export type DayKeyboardEventHandler = DayEventHandler<React.KeyboardEvent>;

/**
 * @deprecated This type will be removed. Use
 *   `DayEventHandler<React.MouseEvent>` instead.
 * @protected
 */
export type DayMouseEventHandler = DayEventHandler<React.MouseEvent>;

/**
 * @deprecated This type will be removed. Use
 *   `DayEventHandler<React.PointerEvent>` instead.
 * @protected
 */
export type DayPointerEventHandler = DayEventHandler<React.PointerEvent>;

/**
 * @deprecated This type will be removed. Use
 *   `DayEventHandler<React.TouchEvent>` instead.
 * @protected
 */
export type DayTouchEventHandler = DayEventHandler<React.TouchEvent>;

/**
 * @deprecated The type has been renamed. Use `PropsContext` instead.
 * @protected
 */
export type DayPickerContext = PropsContextValue;

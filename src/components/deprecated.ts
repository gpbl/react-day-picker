import type { SelectHandler } from '../types/props';
import { DayGridCell, DayGridCellProps } from './DayGridCell';
import { MonthCaption, MonthCaptionProps } from './MonthCaption';
import { WeekRow, WeekRowProps } from './WeekRow';

/**
 * @deprecated Use `MonthCaption` or `Nav` as custom components instead.
 */
export const Caption = MonthCaption;
/**
 * @deprecated Use `MonthCaptionProps` or `NavProps` instead.
 */
export type CaptionProps = MonthCaptionProps;
/**
 * @deprecated Use `DayGridCell` instead.
 */
export const DayContent = DayGridCell;
/**
 * @deprecated Use `DayGridCellProps` instead.
 */
export type DayContentProps = DayGridCellProps;

/**
 * @deprecated Use `DayGridCell` instead.
 */
export const Row = WeekRow;
/**
 * @deprecated Use `WeekRowProps` instead.
 */
export type RowProps = WeekRowProps;

/** @deprecated Use `SelectHandler` instead. */
export type SelectRangeEventHandler = SelectHandler<'range'>;
/** @deprecated Use `SelectHandler` instead. */
export type SelectSingleEventHandler = SelectHandler<'single'>;
/** @deprecated Use `SelectHandler` instead. */
export type SelectMultipleEventHandler = SelectHandler<'multi'>;

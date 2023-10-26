import type { SelectHandler } from '../DayPicker';

import { DayGridCell, DayGridCellProps } from './DayGridCell';
import { MonthCaption, MonthCaptionProps } from './MonthCaption';
import { WeekRow, WeekRowProps } from './WeekRow';

/**
 * @deprecated Use {@link MonthCaption} or {@link Nav} as custom components instead.
 */
export const Caption = MonthCaption;
/**
 * @deprecated Use {@link MonthCaptionProps} or {@link NavProps} instead.
 */
export type CaptionProps = MonthCaptionProps;
/**
 * @deprecated Use {@link DayGridCell} instead.
 */
export const DayContent = DayGridCell;
/**
 * @deprecated Use {@link DayGridCellProps} instead.
 */
export type DayContentProps = DayGridCellProps;

/**
 * @deprecated Use {@link DayGridCell} instead.
 */
export const Row = WeekRow;
/**
 * @deprecated Use {@link WeekRowProps} instead.
 */
export type RowProps = WeekRowProps;

/** @deprecated Use {@link SelectHandler} instead. */
export type SelectRangeEventHandler = SelectHandler<'range'>;
/** @deprecated Use {@link SelectHandler} instead. */
export type SelectSingleEventHandler = SelectHandler<'single'>;
/** @deprecated Use {@link SelectHandler} instead. */
export type SelectMultipleEventHandler = SelectHandler<'multi'>;

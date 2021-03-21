import * as React from 'react';

/** Represent the style (either via class names or via in-line styles) of an element. */
export type StyledElement<T = string | React.CSSProperties> = {
  /** The style of the root element. */
  readonly root: T;
  /** The style of the root element when `numberOfMonths > 1`. */
  readonly multiple_month: T;
  /** The style of the root element when `showWeekNumber={true}`. */
  readonly with_weeknumber: T;
  /** The style of an element visually hidden. */
  readonly vhidden: T;
  /** The style for resetting the buttons. */
  readonly button_reset: T;
  /** The style of the buttons. */
  readonly button: T;

  /** The style of the caption (showing the calendar heading and the navigation) */
  readonly caption: T;
  /** The style of the caption when the first of a series of months. */
  readonly caption_first: T;
  /** The style of the caption when the last of a series of months. */
  readonly caption_last: T;
  /** The style of the caption when in the middle of a series of months.. */
  readonly caption_middle: T;
  /** The style of the caption label (e.g. "September 2021"). */
  readonly caption_label: T;
  /** The style of the drop-downs container. */
  readonly caption_dropdowns: T;

  /** The style of the drop-down (select) element. */
  readonly dropdown: T;
  /** The style of the drop-down to change the month. */
  readonly dropdown_month: T;
  /** The style of the drop-down to change the year. */
  readonly dropdown_year: T;
  /** The style of the drop-down icon. */
  readonly dropdown_icon: T;

  /** The style of the months wrapper. */
  readonly months: T;
  /** The style of the table wrapper. */
  readonly month: T;
  /** The style of table containing the monthly calendar. */
  readonly table: T;
  /** The style of the table body. */
  readonly tbody: T;
  /** The style of the table footer. */
  readonly tfoot: T;

  /** The style of the table’s head. */
  readonly head: T;
  /** The style of the row in the head. */
  readonly head_row: T;
  /** The style of the head cell. */
  readonly head_cell: T;

  /** The style of the navigation container. */
  readonly nav: T;

  /** The style of the navigation button. */
  readonly nav_button: T;
  /** The style of the "previous month" navigation button. */
  readonly nav_button_previous: T;
  /** The style of the "next month" navigation button. */
  readonly nav_button_next: T;
  /** The style of the icon for the navigation button. */
  readonly nav_icon: T;

  /** A style of the table’s row. */
  readonly row: T;
  /** The style of the row’s head (displaying the week numbers). */
  readonly row_head: T;
  /** The style of the weeknumber. */
  readonly weeknumber: T;
  /** The style of the table cell containing the day element. */
  readonly cell: T;
  /** The style of the day button (it is a `span` when not interactive). */
  readonly day: T;
  /** The style of a day when outside the month. */
  readonly day_outside: T;
  /** The style of today button. */
  readonly day_today: T;
};

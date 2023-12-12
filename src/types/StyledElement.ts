/**
 * The style (either via class names or via in-line styles) of an element.
 * @deprecated Use `styles` instead.
 */
export type StyledElement<T = string | React.CSSProperties> = {
  /** The root element. */
  readonly rdp: T;

  readonly contrast_more: T;
  readonly dark: T;

  /** The root element when `numberOfMonths > 1`. */
  readonly multiple_months: T;
  /** The root element when `showWeekNumber={true}`. */
  readonly with_weeknumber: T;
  /** The style for resetting the buttons. */
  readonly button_reset: T;
  /** The buttons. */
  readonly button: T;

  /** The caption (showing the calendar heading and the navigation) */
  readonly month_caption: T;
  /** The caption when at the start of a series of months. */
  readonly caption_start: T;
  /** The caption when at the end of a series of months. */
  readonly caption_end: T;
  /** The caption when between two months (when `multipleMonths > 2`). */
  readonly caption_between: T;
  /** The caption label. */
  readonly caption_label: T;
  /** The dropdowns container. */
  readonly dropdowns: T;

  /** The dropdown (select) element. */
  readonly dropdown: T;
  /** The dropdown icon. */
  readonly dropdown_icon: T;
  /** The dropdown showing the months. */
  readonly months_dropdown: T;
  /** The dropdown showing the years. */
  readonly years_dropdown: T;
  /** The select element used by the dropdown. */
  readonly select: T;

  /** The navigation container. */
  readonly nav: T;

  /** The navigation button. */
  readonly nav_button: T;
  /** The "previous month" navigation button. */
  readonly nav_button_previous: T;
  /** The "next month" navigation button. */
  readonly nav_button_next: T;
  /** The icon for the navigation button. */
  readonly button_icon: T;

  /** The months wrapper. */
  readonly months_wrapper: T;
  /** The container of the grid displaying the month and the month caption. */
  readonly month_grid_wrapper: T;
  /** The grid displaying the month. */
  readonly month_grid: T;
  /** The row grouping the week rows in the month grid. */
  readonly month_rowgroup: T;

  /** The row with the weekday column headers. */
  readonly weekdays_row: T;
  /** The weekday column header. */
  readonly weekday_columnheader: T;

  /** The row with the week. */
  readonly week_row: T;
  /** The weeknumber displayed in the column. */
  readonly weeknumber: T;
  /** The cell containing the weeknumber row header. */
  readonly weeknumber_rowheader: T;

  /** The day grid cell. */
  readonly day: T;
  /** The day when outside the month. */
  readonly day_outside: T;
  /** The day when selected. */
  readonly day_selected: T;
  /** The day when disabled. */
  readonly day_disabled: T;
  /** The day when hidden. */
  readonly day_hidden: T;
  /** The day when at the start of a selected range. */
  readonly day_range_start: T;
  /** The day when at the end of a selected range. */
  readonly day_range_end: T;
  /** The day in the middle of a selected range: it does not include the "from" and the "to" days. */
  readonly day_range_middle: T;
  /** The day when today. */
  readonly day_today: T;

  /** The footer when today. */
  readonly footer: T;

  /* DEPRECATED ELEMENTS */
  /**
   * The dropdown to change the year.
   * @deprecated use {@link years_dropdown} instead.
   */
  readonly dropdown_year: T;
  /**
   * The dropdown to change the month.
   * @deprecated use {@link months_dropdown} instead.
   */
  readonly dropdown_month: T;
  /**
   * The dropdowns container.
   * @deprecated use {@link dropdowns} instead.
   */
  readonly caption_dropdowns: T;
};

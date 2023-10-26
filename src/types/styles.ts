declare const style: {
  /** The root element. */
  rdp: string;
  'contrast_no-preference': string;
  contrast_more: string;
  contrast_less: string;
  color_light: string;
  color_dark: string;
  color_auto: string;
  with_weeknumber: string;
  months_wrapper: string;
  caption: string;
  multiple_months: string;
  caption_dropdowns: string;
  caption_label: string;
  nav: string;
  caption_start: string;
  caption_end: string;
  button_next: string;
  button_previous: string;
  dropdown_year: string;
  dropdown_month: string;
  dropdown: string;
  dropdown_icon: string;
  head: string;
  head_row: string;
  row: string;
  head_cell: string;
  footer: string;
  cell: string;
  day: string;
  day_today: string;
  day_outside: string;
  day_selected: string;
  day_disabled: string;
  day_hidden: string;
  day_range_start: string;
  day_range_end: string;
  day_range_middle: string;
  weeknumber_rowheader: string;
  weekdays_row: string;
  weekday_columnheader: string;
  week_row: string;
  month_grid_wrapper: string;
  month_rowgroup: string;
  month_grid: string;
  month_caption: string;
  caption_between: string;
  button_icon: string;
};

/** The style (either via class names or via in-line styles) of an element. */
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
  /** The drop-downs container. */
  readonly caption_dropdowns: T;

  /** The drop-down (select) element. */
  readonly dropdown: T;
  /** The drop-down to change the month. */
  readonly dropdown_month: T;
  /** The drop-down to change the year. */
  readonly dropdown_year: T;
  /** The drop-down icon. */
  readonly dropdown_icon: T;

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
};

/** These elements must not be in the `styles` or `classNames` records as they are styled via the `modifiersStyles` or `modifiersClassNames` pop */
export type InternalModifiersElement =
  | 'day_outside'
  | 'day_selected'
  | 'day_disabled'
  | 'day_hidden'
  | 'day_range_start'
  | 'day_range_end'
  | 'day_range_middle'
  | 'day_today';

/** The class names of each element. */
export type ClassNames = typeof style;

/**
 * The inline-styles of each styled element, to use with the `styles` prop. Day
 * modifiers, such as `today` or `hidden`, should be styled using the
 * `modifiersStyles` prop.
 */
export type Styles = Partial<
  Omit<StyledElement<React.CSSProperties>, InternalModifiersElement>
>;

/** Props of a component that can be styled via classNames or inline-styles. */
export type StyledComponent = {
  className?: string;
  style?: React.CSSProperties;
} & React.PropsWithChildren;

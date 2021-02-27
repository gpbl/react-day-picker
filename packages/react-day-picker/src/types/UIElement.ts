/**
 * Represent an element or an element state of the DayPicker user interface,
 * whose style or class name can be changed using the `styles` or `classNames`
 * prop.
 *
 * ```
 * <DayPicker
 *   classNames={{ captionLast: 'my-custom-class' }}
 *   styles={{ captionLast: { color: 'red' }}}
 * />
 * ```
 */
export enum UIElement {
  /** The container element. */
  Root = 'root',
  /** The container element when number of months is greater than 1. */
  RootMultipleMonths = 'rootMultipleMonths',

  /** A UI element that should be hidden for non-screen readers users. */
  Hidden = 'hidden',

  /** The caption element (showing the calendar heading and the navigation) */
  Caption = 'caption',
  /** The caption element when the first of a series of months. */
  CaptionFirst = 'captionFirst',
  /** The caption element when the last of a series of months. */
  CaptionLast = 'captionLast',
  /** The caption element when in the middle of a series of months.. */
  CaptionMiddle = 'captionMiddle',
  /** The container of the caption’s label (e.g. "September 2021"). */
  CaptionLabel = 'captionLabel',
  /** The container of the drop-downs. */
  CaptionDropdowns = 'dropdownsContainer',
  /** The drop-down select element. */
  Dropdown = 'dropdown',
  /** The drop-down to change the month. */
  DropdownMonth = 'dropdownMonth',
  /** The drop-down to change the year. */
  DropdownYear = 'dropdownYear',
  /** The icon aside the drop-down. */
  DropdownIcon = 'dropdownIcon',

  /** The wrapper of the months (there may be more months visualized when `numberOfMonths`). */
  Months = 'months',
  /** The wrapper of the table displaying the month. */
  Month = 'month',
  /** The table displaying the calendar. */
  Table = 'table',
  /** The body element of the table displaying the calendar. */
  TBody = 'body',

  /** The head element of the table displaying the calendar. */
  Head = 'head',
  /** The row element of the head. */
  HeadRow = 'headRow',
  /** The cell element of the head. */
  HeadCell = 'headCell',

  /** The navigation element. */
  Nav = 'nav',

  /** A navigation button. */
  NavButton = 'navButton',
  /** The "previous month" navigation button. */
  NavButtonPrev = 'navButtonPrev',
  /** The "next month" navigation button. */
  NavButtonNext = 'navButtonNext',
  /** The icon contained in navigation button. */
  NavIcon = 'navIcon',

  /** A row in the table element (each row shows a week). */
  Row = 'row',
  /** A row head in the table element, used to display the week numbers. */
  RowHead = 'rowHead',
  /** The element containing the week number */
  WeekNumber = 'weekNumber',
  /** The cell containing the day element. */
  Cell = 'cell',
  /** The day element. */
  Day = 'day',
  /** The day element when outside the month */
  Outside = 'outside',
  /** The day element when is today */
  Today = 'today'
}

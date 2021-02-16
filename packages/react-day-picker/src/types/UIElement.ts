/**
 * Represent an element of the DayPicker user interface.
 */
export enum UIElement {
  /** The container element. */
  Root = 'root',

  /** The caption element (showing the calendar heading and the navigation) */
  Caption = 'caption',
  /** The container of the drop-downs. */
  DropdownsContainer = 'dropdownsContainer',
  /** The drop-down select element. */
  Dropdown = 'dropdown',
  /** The container of the caption’s label (e.g. "September 2021"). */
  DropdownLabel = 'dropdownLabel',
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
  /** The cell containing the day element. */
  Cell = 'cell',
  /** The day element (a button when the day is interactive). */
  Day = 'day'
}

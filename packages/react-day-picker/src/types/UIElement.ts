/**
 * Represent an element of the DayPicker user interface.
 */
export interface UIElement {
  Root: 'root';
  Caption: 'caption';

  Months: 'months';
  Month: 'month';
  Table: 'table';
  TBody: 'tbody';

  Head: 'head';
  HeadRow: 'head-row';
  HeadCell: 'head-cell';

  Nav: 'nav';

  NavPrevButton: 'nav-prev-button';
  NavNextButton: 'nav-next-button';

  Row: 'row';
  RowHead: 'row-head';
  Cell: 'cell';

  Day: 'day';
  DaySelected: 'day-selected';
  DayDisabled: 'day-disabled';
  DayToday: 'day-today';
  DayOutside: 'day-outside';
  DayInteractive: 'day-interactive';
}

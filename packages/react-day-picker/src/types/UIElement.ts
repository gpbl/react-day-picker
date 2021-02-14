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

  NavButton: 'nav-button';
  NavButtonPrev: 'nav-button-prev';
  NavButtonNext: 'nav-button-next';

  NavIcon: 'nav-icon';

  Row: 'row';
  RowHead: 'row-head';
  Cell: 'cell';

  Day: 'day';
}

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
  HeadRow: 'headRow';
  HeadCell: 'headCell';

  Nav: 'nav';

  NavPrevButton: 'navPrevButton';
  NavNextButton: 'navNextButton';

  Row: 'row';
  RowHead: 'rowHead';
  Cell: 'cell';

  Day: 'day';
  DaySelected: 'daySelected';
  DayDisabled: 'dayDisabled';
  DayToday: 'dayToday';
  DayAfterMonth: 'dayAfterMonth';
  DayBeforeMonth: 'dayBeforeMonth';
  DayInteractive: 'dayInteractive';
}

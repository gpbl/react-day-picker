/**
 * Represent an element of the DayPicker user interface.
 */
export interface UIElement {
  Root: 'root';
  Caption: 'caption';
  CaptionDropdowns: 'caption-dropdowns';
  Dropdown: 'dropdown';
  DropdownLabel: 'dropdown-label';
  DropdownYear: 'dropdown-year';
  DropdownMonth: 'dropdown-month';

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
  IconDropdown: 'select-icon';

  Row: 'row';
  RowHead: 'row-head';
  Cell: 'cell';

  Day: 'day';
}

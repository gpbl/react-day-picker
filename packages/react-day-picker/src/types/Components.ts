import { Day, Dropdown, Footer, Head, Row, WeekNumber } from '../components';

/**
 * Represent a map of the component that can be changed via the `components`
 * prop.
 */
export type Components = {
  Day: typeof Day;
  Dropdown: typeof Dropdown;
  Head: typeof Head;
  Row: typeof Row;
  WeekNumber: typeof WeekNumber;
  Footer: typeof Footer;
};

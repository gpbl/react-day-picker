import {
  Day,
  Dropdown,
  Footer,
  Head,
  IconNext,
  IconPrevious,
  Row,
  WeekNumber
} from '../components';

/**
 * Represent a map of the component that can be changed via the `components`
 * prop.
 */
export type Components = {
  Day: typeof Day;
  Dropdown: typeof Dropdown;
  Footer: typeof Footer;
  Head: typeof Head;
  IconNext: typeof IconNext;
  IconPrevious: typeof IconPrevious;
  Row: typeof Row;
  WeekNumber: typeof WeekNumber;
};

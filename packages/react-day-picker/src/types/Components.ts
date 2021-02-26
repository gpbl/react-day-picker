import {
  Caption,
  Day,
  Dropdown,
  Footer,
  Head,
  IconDropdown,
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
  /** The component for the caption element. */
  Caption: typeof Caption;
  /** The component for the day element. */
  Day: typeof Day;
  /** The component for the drop-down elements. */
  Dropdown: typeof Dropdown;
  /** The component for the table footer. */
  Footer: typeof Footer;
  /** The component for the table’s head. */
  Head: typeof Head;
  /** The component for the small icon in the drop-downs. */
  IconDropdown: typeof IconDropdown;
  /** The component for the "next month" button in the Navigation. */
  IconNext: typeof IconNext;
  /** The component for the "previous month" button in the Navigation. */
  IconPrevious: typeof IconPrevious;
  /** The component for the table rows. */
  Row: typeof Row;
  /** The component for the week number in the table rows. */
  WeekNumber: typeof WeekNumber;
};

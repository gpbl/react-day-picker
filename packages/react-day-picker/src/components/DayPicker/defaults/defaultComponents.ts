import { Components } from '../../../types';
import { Day } from '../../Day/Day';
import { Dropdown } from '../../Dropdown';
import { Head } from '../../Head';
import { Row } from '../../Row';
import { WeekNumber } from '../../WeekNumber';

/**
 * The default components passed to the `components` prop.
 */
export const defaultComponents: Required<Components> = {
  Day: Day,
  Dropdown: Dropdown,
  Head: Head,
  Row: Row,
  WeekNumber: WeekNumber
};

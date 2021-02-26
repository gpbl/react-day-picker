import {
  CaptionLabelProps,
  CaptionProps,
  DayProps,
  DropdownProps,
  RowProps,
  WeekNumberProps
} from '../components';
import { StyledComponentProps } from './StyledComponentProps';

/**
 * Represent a map of the component that can be changed via the `components`
 * prop.
 */
export interface Components {
  /** The component for the caption element. */
  Caption: (props: CaptionProps) => JSX.Element | null;
  /** The component for the caption element. */
  CaptionLabel: (props: CaptionLabelProps) => JSX.Element | null;
  /** The component for the day element. */
  Day: (props: DayProps) => JSX.Element | null;
  /** The component for the drop-down elements. */
  Dropdown: (props: DropdownProps) => JSX.Element | null;
  /** The component for the table footer. */
  Footer: () => JSX.Element | null;
  /** The component for the table’s head. */
  Head: () => JSX.Element | null;
  /** The component for the small icon in the drop-downs. */
  IconDropdown: (props: StyledComponentProps) => JSX.Element | null;
  /** The component for the "next month" button in the Navigation. */
  IconNext: (props: StyledComponentProps) => JSX.Element | null;
  /** The component for the "previous month" button in the Navigation. */
  IconPrevious: (props: StyledComponentProps) => JSX.Element | null;
  /** The component for the table rows. */
  Row: (props: RowProps) => JSX.Element | null;
  /** The component for the week number in the table rows. */
  WeekNumber: (props: WeekNumberProps) => JSX.Element | null;
}

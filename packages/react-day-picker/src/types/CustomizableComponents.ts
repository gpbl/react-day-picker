import {
  Caption,
  Day,
  Navigation,
  NextIcon,
  PrevIcon,
  WeekNumber
} from 'components';

/**
 * Represent the components that can be customized.
 */
export type CustomizableComponents = {
  Caption?: typeof Caption;
  Day?: typeof Day;
  Navigation?: typeof Navigation;
  WeekNumber?: typeof WeekNumber;
  NextIcon?: typeof NextIcon;
  PrevIcon?: typeof PrevIcon;
};

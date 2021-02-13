import { Caption, Day, Navigation, NextIcon, PrevIcon, Week } from 'components';

/**
 * Represent the components that can be customized.
 */
export type CustomizableComponents = {
  Caption?: typeof Caption;
  Day?: typeof Day;
  Navigation?: typeof Navigation;
  Week?: typeof Week;
  NextIcon?: typeof NextIcon;
  PrevIcon?: typeof PrevIcon;
};

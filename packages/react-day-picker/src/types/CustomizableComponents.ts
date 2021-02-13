import { Caption, Day, Navigation, NextIcon, PrevIcon, Row } from 'components';

/**
 * Represent the components that can be customized.
 */
export type CustomizableComponents = {
  Caption?: typeof Caption;
  Day?: typeof Day;
  Navigation?: typeof Navigation;
  Week?: typeof Row;
  NextIcon?: typeof NextIcon;
  PrevIcon?: typeof PrevIcon;
};

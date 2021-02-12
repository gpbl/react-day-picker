import { Caption } from '../components/Caption';
import { Day } from '../components/Day';
import { Navigation } from '../components/Navigation';
import { NextIcon } from '../components/NextIcon';
import { PrevIcon } from '../components/PrevIcon';
import { WeekNumber } from '../components/WeekNumber';

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

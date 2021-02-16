import {
  Caption,
  Day,
  IconNext,
  IconPrev,
  Navigation,
  Row
} from '../components';

/**
 * Represent the components that can be customized.
 */
export type Components = {
  Caption?: typeof Caption;
  Day?: typeof Day;
  Navigation?: typeof Navigation;
  Row?: typeof Row;
  IconNext?: typeof IconNext;
  IconPrev?: typeof IconPrev;
};

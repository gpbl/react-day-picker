import { Caption, Day, IconNext, IconPrev, Row } from '../components';

/**
 * Represent the components that can be customized.
 */
export type Components = {
  Caption?: typeof Caption;
  Day?: typeof Day;
  Row?: typeof Row;
  IconNext?: typeof IconNext;
  IconPrev?: typeof IconPrev;
};

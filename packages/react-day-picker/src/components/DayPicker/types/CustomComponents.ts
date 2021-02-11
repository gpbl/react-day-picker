import { Day } from '../../Day';
import { Caption } from '../../Caption';
import { Navigation } from '../../Navigation';
import { WeekNumber } from '../../WeekNumber';

export type CustomComponents = {
  MonthCaption?: typeof Caption;
  Day?: typeof Day;
  Navigation?: typeof Navigation;
  WeekNumber?: typeof WeekNumber;
};

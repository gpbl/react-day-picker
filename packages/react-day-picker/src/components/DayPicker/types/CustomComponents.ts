import { Day } from '../../Day';
import { MonthCaption } from '../../MonthCaption';
import { Navigation } from '../../Navigation';
import { WeekNumber } from '../../WeekNumber';

export type CustomComponents = {
  MonthCaption?: typeof MonthCaption;
  Day?: typeof Day;
  Navigation?: typeof Navigation;
  WeekNumber?: typeof WeekNumber;
};

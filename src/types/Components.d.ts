import { CaptionProps } from './Caption';
import { DayProps } from './Day';
import { NavigationProps } from './Navigation';
import { WeekNumberProps } from './WeekNumber';

export interface Components {
  Caption: React.ComponentType<CaptionProps>;
  Day: React.ComponentType<DayProps>;
  Navigation: React.ComponentType<NavigationProps>;
  WeekNumber: React.ComponentType<WeekNumberProps>;
}

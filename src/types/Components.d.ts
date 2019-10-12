import { CaptionProps } from '../components/Caption';
import { DayProps } from '../components/Day';
import { NavigationProps } from '../components/Navigation';
import { WeekNumberProps } from '../components/WeekNumber';

export interface Components {
  Caption: React.ComponentType<CaptionProps>;
  Day: React.ComponentType<DayProps>;
  Navigation: React.ComponentType<NavigationProps>;
  WeekNumber: React.ComponentType<WeekNumberProps>;
}

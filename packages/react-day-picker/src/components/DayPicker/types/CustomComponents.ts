import { Day } from '../../Day';
import { Caption } from '../../Caption';
import { PrevIcon } from '../../PrevIcon';
import { NextIcon } from '../../NextIcon';
import { Navigation } from '../../Navigation';
import { WeekNumber } from '../../WeekNumber';

export interface CustomComponents {
  Caption?: typeof Caption;
  Day?: typeof Day;
  Navigation?: typeof Navigation;
  WeekNumber?: typeof WeekNumber;
  NextIcon?: typeof NextIcon;
  PrevIcon?: typeof PrevIcon;
}

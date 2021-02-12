import { Caption } from '../../Caption';
import { Day } from '../../Day';
import { Navigation } from '../../Navigation';
import { NextIcon } from '../../NextIcon';
import { PrevIcon } from '../../PrevIcon';
import { WeekNumber } from '../../WeekNumber';

export type CustomComponents = {
  Caption?: typeof Caption;
  Day?: typeof Day;
  Navigation?: typeof Navigation;
  WeekNumber?: typeof WeekNumber;
  NextIcon?: typeof NextIcon;
  PrevIcon?: typeof PrevIcon;
};

import { ModifiersStatus } from 'types';
import { isSameMonth, isToday } from 'date-fns';
import { ModifiersMatchers } from '../../../types';

export const defaultModifiers: ModifiersStatus = {
  disabled: false,
  hidden: false,
  interactive: false,
  aftermonth: false,
  beforemonth: false,
  selected: false,
  today: false
};

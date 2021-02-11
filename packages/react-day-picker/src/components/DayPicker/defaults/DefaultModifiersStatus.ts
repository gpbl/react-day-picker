import { DefaultModifier } from '../types';

export const DefaultModifiersStatus: {
  [modifier in DefaultModifier]?: boolean;
} = {
  disabled: false,
  hidden: false,
  interactive: true,
  aftermonth: false,
  beforemonth: false,
  selected: false,
  today: false
};

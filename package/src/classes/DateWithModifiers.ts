import { isToday } from 'date-fns';
import { MatchingModifiers, ModifierValueType, DayPickerProps } from 'types';

import { getModifiersFromProps } from './utils/getModifiersFromProps';
import { listModifiers } from './utils/listModifiers';

export interface DateWithModifiers {
  date: Date;
  modifiers: MatchingModifiers;
}

const defaultModifiers: MatchingModifiers = {
  disabled: false,
  hidden: false,
  interactive: true,
  outside: '',
  selected: undefined,
  today: false,
};

export class DateWithModifiers {
  constructor(date: Date, initialModifiers = {}, props: DayPickerProps) {
    this.date = date;

    const modifiers: MatchingModifiers = {
      ...defaultModifiers,
      today: isToday(date),
      ...initialModifiers,
    };

    if (modifiers.outside && !props.showOutsideDays) {
      modifiers.hidden = true;
    }
    modifiers.disabled = Boolean(
      modifiers.outside && !props.enableOutsideDaysClick
    );

    const modifiersFromProps = getModifiersFromProps(props);
    const modifiersArray = listModifiers(date, modifiersFromProps);
    modifiersArray.forEach(modifier => (modifiers[modifier] = true));

    if (!props.onDayClick || modifiers.hidden || modifiers.disabled) {
      modifiers.interactive = false;
    }

    this.modifiers = modifiers;
  }

  date: Date;
  modifiers: MatchingModifiers;

  getModifier(name: string): ModifierValueType {
    return this.modifiers[name];
  }
}

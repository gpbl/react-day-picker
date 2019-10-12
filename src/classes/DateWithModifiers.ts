import { isSameDay, isToday } from 'date-fns';

import { listModifiers } from './utils/listModifiers';
import { getModifiersFromProps } from './utils/getModifiersFromProps';
import { DayPickerProps } from '../types/DayPickerProps';
import { MatchingModifiers, ModifierValueType } from '../types/Modifiers';

const defaultModifiers: MatchingModifiers = {
  disabled: false,
  hidden: false,
  interactive: true,
  outside: '',
  selected: undefined,
  start: false,
  today: false,
};

export interface DateWithModifiers {
  date: Date;
  modifiers: MatchingModifiers;
}

export class DateWithModifiers {
  constructor(date: Date, initialModifiers = {}, props: DayPickerProps) {
    this.date = date;

    const modifiers: MatchingModifiers = {
      ...defaultModifiers,
      today: isToday(date),
      start: props.startDay ? isSameDay(date, props.startDay) : false,
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

  getModifier(name: string): ModifierValueType {
    return this.modifiers[name];
  }
}

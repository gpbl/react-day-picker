import { isSameDay, isToday } from 'date-fns';

import { getModifiersForDay } from './utils/getModifiersForDay';
import { getModifiersFromProps } from './utils/getModifiersFromProps';
import { DayPicker } from 'types/DayPicker';

const defaultModifiers = {
  hidden: false,
  disabled: false,
  outside: false,
  interactive: true,
};

export interface DateWithModifiers {
  date: Date;
  modifiers: object;
}

export class DateWithModifiers {
  constructor(date: Date, initialModifiers = {}, props: DayPicker) {
    this.date = date;

    const modifiers = {
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
    const modifiersArray = getModifiersForDay(date, modifiersFromProps);
    modifiersArray.forEach(modifier => (modifiers[modifier] = true));

    if (!props.onDayClick || modifiers.hidden || modifiers.disabled) {
      modifiers.interactive = false;
    }

    this.modifiers = modifiers;
  }

  getModifier(name: string) {
    return this.modifiers[name];
  }
}

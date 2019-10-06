import { isSameDay, isToday } from 'date-fns';

import getModifiersForDay from './utils/getModifiersForDay';
import getModifiersFromProps from './utils/getModifiersFromProps';

const defaultModifiers = {
  hidden: false,
  disabled: false,
  outside: false,
  interactive: true,
};

class DateWithModifiers extends Date {
  constructor(date, initialModifiers = {}, props) {
    super(date);

    this.date = date;

    const modifiers = {
      ...defaultModifiers,
      today: isToday(date),
      start: isSameDay(date, props.startDay),
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

  getModifier(name) {
    return this.modifiers[name];
  }
}

export default DateWithModifiers;

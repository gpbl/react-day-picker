import { isToday } from "date-fns";

import { defaultModifiers } from "../components/DayPicker/defaults/defaultModifiers";
import {
  DayPickerProps,
  MatchingModifiers,
  DayMatchModifier
} from "../components/DayPicker";

import { getModifiersFromProps } from "./utils/getModifiersFromProps";
import { listModifiers } from "./utils/listModifiers";

/**
 * Helper class to move modifiers around the components.
 *
 * @private
 */
export class DateWithModifiers {
  constructor(
    date: Date,
    initialModifiers: MatchingModifiers = {},
    props: DayPickerProps
  ) {
    this.date = date;
    const modifiers: MatchingModifiers = {
      ...defaultModifiers,
      today: isToday(date),
      ...initialModifiers
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

  getModifier(name: string): DayMatchModifier {
    return this.modifiers[name];
  }
}

import React from 'react';
import {
  isDayPickerMultiple,
  isDayPickerRange,
  Modifiers,
  Matcher
} from '../../types';
import { useDayPicker } from '../DayPicker';
import { useSelectMultiple } from '../SelectMultiple';
import { useSelectRange } from '../SelectRange';

export const ModifiersContext = React.createContext<Modifiers | undefined>(
  undefined
);

export type ModifiersProviderProps = {
  children: React.ReactNode;
};

function toMatcherArray(modifierFromProp: Matcher | Matcher[] | undefined) {
  if (Array.isArray(modifierFromProp)) {
    return modifierFromProp;
  } else if (modifierFromProp !== undefined) {
    return [modifierFromProp];
  } else {
    return [];
  }
}

/**
 * Parse the modifiers from the props.
 *
 * Internally we want modifiers as an array of matchers – as opposite of the
 * props which can accept also a matcher.
 */
export function ModifiersProvider(props: ModifiersProviderProps): JSX.Element {
  const context = useDayPicker();

  const {
    modifiers: customModifiers,
    selected,
    disabled,
    hidden,
    today,
    fromDate,
    toDate
  } = {
    ...context
  };

  const multipleSelect = useSelectMultiple();
  const rangeSelect = useSelectRange();

  const modifiers: Modifiers = {
    selected: toMatcherArray(selected),
    disabled: toMatcherArray(disabled),
    hidden: toMatcherArray(hidden),
    today: [today],
    range_end: [],
    range_middle: [],
    range_start: []
  };

  Object.entries(customModifiers).forEach(([modifier, matcher]) => {
    modifiers[modifier] = toMatcherArray(matcher);
  });

  if (fromDate) {
    modifiers.disabled.push({ before: fromDate });
  }
  if (toDate) {
    modifiers.disabled.push({ after: toDate });
  }

  if (isDayPickerMultiple(context)) {
    modifiers.disabled = modifiers.disabled.concat(
      multipleSelect.modifiers.disabled
    );
  } else if (isDayPickerRange(context)) {
    modifiers.disabled = modifiers.disabled.concat(
      rangeSelect.modifiers.disabled
    );
    modifiers.range_start = rangeSelect.modifiers.range_start;
    modifiers.range_middle = rangeSelect.modifiers.range_middle;
    modifiers.range_end = rangeSelect.modifiers.range_end;
  }

  return (
    <ModifiersContext.Provider value={modifiers}>
      {props.children}
    </ModifiersContext.Provider>
  );
}

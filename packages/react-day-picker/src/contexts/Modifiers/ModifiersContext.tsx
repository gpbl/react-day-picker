import React from 'react';

import { useDayPicker } from 'contexts/DayPicker';
import { useSelectMultiple } from 'contexts/SelectMultiple';
import { useSelectRange } from 'contexts/SelectRange';
import { CustomModifiers, InternalModifiers, Modifiers } from 'types/Modifiers';

import { getCustomModifiers } from './utils/getCustomModifiers';
import { getInternalModifiers } from './utils/getInternalModifiers';

/** The Modifiers context store the modifiers used in DayPicker. To access the value of this context, use [[useModifiers]]. */
export const ModifiersContext = React.createContext<Modifiers | undefined>(
  undefined
);

export type ModifiersProviderProps = {
  children: React.ReactNode;
};

/** Provide the value for the [[ModifiersContext]]. */
export function ModifiersProvider(props: ModifiersProviderProps): JSX.Element {
  const dayPicker = useDayPicker();
  const selectMultiple = useSelectMultiple();
  const selectRange = useSelectRange();

  const internalModifiers: InternalModifiers = getInternalModifiers(
    dayPicker,
    selectMultiple,
    selectRange
  );

  const customModifiers: CustomModifiers = getCustomModifiers(dayPicker);

  const modifiers: Modifiers = {
    ...customModifiers,
    ...internalModifiers
  };

  return (
    <ModifiersContext.Provider value={modifiers}>
      {props.children}
    </ModifiersContext.Provider>
  );
}

import { FunctionComponent, PropsWithChildren } from 'react';

import { DayPickerProps } from '../DayPicker';
import { Mode } from '../types';
import { CalendarProvider } from './CalendarContext';
import { DayPickerProvider } from './DayPickerContext';
import { FocusProvider } from './FocusContext';
import { ModifiersProvider } from './ModifiersContext';
import { SelectionProvider } from './SelectionContext';

/**
 * Provide the value for all the contexts.
 *
 * @category Contexts
 */
export const ContextProviders: FunctionComponent<
  PropsWithChildren<DayPickerProps<Mode>>
> = <T extends Mode>(props: PropsWithChildren<DayPickerProps<T>>) => {
  const { children, ...dayPickerProps } = props;
  return (
    <DayPickerProvider {...dayPickerProps}>
      <CalendarProvider>
        <SelectionProvider>
          <ModifiersProvider>
            <FocusProvider>{children}</FocusProvider>
          </ModifiersProvider>
        </SelectionProvider>
      </CalendarProvider>
    </DayPickerProvider>
  );
};

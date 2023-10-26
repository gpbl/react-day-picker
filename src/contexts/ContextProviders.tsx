import { DayPickerProps } from '../DayPicker';
import { CalendarProvider } from './CalendarContext';
import { DayPickerProvider } from './DayPickerContext';
import { ModifiersProvider } from './ModifiersContext';
import { SelectionProvider } from './SelectionContext';
import { PropsWithChildren } from 'react';

/** Provide the value for all the contexts. */
export function ContextProviders(props: PropsWithChildren<DayPickerProps>) {
  const { children, ...dayPickerProps } = props;
  return (
    <DayPickerProvider {...dayPickerProps}>
      <CalendarProvider>
        <SelectionProvider>
          <ModifiersProvider>{children}</ModifiersProvider>
        </SelectionProvider>
      </CalendarProvider>
    </DayPickerProvider>
  );
}

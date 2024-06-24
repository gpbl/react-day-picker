import React from "react";
import type { PropsWithChildren } from "react";

import { MultiProvider, RangeProvider, SingleProvider } from "../selection";
import type {
  DayPickerProps,
  PropsMulti,
  PropsRange,
  PropsSingle
} from "../types";

import { CalendarContextProvider } from "./useCalendar";
import { FocusContextProvider } from "./useFocus";
import { ModifiersContextProvider } from "./useModifiers";
import { PropsContextProvider, useProps } from "./useProps";

function SelectionProviders({ children }: PropsWithChildren) {
  const props = useProps();
  return (
    <SingleProvider {...(props as PropsSingle)}>
      <MultiProvider {...(props as PropsMulti)}>
        <RangeProvider {...(props as PropsRange)}>{children}</RangeProvider>
      </MultiProvider>
    </SingleProvider>
  );
}

/**
 * Provide the value for all the contexts used by DayPicker.
 *
 * @private
 */
export function ContextProviders(props: PropsWithChildren<DayPickerProps>) {
  const { children, ...initialProps } = props;
  return (
    <PropsContextProvider initialProps={initialProps}>
      <CalendarContextProvider>
        <SelectionProviders>
          <ModifiersContextProvider>
            <FocusContextProvider>{children}</FocusContextProvider>
          </ModifiersContextProvider>
        </SelectionProviders>
      </CalendarContextProvider>
    </PropsContextProvider>
  );
}

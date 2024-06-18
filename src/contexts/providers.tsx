import React from "react";
import type { PropsWithChildren } from "react";

import type {
  DayPickerProps,
  Mode,
  PropsMulti,
  PropsRange,
  PropsSingle
} from "../types";

import { CalendarContextProvider } from "./useCalendarContext";
import { FocusContextProvider } from "./useFocusContext";
import { ModifiersContextProvider } from "./useModifiersContext";
import { MultiProvider } from "./useMultiContext";
import { PropsContextProvider, usePropsContext } from "./usePropsContext";
import { RangeProvider } from "./useRangeContext";
import { SingleProvider } from "./useSingleContext";

function SelectionProviders({ children }: PropsWithChildren) {
  const props = usePropsContext();
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
export function ContextProviders(
  props: PropsWithChildren<DayPickerProps<Mode, boolean>>
) {
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

import React from "react";
import type { PropsWithChildren } from "react";

import { omitKeys } from "../helpers/omit";
import { MultiProvider, RangeProvider, SingleProvider } from "../selection";
import type {
  DayPickerProps,
  PropsBase,
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

  const baseProps = omitKeys(initialProps, [
    "selected",
    "min",
    "max"
  ]) as PropsBase;

  return (
    <PropsContextProvider {...baseProps}>
      <CalendarContextProvider>
        <SelectionProviders>
          <FocusContextProvider>
            <ModifiersContextProvider>{children}</ModifiersContextProvider>
          </FocusContextProvider>
        </SelectionProviders>
      </CalendarContextProvider>
    </PropsContextProvider>
  );
}

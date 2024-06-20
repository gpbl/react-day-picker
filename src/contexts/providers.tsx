import React from "react";
import type { PropsWithChildren } from "react";

import { MultiProvider } from "../selection/multi";
import { RangeProvider } from "../selection/range";
import { SingleProvider } from "../selection/single";
import type {
  DayPickerProps,
  PropsMulti,
  PropsRange,
  PropsSingle
} from "../types";

import { CalendarContextProvider } from "./calendar";
import { FocusContextProvider } from "./focus";
import { ModifiersContextProvider } from "./modifiers";
import { PropsContextProvider, usePropsContext } from "./props";

export function SelectionProviders({ children }: PropsWithChildren) {
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

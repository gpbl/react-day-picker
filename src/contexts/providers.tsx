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
import { PropsContextProvider } from "./useProps";

function SelectionProviders(
  props: PropsWithChildren<PropsSingle | PropsMulti | PropsRange | object>
) {
  const { children, ...selectionProps } = props;
  return (
    <SingleProvider {...(selectionProps as PropsSingle)}>
      <MultiProvider {...(selectionProps as PropsMulti)}>
        <RangeProvider {...(selectionProps as PropsRange)}>
          {children}
        </RangeProvider>
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
    "max",
    "onSelect"
  ]) as PropsBase;

  return (
    <PropsContextProvider {...baseProps}>
      <CalendarContextProvider>
        <SelectionProviders {...initialProps}>
          <ModifiersContextProvider>
            <FocusContextProvider>{children}</FocusContextProvider>
          </ModifiersContextProvider>
        </SelectionProviders>
      </CalendarContextProvider>
    </PropsContextProvider>
  );
}

import React from "react";
import type { PropsWithChildren } from "react";

import type { DayPickerProps, Mode } from "../types";

import { CalendarContextProvider } from "./useCalendarContext";
import { FocusContextProvider } from "./useFocusContext";
import { ModifiersContextProvider } from "./useModifiersContext";
import { MultiProvider } from "./useMultiContext";
import { PropsContextProvider, usePropsContext } from "./usePropsContext";
import { SingleProvider } from "./useSingleContext";

function isSingle(
  props: DayPickerProps<Mode, boolean>
): props is DayPickerProps<"single", boolean> {
  return props.mode === "single";
}

function isMulti(
  props: DayPickerProps<Mode, boolean>
): props is DayPickerProps<"multiple", boolean> {
  return props.mode === "multiple";
}

function SelectionProviders({ children }: PropsWithChildren) {
  const props = usePropsContext();
  return (
    <SingleProvider
      required={props.required}
      initialValue={isSingle(props) ? props.selected : undefined}
    >
      <MultiProvider
        min={isMulti(props) ? props.min : undefined}
        max={isMulti(props) ? props.min : undefined}
        required={props.required}
        initialValue={isMulti(props) ? props.selected : undefined}
      >
        {children}
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

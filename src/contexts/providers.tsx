import React from "react";
import type { PropsWithChildren } from "react";

import type { DayPickerProps, Mode } from "../types";

import { CalendarContextProvider } from "./useCalendarContext";
import { FocusContextProvider } from "./useFocusContext";
import { ModifiersContextProvider } from "./useModifiersContext";
import { PropsContextProvider } from "./usePropsContext";
import { SingleProvider } from "./useSingleContext";

function isSingle(
  props: DayPickerProps<Mode, boolean>
): props is DayPickerProps<"single", boolean> {
  return props.mode === "single";
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
        <SingleProvider
          required={initialProps.required}
          initialValue={
            isSingle(initialProps) ? initialProps.selected : undefined
          }
        >
          <ModifiersContextProvider>
            <FocusContextProvider>{children}</FocusContextProvider>
          </ModifiersContextProvider>
        </SingleProvider>
      </CalendarContextProvider>
    </PropsContextProvider>
  );
}

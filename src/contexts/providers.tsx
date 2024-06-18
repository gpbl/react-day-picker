import React from "react";
import type { PropsWithChildren } from "react";

import type { DayPickerProps, Mode } from "../types";

import { CalendarContextProvider } from "./useCalendarContext";
import { FocusContextProvider } from "./useFocusContext";
import { ModifiersContextProvider } from "./useModifiersContext";
import { MultiProvider } from "./useMultiContext";
import { PropsContextProvider, usePropsContext } from "./usePropsContext";
import { RangeProvider } from "./useRangeContext";
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

function isRange(
  props: DayPickerProps<Mode, boolean>
): props is DayPickerProps<"range", boolean> {
  return props.mode === "range";
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
        max={isMulti(props) ? props.max : undefined}
        required={props.required}
        initialValue={isMulti(props) ? props.selected : undefined}
      >
        <RangeProvider
          min={isMulti(props) ? props.min : undefined}
          max={isMulti(props) ? props.max : undefined}
          required={props.required}
          initialValue={isRange(props) ? props.selected : undefined}
        >
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
